export interface RepairCategory {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  turnaroundTime: string;
  warrantyPeriod: string;
  iconName: string;
  overview: string;
  commonIssues: {
    issue: string;
    symptoms: string;
    resolution: string;
    estimatedTime: string;
  }[];
  supportedBrands: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const REPAIR_CATEGORIES: Record<string, RepairCategory> = {
  "laptop-desktop-repairs": {
    slug: "laptop-desktop-repairs",
    title: "Laptop & Desktop General Repairs",
    metaTitle: "Laptop & Desktop Repair Mumbai | Screen, Battery, Hinge & SSD Upgrade",
    metaDescription: "Professional laptop and desktop repairs across Mumbai. Same-day doorstep pickup and on-site corporate service for screens, batteries, keyboards, hinges, and SSD upgrades.",
    eyebrow: "Complete Hardware Care",
    headline: "End-to-End Laptop & Desktop Hardware Support Across Mumbai",
    subheadline: "Everyday hardware breakdowns resolved with genuine OEM parts. Doorstep pickup across Mumbai MMR and on-site corporate IT fleet servicing.",
    turnaroundTime: "Same Day / 24 – 48 Hours",
    warrantyPeriod: "30-Day Hardware Warranty",
    iconName: "Laptop",
    overview: "From cracked screens and worn-out batteries to broken hinges, unresponsive keyboards, overheating fans, and sluggish hard drives. Lalani Computers provides complete end-to-end hardware repair and upgrade services for individual users and corporate office fleets across Mumbai with scheduled doorstep pickup or direct on-site technician visits.",
    commonIssues: [
      {
        issue: "Cracked Display & Backlight Flickering",
        symptoms: "Physical glass crack, vertical lines, black ink spots, or dim display.",
        resolution: "Replacement with brand-new original-spec FHD/IPS/OLED display panel matching color accuracy and refresh rate.",
        estimatedTime: "Same Day / 24 Hours"
      },
      {
        issue: "Battery Health Degraded & Charging Issues",
        symptoms: "Laptop shuts off when unplugged, touchpad bulging due to swollen cell, or 'Plugged In, Not Charging' alerts.",
        resolution: "Safe extraction of swollen lithium pack, installation of genuine OEM battery with full charge-cycle calibration.",
        estimatedTime: "24 Hours"
      },
      {
        issue: "Broken Screen Hinges & Body Fabrication",
        symptoms: "Screen wobbles, clicking sound upon opening, or plastic base separating near corner.",
        resolution: "Internal brass anchor rebuilding, hinge tension rebalancing, and structural chassis reinforcement.",
        estimatedTime: "24 – 48 Hours"
      },
      {
        issue: "Keyboard, Trackpad & Type-C / USB Port Faults",
        symptoms: "Sticky/missing keys, erratic pointer movement, loose charging port or intermittent peripheral connection.",
        resolution: "OEM backlit keyboard replacement, trackpad recalibration, and power delivery port rework.",
        estimatedTime: "24 Hours"
      },
      {
        issue: "Slow Performance & Thermal Overheating",
        symptoms: "System freezing under everyday load, loud spinning fan noise, sudden thermal shutdowns.",
        resolution: "High-speed NVMe SSD installation, RAM expansion, internal dust remediation, and premium thermal paste re-application.",
        estimatedTime: "Same Day"
      }
    ],
    supportedBrands: ["Dell (Latitude, XPS, Inspiron, Vostro)", "HP (EliteBook, ProBook, Pavilion, Spectre)", "Lenovo (ThinkPad, IdeaPad, Yoga)", "Apple (MacBook Air, MacBook Pro)", "Asus (ZenBook, ExpertBook, ROG)", "Acer & Commercial Desktops"],
    capabilities: [
      {
        title: "Genuine OEM Replacement Parts",
        description: "100% authentic manufacturer-spec screens, batteries, keyboards, and cooling modules with full warranty coverage."
      },
      {
        title: "Doorstep Pickup & On-Site Fleet Support",
        description: "Convenient scheduled pickup from your home or office across Mumbai MMR, plus on-site engineering visits for corporate fleets."
      },
      {
        title: "Storage & Operating System Restoration",
        description: "Seamless data migration from old drives to lightning-fast NVMe SSDs with complete OS reloading and driver optimization."
      },
      {
        title: "Preventative Thermal Overhaul",
        description: "Complete fan module servicing and industrial thermal interface re-application to lower operating temperatures and prevent throttling."
      }
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Request Service Booking",
        description: "Submit your device model and observed symptom via our booking form or WhatsApp desk."
      },
      {
        step: "02",
        title: "Doorstep Pickup / On-Site Visit",
        description: "Our logistics courier collects your machine with a secure receipt, or an engineer visits your corporate premises."
      },
      {
        step: "03",
        title: "Component Renewal & Testing",
        description: "Replacement with genuine OEM hardware and comprehensive stress testing under operational load."
      },
      {
        step: "04",
        title: "Return Delivery & Warranty Handover",
        description: "Safe return dispatch to your doorstep with itemized invoice and 30-day comprehensive hardware warranty."
      }
    ],
    faqs: [
      {
        question: "Do I need to bring my laptop to an office or service center?",
        answer: "No. You do not need to travel anywhere. We provide scheduled doorstep pickup across Mumbai (South Mumbai, BKC, Lower Parel, Andheri, Powai, Navi Mumbai, and Thane), as well as on-site corporate engineer visits."
      },
      {
        question: "How long does a typical screen or battery replacement take?",
        answer: "Standard battery, keyboard, and screen replacements are typically resolved within 24 to 48 hours from pickup, including full diagnostic and charge-cycle testing."
      },
      {
        question: "Do you repair broken laptop hinges without replacing the entire casing?",
        answer: "Yes. Our technicians reinforce the internal brass screw mounts and rebalance hinge tension, saving you the expense of purchasing an entirely new chassis."
      },
      {
        question: "Do you offer on-site maintenance for corporate office laptops?",
        answer: "Yes, for companies with 5 or more laptops needing servicing, SSD upgrades, or thermal cleaning, we dispatch field hardware engineers directly to your office."
      }
    ]
  },

