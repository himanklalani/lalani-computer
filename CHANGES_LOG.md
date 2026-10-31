# LALANI COMPUTERS � CHANGES LOG
# Unpushed changes as of Aug 31, 2026 (NOT yet live on lalanicomputers.com)

================================================================================
SESSION 1 � AUG 25, 2026
================================================================================

CHANGE 1: /solutions/repairs/page.tsx � REBUILT
----------------------------------------------
What changed: Full page rebuild to Split-View architecture.
Left side (checklist):
  1. Chip-Level Repair (Motherboards & Internal Components)
  2. Screen, Keyboard & Battery Replacement
  3. Body Fabrication (Laptops broken due to fall)
  4. Liquid Damage Restoration (Broken due to spillage)
  5. Speed & Storage Upgrades (SSD/RAM)
  6. Server & Network Troubleshooting
  7. Secure Data Recovery Services

Right side (5 trust boxes):
  - For Individuals: Fast, affordable, chip-level repairs for personal & gaming laptops.
  - For Corporate: Fleet refurbishments, secure data wiping, and SLA-driven maintenance.
  - Enterprise Security: Strict data privacy protocols during all upgrades.
  - Genuine Parts: 100% authentic OEM replacements.
  - Certified Engineers: Deep component-level diagnostic expertise.

Related Guide linked: "IT Hardware: Repair vs Replace Guide 2026"
URL: /solutions/repairs/repair-vs-replace-guide

CONTENT REVIEW NOTE:
[OK]  Dual-intent trust boxes work well. Both audiences clearly addressed.
[OK]  Capabilities list now includes physical damage (fall, spillage, battery).
[WATCH] Only 1 CTA button: "Book a Diagnostic Check" (goes to /contact).
        No explicit "Request Fleet Quote" path for corporate buyers.
        Recommendation: Add a second B2B CTA or WhatsApp button.

---

CHANGE 2: /solutions/repairs/repair-vs-replace-guide/page.tsx � NEW FILE
-------------------------------------------------------------------------
Guide title: "IT Hardware: Repair vs. Replace Guide 2026"
Sections:
  1. The 5-Year Rule for IT Hardware
  2. Cost vs. Value Analysis (CapEx vs OpEx)
  3. Common Hardware Failures (Motherboard, Battery, Liquid Spills)
  4. The Security Factor (Data wiping, TPM 2.0, Windows 11)

Conclusion: "Final Verdict"
CTA: "Book a Diagnostic Check" (WhatsApp)

CONTENT REVIEW NOTE:
[OK]  Content is accurate and dual-intent throughout.
[OK]  Conclusion is honest � mentions ?3,000 SSD upgrade vs buying new. Builds trust.
[OK]  Liquid spillage and physical damage are mentioned in Section 3.
[WATCH] Guide does not link back to the main repairs page from within the body text.
        Recommendation: Add an internal link inside Section 3 pointing back to /solutions/repairs.

---

CHANGE 3: /products/accessories/page.tsx � UPGRADED
----------------------------------------------------
What changed: "Why Buy From Lalani" section upgraded from plain text to 4-card grid.
Cards:
  - User icon: Individual Power-Users
  - Building icon: Corporate & Bulk Deployments
  - Package icon: Same-Day Mumbai Dispatch
  - ShieldCheck icon: 100% Genuine Guarantee

Related Guide linked: "The Complete Corporate Workstation & Accessories Guide 2026"
URL: /products/accessories/workstation-buying-guide

CONTENT REVIEW NOTE:
[OK]  4-card grid clearly shows both B2C and B2B audiences.
[OK]  Guide link title on page MATCHES actual guide title exactly.
[OK]  Dual-intent signaling is clear with explicit User and Building icons.

---

