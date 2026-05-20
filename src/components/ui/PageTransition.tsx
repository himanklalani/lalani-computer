"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import gsap from "gsap";

// ─── GLSL Shaders ─────────────────────────────────────────────────────────────

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uCurrent;
  uniform float uProgress;
  uniform vec2 uResolution;
  uniform float uRefractionStrength;
  uniform float uChromaticAberration;
  uniform float uEdgeGlow;
  uniform vec2 uOrigin; // click origin in UV space

  varying vec2 vUv;

  void main() {
    float maxR = length(uResolution) * 0.90;
    float br = uProgress * maxR;

    // Work in pixel space
    vec2 p = vUv * uResolution;
    vec2 c = uOrigin * uResolution;
    float d = length(p - c);
    float nd = d / max(br, 0.001);

    // Bubble edge: smooth step across the boundary
    float inside = smoothstep(br + 4.0, br - 4.0, d);

    if (inside > 0.0 && uProgress < 1.0) {
      // Refraction: bend UVs toward center within bubble
      float ro = 0.06 * uRefractionStrength * pow(smoothstep(0.2, 1.0, nd), 1.5);
      vec2 dir = (d > 0.001) ? normalize(p - c) : vec2(0.0);
      vec2 distUV = vUv - dir * ro / uResolution * inside;

      // Chromatic aberration: split RGB channels at bubble rim
      float ca = 0.025 * uChromaticAberration * pow(smoothstep(0.3, 1.0, nd), 1.2) * inside;
      float r = texture2D(uCurrent, distUV + dir * ca * 1.3 / uResolution).r;
      float g = texture2D(uCurrent, distUV + dir * ca * 0.15 / uResolution).g;
      float b = texture2D(uCurrent, distUV - dir * ca * 0.9 / uResolution).b;

      vec4 col = vec4(r, g, b, 1.0);

      // Edge glow ring
      float rim = smoothstep(0.93, 1.0, nd) * (1.0 - smoothstep(1.0, 1.02, nd));
      col.rgb += rim * 0.15 * uEdgeGlow * inside;

      // Inside the bubble: show the brand color (outgoing page "wipe")
      // Blend between the distorted current texture and the brand overlay
      vec3 brandColor = vec3(0.098, 0.145, 0.667); // #1925AA
      float fadeIn = smoothstep(0.0, 0.6, inside);
      col.rgb = mix(col.rgb, brandColor + col.rgb * 0.12, fadeIn * inside);

      gl_FragColor = col;
    } else if (uProgress >= 1.0) {
      // Full transition done: show brand color completely
      gl_FragColor = vec4(0.098, 0.145, 0.667, 1.0);
    } else {
      gl_FragColor = texture2D(uCurrent, vUv);
    }
  }
`;

// ─── Capture current viewport as canvas texture ────────────────────────────
async function captureViewport(): Promise<THREE.CanvasTexture> {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const offscreen = document.createElement("canvas");
  offscreen.width = w;
  offscreen.height = h;
  const ctx = offscreen.getContext("2d");
  if (ctx) {
    // Paint the background color of the site
    const bg = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-warm-bg1")
      .trim() || "#FAFAFA";
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
  }
  return new THREE.CanvasTexture(offscreen);
}

// ─── WebGL support probe ───────────────────────────────────────────────────
function isWebGLSupported(): boolean {
  try {
    const testCanvas = document.createElement("canvas");
    const ctx = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
    if (!ctx) return false;
    // Lose the context so the browser can GC it
    const ext = (ctx as WebGLRenderingContext).getExtension("WEBGL_lose_context");
    ext?.loseContext();
    return true;
  } catch {
    return false;
  }
}

// ─── Renderer singleton ────────────────────────────────────────────────────
let _renderer: THREE.WebGLRenderer | null = null;
function getRenderer(canvas: HTMLCanvasElement) {
  if (!_renderer) {
    _renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, preserveDrawingBuffer: true });
  }
  return _renderer;
}

// ─── Component ────────────────────────────────────────────────────────────
export function PageTransition() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const prevPathname = useRef<string | null>(null);
  const clickOrigin = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const isActive = useRef(false);

  // ── Three.js setup ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isWebGLSupported()) return; // silently skip — no WebGL available

    const canvas = canvasRef.current;
    if (!canvas) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = getRenderer(canvas);
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;
    cameraRef.current = camera;

    const blank = new THREE.DataTexture(new Uint8Array([250, 250, 250, 255]), 1, 1);
    blank.needsUpdate = true;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uCurrent: { value: blank },
        uProgress: { value: 0 },
        uResolution: { value: new THREE.Vector2(w, h) },
        uRefractionStrength: { value: 1.8 },
        uChromaticAberration: { value: 1.6 },
        uEdgeGlow: { value: 1.4 },
        uOrigin: { value: new THREE.Vector2(0.5, 0.5) },
      },
      transparent: true,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    const loop = () => {
      animFrameRef.current = requestAnimationFrame(loop);
      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      renderer.setSize(nw, nh);
      material.uniforms.uResolution.value.set(nw, nh);
    };
    window.addEventListener("resize", onResize);

    // Track click position to set bubble origin
    const onClick = (e: MouseEvent) => {
      clickOrigin.current = {
        x: e.clientX / window.innerWidth,
        y: 1 - e.clientY / window.innerHeight, // flip Y for WebGL
      };
    };
    window.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", onClick, true);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // ── Trigger on route change ────────────────────────────────────────────────
  useEffect(() => {
    if (prevPathname.current === null) {
      prevPathname.current = pathname;
      return;
    }
    if (prevPathname.current === pathname || isActive.current) return;

    const mat = materialRef.current;
    const canvas = canvasRef.current;
    if (!mat || !canvas) {
      prevPathname.current = pathname;
      return;
    }

    isActive.current = true;

    // Set origin from last click
    mat.uniforms.uOrigin.value.set(
      clickOrigin.current.x,
      clickOrigin.current.y
    );

    // Show canvas overlay
    canvas.style.display = "block";
    canvas.style.opacity = "1";
    mat.uniforms.uProgress.value = 0;

    // Phase 1: Expand bubble (0 → 1) — the "outgoing wipe"
    gsap.to(mat.uniforms.uProgress, {
      value: 1,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        // Page has already navigated by now, hold for a frame then retract
        // Phase 2: Fade out the overlay to reveal new page
        gsap.to(canvas, {
          opacity: 0,
          duration: 0.5,
          delay: 0.05,
          ease: "power2.out",
          onComplete: () => {
            canvas.style.display = "none";
            mat.uniforms.uProgress.value = 0;
            isActive.current = false;
            prevPathname.current = pathname;
          },
        });
      },
    });
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      id="page-transition-canvas"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 10000,
        pointerEvents: "none",
        display: "none",
        opacity: 1,
      }}
      aria-hidden="true"
    />
  );
}
