export interface Project {
  slug: string;
  title: string;
  hidden?: boolean;
  shortDescription: string;
  category: string;
  year: string;
  color: string;
  thumbnail?: string;
  coverImage?: string;
  video?: string;
  detailVideo?: string;
  heroImage?: string;
  description: string;
  role: string;
  team: string;
  duration: string;
  responsibilities: string[];
  sections: {
    title: string;
    content: string;
  }[];
  images: string[];
  additionalImages?: string[];
  publications?: { title: string; venue: string; url: string }[];
  link?: { url: string; label: string };
  links?: { url: string; label: string }[];
}

export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════════
// GET IN THE ZONE — UPDATED PROJECT CONTENT
// ═══════════════════════════════════════════════════════════
//
// TWO THINGS TO DO:
//
// 1. ADD "publications" TO THE Project INTERFACE
//    Open src/data/projects.ts, find the interface at the top,
//    and add this line after "images: string[];":
//
//    publications?: { title: string; venue: string; url: string }[];
//
// 2. REPLACE THE "into-the-zone" PROJECT OBJECT
//    Use Cmd+F to find: slug: "into-the-zone"
//    Replace the entire object (from { to },) with the one below.
//
// ═══════════════════════════════════════════════════════════

{
  slug: "into-the-zone",
  title: "Get In the Zone!",
  shortDescription: "Sports Eyewear & Interaction Design",
  category: "Master's Thesis · Award Winner 🏆",
  year: "2025",
  color: "linear-gradient(145deg, #1a3328, #0d1f18 50%, #2a4a3f)",
  thumbnail: "/images/thumbnails/get_in_the_zone.jpg",
  coverImage: "/images/into-the-zone.jpg",
  video: "/videos/get_in_the_zone.mp4",
  detailVideo: "/videos/get_in_the_zone_hero.mov",
  description:
    "Smart LED running goggles that help novice runners stay in their target heart rate zone through ambient peripheral light without ever breaking stride. Winner of the Best Demo Award at SportsHCI 2025, published as a long paper at MUM 2025 and mentioned at Communications ACM.",
  role: "HCI Researcher & Interaction Designer (1st Author)",
  team: "Master's thesis project.",
  duration: "1 Year (2024–2025)",
  responsibilities: [
    "End-to-end UX research & interaction design",
    "Physical prototyping (3D printing, ESP32, NeoPixel LEDs, Polar H10 BLE)",
    "Within-subject user study design & execution (N=11)",
    "Academic writing, data analysis & conference presentation",
  ],
  sections: [
    {
      title: "Project overview",
      content:
        "Runners rely on smartwatches and smartphones paired with chest straps to track heart rate zones. But these tools often fail to provide constant feedback and can be distracting requiring glances at a screen or reacting to auditory alerts mid-run. Get in the Zone addresses this by shifting heart rate zone information into the runner's peripheral vision through a pair of 3D-printed smart goggles with an integrated ambient LED strip. The system provides continuous, color-coded feedback that runners can perceive without looking away from the path ahead. Conducted as my Master's thesis at the University of Salzburg under Prof. Alexander Meschtscherjakov and Dr. Vincent van Rheden, the project sits at the intersection of sports technology, wearable design, and peripheral interaction.",
    },
    {
      title: "Design challenge",
      content:
        "A common use case for smartwatches during running is maintaining a specific heart rate zone for instance, keeping between 110 and 120 BPM. Typically, a chest strap measures heart rate and transmits data to a watch, which displays the current BPM and zone. If the runner strays outside the target, the device responds with vibrations and beeps. But this setup has clear limitations: runners must either glance at the screen or rely solely on alerts that only trigger when they've already left the target range. The challenge was designing a wearable that provides clear, immediate, and continuous feedback, minimizes cognitive load, and integrates into the runner's peripheral vision without occluding their field of view.",
    },
    {
      title: "How it works",
      content:
        "The LED-Goggles feature an LED strip integrated above the lens that displays the runner's current heart rate zone through color. Each zone maps to a distinct color: white for zone 1 (recovery), blue for zone 2 (easy), green for zone 3 (aerobic), orange for zone 4 (threshold), and red for zone 5 (maximum). When a runner transitions between zones, the new color appears at the center of the strip and expands outward creating a smooth, progressive animation that indicates both the current zone and the runner's position within it. Two feedback modes were implemented: reflective feedback, where color continuously reflects the current HR zone, and corrective feedback, which uses increasingly urgent signals (green → red → pulsating → flashing) when the runner deviates from a target zone.",
    },
    {
      title: "Technical implementation",
      content:
        "The hardware consists of an Adafruit Feather ESP32 microcontroller receiving real-time heart rate data via Bluetooth Low Energy from a Polar H10 chest strap. A custom Arduino script maps incoming BPM values to personalized HR zones calculated using the Karvonen formula and drives the NeoPixel LED strip accordingly. The number of LEDs lit scales proportionally to the runner's position within each zone, creating a spatial progress visualization. The goggles use a magnetic lens system for easy swapping and a 3D-printed housing for the electronics, powered by a pocket-carried USB battery.",
    },
    {
      title: "Design iterations",
      content:
        "The final design emerged from extensive prototyping across multiple form factors — from swim-style goggles to cycling sunglasses with LEDs in various positions and orientations. We explored variations in color schemes, LED placement, brightness levels, animation speeds, and spatial movement styles (center-outward, edge-inward, static). Early pilots revealed that high brightness with animation velocities out of sync with the runner's pace felt distracting, while static color changes lacked information density. The center-outward animation was selected as the most intuitive for visualizing progress. An intermittent study with 11 participants refined the final color assignments and brightness calibration.",
    },
    {
      title: "User study (N=11)",
      content:
        "We conducted a within-subject lab study comparing the LED-Goggles to a state-of-the-art Apple Watch. Eleven recreational runners (7 female, 4 male, mean age 26.5) completed two seven-minute treadmill sessions (one with each system) aiming to maintain heart rate in zone 2. HR zones were personalized using the Karvonen formula. The Apple Watch provided its standard multimodal feedback: visual zone display, voice announcements, and haptic vibrations. The LED-Goggles provided visual-only feedback to isolate the ambient display's effectiveness. The study received ethical clearance from the university's ethics board.",
    },
    {
      title: "Results",
      content:
        "Both systems performed comparably, participants spent roughly half their time in zone 2 with each device, with no statistically significant difference in objective metrics. However, participants rated the LED-Goggles significantly higher on helping adjust running pace (p = 0.0403) and providing clear heart rate zone guidance (p = 0.0403). Runners described the goggles as 'not distracting at all and very minimalistic' and noted they could 'focus way better on running.' One participant said the glasses 'helped me run without worrying about if I'm going too fast.' Several described the progressive LED fill as feeling like 'leveling up', an unintended gamification effect that made zone training more engaging. Participants also noted lower cognitive load since they 'didn't have to look anywhere specific' for feedback.",
    },
    {
      title: "Design contributions",
      content:
        "The paper contributes three design considerations for ambient sports feedback. First, support both ongoing peripheral awareness and layered glanceable feedback, ambient feedback supports flow while glanceable elements provide precision when corrective action is needed. Second, adopt adaptive brightness to ensure effectiveness across varying light conditions. Third, the abstraction of visual representation should harmonize with the use context, in dynamic, in-motion scenarios like running, color semantics need careful mapping beyond what works on static screens. The work advances the discourse on how ambient, embodied feedback can support athletes without disrupting movement flow.",
    },
    {
      title: "Broader impact & next steps",
      content:
        "The project demonstrates that ambient LED feedback in goggles is a viable, less intrusive alternative to smartwatch-based monitoring. The concept extends beyond running, the paper discusses applications in cycling (indicating upcoming corners via GPS), skiing (horizon feedback from IMU data), rowing (stroke synchronicity), and climbing (arm strain via EMG). Future work includes miniaturizing the electronics with a custom PCB, testing outdoors with varying light and terrain, exploring multi-modal enhancement with subtle haptic cues, and investigating how the balance between feedback availability and 'missability' can best support runner autonomy and flow.",
    },
  ],
  images: [
    "/images/into-the-zone-0.jpg",
    "/images/into-the-zone-1.jpg",
    "/images/into-the-zone-2.jpg",
    "/images/into-the-zone-3.jpg",
    "/images/into-the-zone-4.jpg",
    "/images/into-the-zone-5.jpg",
    "/images/into-the-zone-6.jpg",
    "/images/into-the-zone-7.jpg",
  ],
  additionalImages: [
    "/images/into-the-zone-additional1.jpg",
    "/images/into-the-zone-additional2.jpg",
  ],
  publications: [
    
    {
      title: "MUM 2025 Long Paper — Into the Zone!",
      venue: "ACM Digital Library · dl.acm.org",
      url: "https://dl.acm.org/doi/10.1145/3771882.3771897",
    },
    {
      title: "SportsHCI 2025 Demo Paper 🏆",
      venue: "ACM Digital Library · doi.org",
      url: "https://doi.org/10.1145/3749385.3749403",
    },
    {
      title: "Communications of the ACM: Performance Apps Look to Put More Fun Into Fitness",
      venue: "Paul Marks, Feb 2026 · cacm.acm.org",
      url: "https://cacm.acm.org/news/performance-apps-look-to-put-more-fun-into-fitness/",
    },
    {
      title: "SportsHCI Demo Video — Into the Zone!",
      venue: "Demo Paper, Feb 2026 · doi.org",
      url: "https://www.youtube.com/watch?v=O75SzZMq_mU&t=5s",
    }
  ],
},
  {
    slug: "radio-biz",
    title: "Radio Biz",
    shortDescription: "Web Design & Brand Development",
    category: "Community Radio · Freelance Project ",
    year: "2024–Ongoing",
    color: "linear-gradient(145deg, #2d1b3d, #1a0f24 50%, #3d2550)",
    coverImage: "/images/radio-biz.jpg",
    video: "/videos/biz_redvideo.mp4",
    detailVideo: "/videos/radiobiz cd+apple biz black.mp4",
    description:
      "Complete brand identity and website redesign for Radio Biz, a Turkish-German community radio show on Radio Orange 94.0 Vienna. Built from scratch with a fresh visual language inspired by New York's 'Big Apple' energy, positioning Vienna as the next cultural hub.",
    role: "Web Designer & Developer",
    team: "Solo project (ongoing show co-host & content writer)",
    duration: "2 months (build) · Ongoing (content & shows)",
    responsibilities: [
      "Brand identity design (logo, visual language, motion graphics)",
      "Website design & development (Wix + custom podcast functionality)",
      "Trilingual content strategy (Turkish, English, German)",
      "Responsive design implementation (web & mobile)",
      "Ongoing: blog writing, social media content, show co-hosting",
    ],
    link: {
      url: "https://radiobiz.at",
      label: "Visit radiobiz.at",
    },
    sections: [
      {
        title: "Project overview",
        content:
          "Radio Biz is a Turkish-German community radio show broadcasting on Radio Orange 94.0 in Vienna. When I joined as co-host, the show had no cohesive visual identity and no web presence beyond social media. The station asked me to create a young, energetic brand that would resonate with Vienna's multicultural community and give the show a professional digital home. I designed and built a complete brand identity and website from scratch, drawing inspiration from New York's 'Big Apple' cultural energy and positioning Vienna as the next emerging cultural hub. The project included logo design, visual language development, motion graphics, a trilingual website with podcast integration, and ongoing content creation.",
      },
      {
        title: "Design challenge",
        content:
          "The biggest challenge was starting with no clear direction. The station knew they wanted something 'fresh' and 'energetic' but had no brand guidelines, visual references, or existing assets to build from. I had to define the vision, propose a conceptual direction (the 'Big Apple' → Vienna metaphor), and iterate through brand concepts while balancing the needs of a diverse, multilingual audience. The website also needed to serve multiple functions — archive past shows, publish bilingual blog content, promote upcoming events, and integrate a custom podcast player — all while remaining easy to navigate and visually engaging.",
      },
      {
        title: "Brand identity & visual language",
        content:
          "The brand identity centers on the metaphor of Vienna as the 'next Big Apple' — a young, culturally rich, and vibrant city. The visual language uses bold typography, high-contrast color blocking, and dynamic motion graphics to convey energy and accessibility. The logo and graphic system were designed to work across digital and print, from Instagram stories to event posters. I created a suite of motion graphics for the website and social media that bring the brand to life with animated text treatments and transitions. The identity was designed in Figma and Photoshop, with animation prototypes in After Effects.",
      },
      {
        title: "Website structure & features",
        content:
          "The website is organized into three main sections: a landing page with featured episodes and news, a news/blog section with category filtering (music, culture, community, events), and an upcoming events calendar. Each blog post is written in Turkish, English, and German, with language toggle functionality. The landing page highlights the latest show and recent blog posts, creating a clear hierarchy for returning visitors and new discoverers. A custom podcast player was integrated to stream episodes directly from the RSS feed without requiring users to leave the site. The design balances rich visual content with fast load times and clear navigation.",
      },
      {
        title: "Technical implementation",
        content:
          "The site was built on Wix to allow the radio team to update content independently after handoff. However, podcast functionality required custom development — I built a JavaScript integration that pulls the RSS feed, parses episode metadata, and renders a playable audio interface. The initial design included scroll-triggered video effects for visual storytelling, but these performed inconsistently across devices. I replaced them with optimized video backgrounds that degrade gracefully on mobile. All interactive elements (hover states, transitions, language toggles) were custom-coded to match the brand's energetic feel.",
      },
      {
        title: "Responsive design challenges",
        content:
          "Making the site work seamlessly on mobile required rethinking the layout and interaction patterns. The desktop version uses full-width hero sections and grid-based blog layouts, which had to be recomposed for vertical scroll on small screens. The podcast player needed touch-friendly controls, and the trilingual content required a mobile-optimized language switcher that didn't clutter the interface. I tested across devices (iPhone, Android, tablets, desktop) to ensure typography remained legible and CTAs stayed accessible. The motion graphics were optimized with reduced frame rates and file sizes for mobile performance.",
      },
      {
        title: "Content strategy (trilingual)",
        content:
          "Content is published in Turkish, English, and German to serve Vienna's multicultural community. I write blog posts covering show topics, guest interviews, cultural commentary, and event previews. Each post is tagged by category (music, culture, community, events) to help readers filter by interest. The challenge was maintaining voice consistency across three languages — the tone is conversational and accessible, avoiding jargon while still offering cultural depth. The blog has become a content hub that drives traffic back to the show and builds audience between broadcasts.",
      },
      {
        title: "Results & impact",
        content:
          "Since launch, website traffic has increased by 220%. Feedback from listeners and the radio station has been overwhelmingly positive — the site is described as easy to navigate, visually engaging, and a strong representation of the show's energy. The podcast integration allows listeners to catch up on missed episodes, which has increased overall listenership. The brand identity has been adopted across all Radio Biz touchpoints — social media, event posters, and merchandise — creating a cohesive presence. The station now uses the site as a reference for other shows looking to build their digital presence.",
      },
      {
        title: "Ongoing work",
        content:
          "I continue to co-host the show, write blog content, and manage the website. Recent additions include a bilingual newsletter signup form and integration with the station's event calendar API. Future plans include expanding the podcast archive with search and filtering, adding show transcripts for accessibility, and exploring listener engagement features like comment threads and event RSVPs. The site is designed to evolve with the show — modular and flexible enough to accommodate new content types and community features as the audience grows.",
      },
    ],
    images: [
      "/images/radiobiz1.jpg",
      "/images/radiobiz2.jpg",
      "/images/radiobiz3.jpg",
      "/images/radiobiz4.jpg",
    ],
  },
  {
    slug: "civis-intergenerational",
    hidden: true,
    title: "CIVIS Intergenerational",
    shortDescription: "Web design · Information architecture",
    category: "Web design",
    year: "2025",
    color: "linear-gradient(145deg, #2a2040, #15102a 50%, #3d2d5c)",
    description:
      "A web platform for the University of Salzburg's CIVIS2 project, connecting intergenerational communities across European universities through accessible, inclusive design.",
    role: "UX & Web Designer",
    team: "1 Designer + Research Team",
    duration: "3 months",
    responsibilities: [
      "Information architecture",
      "UX & responsive web design",
      "Accessibility & GDPR compliance",
      "Three functional modules",
    ],
    sections: [
      {
        title: "About the process",
        content:
          "The CIVIS Intergenerational Communities project required designing a platform that serves diverse user groups — from university students to elderly community members. The information architecture needed to be intuitive for users with varying levels of digital literacy, while meeting strict European accessibility and data protection standards.",
      },
      {
        title: "The design",
        content:
          "We designed three interconnected modules with a clean, high-contrast interface. Large touch targets, clear navigation hierarchies, and multilingual support were core requirements. The responsive design ensures the platform works across devices, from desktop screens in university labs to tablets used in community centers.",
      },
    ],
    images: ["/images/civis-intergenerational.jpg"],
  },
  {
    slug: "intersensa",
    title: "Intersensa",
    shortDescription: "Spatial Haptic Design Tool for Game Designers",
    category: "UX/UI Design · Web App Interface",
    year: "2024",
    color: "linear-gradient(145deg, #1a2332, #0f1621 50%, #2a3847)",
    thumbnail: "/images/thumbnails/intersensa.jpg",
    coverImage: "/images/intersensa.jpg",
    video: "/videos/intersensa.mp4",
    description:
      "A spatial haptic design plugin for the Interhaptics ecosystem, enabling game designers to create multi-directional haptic patterns without coding. Built for Razer's Project Esther technology, Intersensa brings a visual, timeline-based interface to haptic design — similar to how audio software works.",
    role: "UX/UI Designer",
    team: "2 Designers + 2 Researchers (Razer collaboration)",
    duration: "4 months",
    responsibilities: [
      "UX research & competitive analysis (spatial audio tools, haptic systems)",
      "Experience design & user journey mapping",
      "Low-fidelity wireframes & interaction prototypes",
      "High-fidelity UI design in Figma (Interhaptics design system)",
      "Usability testing with HCI students (N=10)",
    ],
    links: [
      {
        url: "https://www.youtube.com/watch?v=4sJkypf69FU&t=18s",
        label: "Watch Demo Video",
      },
      {
        url: "https://www.figma.com/proto/vdmjcLpwAgvVUDshIE3mNC/Interhaptics-Project-File?node-id=911-8228&page-id=911%3A8090&starting-point-node-id=911%3A8228&t=IvLFxBz8gx5Yue4t-1",
        label: "View Figma Prototype",
      },
    ],
    sections: [
      {
        title: "Project overview",
        content:
          "Multidirectional haptics are here — but how do game designers actually design them? Unlike traditional haptic devices limited to one-dimensional feedback, Razer's Project Esther technology enables tactile sensations that vary in intensity, speed, duration, and spatial direction. The problem: creating these complex haptic interactions requires significant coding effort, and achieving consistency across devices is difficult. Intersensa is a plugin built for the Interhaptics ecosystem that lets designers create multidirectional haptic patterns through a visual interface — no days of coding required. Think of it like audio design software, but for haptics. The project was a collaboration with Razer during the simultaneous development of the underlying technology, requiring a Research Through Design (RtD) approach.",
      },
      {
        title: "The design challenge",
        content:
          "Game designers face a steep barrier to entry with multidirectional haptics: coding complex spatial interactions is time-consuming, the technology is new with no established design patterns, and ensuring consistency across diverse hardware is challenging. The goal was to create the simplest possible interface that could handle a wide variety of gaming scenarios — from a sword slash in an action game to environmental feedback in a racing simulator. The challenge was designing for a technology being developed in parallel, meaning we had to explore ideas through iteration and testing rather than following a fixed specification. We needed to balance power and flexibility with ease of use, avoiding the distraction-heavy interfaces common in professional audio tools while still offering precise control.",
      },
      {
        title: "Research & competitive analysis",
        content:
          "We began with extensive desk research on spatial audio software (which shares conceptual similarities with spatial haptics), existing haptic creation tools, and the Interhaptics ecosystem. We analyzed competitor pain points: overly complex interfaces, steep learning curves, lack of real-time preview, and poor cross-device compatibility. We also studied 3D audio tools to understand how designers think about spatial positioning and timeline-based editing. This research informed our core insight: haptic design should feel familiar to anyone who's used audio editing software — with a timeline, keyframes, and a spatial viewport. The research phase also involved understanding gaming scenarios where multidirectional haptics add value, from combat feedback to environmental immersion.",
      },
      {
        title: "Experience design & use cases",
        content:
          "To create an efficient and seamless interaction, we started by defining gaming scenarios: a sword cut that travels across the player's body, footsteps approaching from behind, an explosion's shockwave radiating outward, or a racing car's engine vibration shifting with steering. Each scenario informed the features we needed: spatial positioning (where on the body), intensity control (how strong), duration (how long), and temporal sequencing (when). The motivation was simplicity — give users the minimum viable interface that can achieve maximum scenario coverage. These use cases directly shaped our layout decisions, prioritizing the 3D viewport (for spatial positioning) and timeline (for temporal control) as the two primary interaction surfaces.",
      },
      {
        title: "Sketches & wireframes",
        content:
          "The design process moved to low-fidelity sketches to accelerate decision-making through visualization. We explored multiple layout configurations, always checking against our primary goal: reduce cognitive load, avoid distraction, make interactions self-explanatory. Between multiple sketch iterations, we selected concepts that required less learning and had interactions that spoke for themselves. We then translated these sketches into wireframes in Figma, combining keyframing (timeline-based editing), a 3D viewport (spatial positioning), and settings panels (intensity, duration, device mapping). These wireframes were refined through numerous meetings with the Razer team and internal testing, creating a clear roadmap for the user journey and guiding high-fidelity prototype development.",
      },
      {
        title: "UI design & iteration",
        content:
          "The interface design was heavily iterative. We followed Interhaptics' style guidelines to maintain a consistent design language but made independent decisions about functionality and layout. My goal was creating a visual identity aligned with Interhaptics while ensuring the interface seamlessly supported the user journey. The key interactions became: adjusting location and impact area through the 3D viewport, and controlling timing and intensity through the timeline. The biggest challenge was blending the 3D viewport with the timeline and keyframe settings without overwhelming the user. We constantly returned to the principle: leave behind ideas that aren't clear enough, move forward with the most viable features. The final design balances professional-grade control with approachability.",
      },
      {
        title: "Usability testing (N=10)",
        content:
          "We conducted a workshop with 10 HCI master students, presenting Intersensa through a product demonstration video featuring three game scenarios: a sword cut, approaching footsteps, and an environmental explosion. Participants were interviewed about their opinions, experiences, and feature requests. Each participant helped us identify unclear elements in the prototype and common usability issues. We coded each interview transcript and used thematic analysis to extract findings. The main issues pointed to visualization problems on the timeline — specifically, how value changes for impact area and intensity were communicated. Participants wanted clearer visual feedback when adjusting spatial parameters and better indication of how haptic patterns would feel across different body zones. These findings directly informed the final design refinements.",
      },
      {
        title: "Final design & outcomes",
        content:
          "The final design emphasizes clarity and ease. The interface is organized into three zones: the 3D viewport (left) for spatial positioning on a body model, the timeline (bottom) for keyframe editing and temporal control, and the settings panel (right) for intensity, duration, and device-specific parameters. Users can scrub through the timeline to preview how haptic patterns evolve, adjust spatial impact zones by clicking and dragging on the body model, and set keyframes to create complex multi-directional sequences. The design language values the creation of multidirectional haptics and communicates each functionality clearly without visual clutter. Every element was tested against real gaming scenarios to ensure practical utility.",
      },
      {
        title: "Impact & next steps",
        content:
          "Interhaptics is planning to produce Intersensa in 2025–2026. The project demonstrates that complex spatial haptic design can be made accessible to game designers without requiring deep programming knowledge. By borrowing interaction patterns from familiar tools (audio software, animation timelines, 3D modeling viewports), Intersensa lowers the barrier to entry for an emerging technology. The design supports Razer's vision of bringing multidirectional haptics to mainstream gaming, providing the creative tools needed to unlock the technology's potential. Future development will focus on real-time device preview, expanded device libraries, and integration with game engines like Unity and Unreal.",
      },
    ],
    images: [
      "/images/intersensa.jpg",
      "/images/intersensa-0.jpg",
      "/images/intersensa-1.jpg",
      "/images/intersensa-2.jpg",
      "/images/intersensa-3.jpg",
      "/images/intersensa-4.jpg",
    ],
  },
  {
    slug: "enersee",
    title: "Enersee",
    shortDescription: "Energy Visualization Mobile App",
    category: "UX/UI Design · Mobile App",
    year: "2024",
    color: "linear-gradient(145deg, #1a2d1a, #0f1a0f 50%, #2a4a2a)",
    thumbnail: "/images/thumbnails/enersee.jpg",
    video: "/videos/enersee.mp4",
    description:
      "A mobile app concept that simplifies household energy consumption data through intuitive visualization and actionable insights. Designed to help users understand not just how much energy they use, but what they use it for and where it comes from — turning invisible consumption into transparent, behavior-changing information.",
    role: "UX/UI Designer",
    team: "1 Designer + 2 Researchers",
    duration: "8 weeks",
    responsibilities: [
      "UX research & competitive analysis (energy apps, smart home interfaces)",
      "User persona development & scenario mapping",
      "Low to high-fidelity prototyping in Figma",
      "Usability testing (2 rounds: 4 tests + 3 follow-up tests)",
      "Final UI design following Material Design guidelines",
    ],
    sections: [
      {
        title: "Project overview",
        content:
          "Despite the availability of smart meters and energy feedback technology, consumers remain disengaged with their energy usage. The problem isn't lack of data — it's that existing tools fail to make that data meaningful. Energy consumption has become increasingly invisible: we don't see coal burning or water flowing through turbines; we just flip a switch. Enersee is a mobile app concept designed to make energy consumption visible again through clear visualization, personalized insights, and actionable recommendations. The goal was creating an interface simple enough for daily use while providing enough depth to drive actual behavior change. The project was conducted over 8 weeks as a UX design exercise exploring how to translate complex energy data into intuitive, user-friendly interfaces.",
      },
      {
        title: "Research & problem definition",
        content:
          "Our desk research focused on existing energy visualization tools, smart home apps, and academic literature on energy behavior. We found that while technology exists to track consumption, most interfaces overwhelm users with raw data (kilowatt-hours, graphs, numbers) without context or actionable insights. Key insight from Frey & Schädler (2021): although energy consumption has massively increased, it has also become more invisible to users. We analyzed competitor apps and identified recurring failures: overly technical language, lack of comparative baselines (is 50 kWh good or bad?), no connection between consumption and specific devices, and missing guidance on when to act. Our research led to a core design principle: energy awareness should clarify three things: how much energy we use, what we actually use it for, and where the energy comes from.",
      },
      {
        title: "Target user needs & personas",
        content:
          "We developed a primary persona: the 'Finance Expert' — a household decision-maker motivated by cost savings and efficiency rather than environmental activism alone. This persona cares about optimization, wants clear ROI on behavior changes, and appreciates data-driven insights presented in a no-nonsense style. User needs emerged from research and interviews: (1) easy-to-understand and informative interface with no overly complex information, (2) tips for specific use cases (when to run the dishwasher, which appliances consume most), (3) clear time spans indicating when to turn devices on or off (e.g., based on tariff rates), (4) simple calls to action that don't require constant attention, and (5) consumption must be made comprehensible through comparison (to past usage, similar households, or benchmarks). These needs became our design requirements.",
      },
      {
        title: "Initial design & failure points",
        content:
          "Our first prototypes failed at communicating the intended functions. We designed screens showing energy consumption by room, device breakdowns, and historical trends — but testers found them confusing. The main issues: iconography wasn't intuitive (users didn't understand what represented what), comparison baselines were unclear (numbers without context), and the navigation structure buried actionable insights too deep in the interface. Since our aim was creating an intuitive and universal interface for energy visualization, we had to test and rethink our approach. This taught us that even well-intentioned data visualization can fail if it doesn't match users' mental models. We learned that 'more data' doesn't equal 'more understanding' — and that the most important information should be immediately visible, not three taps away.",
      },
      {
        title: "Usability testing — Round 1",
        content:
          "We created a high-fidelity prototype in Figma and conducted four usability tests with colleagues matching our target demographic. We used think-aloud protocol, asking participants to complete key tasks: check today's consumption, identify which device uses the most energy, and find recommendations for reducing usage. The findings were humbling. Participants struggled with the device breakdown screen (icons were ambiguous), didn't notice the comparison to previous months (visual hierarchy issue), and found the recommendations page but didn't understand how the tips were prioritized. The primary takeaway: our interface assumed too much energy literacy. We needed clearer labeling, stronger visual hierarchy, and more explicit guidance on what actions to take.",
      },
      {
        title: "Iteration & Round 2 testing",
        content:
          "Based on Round 1 findings, we made three major changes: (1) replaced ambiguous icons with labeled categories (Heating, Appliances, Lighting, etc.), (2) introduced a prominent comparison card on the home screen showing consumption vs. last month with color-coded indicators (green = lower, red = higher), and (3) redesigned the recommendations section to prioritize high-impact actions with estimated savings. We conducted three follow-up usability tests. Performance improved significantly: task completion rates increased, time-on-task decreased, and subjective satisfaction scores were higher. Participants commented that the revised design felt 'clearer' and 'more actionable.' However, we also identified new issues: some users wanted to set consumption goals, and others requested notifications for unusual spikes in usage. These became backlog items for future iteration.",
      },
      {
        title: "Final UI design & rationale",
        content:
          "The final design uses a corporate-style dark mode aesthetic to align with the 'Finance Expert' persona — conveying professionalism, data-driven decision-making, and a focus on efficiency rather than playful eco-branding. We followed Material Design guidelines to ensure the interface felt contemporary and familiar to Android users. Color coding was used sparingly but meaningfully: green for positive (reduced consumption), red for alerts (spikes or inefficiencies), and neutral grays for informational content. Typography prioritized readability with clear hierarchy: large numerals for key metrics (today's usage), medium weight for labels, and small text for contextual details. Every design decision was evaluated against the criterion: does this make energy consumption more understandable and actionable?",
      },
      {
        title: "Key features & how they work",
        content:
          "The final app concept includes four core features: (1) Dashboard — displays today's consumption, comparison to yesterday/last week/last month, and a cost estimate based on current tariff. (2) Device Breakdown — shows energy usage by category (heating, appliances, lighting) with drill-down to specific devices if smart plugs are integrated. (3) Insights & Recommendations — personalized tips based on usage patterns, such as 'Running your dishwasher at night could save €8/month' or 'Your heating is 20% higher than similar households.' (4) Historical Trends — weekly and monthly graphs with annotations for events (heat wave, vacation) that explain anomalies. The design emphasizes glanceability: the most important information is visible on the home screen without scrolling or tapping.",
      },
      {
        title: "Outcomes & learnings",
        content:
          "Enersee was a conceptual project rather than a production app, so outcomes are measured by design insights rather than deployed metrics. The project taught us that simplifying complex data requires iterative testing — our initial assumptions about what users would find intuitive were wrong. We learned the importance of comparative baselines (showing consumption in isolation is meaningless), the power of actionable recommendations over passive data displays, and the challenge of designing for behavior change (which requires ongoing engagement, not one-time information delivery). If developed further, the design would benefit from extended user testing with actual energy consumers, integration with real smart meter APIs, and exploration of gamification or social comparison features to sustain engagement. The project demonstrated that good energy visualization isn't about showing more data — it's about showing the right data, in the right context, with clear next steps.",
      },
    ],
    coverImage: "/images/enersee.jpg",
    images: [
      "/images/enersee.jpg",
      "/images/enersee-1.jpg",
      "/images/enersee-2.jpg",
      "/images/enersee-3.jpg",
      "/images/enersee-4.jpg",
      "/images/enersee-5.jpg",
      "/images/enersee-6.jpg",
      "/images/enersee-7.jpg",
      "/images/enersee-8.jpg",
    ],
  },
  {
    slug: "amiai",
    title: "AM I AI?",
    shortDescription: "Speculative Design on AI-Generated Content",
    category: "Graphic Design · Motion Design",
    year: "2024",
    color: "linear-gradient(145deg, #3d1a3d, #240f24 50%, #502a50)",
    thumbnail: "/images/thumbnails/amiai.jpg",
    video: "/videos/amiaicardhov.mov",
    heroImage: "/images/amiai.jpg",
    description:
      "A speculative design project exploring the blurred lines between AI-generated and original content in the age of fake news. Through provocative visual branding, merchandise, and motion graphics, the project questions authenticity, digital literacy, and how we discern truth in algorithmically mediated realities.",
    role: "Visual Designer (Motion Design & Poster Design)",
    team: "3 Designers (collaborative worldbuilding & branding)",
    duration: "3–4 months (Semester Project)",
    responsibilities: [
      "Visual identity & branding development",
      "Motion design for outdoor installations and social media",
      "Main poster design & graphic collateral",
      "Merchandise design (apparel, printed matter)",
      "Presentation at MediaWise YOUth workshop (Erasmus+)",
    ],
    links: [
      {
        url: "https://www.youtube.com/watch?v=GGL0BeQwzPY&t=1s",
        label: "Watch Outdoor Motion Design",
      },
    ],
    sections: [
      {
        title: "Project overview",
        content:
          "AM I AI? is a speculative design project that confronts the blurred boundaries between human-created and AI-generated content — particularly in the context of fake news and digital misinformation. As generative AI becomes indistinguishable from human authorship, how do we verify authenticity? How do we trust what we see, read, or hear online? Rather than proposing solutions, the project provokes questions through a complete visual world: graphic branding, motion graphics, merchandise, and social media content that intentionally confuses and disorients. The project was developed over a semester by a team of three designers and presented at MediaWise YOUth, an Erasmus+ workshop focused on fake news awareness and digital literacy, held at Sargfabrik Vienna on April 10, 2026.",
      },
      {
        title: "Design challenge & provocation",
        content:
          "The brief was to create a provocative statement and build a visual world around it, anchored in a pressing contemporary issue. We chose to focus on AI-generated content and fake news — a problem intensifying in real-time as deepfakes, synthetic media, and large language models flood digital spaces with indistinguishable fabrications. The central provocation: What if you couldn't tell whether the content you consume — or even you yourself — is AI-generated? The title 'AM I AI?' poses this question from both sides: as a reader questioning the authenticity of content, and as a self-reflective doubt about one's own humanity in an age where behavior, opinions, and creativity are algorithmically shaped. The challenge was making this abstract, future-facing threat visceral and immediate through design.",
      },
      {
        title: "Worldbuilding & critical design approach",
        content:
          "We employed worldbuilding and critical design methodologies to construct a speculative scenario where the line between human and AI authorship has collapsed entirely. Rather than designing a utopian or dystopian future, we created an ambiguous present — a reality that feels unsettlingly close to our own. The visual language intentionally resists clarity: glitchy typography, distorted imagery, and layered textures that suggest both digital corruption and human imperfection. The branding doesn't tell you what's real or fake; it forces you to question, doubt, and scrutinize. This aligns with critical design's goal: not to solve problems, but to provoke reflection and debate about the values embedded in emerging technologies.",
      },
      {
        title: "Visual identity & branding",
        content:
          "The visual identity centers on contradiction and instability. Typography oscillates between crisp geometric sans-serifs (suggesting algorithmic precision) and distorted, glitchy letterforms (suggesting breakdown and error). The color palette uses high-contrast neons against dark backgrounds — visually arresting but unsettling, evoking both digital interfaces and warning signals. Imagery combines human portraits with digital artifacts: pixelation, compression glitches, layer masks that reveal and conceal. The logo itself is ambiguous — readable as both 'AM I AI' and, when inverted or corrupted, questioning its own legibility. Every design element was crafted to make viewers pause and ask: Is this intentional? Is this broken? Is this real?",
      },
      {
        title: "Motion design & outdoor installations",
        content:
          "My primary contribution was motion design for outdoor digital displays and social media. The motion graphics use rapid cuts, text overlays, and visual distortion to simulate the experience of scrolling through algorithmically curated feeds where authenticity is unknowable. Phrases like 'Can you tell?', 'Real or Generated?', and 'Trust Your Eyes?' appear and dissolve, layered over fragmented imagery. The pacing is deliberately disorienting — too fast to fully process, mimicking the overwhelming velocity of online information. The outdoor installation footage shows these motion pieces projected in public space, turning digital anxiety into a physical, shared experience. The glitch aesthetic wasn't just stylistic; it was semantic — visual noise representing epistemic uncertainty.",
      },
      {
        title: "Merchandise & tangible provocations",
        content:
          "We extended the project into physical merchandise: t-shirts, posters, stickers, and printed matter bearing slogans like 'AM I AI?', 'Generated Content', and 'Authenticity Not Guaranteed.' The merchandise served dual purposes — as artifacts from the speculative world we built, and as conversation starters in real space. Wearing a shirt that asks 'AM I AI?' in public invites questions, skepticism, and dialogue. The printed posters were wheat-pasted in urban environments, blending with advertising and street art, making the provocation ambient rather than gallery-confined. This approach reflects speculative design's aim to infiltrate everyday life rather than remaining in academic or exhibition contexts.",
      },
      {
        title: "Presentation at MediaWise YOUth",
        content:
          "The project was presented at MediaWise YOUth, an Erasmus+ youth development workshop focused on fake news awareness and digital literacy, held at Sargfabrik Vienna on April 10, 2026. The audience consisted of educators, youth workers, digital literacy advocates, and young people navigating online misinformation. We presented the project as a case study in how design and art can communicate complex digital threats more effectively than informational campaigns or written warnings. The feedback was overwhelmingly positive — attendees praised the project for making abstract AI risks tangible and emotionally resonant. Many noted that the provocative, artistic approach enriched the workshop's content, demonstrating that critical thinking about technology can be cultivated through aesthetic experience, not just factual instruction.",
      },
      {
        title: "Outcomes & critical reflections",
        content:
          "AM I AI? succeeded in its goal: provoking discomfort and doubt in a way that informational posters or fact-checking guides cannot. The project demonstrated that speculative design can make future-facing threats feel immediate and personal, shifting abstract concerns about AI into visceral questions about trust, identity, and perception. The audience response at MediaWise confirmed that design has a role in digital literacy education — not as instruction, but as provocation that activates critical thinking. However, the project also raised ethical questions: Does ambiguity serve awareness or contribute to cynicism? Can provocation backfire into nihilism? These tensions are productive — speculative design isn't meant to resolve issues, but to open spaces for reflection and debate.",
      },
      {
        title: "Key insights & broader implications",
        content:
          "The project surfaced several insights about design's role in digital literacy. First, abstraction kills urgency — people intellectually understand AI risks but don't emotionally grasp them until confronted with visceral, confusing experiences. Second, aesthetic discomfort can be pedagogical — feeling uncertain, disoriented, and skeptical while engaging with AM I AI? mirrors the cognitive state required to navigate misinformation online. Third, critical design belongs outside galleries — merchandise, public installations, and social media turn speculative provocations into ambient cultural interventions. Finally, the project revealed the limits of solutions-oriented design: some problems (like epistemic collapse in the age of generative AI) can't be 'solved,' only confronted, questioned, and renegotiated. AM I AI? argues that design's responsibility isn't always answers — sometimes it's better questions.",
      },
    ],
    coverImage: "/images/amiai.jpg",
    images: [
      "/images/amiai.jpg",
      "/images/amiai1.jpg",
      "/images/amiai2.jpg",
      "/images/amiai3.jpg",
      "/images/amiai4.jpg",
      "/images/amiai5.jpg",
      "/images/amiai6.jpg",
      "/images/amiai7.jpg",
      "/images/amiai8.jpg",
      "/images/amiai9.jpg",
      "/images/amiai10.jpg",
      "/images/amiai11.jpg",
      "/images/amiai12.jpg",
    ],
  },
  {
    slug: "3d-renders",
    title: "3D Product Visualization",
    shortDescription: "Commercial Furniture Rendering for ERSA",
    category: "3D Visualization · Product Design · CMF Design",
    year: "2022–2024",
    color: "linear-gradient(145deg, #2d2416, #1a150d 50%, #3d3320)",
    thumbnail: "/images/thumbnails/3drenders.jpg",
    video: "/videos/3d_renders.mp4",
    heroImage: "/images/renderhero.jpg",
    description:
      "1.5 years of commercial 3D visualization work for ERSA, a B2B/B2C furniture manufacturer. Created photorealistic product renders for catalogs, marketing campaigns, trade show materials, and customer-specific interior scenes — from initial modeling to final high-resolution output.",
    role: "Product Designer & 3D Visualization Artist",
    team: "3-person visualization team (collaborative catalog production)",
    duration: "1.5 years (Internship → Full-time)",
    responsibilities: [
      "3D modeling of furniture products (tables, chairs, sofas, storage systems)",
      "Photorealistic rendering for catalogs and marketing materials",
      "CMF design (Color, Material, Finish specification)",
      "Custom interior scenes based on client spaces",
      "Trade show visualization and presentation materials",
    ],
    sections: [
      {
        title: "Project overview",
        content:
          "ERSA is a furniture design and manufacturing company serving both B2B and B2C markets, producing high-quality office furniture, residential pieces, and contract furnishings. As part of the visualization team, I was responsible for creating photorealistic 3D renders used across the company's commercial materials — from printed catalogs to digital marketing campaigns to trade show presentations. The work spanned product visualization (individual furniture pieces shot in studio-style lighting) and full interior scenes (contextual environments showing products in real-world settings). Every render had to meet commercial photography standards: accurate materials, believable lighting, and compositions that sell. This wasn't speculative or conceptual work — these images went directly to customers, sales teams, and print production.",
      },
      {
        title: "Role & responsibilities",
        content:
          "I started as an intern and transitioned to full-time, eventually taking on end-to-end responsibility for product visualization. My role included 3D modeling from technical drawings or physical references, CMF (Color, Material, Finish) design to define fabric swatches, wood finishes, and metal treatments, lighting and composition for each shot, and rendering high-resolution outputs for print and digital use. I worked closely with product designers to ensure accuracy, with the marketing team to match brand guidelines, and with sales to create custom scenes for client presentations. For catalog production, I collaborated with two other designers — we worked in parallel on different product lines, with each catalog cycle taking approximately 6–7 months from initial modeling to final delivery.",
      },
      {
        title: "Technical workflow & tools",
        content:
          "The workflow followed a standard production pipeline: modeling in 3ds Max, texturing and material setup using physically-based rendering (PBR) workflows, lighting with Corona or V-Ray render engines, and post-processing for final color grading and compositing. Modeling started from CAD files provided by engineering or from measurements of physical prototypes. Materials were calibrated to match physical samples — fabric weaves, leather grain, wood veneers, metal finishes — often requiring custom texture creation or procedural shaders. Lighting setups varied by use case: studio lighting for catalog product shots, natural daylight for interior scenes, and dramatic spotlighting for hero imagery. Each render was optimized for print resolution (300 DPI) while balancing render times, which could range from minutes for simple product shots to hours for complex interior scenes.",
      },
      {
        title: "Technical challenges — soft surface modeling",
        content:
          "The most technically demanding aspect was modeling soft surfaces — particularly sofas, upholstered chairs, and cushions. Unlike hard-edged furniture (tables, cabinets, storage systems) which are geometrically straightforward, soft furnishings require believable fabric draping, cushion compression, and organic deformation. Achieving realism means understanding how fabric folds under gravity, how cushions compress at contact points, and how stitching creates subtle surface tension. I used a combination of cloth simulation, manual sculpting, and procedural displacement to capture these details. Each sofa design became more refined as I internalized the physics of soft materials — learning to read how real sofas behave and translate that into 3D geometry. This expertise became a key differentiator in my work, allowing me to take on the most complex product visualizations in the catalog.",
      },
      {
        title: "Catalog production & marketing materials",
        content:
          "Catalog production was the core output: each catalog featured 50–100+ product renders across multiple furniture lines, requiring consistency in lighting, color grading, and compositional style. The process involved iterative review cycles with product designers and marketing, ensuring technical accuracy (dimensions, materials, hardware) and brand alignment (color palettes, mood, styling). Beyond catalogs, I created marketing imagery for digital campaigns, website hero images, social media content, and email newsletters. Each asset was optimized for its platform — web-resolution JPGs for fast loading, high-res TIFFs for print, and vertical crops for Instagram. The challenge was maintaining visual consistency across formats while adapting compositions to different aspect ratios and use cases.",
      },
      {
        title: "Custom scenes & client-specific visualization",
        content:
          "In addition to catalog work, I created custom interior scenes for sales presentations and client proposals. When a client was considering ERSA furniture for their office or commercial space, the sales team would provide floor plans and photos — I'd then build a 3D scene matching their actual environment and populate it with proposed furniture configurations. This allowed clients to visualize products in their specific context before committing to purchase. These projects required fast turnaround (often 1–2 weeks), attention to architectural detail (matching wall colors, flooring, ceiling heights), and creative problem-solving to make the proposed furniture look integrated rather than inserted. The ability to deliver convincing, client-specific visualizations became a key sales tool for the company.",
      },
      {
        title: "CMF design & material libraries",
        content:
          "Beyond rendering, I contributed to CMF (Color, Material, Finish) design — defining the material palettes available for each product line. This involved photographing physical fabric samples, calibrating digital textures to match real-world materials, and building material libraries that both designers and sales teams could reference. The goal was ensuring that what customers saw in renders accurately represented what they would receive in production. This required close collaboration with manufacturing to understand material limitations, fabric suppliers to access swatch samples, and product designers to align CMF choices with design intent. Maintaining this library became critical infrastructure for consistent, accurate visualization across the team.",
      },
      {
        title: "Commercial impact & deliverables",
        content:
          "Every render I created was used commercially — in printed catalogs distributed to thousands of customers, on the company website viewed by B2B and B2C buyers, in trade show booths at furniture fairs across Europe, and in sales presentations closing five and six-figure contracts. The work directly supported revenue: high-quality visualization made products more desirable, helped clients visualize custom configurations, and reduced the need for costly physical prototypes or showroom samples. Feedback from sales teams confirmed that photorealistic renders increased customer confidence and accelerated decision-making. The ability to quickly generate client-specific scenes gave ERSA a competitive advantage in B2B proposals, where visualization quality often differentiated winning bids.",
      },
      {
        title: "What I learned & where it led",
        content:
          "The ERSA experience taught me the technical mastery required for production-grade 3D work: precision modeling, material accuracy, lighting that sells, and delivery under deadline pressure. Each project deepened my understanding of how light interacts with surfaces, how composition guides the viewer's eye, and how photorealism is built from thousands of small, correct decisions. The work also revealed the intersection of design and commerce — visualization isn't just aesthetic; it's a business tool that enables sales, reduces costs, and communicates value. Most significantly, this work opened a new chapter: I became fascinated by real-time rendering and interactive 3D, leading me to learn Unity and Unreal Engine. The transition from static renders to interactive environments felt like a natural evolution — taking the same core skills (modeling, materials, lighting) and applying them in real-time, interactive contexts. That foundation continues to shape how I approach digital product design today.",
      },
    ],
    coverImage: "/images/3d-renders.jpg",
    images: [
      "/images/3d-renders.jpg",
      "/images/render-1.jpg",
      "/images/render-2.jpg",
      "/images/render-3.jpg",
      "/images/render-4.jpg",
      "/images/render-5.jpg",
      "/images/render-6.jpg",
      "/images/render-7.jpg",
    ],
  },
  {
    slug: "katerblau-yacht",
    title: "Katerblau",
    shortDescription: "BMW i8-Inspired Hybrid Yacht Concept",
    category: "Industrial Design · Yacht Design · 3D Visualization",
    year: "2021",
    color: "linear-gradient(145deg, #1a2d3d, #0f1a24 50%, #2a4a5d)",
    thumbnail: "/images/thumbnails/katerblau.jpg",
    heroImage: "/images/katerblaumain.jpg",
    images: ["/images/katerblau-yacht.jpg"],
    description:
      "A 60-foot hybrid motor yacht concept inspired by BMW i8's design language. Designed for a wealthy, eco-conscious user who values speed, luxury, and cutting-edge technology. Combines electric propulsion, lightweight materials, and futuristic aesthetics for coastal cruising in the Mediterranean and Aegean seas.",
    role: "Industrial Designer & 3D Visualization (Team of 3)",
    team: "Ege Çelikgöğüs, Merve Karnas, Tilda Gürünlü (University Project)",
    duration: "1 Semester (Sea Vehicles Design Course)",
    responsibilities: [
      "User research & persona development",
      "Design concept development inspired by BMW i8",
      "3D modeling & visualization (exterior & interior)",
      "Technical specification & layout planning",
      "Final presentation & design documentation",
    ],
    sections: [
      {
        title: "Project overview",
        content:
          "Katerblau is a hybrid motor yacht concept developed as part of a sea vehicles design course at university. The brief was to design a yacht for a specific user profile, considering lifestyle, operational conditions, and design criteria. Our team of three designers created a 60-foot (18-meter) planning hull yacht inspired by BMW i8's distinctive visual language — blending luxury, high technology, and environmental consciousness. The name 'Katerblau' references the yacht's signature blue accent color inspired by BMW's electric vehicle line. The project spanned one semester and included user research, design development, 3D modeling, and technical documentation. The final deliverable was a comprehensive design proposal with renderings, floor plans, and technical specifications.",
      },
      {
        title: "User research & persona",
        content:
          "We developed a detailed user persona: a wealthy celebrity in her late 30s with a busy work schedule and an active lifestyle. She values custom-designed luxury products but is equally conscious about environmental impact and technological innovation. She loves the combination of luxury and high-tech, enjoys sea adventures, and travels frequently for both work and leisure. When on holiday, she prefers intimate gatherings — accommodations for 6 people (close friends and family). Her activities include exploring hidden coves, diving, kitesurfing, and photography. She wants her yacht to serve as rapid transportation between nearby marinas rather than anchoring in open sea for extended periods. Her passion for fast-changing fashion and technology, combined with her enthusiasm for sustainable living, made a hybrid electric motor yacht the perfect choice — offering speed, comfort, and eco-consciousness in one package.",
      },
      {
        title: "Design challenge & criteria",
        content:
          "The design challenge was balancing competing priorities: speed, comfort, luxury, sustainability, and operational efficiency. Electric vehicles were gaining momentum in 2021 due to environmental concerns, and luxury transportation had historically pioneered technological innovation. We identified speed and comfort as our primary design criteria. The yacht needed to operate between nearby marine locations in the Aegean and Mediterranean seas, prioritizing rapid coastal cruising over long-distance seaworthiness or cost efficiency. This led us to choose a planning hull type (faster but less stable than displacement hulls) and hybrid propulsion (electric battery + diesel engine). Lightweight materials — carbon fiber and fiberglass — would enhance speed without sacrificing structural integrity. The aesthetic challenge was translating BMW i8's automotive design language into nautical form: sharp lines, futuristic silhouette, signature blue accents, and high-tech interior.",
      },
      {
        title: "BMW i8 design inspiration",
        content:
          "We chose BMW i8 as our visual reference because it exemplified the fusion of luxury, performance, and electric technology that our user valued. The i8's design language — low-slung aerodynamic body, distinctive blue accent lighting, futuristic interior, and carbon fiber construction — provided a roadmap for translating automotive innovation into yacht design. We extracted key visual elements: the signature kidney grille shape reimagined as hull windows, the flowing character lines translated into deck railings and hull contours, the blue accent color applied to LED lighting and interior details, and the minimalist, tech-forward cabin design. The i8's hybrid propulsion philosophy (electric for efficiency, gasoline for range) mirrored our yacht's hybrid system (electric for quiet harbor cruising, diesel for speed). This automotive-to-nautical translation became the project's conceptual anchor.",
      },
      {
        title: "Technical specifications",
        content:
          "The yacht was designed as a 60-foot (18-meter) hybrid motor yacht with a planning hull, accommodating 6 guests across 3 cabins plus 1 crew cabin. Beam (width) was set at 17 feet, draft (depth) at 4 feet, allowing access to shallow Mediterranean anchorages. The hybrid engine system combines electric battery power (for quiet, low-emission cruising in harbors and protected bays) with diesel propulsion (for open-water speed, targeting 30–40 knots). Materials include fiberglass for the hull and carbon fiber for superstructure components, prioritizing lightweightness to maximize speed and fuel efficiency. The layout includes a main deck with an open cockpit, helm station, and outdoor lounge area, and a lower deck with 3 guest cabins (owner's suite, VIP cabin, twin cabin), galley, salon, and crew quarters.",
      },
      {
        title: "Exterior design",
        content:
          "The exterior design translates BMW i8's aggressive, aerodynamic stance into a sleek, fast yacht profile. The hull features sharp, angular lines and a low freeboard (distance between waterline and deck) that visually emphasizes speed. Signature blue LED accent lighting runs along the hull and deck edges, echoing the i8's illuminated kidney grilles and side skirts. The cockpit and deck are designed for active use — ample space for diving gear, kitesurfing equipment, and photography sessions. A retractable swim platform at the stern facilitates easy water access. Large hull windows and panoramic windshields maximize natural light and coastal views. The color palette combines matte dark gray or black hull with white superstructure and blue accents, creating high contrast and modern appeal.",
      },
      {
        title: "Interior design & comfort",
        content:
          "The interior prioritizes comfort without sacrificing the tech-forward aesthetic. Drawing from BMW i8's minimalist cabin, we designed clean, uncluttered spaces with premium materials: light wood veneers, soft leather upholstery, brushed metal details, and ambient LED lighting. The main salon serves as a lounge and dining area with floor-to-ceiling windows offering panoramic sea views. The galley is compact but fully equipped, positioned for efficient meal service. The owner's cabin features a queen bed, ensuite bathroom, and workspace — reflecting the user's need to balance leisure with work obligations. Technology integration includes smart lighting, climate control, and entertainment systems controlled via touchscreen interfaces.",
      },
      {
        title: "Constraints & design trade-offs",
        content:
          "Every design involves trade-offs. Planning hulls, chosen for speed, are less stable than displacement hulls — meaning Katerblau may not handle rough weather or heavy seas as well as traditional yachts. This aligns with the operational scenario (coastal cruising in calm Mediterranean waters) but limits offshore capability. Hybrid propulsion systems require larger engine rooms, reducing available interior space. The emphasis on lightweight materials and high-tech features increases construction costs compared to conventional yachts. These constraints were acknowledged in the design proposal as intentional choices aligned with user priorities rather than design failures.",
      },
      {
        title: "Learning outcomes & reflection",
        content:
          "This project was my first experience designing a vehicle from user research through technical specifications to 3D visualization. It taught me how to translate a design brief into a cohesive concept, balance competing design criteria, and communicate ideas through renderings and documentation. Working in a team of three required collaboration on research, design iterations, and presentation. The BMW i8 inspiration forced us to think beyond conventional yacht aesthetics and consider how design languages transfer across product categories. The project also introduced me to yacht design fundamentals: hull types, propulsion systems, deck layouts, and marine engineering constraints. While Katerblau remained a concept, the process developed skills in industrial design, 3D visualization, and design storytelling that continue to inform my work today.",
      },
    ],
  },
];
