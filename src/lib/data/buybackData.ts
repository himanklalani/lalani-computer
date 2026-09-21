export interface BuybackCategory {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  targetAudience: string;
  payoutTimeline: string;
  pickupCoverage: string;
  iconName: string;
  overview: string;
  eligibleEquipment: {
    category: string;
    models: string;
    conditionAccepted: string;
    valuationCriteria: string;
  }[];
  complianceFeatures: {
    title: string;
    description: string;
  }[];
  liquidationSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  evaluationParameters: {
    parameter: string;
    scope: string;
    impact: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const BUYBACK_CATEGORIES: Record<string, BuybackCategory> = {
  "corporate-it-fleets": {
    slug: "corporate-it-fleets",
    title: "Corporate Laptop & Desktop Fleet Buyback",
    metaTitle: "Corporate Laptop Fleet Buyback Mumbai | Bulk ITAD Liquidation",
    metaDescription: "Liquidate retired company laptops and desktop fleets in bulk. Top residual value for Dell, HP, Lenovo & Apple corporate assets. NIST 800-88 data wiping & RTGS payment.",
    eyebrow: "Enterprise ITAD & Fleet Liquidation",
    headline: "Corporate Laptop & Desktop Fleet Buyback in Mumbai & Pan-India",
    subheadline: "Maximize capital recovery on retired corporate computing assets. On-site inventory audit, NIST 800-88 sanitized data wiping protocols, and immediate corporate RTGS settlement.",
    targetAudience: "CTOs, IT Heads, Procurement Managers, BFSI & Enterprise IT Leads",
    payoutTimeline: "Immediate via RTGS / NEFT within 24 Hours of Serial Audit",
    pickupCoverage: "Mumbai MMR Direct Logistics & Pan-India Reverse Freight",
    iconName: "Laptop",
    overview: "When enterprises undergo scheduled hardware refreshes every 3 to 4 years, retaining obsolete laptops and desktops ties up capital, clutters facilities, and presents data security exposure. Lalani Computers delivers end-to-end corporate asset liquidation. We handle everything from on-site fleet evaluation and NIST 800-88 sanitized data wiping protocols to reverse logistics and instant corporate payout with full GST documentation.",
    eligibleEquipment: [
      {
        category: "Corporate Ultrabooks & Laptops",
        models: "Dell Latitude (5000 / 7000), HP EliteBook (800 / 1000), Lenovo ThinkPad (T, X, L Series), MacBook Pro/Air fleets",
        conditionAccepted: "Tested working, minor cosmetic wear, or mixed operational batches",
        valuationCriteria: "Evaluated on processor generation, display panel integrity, chassis condition, and battery health."
      },
      {
        category: "Commercial Desktops & All-in-Ones",
        models: "Dell OptiPlex (Micro, SFF, Tower), HP ProDesk/EliteDesk, Lenovo ThinkCentre",
        conditionAccepted: "Complete units with power supplies; mixed configurations accepted",
        valuationCriteria: "Valued on CPU tier (Intel Core i5/i7, AMD Ryzen Pro), RAM capacity, and SSD storage."
      },
      {
        category: "Mobile & Desktop Workstations",
        models: "Dell Precision, HP ZBook, Lenovo ThinkStation with NVIDIA RTX / Quadro GPUs",
        conditionAccepted: "High-spec graphics and rendering compute workstations",
        valuationCriteria: "Premium corporate valuation based on GPU compute capacity and ECC memory."
      },
      {
        category: "Multi-Location Bulk Batches",
        models: "Consolidated corporate lots from 10 to 500+ machines across multi-branch offices",
        conditionAccepted: "Working devices, non-booting units, and machines scheduled for decommissioning",
        valuationCriteria: "Itemized batch valuation with transparent component breakdown."
      }
    ],
    complianceFeatures: [
      {
        title: "NIST 800-88 Sanitized Data Wiping Protocols",
        description: "All storage drives undergo multi-pass cryptographic data wiping routines conforming to NIST 800-88 guidelines to eliminate data recovery risks."
      },
      {
        title: "Serialized Data Destruction Reporting",
        description: "We provide an itemized compliance report detailing the make, model, drive serial number, and wiping verification log for corporate records."
      },
      {
        title: "Doorstep Packaging & Reverse Logistics",
        description: "Our logistics team arrives at your facility with anti-static packaging, tamper seals, and transport vehicles to handle transit safely."
      },
      {
        title: "Eco-Friendly Hardware Recycling",
        description: "Non-functional components and obsolete peripherals are channeled through responsible recycling pathways with zero municipal landfill dumping."
      }
    ],
    liquidationSteps: [
      {
        step: "01",
        title: "Manifest Submission",
        description: "Upload your asset sheet (.xlsx, .csv, .pdf) or share your model list, quantities, and approximate specs."
      },
      {
        step: "02",
        title: "Formal Commercial Quotation",
        description: "Receive a formal valuation offer within 4 business hours reflecting active corporate hardware market value."
      },
      {
        step: "03",
        title: "On-Site Audit & Logistics Pickup",
        description: "Our engineers inspect hardware on-site at your premises in Mumbai MMR or arrange insured freight across India."
      },
      {
        step: "04",
        title: "Wiping Sign-Off & Immediate Settlement",
        description: "Data sanitization executed, serialized reports issued, and payment released via RTGS/NEFT with GST documentation."
      }
    ],
    evaluationParameters: [
      {
        parameter: "Processor Generation & Architecture",
        scope: "Intel Core 8th to 14th Gen, AMD Ryzen 3000 to 7000 series, Apple M1/M2/M3 chips",
        impact: "Primary benchmark determining secondary market corporate demand."
      },
      {
        parameter: "Display & Functional Condition",
        scope: "Screen clarity, keyboard responsiveness, battery charge retention, original adapters",
        impact: "Units with intact OEM screens and original power supplies receive top market offers."
      },
      {
        parameter: "Quantity & Fleet Consistency",
        scope: "Batches of 10 to 500+ identical or mixed enterprise configurations",
        impact: "Uniform fleets receive lot valuation bonuses due to streamlined deployment workflows."
      }
    ],
    faqs: [
      {
        question: "How do you guarantee that corporate data on old laptops is completely wiped?",
        answer: "We apply multi-pass cryptographic data wiping protocols adhering to NIST 800-88 guidelines. Every storage sector is systematically overwritten, and a serialized report is issued per device for your compliance records."
      },
      {
        question: "What is the minimum fleet size for corporate buyback?",
        answer: "Our corporate buyback program is designed for businesses decommissioning batches of 10 or more laptops, desktops, or workstations."
      },
      {
        question: "How quickly is payment settled?",
        answer: "Full payment is released via RTGS or NEFT immediately following on-site serial verification, accompanied by official GST invoicing."
      },
      {
        question: "Do you arrange pickup from our office premises?",
        answer: "Yes. Our logistics crew handles on-site packaging, anti-static boxing, and direct pickup across Mumbai MMR and all major Indian commercial hubs."
      }
    ]
  },

  "enterprise-servers-storage": {
    slug: "enterprise-servers-storage",
    title: "Enterprise Server & Storage Array Buyback",
    metaTitle: "Enterprise Server & SAN Storage Buyback Mumbai | Data Center ITAD",
    metaDescription: "Decommissioning enterprise servers and storage arrays in Mumbai. Buyback for Dell PowerEdge, HPE ProLiant, Supermicro racks, SAN/NAS, and SAS drives with NIST 800-88 wiping.",
    eyebrow: "Data Center & Server Room Decommissioning",
    headline: "Enterprise Rack Server & Storage Array Buyback in Mumbai",
    subheadline: "Upgrading server infrastructure or migrating workloads to hybrid cloud? Convert decommissioned 1U–4U rack servers, SAN storage, and ECC memory into immediate capital.",
    targetAudience: "Data Center Managers, Infrastructure Directors, System Integrators & Enterprises",
    payoutTimeline: "Direct RTGS Bank Transfer upon On-Site Audit & De-Racking",
    pickupCoverage: "All Mumbai Colocation Data Centers, MMR & Pan-India Corporate Hubs",
    iconName: "Server",
    overview: "Upgrading from 14G/15G PowerEdge racks or consolidating data center footprints leaves enterprises with massive capital trapped in high-spec compute, SAN/NAS arrays, and enterprise memory. Lalani Computers provides comprehensive server room decommissioning, safe rack de-installation, multi-pass drive sanitization, and top liquidation value across Mumbai.",
    eligibleEquipment: [
      {
        category: "Rack, Tower & Blade Servers",
        models: "Dell PowerEdge (R640, R740, R750, R840), HPE ProLiant (DL360, DL380 Gen9/Gen10/Gen11), Lenovo ThinkSystem, Cisco UCS",
        conditionAccepted: "Operational units, dual-socket Xeon/EPYC, redundant power supplies",
        valuationCriteria: "Valued on CPU core count, generation, backplane configuration, and redundant power supplies."
      },
      {
        category: "Enterprise Storage Arrays (SAN / NAS)",
        models: "Dell EMC PowerVault, NetApp FAS, Synology RackStation, QNAP Enterprise",
        conditionAccepted: "Chassis with drive caddies, dual controllers, and expansion shelves",
        valuationCriteria: "Valued on drive bay capacity (12/24 LFF/SFF bays) and 16G/32G Fiber Channel controllers."
      },
      {
        category: "Enterprise Server Memory & SAS Disks",
        models: "ECC Registered RDIMMs (16GB, 32GB, 64GB, 128GB DDR4/DDR5), 12G SAS 10K/15K Hard Drives, Enterprise NVMe U.2/U.3",
        conditionAccepted: "Tested working pullouts from decommissioned environments",
        valuationCriteria: "High-volume wholesale procurement for clean memory and drive batches."
      },
      {
        category: "Heavy Infrastructure & Peripherals",
        models: "Enterprise Online UPS systems (APC Symmetra/Smart-UPS, Vertiv/Liebert), Rack PDUs, 42U/48U Server Racks",
        conditionAccepted: "Decommissioned server room power and enclosure hardware",
        valuationCriteria: "Valued on kVA rating, battery cabinet condition, and rack structural integrity."
      }
    ],
    complianceFeatures: [
      {
        title: "NIST 800-88 Sanitized Drive Overwriting",
        description: "Cryptographic sanitization and multi-pass block overwriting performed on all SAS, SATA, and NVMe drives to eliminate data leakage."
      },
      {
        title: "Serialized Asset Tracking & Destruction Documentation",
        description: "Comprehensive serial-level reporting tracking every server chassis, CPU serial, and individual disk drive for internal audit sign-off."
      },
      {
        title: "Full On-Site De-Installation & Logistics",
        description: "Experienced technicians to safely de-rack, un-cable, and package bulky 1U–4U servers and heavy UPS systems from your cages."
      },
      {
        title: "Dual Role Advantage (Buyer & Wholesaler)",
        description: "Because we actively supply tested enterprise hardware across India, we can pay higher prices by cutting out third-party scrap brokers."
      }
    ],
    liquidationSteps: [
      {
        step: "01",
        title: "Server Configuration Audit",
        description: "Provide server specifications: Processor (Xeon/EPYC), RAM size, drive configuration, and quantity."
      },
      {
        step: "02",
        title: "Enterprise Valuation Quotation",
        description: "We issue an itemized asset valuation within hours, detailing chassis, component, and bulk lot value."
      },
      {
        step: "03",
        title: "On-Site De-Racking & Transit Execution",
        description: "Our engineers de-mount and pack servers into padded transit cases for secure logistics transport."
      },
      {
        step: "04",
        title: "Wiping Sign-Off & Funds Transfer",
        description: "Data destruction logs generated, serialized audit receipts finalized, and immediate RTGS settlement credited."
      }
    ],
    evaluationParameters: [
      {
        parameter: "Compute Generation (Xeon Scalable / AMD EPYC)",
        scope: "Intel Xeon Silver/Gold/Platinum 1st to 4th Gen, AMD EPYC Rome/Milan/Genoa",
        impact: "Core compute architecture determines primary secondary market value."
      },
      {
        parameter: "Memory Density (ECC DDR4 / DDR5)",
        scope: "Registered RDIMMs (16GB, 32GB, 64GB, 128GB modules)",
        impact: "High-density ECC RAM modules command strong bulk wholesale premiums."
      },
      {
        parameter: "Chassis & Backplane Configuration",
        scope: "8-bay, 16-bay, 24-bay SFF/LFF, NVMe U.2/U.3 backplanes, redundant Titanium PSUs",
        impact: "High-density drive bays and premium redundant power increase residual payout."
      }
    ],
    faqs: [
      {
        question: "Can your team de-rack servers directly from our data center cage in Mumbai?",
        answer: "Yes. Our engineers manage decommissioning across major colocation facilities in BKC, Chandivali, Navi Mumbai, and South Mumbai. We provide the manpower, de-installation tools, and specialized transport packaging."
      },
      {
        question: "Do you buy heavy infrastructure like enterprise UPS units and 42U server racks?",
        answer: "Yes. In addition to compute hardware, we buy enterprise online UPS systems (APC, Vertiv/Liebert), managed rack PDUs, and 42U/48U server enclosures during facility decommissions."
      },
      {
        question: "How are confidential corporate databases and SAN arrays sanitized?",
        answer: "All storage media is sanitized using multi-pass cryptographic data wiping routines adhering to NIST 800-88 guidelines, accompanied by an itemized serialized data destruction report."
      }
    ]
  },

  "networking-switches-infrastructure": {
    slug: "networking-switches-infrastructure",
    title: "Enterprise Networking & Infrastructure Buyback",
    metaTitle: "Used Cisco & Enterprise Network Switch Buyback Mumbai | Lalani",
    metaDescription: "Liquidate surplus Cisco Catalyst, Aruba, Juniper & Fortinet switches, commercial Wi-Fi APs, and UPS systems in Mumbai. Instant valuation, bulk pickup, and top market payouts.",
    eyebrow: "Surplus & Campus Network Liquidation",
    headline: "Enterprise Network Switch, Router & Infrastructure Buyback in Mumbai",
    subheadline: "Offloading surplus network gear following an office consolidation or campus infrastructure upgrade? Lalani Computers purchases Cisco, Aruba, and Fortinet hardware for cash.",
    targetAudience: "Network Engineers, System Integrators, IT Asset Managers & Infrastructure Leads",
    payoutTimeline: "Immediate Bank Payment (RTGS/NEFT) upon Port & Power Testing",
    pickupCoverage: "Mumbai MMR Direct Logistics & Pan-India Reverse Logistics",
    iconName: "Network",
    overview: "Corporate network refreshes often leave stacks of functional 24-port/48-port PoE switches, 10G aggregation routers, and commercial Wi-Fi access points depreciating in storage. Lalani Computers converts surplus network inventory and power infrastructure into working capital with fair market valuations and turnkey logistics.",
    eligibleEquipment: [
      {
        category: "Managed Gigabit & 10G PoE Switches",
        models: "Cisco Catalyst (2960-X, 3650, 3850, 9200, 9300), Aruba CX (6100, 6200, 6300), Juniper EX Series",
        conditionAccepted: "Clean operational condition with rack ears, dual power supplies",
        valuationCriteria: "Valued on port count (24/48 port), PoE+ wattage capacity, and 10G/40G SFP+ uplink modules."
      },
      {
        category: "Enterprise Security Appliances & Firewalls",
        models: "Fortinet FortiGate (60F, 80F, 100F, 200F), Palo Alto Networks PA-series, SonicWall",
        conditionAccepted: "Hardware reset units with power supplies and rack brackets",
        valuationCriteria: "Valued on model generation, firewall throughput, and interface speed."
      },
      {
        category: "Commercial Wireless Access Points & Controllers",
        models: "Cisco Catalyst APs, Aruba AP-500 series, Ubiquiti UniFi Pro/Enterprise, Ruckus",
        conditionAccepted: "Functional PoE access points with mounting plates",
        valuationCriteria: "Valued on Wi-Fi standard (Wi-Fi 5 / Wi-Fi 6) and multi-gigabit uplink ports."
      },
      {
        category: "Optical Transceivers & Power Infrastructure",
        models: "10G SFP+ (SR/LR), 40G QSFP+ transceivers, Rack PDUs, and Server Room UPS modules",
        conditionAccepted: "Tested working pullouts with clean interfaces",
        valuationCriteria: "High per-unit residual value for authentic brand optics and high-capacity PDUs."
      }
    ],
    complianceFeatures: [
      {
        title: "Complete Configuration & Credential Eradication",
        description: "Every switch, router, and firewall undergoes a hardware NVRAM purge and factory reset to wipe internal VLANs, ACLs, and company passwords."
      },
      {
        title: "Serialized Hardware Verification Log",
        description: "Receipt documentation detailing MAC addresses, serial numbers, and module configurations for internal asset retirement registers."
      },
      {
        title: "Turnkey Packing & De-Rack Support",
        description: "Our field team can safely de-rack and bundle patch panels, switches, and cable management ducts from your network closets."
      },
      {
        title: "Eco-Conscious Recycling Commitment",
        description: "Defective ports or unrepairable units are responsibly dismantled into base metals, keeping electronic scrap away from landfills."
      }
    ],
    liquidationSteps: [
      {
        step: "01",
        title: "Network Inventory Manifest",
        description: "Send model numbers (e.g. WS-C2960X-48FPS-L) and port quantities via our upload dropzone or WhatsApp."
      },
      {
        step: "02",
        title: "Immediate Buyback Offer",
        description: "We issue a formal quote within 4 hours based on secondary market enterprise demand."
      },
      {
        step: "03",
        title: "Power & Diagnostic Verification",
        description: "Rapid POST boot test and port link verification at your office or via our logistics team."
      },
      {
        step: "04",
        title: "Immediate Payment & Paperwork",
        description: "Payment released instantly via RTGS/NEFT with official asset transfer documentation."
      }
    ],
    evaluationParameters: [
      {
        parameter: "Switch Port Speed & PoE Budget",
        scope: "Gigabit PoE+, Multi-Gigabit (mGig), 370W to 740W power budgets",
        impact: "High-wattage PoE+ switches command strong enterprise resale demand."
      },
      {
        parameter: "Uplink Module & Modular Expansion",
        scope: "Fixed 1G uplinks vs Modular 4x 10G SFP+ / 40G QSFP+ network modules",
        impact: "10G/40G fiber uplinks significantly increase enterprise valuation."
      },
      {
        parameter: "Physical Integrity & Accessories",
        scope: "Chassis condition, original rack-mount ears, redundant power supplies, stacking cables",
        impact: "Units with complete accessories and dual power supplies achieve top valuation."
      }
    ],
    faqs: [
      {
        question: "How do you ensure our corporate network configurations and passwords are completely deleted?",
        answer: "Before any equipment enters secondary circulation, our technicians perform a multi-stage hardware reset, formatting flash memory and zeroing NVRAM to guarantee no IP schemes, VPN keys, or credentials remain."
      },
      {
        question: "Do you buy switches with a couple of dead ports?",
        answer: "Yes. As long as the main chassis, CPU, and power supply function reliably, we adjust valuation to account for damaged ports and still purchase the equipment."
      },
      {
        question: "Do you purchase entire network closets including racks and PDUs?",
        answer: "Yes. We purchase complete network setups including managed switches, routers, firewalls, enterprise rack enclosures, and vertical PDUs during office relocations or consolidations."
      }
    ]
  }
};

// Backward-compatible slug aliases
BUYBACK_CATEGORIES["bulk-laptops"] = {
  ...BUYBACK_CATEGORIES["corporate-it-fleets"],
  slug: "bulk-laptops"
};
BUYBACK_CATEGORIES["enterprise-servers"] = {
  ...BUYBACK_CATEGORIES["enterprise-servers-storage"],
  slug: "enterprise-servers"
};
BUYBACK_CATEGORIES["networking-switches"] = {
  ...BUYBACK_CATEGORIES["networking-switches-infrastructure"],
  slug: "networking-switches"
};

// Unique primary categories for directory grids (excluding aliases to prevent duplicate cards)
export const PRIMARY_BUYBACK_CATEGORIES: BuybackCategory[] = [
  BUYBACK_CATEGORIES["corporate-it-fleets"],
  BUYBACK_CATEGORIES["enterprise-servers-storage"],
  BUYBACK_CATEGORIES["networking-switches-infrastructure"]
];