  "motherboard-component-repair": {
    slug: "motherboard-component-repair",
    title: "Motherboard & Component Diagnostics",
    metaTitle: "Motherboard & Component Repair Mumbai | Power IC & Circuit Fixes",
    metaDescription: "Professional motherboard component repair for laptops, workstations & desktops in Mumbai. Doorstep pickup and corporate on-site dispatch. 30-day warranty.",
    eyebrow: "Circuit & Power Diagnostics",
    headline: "Reliable Motherboard Component Diagnostics & Circuit Repair in Mumbai",
    subheadline: "Avoid expensive motherboard replacement costs. Experienced engineers diagnose and replace shorted power ICs, blown capacitors, and damaged charging rails.",
    turnaroundTime: "24 – 48 Hours Standard",
    warrantyPeriod: "30-Day Service Warranty",
    iconName: "Cpu",
    overview: "When a laptop or desktop motherboard fails, authorized brand centers frequently quote exorbitant prices for complete board replacement. In reality, most failures stem from isolated component issues—such as a shorted 19V input MOSFET, a blown PWM charging controller, or liquid-damaged trace. We isolate and renew the exact faulty semiconductor, restoring your original board with doorstep logistics across Mumbai.",
    commonIssues: [
      {
        issue: "No Power / Complete Dead State",
        symptoms: "Machine shows zero reaction to power button; charging LED remains off.",
        resolution: "Primary power rail isolation, replacement of shorted input diodes/MOSFETs, and power delivery controller restoration.",
        estimatedTime: "24 Hours"
      },
      {
        issue: "Liquid Spillage & Corrosion",
        symptoms: "Sudden shutdown after coffee/water spillage; erratic power cycling.",
        resolution: "Safe chemical de-corrosion, damaged passive component replacement, and circuit trace restoration.",
        estimatedTime: "24 – 48 Hours"
      },
      {
        issue: "Intermittent Restart & BSOD Crashes",
        symptoms: "System crashes under rendering or multitasking load with blue screen memory errors.",
        resolution: "VRM capacitor replacement, thermal bridge re-alignment, and corrupted BIOS re-flashing.",
        estimatedTime: "24 – 48 Hours"
      }
    ],
    supportedBrands: ["Dell Precision / Latitude / XPS", "HP ZBook / EliteBook", "Lenovo ThinkPad / ThinkStation", "Apple MacBook Pro / Air", "ASUS ProArt / Workstation", "Custom PC Desktop Boards"],
    capabilities: [
      {
        title: "Precision Micro-Component Renewal",
        description: "Specialized replacement of surface-mount ICs, power MOSFETs, PWM chips, and passive capacitors without board thermal stress."
      },
      {
        title: "Short-Circuit & Power Rail Isolation",
        description: "Systematic circuit tracing across 3.3V, 5V, and 19V rails to locate microscopic ground faults."
      },
      {
        title: "Liquid Damage Decontamination",
        description: "Thorough removal of conductive mineral corrosion and oxidation from multi-layer circuit boards."
      },
      {
        title: "48-Hour Full-Load Stability Testing",
        description: "Every repaired board undergoes sustained stress testing under heavy compute load before return delivery."
      }
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Doorstep Collection Docket",
        description: "Schedule convenient courier or technician pickup from your residence or office in Mumbai MMR."
      },
      {
        step: "02",
        title: "Detailed Component Diagnosis",
        description: "Our engineers inspect circuit rails and share an itemized repair estimate with transparent turnaround."
      },
      {
        step: "03",
        title: "Component Renewal & Soldering",
        description: "Faulty semiconductors replaced with OEM-spec components using temperature-regulated profiles."
      },
      {
        step: "04",
        title: "Insured Return & Warranty",
        description: "Delivered back to your doorstep with 30-day comprehensive service warranty documentation."
      }
    ],
    faqs: [
      {
        question: "Is motherboard component repair cheaper than buying a new board?",
        answer: "Yes. Component-level repair typically costs 60% to 75% less than a full replacement motherboard, while preserving your original machine hardware serials and operating system licenses."
      },
      {
        question: "How do I hand over my machine for repair?",
        answer: "We arrange secure doorstep pickup from your home or commercial office across the Mumbai Metropolitan Region. You do not need to visit any workshop."
      },
      {
        question: "Do you guarantee motherboard repairs with a warranty?",
        answer: "Yes, every motherboard repair carries a 30-day comprehensive service warranty covering the repaired circuit subsystem."
      }
    ]
  },

  "servers": {
    slug: "servers",
    title: "Enterprise Server & Storage Maintenance",
    metaTitle: "Enterprise Server Repair & Storage Maintenance Mumbai | On-Site SLA",
    metaDescription: "Mission-critical on-site enterprise server repair, RAID rebuilds, SAS backplane fixes, and redundant PSU replacements in Mumbai. Dell PowerEdge, HPE ProLiant, Supermicro.",
    eyebrow: "Enterprise Uptime & On-Site SLA",
    headline: "Enterprise Server Repair, Storage Maintenance & Uptime Recovery in Mumbai",
    subheadline: "Minimize corporate downtime. Experienced enterprise engineers for Dell PowerEdge, HPE ProLiant, and Lenovo ThinkSystem servers, SAN/NAS arrays, and RAID storage.",
    turnaroundTime: "4-Hour Emergency Response / 24-Hour Resolution",
    warrantyPeriod: "30-Day Enterprise Parts Warranty",
    iconName: "Server",
    overview: "When production database servers, hypervisors, or SAN storage arrays experience hardware faults, enterprise operations grind to a halt. Lalani Computers provides mission-critical on-site hardware maintenance, hot-swap PSU replacements, RAID array reconstruction, and SAS backplane repairs across Mumbai server rooms, colocation facilities, and corporate offices.",
    commonIssues: [
      {
        issue: "RAID Controller Failure / Degraded Virtual Disk",
        symptoms: "Amber warning LEDs on drive bays; controller BIOS halts; volume offline with missing logical disks.",
        resolution: "Direct RAID controller swapping, cache battery renewal, array metadata rebuilding, and sector-by-sector cloning.",
        estimatedTime: "4 – 12 Hours"
      },
      {
        issue: "Redundant PSU & Power Distribution Faults",
        symptoms: "Amber blinking power supply; server refuses to power on despite dual feeds; iDRAC/iLO power faults.",
        resolution: "Hot-swap redundant PSU module replacement and backplane power distribution board (PDB) testing.",
        estimatedTime: "2 – 4 Hours"
      },
      {
        issue: "Memory Bus (ECC) Errors & Kernel Panics",
        symptoms: "Multi-bit ECC RAM errors; intermittent hypervisor freezes (VMware ESXi / Proxmox / Hyper-V).",
        resolution: "Channel-by-channel memory diagnostic stress test and immediate replacement with matched DDR4/DDR5 ECC modules.",
        estimatedTime: "4 Hours"
      }
    ],
    supportedBrands: ["Dell PowerEdge (R640, R740, R750, R840)", "HPE ProLiant (DL360, DL380 Gen9/Gen10/Gen11)", "Lenovo ThinkSystem (SR630, SR650)", "Supermicro 1U/2U/4U Enterprise Racks", "Synology & QNAP Enterprise NAS", "Dell EMC & NetApp SAN Arrays"],
    capabilities: [
      {
        title: "Emergency On-Site Mumbai Dispatch",
        description: "Field engineers ready for rapid on-site dispatch across BKC, Fort, Lower Parel, Mahape, and Chandivali data centers."
      },
      {
        title: "Ready-to-Dispatch Enterprise Spares",
        description: "Warehouse stock of redundant server PSUs, SAS controllers (PERC, Smart Array), ECC RDIMMs, and hot-swap fans."
      },
      {
        title: "Non-Destructive RAID Recovery",
        description: "Specialized procedures to recover degraded RAID 5, RAID 6, and RAID 10 configurations without data loss."
      },
      {
        title: "Preventative Thermal & Power Audits",
        description: "Internal heat dissipation analysis, dust remediation, and firmware patching to prevent recurring outages."
      }
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Outage Intake & Error Log Review",
        description: "Contact our enterprise hotline. Share iDRAC/iLO hardware error logs or fault descriptions for instant triage."
      },
      {
        step: "02",
        title: "Spares Preparation & On-Site Dispatch",
        description: "Pre-configured replacement parts pulled from our inventory; field engineer dispatched directly to your facility."
      },
      {
        step: "03",
        title: "On-Site Hardware Remediation",
        description: "Faulty modules replaced, RAID arrays verified, and firmware synchronized with zero disruption."
      },
      {
        step: "04",
        title: "Telemetry Validation & Warranty Sign-Off",
        description: "Validation under full production load, error logs cleared, and 30-day parts warranty issued."
      }
    ],
    faqs: [
      {
        question: "Can your engineers come on-site to our corporate server room or colocation cage?",
        answer: "Yes. Our enterprise technicians provide direct on-site support across Mumbai data centers and office facilities in BKC, Lower Parel, Andheri, Navi Mumbai, and South Mumbai."
      },
      {
        question: "Do you maintain ready stock of Dell PowerEdge and HPE spares?",
        answer: "Yes, we maintain an extensive warehouse inventory of redundant power supplies, hot-plug SAS drives, PERC/Smart Array controllers, and ECC registered RAM for immediate deployment."
      },
      {
        question: "What happens if our RAID array has degraded?",
        answer: "We employ non-destructive diagnostic tools to clone surviving disks, inspect controller metadata, and rebuild the virtual disk safely to prevent business data loss."
      }
    ]
  },

  "networking-infrastructure": {
    slug: "networking-infrastructure",
    title: "Enterprise Switch & Wi-Fi Repair",
    metaTitle: "Enterprise Network Switch & Wi-Fi Repair Mumbai | On-Site Support",
    metaDescription: "Hardware repair and on-site maintenance for Cisco, Aruba, Fortinet enterprise switches, routers, and PoE access points in Mumbai. Power supply fixes, 30-day warranty.",
    eyebrow: "Network Core & Access Infrastructure",
    headline: "Enterprise Switch, Router & Wi-Fi Hardware Repair in Mumbai",
    subheadline: "Avoid expensive core network hardware replacements. Expert hardware diagnostics for PoE switches, core routers, unified firewalls, and enterprise access points.",
    turnaroundTime: "24 – 48 Hours",
    warrantyPeriod: "30-Day Hardware Warranty",
    iconName: "Network",
    overview: "Enterprise network switches, firewalls, and PoE access points form the backbone of corporate communications. When core units suffer from voltage surges, failed internal power modules, burnt RJ45/SFP+ ports, or corrupted bootloaders, Lalani Computers provides circuit-level repairs and on-site network hardware support to keep your office connected.",
    commonIssues: [
      {
        issue: "Internal PoE Power Supply Module Blown",
        symptoms: "Switch powers on but provides zero PoE wattage to connected IP phones, access points, or CCTV cameras.",
        resolution: "PoE controller IC renewal, high-wattage auxiliary power supply repair, and capacitor bank replacement.",
        estimatedTime: "24 Hours"
      },
      {
        issue: "Burnt RJ45 or SFP+ Fiber Transceiver Port",
        symptoms: "Port LED remains dark or flashes amber; packet loss exceeds 50% on specific high-speed uplinks.",
        resolution: "PHY controller chip replacement, magnetic jack isolation transformer swap, and optical bus testing.",
        estimatedTime: "24 – 48 Hours"
      },
      {
        issue: "Boot Loop / Rommon / Corrupted Firmware",
        symptoms: "Switch restarts repeatedly; console output displays ROMMON boot prompt or flash memory errors.",
        resolution: "Low-level serial console recovery, firmware re-flashing, and flash memory diagnostics.",
        estimatedTime: "24 Hours"
      }
    ],
    supportedBrands: ["Cisco Catalyst (2960, 3650, 3850, 9200, 9300)", "Aruba / HPE Managed Switches", "Fortinet FortiGate Firewalls", "Ubiquiti UniFi Enterprise APs & Switches", "Juniper EX Series", "Ruckus Wireless"],
    capabilities: [
      {
        title: "PoE Power Distribution Diagnostics",
        description: "Specialized testing for IEEE 802.3af/at/bt PoE power delivery banks and internal power supplies."
      },
      {
        title: "SFP+ & Optical Port Testing",
        description: "10G and 40G optical power meter diagnostics ensuring clean transceiver communications."
      },
      {
        title: "Console & Firmware Recovery",
        description: "Low-level hardware serial debugging to rescue bricked enterprise firmware and management controllers."
      },
      {
        title: "Wire-Speed Sustained Traffic Burn-In",
        description: "Full wire-speed packet transmission verification across all ports before equipment dispatch."
      }
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Service Intake & Scheduled Pickup",
        description: "Book service online; we arrange courier collection or on-site engineer inspection at your office."
      },
      {
        step: "02",
        title: "Power Rail & PHY IC Testing",
        description: "Power rail integrity and Ethernet transformer diagnostics to isolate short circuits."
      },
      {
        step: "03",
        title: "Component Renewal & Calibration",
        description: "Installation of original specification semiconductors and thermal management components."
      },
      {
        step: "04",
        title: "Return Dispatch with 30-Day Warranty",
        description: "Returned safely to your office with full port test verification docket and 30-day warranty."
      }
    ],
    faqs: [
      {
        question: "Can you repair Cisco switches with blown PoE power supplies?",
        answer: "Yes. PoE circuit failure is common due to voltage spikes. We repair internal auxiliary power rails and replace fried PoE controller ICs at a fraction of the cost of a new switch."
      },
      {
        question: "Do you pick up network equipment directly from our office?",
        answer: "Yes, we arrange scheduled doorstep pickup across Mumbai MMR, or dispatch a technician to inspect the switch directly inside your rack."
      },
      {
        question: "Do you repair Fortinet and Sophos firewalls?",
        answer: "Yes, we diagnose power supply failures, eMMC/SSD flash corruption, and RJ45 WAN interface damage across major enterprise security appliances."
      }
    ]
  }
};

// Backward-compatible slug aliases
REPAIR_CATEGORIES["laptop-battery"] = {
  ...REPAIR_CATEGORIES["laptop-desktop-repairs"],
  slug: "laptop-battery"
};
REPAIR_CATEGORIES["motherboard-chip-level"] = {
  ...REPAIR_CATEGORIES["motherboard-component-repair"],
  slug: "motherboard-chip-level"
};

// Unique primary categories for directory grids (excluding aliases to prevent duplicate cards)
export const PRIMARY_REPAIR_CATEGORIES: RepairCategory[] = [
  REPAIR_CATEGORIES["laptop-desktop-repairs"],
  REPAIR_CATEGORIES["motherboard-component-repair"],
  REPAIR_CATEGORIES["servers"],
  REPAIR_CATEGORIES["networking-infrastructure"]
];