CHANGE 4: /products/accessories/workstation-buying-guide/page.tsx � NEW FILE
-----------------------------------------------------------------------------
Guide title: "The Complete Corporate Workstation & Accessories Guide 2026"
Sections:
  1. OEM Docking Stations (Dell WD19, Lenovo Smart Docks, Targus DisplayLink)
  2. Dual Monitors vs. Ultrawides (24-inch 1080p vs 34-inch ultrawide)
  3. Ergonomics & Input Devices (Logitech MX Master 3S, MX Keys)
  4. Audio & Communication � BPO Standard (Jabra Evolve2, Poly Blackwire)

Conclusion: "Bulk Procurement vs. Single Buys"
CTA: "Whether you need a single monitor for your home office or a BOM for 200 workstations..."

CONTENT REVIEW NOTE:
[OK]  Highly specific brand names and model numbers � excellent for SEO.
[OK]  CTA is perfectly dual-intent.
[WATCH] "Corporate" in the guide title may deter individual buyers on the homepage section.
        Recommendation: Monitor CTR. Consider renaming to "Ultimate Workstation Setup Guide"
        if individual traffic underperforms after going live.

================================================================================
SESSION 2 � AUG 31, 2026
================================================================================

CHANGE 5: src/components/sections/home/HeroSection.tsx � UPDATED
-----------------------------------------------------------------
Element         | Before                                    | After
----------------|-------------------------------------------|----------------------------------
Eyebrow         | "Enterprise IT Partner"                   | "Mumbai's Premier IT Hardware Supplier"
Subheadline     | Generic B2B-only delivery copy            | Dual-intent: home offices + data centers
SEO Links Row 1 | Office Network, Enterprise Servers, Colocation | SAME � preserved exactly
SEO Links Row 2 | DID NOT EXIST                             | Laptops & Desktops, Custom PC Builds, Hardware Repairs
CTA Buttons     | NONE                                      | NONE � text links only (no buttons)

CONTENT REVIEW NOTE:
[OK]  Eyebrow is now inclusive � does not scare individual buyers.
[OK]  Subheadline is dual-intent.
[OK]  Row 1 enterprise links preserved � no B2B regression.
[OK]  Row 2 individual links added � repairs, laptops, custom PCs discoverable from hero.
[WATCH] "faster than e-commerce" claim in subheadline is bold. Must ensure delivery SLA
        consistently meets this expectation or soften the wording.

---

CHANGE 6: src/components/sections/home/GuidesOverviewSection.tsx � NEW FILE
----------------------------------------------------------------------------
New section placed between ClientsStrip and Testimonials in homepage.
Section eyebrow: "Expert IT Guides & Resources"
Section title: "Read Before You Buy"

4 guide cards:
  Card 1: Tag="Repairs, Individual & Corporate"
          Title="IT Hardware: Repair vs. Replace Guide 2026"
          URL=/solutions/repairs/repair-vs-replace-guide
  Card 2: Tag="Accessories, Individual & Corporate"
          Title="The Complete Corporate Workstation & Accessories Guide 2026"
          URL=/products/accessories/workstation-buying-guide
  Card 3: Tag="Servers, Corporate"
          Title="Enterprise Server Buying Guide 2026"
          URL=/solutions/enterprise-servers-mumbai/server-buying-guide
  Card 4: Tag="Custom PCs, Individual & Corporate"
          Title="2026 IT Hardware Buying Guide"
          URL=/solutions/custom-pc-builds/hardware-buying-guide

CONTENT REVIEW NOTE:
[OK]  3 out of 4 cards tagged "Individual & Corporate" � dual-intent respected.
[OK]  1 card (Servers) tagged "Corporate" only � honest, does not mislead individuals.
[OK]  Card descriptions are benefit-driven, not keyword-stuffed.
[OK]  Follows same Section + FadeIn + Link pattern as all other homepage sections.
[WATCH] Section placement (after ClientsStrip, before Testimonials) may be too deep in page.
        Recommendation: Leave as-is initially; review scroll depth analytics after going live.
