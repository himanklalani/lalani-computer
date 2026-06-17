import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, GraduationCap, Monitor, Wifi, Camera, Server, Projector } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education IT Solutions & Networking | Lalani Computers",
  description: "Campus-wide networking, lab PCs, and smart projectors for educational institutions. Reliable turnkey IT deployment and AMC services in Mumbai.",
};

const campusKits = [
  {
    name: "Smart Classroom Kit",
    icon: <Projector className="w-6 h-6" />,
    contents: ["Interactive Flat Panel (65\", 4K Touch)", "Wall-Mount PC (i5, 8GB, SSD)", "Document Camera / Visualizer", "Wireless Presenter + Clicker", "Ceiling-Mount Speakers (2x)", "HDMI + USB-C Connectivity Hub"],
    useCase: "Transform any classroom into a smart classroom. Teacher connects their laptop or uses the built-in PC for interactive lessons, video playback, and digital whiteboarding.",
  },
  {
    name: "Computer Lab Kit (30 Seats)",
    icon: <Monitor className="w-6 h-6" />,
    contents: ["Desktop PCs (30x, i3, 8GB, SSD)", "20\" LED Monitors (30x)", "Keyboards + Mice (30x)", "48-Port Managed Switch", "Teacher Control Software License", "Structured Cabling (30 Drops)"],
    useCase: "A complete 30-seat lab delivered in one shipment. Pre-imaged PCs with teacher monitoring software — block distractions and broadcast screens during lessons.",
  },
  {
    name: "Campus Wi-Fi Kit",
    icon: <Wifi className="w-6 h-6" />,
    contents: ["Outdoor Access Points (6x, Long-Range)", "Indoor Access Points (12x, Wi-Fi 6)", "PoE Switches (48-Port, 3x)", "Controller / Cloud Management License", "Captive Portal Setup (Guest Access)", "Fiber Backbone Cables (500m)"],
    useCase: "Blanket Wi-Fi coverage from classrooms to hostels to the sports ground. Student and faculty SSIDs with bandwidth controls.",
  },
  {
    name: "Examination Center Kit",
    icon: <GraduationCap className="w-6 h-6" />,
    contents: ["CCTV Cameras (10x, Exam Hall Coverage)", "NVR with 30-Day Retention", "Biometric Attendance for Invigilators", "Backup Internet (4G Dongle)", "Digital Clock Displays (4x)", "PA System for Announcements"],
    useCase: "University-mandated exam surveillance with tamper-proof recording. Biometric logs for invigilator attendance and digital time display for candidates.",
  },
  {
    name: "Library & Research Hub Kit",
    icon: <Server className="w-6 h-6" />,
    contents: ["All-in-One PCs (10x, Silent Operation)", "RFID Book Tracking System", "Self-Checkout Kiosk", "Network Printer / Copier", "Quiet-Zone Acoustic Panels", "Digital Catalog Software License"],
    useCase: "Modernize your library with RFID book tracking, silent all-in-one workstations for research, and self-service checkout to reduce staff load.",
  },
  {
    name: "Campus Surveillance Kit",
    icon: <Camera className="w-6 h-6" />,
    contents: ["ANPR Cameras (Gate Entry/Exit)", "Dome Cameras (Corridors, 20x)", "PTZ Camera (Playground/Ground)", "64-Channel NVR with 32TB", "Guard Station Monitor (42\")", "Mobile App for Admin Viewing"],
    useCase: "Full campus security — license plate recognition at gates, corridor monitoring, and playground PTZ cameras controllable from the principal's office.",
  },
];

export default function EducationPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
          <span>/</span>
          <span className="text-primary">Education</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Industry Expertise</Typography>
            <Typography variant="h1" className="mb-6">Campus Networking & IT Hardware Solutions for Education</Typography>
            <Typography variant="lead">
              Complete IT kits for smart classrooms, computer labs, and campus-wide networking. Delivered ready to deploy — your maintenance team handles the rest.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get a Campus IT Quote</Button></Link>
              <Link href="/solutions"><Button variant="secondary" size="lg">View Our Process</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Campus-Ready Deployment Kits</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Pre-packaged hardware for every zone on campus — classrooms, labs, libraries, exam halls, and security.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {campusKits.map((kit, i) => (
            <FadeIn key={i} delay={i * 0.08} direction="up">
              <div className="bg-warm-bg1 rounded-2xl p-7 border border-primary/10 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                    {kit.icon}
                  </div>
                  <Typography variant="h3" className="text-lg">{kit.name}</Typography>
                </div>
                <div className="bg-white rounded-xl p-4 border border-primary/5 mb-4 flex-grow">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2">What&apos;s in the Box</p>
                  <ul className="space-y-1.5">
                    {kit.contents.map((item, j) => (
                      <li key={j} className="flex items-start text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-text-dark/70 italic leading-relaxed">{kit.useCase}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Building a New Campus?</Typography>
            <Typography variant="lead" className="mb-8">
              Share your campus map and classroom count — we&apos;ll deliver room-by-room kits with everything your facilities team needs to set up.
            </Typography>
            <Link href="/contact"><Button size="lg">Request a Campus IT Quote</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