[WATCH] "Corporate Workstation" guide card title may not appeal to individual homepage visitors.
        Same issue as CHANGE 4 above. Watch and adjust if needed.

================================================================================
PENDING � PHASE 3 (NOT YET DONE)
================================================================================

PENDING: /products/computing/page.tsx � NEEDS UPGRADE
The computing/laptops hub still uses a plain-text advantages list.
GSC shows this page lost 100% of its click traffic.
The "Dual-Intent Trust Boxes" (Individual / Corporate / Genuine Parts) were
never applied to this page on Aug 25.
Action: Apply same visual upgrade we did for /products/accessories and /solutions/repairs.

================================================================================
OVERALL CONTENT HEALTH SUMMARY
================================================================================

WATCHPOINT 1 (Low risk): Guide title "Corporate Workstation & Accessories Guide"
             may deter individual visitors. Monitor after going live.
WATCHPOINT 2 (Medium risk): Repairs page has only 1 CTA � no explicit corporate fleet path.
             Should add a second CTA for B2B fleet inquiries.
WATCHPOINT 3 (Medium risk): "faster than e-commerce" claim in Hero needs consistent
             delivery performance to back it up.

Total files changed in this batch (not yet pushed):
  1. src/app/solutions/repairs/page.tsx
  2. src/app/solutions/repairs/repair-vs-replace-guide/page.tsx (NEW)
  3. src/app/products/accessories/page.tsx
  4. src/app/products/accessories/workstation-buying-guide/page.tsx (NEW)
  5. src/components/sections/home/HeroSection.tsx
  6. src/components/sections/home/GuidesOverviewSection.tsx (NEW)
  7. src/app/page.tsx (GuidesOverviewSection imported and injected)


================================================================================
SESSION 3 - SEPT 24, 2026 (Admin Dashboard - File Upload & Download)
================================================================================

CHANGE 7: src/models/Lead.ts - UPDATED
---------------------------------------
Date/Time: Sep 24, 2026
What changed: Added file storage fields to Lead MongoDB schema.
New fields added:
  - fileName  { type: String } � original uploaded file name
  - fileSize  { type: String } � e.g. "2.3 KB"
  - fileType  { type: String } � e.g. "CSV", "PDF"
  - fileData  { type: String } � full base64-encoded file content
  - fileUrl   { type: String } � Cloudinary URL if uploaded (optional)
Also added runtime schema-patch block for Next.js dev caching edge case.

Reason: Admin needed ability to receive and download files submitted by
corporate clients via the Bulk Manifest Dropzone form.

---

CHANGE 8: src/app/api/contact/route.ts - UPDATED
--------------------------------------------------
Date/Time: Sep 24, 2026
What changed:
  - Added file object handling in POST handler
  - Reads file.name, file.size, file.type, file.data from request body
  - Saves fileName/fileSize/fileType always if file object is received
  - Saves fileData (base64) only if file.data is present
  - Calls uploadToCloudinary() as optional step � saves fileUrl if configured
  - Added console.warn if file object received but file.data is empty
    (diagnostic to distinguish client-side send failure vs server-side issue)

---

CHANGE 9: src/components/conversion/BulkManifestDropzone.tsx - UPDATED (3 rounds)
-----------------------------------------------------------------------------------
Date/Time: Sep 24, 2026

Round 1: Added readFileAsBase64() helper, called at submit time
  - Problem: Failed silently inside try/catch � fileData never reached MongoDB

Round 2: Moved base64 read to file-pick time, stored in useState(fileBase64)
  - Problem: React state stale closure � handleSubmit saw old null value
    if user submitted before React re-rendered with new state

Round 3 (FINAL FIX):
  - Replaced useState with useRef (fileBase64Ref) � ref is always current,
    not tied to React render cycle, no stale closure possible
  - Added guaranteed fallback: if ref is null at submit, re-reads file using
    new Promise<FileReader> inline � belt AND braces approach
  - clearFile() now resets fileBase64Ref.current = null

Root cause summary: FileReader is async. React state updates are batched.
A user submitting before React re-renders would see fileBase64 = null in
the handleSubmit closure. useRef solves this � ref.current is always live.

---

CHANGE 10: src/components/admin/LeadManifestViewer.tsx - NEW FILE
------------------------------------------------------------------
Date/Time: Sep 24, 2026
What it does:
  - Renders a file card in the admin lead row when a file was uploaded
  - Shows: file icon, file name (truncated), file type badge, file size
  - Shows green "Download File" button that hits /api/leads/[id]/download
  - Falls back to parsing file metadata from the lead's message field
    (for older leads created before explicit fileName fields were added)
  - Props: id, fileName, fileSize, fileType, messageFallback

---

CHANGE 11: src/app/api/leads/[id]/download/route.ts - NEW FILE
---------------------------------------------------------------
Date/Time: Sep 24, 2026
What it does:
  - GET /api/leads/[id]/download?secret=my_secret_key_123
  - Validates secret key, fetches lead from MongoDB
  - If fileData exists: decodes base64, returns file as binary download
    with Content-Disposition: attachment header
  - If fileUrl exists: redirects to Cloudinary URL
  - If neither: returns 404 with debug info

---

CHANGE 12: src/app/api/leads/[id]/route.ts - NEW FILE
------------------------------------------------------
Date/Time: Sep 24, 2026
What it does:
  - GET /api/leads/[id]?secret=my_secret_key_123 � debug endpoint
    Returns: { id, hasFileData, hasFileUrl, hasFileName, fileName, fileSize, fileType }
    Used to diagnose whether fileData was actually saved to MongoDB
  - PATCH /api/leads/[id] � update lead status or fields (used by admin UI)
  - DELETE /api/leads/[id] � delete a lead (used by admin trash button)

---

CHANGE 13: src/app/admin/leads/[secret]/page.tsx - UPDATED
-----------------------------------------------------------
Date/Time: Sep 24, 2026 (IST timezone fix)
What changed:
  - Added timeZone: "Asia/Kolkata" to both Intl.DateTimeFormat() calls
    (one for date display, one for time display in lead table)
  - Before: Showed UTC time (e.g. 10:53 am when actual time was 4:23 pm IST)
  - After: Shows correct IST time
  - Root cause: Vercel servers run on UTC. Without explicit timeZone,
    Node.js formats dates in server timezone (UTC), not user's timezone.

================================================================================
SESSION 4 - SEPT 30, 2026 (SEO Fixes - OG Tags, Title, Sitemap)
================================================================================

CHANGE 14: src/app/layout.tsx - UPDATED
----------------------------------------
Date/Time: Sep 30, 2026
What changed:
  1. Added openGraph.images to root layout:
       url: https://www.lalanicomputers.com/logo.png
       width: 1200, height: 630
     Impact: Fixed "Open Graph tags incomplete" for ~58 pages.
     Next.js shallow-merges layout's openGraph into child page metadata,
     so all pages that had openGraph without images now inherit the image.

  2. Changed title template from "%s | Lalani Computers" to "%s"
     Reason: Page titles already included "| Lalani Computers" suffix.
     Old template was appending it again:
       "...| Lalani Computers | Lalani Computers" (90+ chars)
     New template passes title through as-is � no double-branding.
     Impact: Fixed "Title too long" for ~47 pages.

  3. Added twitter.images to root layout (same logo.png URL)
     Impact: Twitter/X cards now show image when pages are shared.

---

CHANGE 15: src/app/sitemap.ts - UPDATED
-----------------------------------------
Date/Time: Sep 30, 2026
What changed: Added 8 pages that existed and were indexable but missing:
  1. /solutions/enterprise-servers-mumbai
  2. /solutions/office-network-setup-india
  3. /solutions/storage-server-supplier-mumbai
  4. /solutions/server-colocation-mumbai
  5. /solutions/it-asset-buyback
  6. /solutions/repairs/repair-vs-replace-guide
  7. /products/peripherals-power/workstation-buying-guide
  8. /products/computing/leasing-vs-buying-corporate-laptops
Impact: Fixed "Indexable page not in sitemap" audit warning (was 8 pages).

---

CHANGE 16: src/app/solutions/server-colocation-mumbai/page.tsx - UPDATED
-------------------------------------------------------------------------
Date/Time: Sep 30, 2026
What changed:
  - Title updated from "Server Colocation in Mumbai | Tier III Rack Leasing"
    to "Server Colocation Mumbai | Tier III Rack Leasing | Lalani Computers"
  - Added openGraph block with title, description, url, type
  Reason: This was the only page whose title did not include "Lalani Computers".
  With the new template "%s" (no auto-suffix), the brand would have been
  invisible in search results without this fix.

================================================================================
SESSION 5 - OCT 31, 2026 (Sticky Conversion Bar - Quotation Category Selector)
================================================================================

CHANGE 17: src/components/conversion/StickyConversionBar.tsx - UPDATED
-----------------------------------------------------------------------
Date/Time: Oct 31, 2026
What changed:
  1. Replaced the single direct redirect to Buyback with an interactive
     Quotation Category Selector when user clicks "Request Quotation".
  2. Each option directs straight to WhatsApp with tailored pre-filled quotation messages:
     - Laptop / Desktop:
       "Hi Lalani Computers, I would like to request a quotation for Laptop / Desktop procurement (buy /  lease). Please share available models and corporate pricing."
     - Repair Service:
       "Hi Lalani Computers, I need a quotation for Laptop / Desktop / Server Repair. This is my issue, [INSERT YOUR ISSUE]. What are next steps and turnaround time?"
     - IT Asset Buyback:
       "Hi Lalani Computers, I would like to request a quotation for Corporate IT Asset Buyback / Decommissioning. We have hardware for valuation."
     - Other Hardware / Peripherals:
       "Hi Lalani Computers, I would like to request a quotation for other IT hardware / peripherals. Please share availability and pricing for: [INSERT YOUR REQUIREMENTS]."
  2. Presents 3 targeted conversion options:
     - Laptop / Desktop: Links to /products/computing (browse computing hardware)
     - Repair Service: Links to /repair#service-booking (direct to booking form)
     - IT Asset Buyback: Links to /buyback#manifest-dropzone (direct to manifest dropzone)
  3. Responsive UI architecture:
     - Desktop: Elegant popover card anchored directly above the button with
       subtle border, drop-shadow, and chevron navigation indicators.
     - Mobile: Full touch-friendly bottom-sheet with darkened backdrop overlay,
       header with dismiss button, and safe margin above the action dock.
  4. Preserved dedicated routes:
     - /repair routes continue to display contextual "Book Repair Service"
     - /buyback routes continue to display contextual "Upload Asset Manifest"
     - All general / product / marketing pages trigger the Quotation Selector.

Reason: Users clicking "Request Quotation" on general pages were previously
being forced to /buyback#manifest-dropzone. Users need immediate routing choice
between commercial hardware purchase, doorstep repair, or corporate buyback.

================================================================================
OVERALL STATUS - OCT 31, 2026
================================================================================

LIVE ON: https://www.lalanicomputers.com
ADMIN:   https://www.lalanicomputers.com/admin/leads/my_secret_key_123

PENDING (not yet done):
  [ ] /products/computing/page.tsx � dual-intent trust boxes upgrade (noted since Aug 31)
  [ ] /solutions/repairs page � add second B2B fleet CTA button
  [ ] Orphan pages fix � 6 pages with no incoming internal links
  [ ] ~28 pages still have title > 60 chars (cosmetic only, no ranking penalty)
