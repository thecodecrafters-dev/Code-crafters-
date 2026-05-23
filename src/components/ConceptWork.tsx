import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Globe, 
  Cpu, 
  Eye, 
  Activity, 
  ShoppingBag, 
  Check, 
  RefreshCw,
  ExternalLink
} from "lucide-react";

interface ConceptProject {
  id: string;
  title: string;
  client: string;
  tag: string;
  category: "fintech" | "spatial" | "brand" | "health";
  desc: string;
  accentColor: string;
  stats: { label: string; value: string }[];
  frameworks: string[];
}

interface LiveProject {
  id: string;
  title: string;
  client: string;
  tag: string;
  category: "fitness" | "beauty" | " culinary";
  desc: string;
  url: string;
  accentColor: string;
  stats: { label: string; value: string }[];
  frameworks: string[];
  mockupImage: string;
}

const LIVE_PROJECTS: LiveProject[] = [
  {
    id: "steel-alpha",
    title: "Steel Alpha Fitness",
    client: "Steel Alpha Gym",
    tag: "High-Performance Portal",
    category: "fitness",
    desc: "A high-octane responsive web experience crafted for an elite athletic facility. Complete with immersive micro-interactions, scheduling flows, trainer rosters, and active BMI calculators.",
    url: "https://gym-website-steel-alpha.vercel.app/",
    accentColor: "from-orange-500 to-red-500",
    stats: [
      { label: "Performance Score", value: "98%" },
      { label: "Layout Load", value: "0.2s" },
      { label: "User Engagement", value: "+45%" }
    ],
    frameworks: ["React 19", "Vite", "Tailwind CSS", "Framer Motion"],
    mockupImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "salon-gamma",
    title: "Salon Gamma Blue",
    client: "Gamma Blue Stylists",
    tag: "Premium Salon Experience",
    category: "beauty",
    desc: "An ultra-premium sensory web portal curated for a luxury styling boutique. Highlights styled lookbook arrays, master hair designer portfolios, and interactive appointment routing.",
    url: "https://salon-website-gamma-blue.vercel.app/",
    accentColor: "from-blue-400 to-indigo-600",
    stats: [
      { label: "Styling Rating", value: "9.9/10" },
      { label: "Interactive Look", value: "Fluid" },
      { label: "FCP Speed", value: "0.25s" }
    ],
    frameworks: ["React", "Vite", "Tailwind CSS", "Lucide Icons"],
    mockupImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "restaurant-mauve",
    title: "Restaurant Six Mauve",
    client: "Six Mauve Gastronomy",
    tag: "Culinary Sensory Showcase",
    category: " culinary",
    desc: "An elegant digital menu and storytelling hub configured for an premium restaurant. Incorporates seasonal menu displays, culinary history grids, and modular seat reservation triggers.",
    url: "https://restaurant-website-six-mauve.vercel.app/",
    accentColor: "from-purple-500 to-pink-500",
    stats: [
      { label: "Bounce Reduction", value: "-22%" },
      { label: "Menu Load Time", value: "Adaptive" },
      { label: "Conversion Rate", value: "+30%" }
    ],
    frameworks: ["React Engine", "Typescript", "Tailwind v4", "Vite"],
    mockupImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80"
  }
];

const CONCEPT_PROJECTS: ConceptProject[] = [
  {
    id: "aether-os",
    title: "Aether OS",
    client: "Future Space Labs",
    tag: "Spatial UI",
    category: "spatial",
    desc: "An experimental spatial ambient operating system mock dashboard with fluid reactive desktop transitions and custom audio frequencies.",
    accentColor: "from-indigo-500 to-purple-500",
    stats: [
      { label: "Frame Rate", value: "120 FPS" },
      { label: "Latency", value: "0.8ms" },
      { label: "Interaction", value: "Gestural" }
    ],
    frameworks: ["WebGL", "Audio Synth", "Tailwind v4"],
  },
  {
    id: "apex-defi",
    title: "Apex Swap",
    client: "Apex Liquidity Group",
    tag: "Fintech Grid",
    category: "fintech",
    desc: "Next-gen liquid transaction flow design featuring high-efficiency liquidity pools and live mathematical simulation graphs.",
    accentColor: "from-cyan-500 to-teal-500",
    stats: [
      { label: "Gas Saved", value: "32%" },
      { label: "Execution", value: "Instant" },
      { label: "Stability", value: "99.99%" }
    ],
    frameworks: ["React 19", "Chart Engine", "Framer Motion"],
  },
  {
    id: "kaizen-store",
    title: "Kaizen Club",
    client: "Kaizen Collective Tokyo",
    tag: "Boutique Fashion",
    category: "brand",
    desc: "A boutique high-fashion digital sensory flagship designed with typography-focused viewport tracking and custom media layers.",
    accentColor: "from-rose-500 to-amber-500",
    stats: [
      { label: "UX Rating", value: "9.8/10" },
      { label: "Load Speed", value: "0.4s" },
      { label: "Conversions", value: "+24%" }
    ],
    frameworks: ["Typography", "Viewport Scroll", "Media Sync"],
  },
  {
    id: "lumina-heal",
    title: "Lumina Circadian",
    client: "Lumina Labs Europe",
    tag: "Biometric Portal",
    category: "health",
    desc: "Dynamic circadian rhythm tracker and ambient sleep optimizer that interacts with ambient room temperature data concepts.",
    accentColor: "from-emerald-500 to-sky-500",
    stats: [
      { label: "Sync Status", value: "Optimal" },
      { label: "Sleep Rating", value: "Deep" },
      { label: "Cycle Match", value: "94%" }
    ],
    frameworks: ["SVG Physics", "Generative Web", "Theme Engine"],
  }
];

export default function ConceptWork() {
  const [portfolioMode, setPortfolioMode] = useState<"live" | "concepts">("live");
  const [activeCategory, setActiveCategory] = useState<"all" | "fintech" | "spatial" | "brand" | "health">("all");
  const [selectedProject, setSelectedProject] = useState<string>("steel-alpha");
  const [isSandboxActive, setIsSandboxActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Interaction State for "Aether OS" mock
  const [spatialGrid, setSpatialGrid] = useState(true);
  const [audioFreq, setAudioFreq] = useState<number>(432);

  // Interaction State for "Apex Swap" mock
  const [swapAmount, setSwapAmount] = useState<string>("1.50");
  const [swapToken, setSwapToken] = useState<"ETH" | "SOL">("ETH");
  const [swapCompleted, setSwapCompleted] = useState(false);

  // Interaction State for "Kaizen Club" mockup
  const [kaizenSlide, setKaizenSlide] = useState<number>(0);
  const kaizenImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80"
  ];

  // Interaction State for "Lumina Circadian" mockup
  const [luminaLight, setLuminaLight] = useState<number>(80);

  const filteredConcepts = activeCategory === "all" 
    ? CONCEPT_PROJECTS 
    : CONCEPT_PROJECTS.filter(p => p.category === activeCategory);

  const handleSwap = () => {
    setSwapCompleted(true);
    setTimeout(() => {
      setSwapCompleted(false);
    }, 2000);
  };

  const handleModeChange = (mode: "live" | "concepts") => {
    setIsLoading(true);
    setPortfolioMode(mode);
    setIsSandboxActive(false);
    if (mode === "live") {
      setSelectedProject(LIVE_PROJECTS[0].id);
    } else {
      const matching = activeCategory === "all" ? CONCEPT_PROJECTS : CONCEPT_PROJECTS.filter(p => p.category === activeCategory);
      if (matching.length > 0) {
        setSelectedProject(matching[0].id);
      } else {
        setSelectedProject(CONCEPT_PROJECTS[0].id);
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 550);
  };

  return (
    <section id="work" className="py-16 md:py-24 px-4 sm:px-6 relative border-t border-white/5 bg-black/40 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <p className="text-white/20 font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-medium leading-tight lg:leading-none tracking-tight">
              Selected Work & <br className="hidden sm:inline" />
              Digital Prototypes
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex w-full sm:w-auto bg-white/[0.03] p-1 border border-white/5 rounded-xl self-stretch sm:self-auto">
            <button
              onClick={() => handleModeChange("live")}
              className={`flex-1 sm:flex-initial text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold py-2.5 px-3 sm:py-3 sm:px-6 rounded-lg transition-all ${
                portfolioMode === "live"
                  ? "bg-white text-black shadow-md"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Deployments (Live)
            </button>
            <button
              onClick={() => handleModeChange("concepts")}
              className={`flex-1 sm:flex-initial text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold py-2.5 px-3 sm:py-3 sm:px-6 rounded-lg transition-all ${
                portfolioMode === "concepts"
                  ? "bg-white text-black shadow-md"
                  : "text-white/40 hover:text-white"
              }`}
            >
              R&D Lab (Concepts)
            </button>
          </div>
        </div>

        {/* Sub filter bar (Only shown during concepts mode for deep categorizations) */}
        {portfolioMode === "concepts" && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-row overflow-x-auto sm:flex-wrap gap-2 border-b border-white/5 pb-5 mb-10 no-scrollbar select-none scroll-smooth min-w-0"
          >
            {(["all", "fintech", "spatial", "brand", "health"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setIsLoading(true);
                  setActiveCategory(cat);
                  const matching = cat === "all" ? CONCEPT_PROJECTS : CONCEPT_PROJECTS.filter(p => p.category === cat);
                  if (matching.length > 0) {
                    setSelectedProject(matching[0].id);
                  }
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 450);
                }}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold py-2 px-3.5 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-white/10 text-white border-white/20"
                    : "border-transparent text-white/40 hover:text-white"
                }`}
              >
                {cat === "all" ? "View All" : cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Master Showcase Layout: Left selector / details, Right Live Interactive Simulator */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards List */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                [1, 2, 3].map((idx) => (
                  <motion.div
                    key={`skeleton-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18, delay: idx * 0.04 }}
                    className="relative p-5 sm:p-8 border border-white/5 rounded-2xl bg-white/[0.005] overflow-hidden flex flex-col gap-4"
                  >
                    {/* Top client line & category pill shimmer */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2.5 w-2/3">
                        <div className="h-3 w-1/2 rounded bg-white/5 shimmer" />
                        <div className="h-6 w-3/4 rounded bg-white/10 shimmer" />
                      </div>
                      <div className="h-5 w-14 rounded bg-white/10 shimmer" />
                    </div>

                    {/* Description lines shimmer */}
                    <div className="space-y-2 mt-2">
                      <div className="h-3 w-full rounded bg-white/5 shimmer" />
                      <div className="h-3 w-5/6 rounded bg-white/5 shimmer" />
                    </div>

                    {/* Footer framework badge array & Action button shimmer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
                      <div className="flex gap-2">
                        <div className="h-4 w-12 rounded bg-white/5 shimmer" />
                        <div className="h-4 w-10 rounded bg-white/5 shimmer" />
                      </div>
                      <div className="h-4 w-28 rounded bg-white/5 shimmer" />
                    </div>
                  </motion.div>
                ))
              ) : portfolioMode === "live" ? (
                LIVE_PROJECTS.map((project) => {
                  const isSelected = selectedProject === project.id;
                  return (
                    <motion.div
                      key={project.id}
                      layoutId={`live-card-${project.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.995 }}
                      onClick={() => {
                        setSelectedProject(project.id);
                        setIsSandboxActive(false);
                      }}
                      className={`group relative p-5 sm:p-8 border rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                        isSelected 
                          ? "bg-white/[0.03] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.02)] hover:border-white/45" 
                          : "bg-white/[0.005] border-white/5 hover:border-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.015)]"
                      }`}
                    >
                      {/* Glowing highlight bar */}
                      {isSelected && (
                        <motion.div 
                          layoutId="active-bar-live"
                          className={`absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b ${project.accentColor}`}
                        />
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono mb-2 block">
                            {project.client} &middot; {project.tag}
                          </span>
                          <h3 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                            {project.title}
                          </h3>
                        </div>
                        <span className={`text-[10px] font-mono uppercase bg-gradient-to-br ${project.accentColor} text-white px-2 py-0.5 rounded-md`}>
                          {project.category}
                        </span>
                      </div>

                      <p className="text-sm font-light text-white/50 leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                        {project.desc}
                      </p>

                      {/* Stats & Framework tags */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                        <div className="flex gap-2">
                          {project.frameworks.map((fw, i) => (
                            <span key={i} className="text-[9px] font-mono text-white/30 border border-white/5 rounded px-1.5 py-0.5">
                              {fw}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-white/30 flex items-center gap-1 group-hover:text-white/60 transition-colors">
                          Inspect Live Website <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                filteredConcepts.map((project) => {
                  const isSelected = selectedProject === project.id;
                  return (
                    <motion.div
                      key={project.id}
                      layoutId={`project-card-${project.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.995 }}
                      onClick={() => {
                        setSelectedProject(project.id);
                        setIsSandboxActive(false);
                      }}
                      className={`group relative p-5 sm:p-8 border rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                        isSelected 
                          ? "bg-white/[0.03] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.02)] hover:border-white/45" 
                          : "bg-white/[0.005] border-white/5 hover:border-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.015)]"
                      }`}
                    >
                      {/* Glowing highlight bar */}
                      {isSelected && (
                        <motion.div 
                          layoutId="active-bar-concept"
                          className={`absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b ${project.accentColor}`}
                        />
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono mb-2 block">
                            {project.client} &middot; {project.tag}
                          </span>
                          <h3 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                            {project.title}
                          </h3>
                        </div>
                        <span className={`text-[10px] font-mono uppercase bg-gradient-to-br ${project.accentColor} text-white px-2 py-0.5 rounded-md`}>
                          {project.category}
                        </span>
                      </div>

                      <p className="text-sm font-light text-white/50 leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                        {project.desc}
                      </p>

                      {/* Stats & Framework tags */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                        <div className="flex gap-2">
                          {project.frameworks.map((fw, i) => (
                            <span key={i} className="text-[9px] font-mono text-white/30 border border-white/5 rounded px-1.5 py-0.5">
                              {fw}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-white/30 flex items-center gap-1 group-hover:text-white/60 transition-colors">
                          Inspect Concept <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>

          {/* Right Live Interactive Simulator Console */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="relative border border-white/10 rounded-3xl bg-black/60 backdrop-blur-3xl overflow-hidden p-4 sm:p-6 md:p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
              
              {/* Header simulator status strip */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                    {portfolioMode === "live" ? "PRODUCTION LIVE DEPLOYMENT" : "CONCEPT DIRECT PLAYGROUND"}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Live Preview Switchboard */}
              <div className="min-h-[380px] flex flex-col justify-between">
                <div>
                  
                  {/* LIVE SITES MODE VIEW */}
                  {portfolioMode === "live" && (() => {
                    const currentProj = LIVE_PROJECTS.find(p => p.id === selectedProject);
                    if (!currentProj) return null;
                    return (
                      <motion.div
                        key={`live-preview-${currentProj.id}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-medium text-white font-display">
                              {currentProj.title}
                            </h4>
                            <p className="text-xs text-white/40">Fully optimized responsive web presentation</p>
                          </div>
                          <Globe className="w-5 h-5 text-amber-400 animate-pulse" />
                        </div>

                        {/* Custom Mock Browser wrapper */}
                        <div className="border border-white/10 rounded-2xl bg-zinc-950 overflow-hidden shadow-2xl">
                          {/* Top Bar */}
                          <div className="bg-zinc-900/90 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 border-b border-b-white/5">
                            <div className="flex gap-1.5 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-red-500/60" />
                              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                              <span className="w-2 h-2 rounded-full bg-green-500/60" />
                            </div>
                            <div className="w-full bg-black/40 border border-white/5 rounded-md px-3 py-1 text-[9px] font-mono text-white/50 flex items-center justify-between min-w-0">
                              <span className="truncate max-w-[125px] min-[400px]:max-w-[200px] sm:max-w-none">{currentProj.url}</span>
                              <span className="text-[7px] bg-emerald-500/10 text-emerald-400 px-1 rounded uppercase tracking-wider font-mono hidden min-[380px]:inline">SSL Secure</span>
                            </div>
                          </div>

                          {/* Render actual live preview inside sandbox frame */}
                          <div className="relative bg-zinc-950 overflow-hidden">
                            <iframe 
                              src={currentProj.url} 
                              title={currentProj.title}
                              className={`w-full h-[320px] md:h-[400px] border-none bg-zinc-900 transition-all duration-500 ${
                                !isSandboxActive ? "pointer-events-none filter blur-[1px] opacity-40" : "pointer-events-auto"
                              }`}
                              sandbox="allow-scripts allow-same-origin allow-popups"
                              referrerPolicy="no-referrer"
                            />
                            
                            <AnimatePresence>
                              {!isSandboxActive && (
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20"
                                >
                                  <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-25 filter blur-xs" style={{ backgroundImage: `url(${currentProj.mockupImage})` }} />
                                  
                                  <motion.button
                                    onClick={() => setIsSandboxActive(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-black hover:bg-neutral-100 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold py-3 px-5 sm:py-3.5 sm:px-7 rounded-xl shadow-2xl flex items-center gap-2 cursor-pointer z-35"
                                  >
                                    <Eye className="w-4 h-4 text-black" /> Tap to Interact
                                  </motion.button>
                                  <p className="text-[10px] text-white/40 mt-3 font-mono tracking-widest uppercase">Touch Scroll Protection Active</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            
                            {/* Overlay message on mouse leave / subtle guide */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex items-center justify-between pointer-events-none z-10">
                              <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Live Embedded Portal Frame</span>
                              <span className="text-[10px] text-white/60 font-mono flex items-center gap-1">Interact Scroll Concept</span>
                            </div>
                          </div>
                        </div>

                        {/* Big Link CTA */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border border-white/5 bg-white/[0.02] rounded-xl p-4 sm:p-5 mt-6 gap-4">
                          <div className="text-left w-full sm:w-auto min-w-0">
                            <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase block">LAUNCH IN DECOUPLED WINDOW</span>
                            <span className="text-xs text-white/70 font-mono truncate max-w-[160px] min-[380px]:max-w-[220px] sm:max-w-xs md:max-w-md block">{currentProj.url}</span>
                          </div>
                          <motion.a
                            href={currentProj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black font-semibold uppercase text-[10px] tracking-[0.2em] py-3 px-6 rounded-lg font-mono flex items-center justify-center gap-1.5 select-none hover:bg-neutral-100 transition-colors shrink-0 font-bold w-full sm:w-auto text-center"
                          >
                            Launch App <ExternalLink className="w-3.5 h-3.5" />
                          </motion.a>
                        </div>
                      </motion.div>
                    );
                  })()}

                  {/* CONCEPT LAB MODE PREVIEWS */}
                  {portfolioMode === "concepts" && (
                    <>
                      {selectedProject === "aether-os" && (
                        <motion.div
                          key="aether-preview"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-white font-display">Aether Ambient Desktop Sandbox</h4>
                              <p className="text-xs text-white/40">Interact directly with gesture matrices and synthesizer frequencies</p>
                            </div>
                            <Terminal className="w-5 h-5 text-indigo-400" />
                          </div>

                          {/* Interactive Workspace Area */}
                          <div className="relative h-48 border border-white/5 rounded-2xl bg-white/[0.01] overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_24px]" />
                            
                            {/* Interactive Spatial Grid visualization */}
                            <AnimatePresence>
                              {spatialGrid && (
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 0.25 }}
                                  exit={{ opacity: 0 }}
                                  className="absolute inset-0 bg-radial-gradient from-purple-500/10 via-transparent border border-purple-500/20 rounded-2xl m-4 pointer-events-none"
                                />
                              )}
                            </AnimatePresence>

                            {/* Interactive node dot responding to synthesizer tuning */}
                            <motion.div 
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: spatialGrid ? 360 : 0,
                                boxShadow: `0 0 40px rgba(129, 140, 248, ${audioFreq / 1000})`
                              }}
                              transition={{ repeat: Infinity, duration: 400 / audioFreq }}
                              onClick={() => setSpatialGrid(!spatialGrid)}
                              className="relative z-10 w-16 h-16 rounded-full border border-indigo-400 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 flex items-center justify-center cursor-pointer select-none"
                            >
                              <Cpu className="w-6 h-6 text-indigo-300" />
                            </motion.div>

                            {/* Coordinate indicator */}
                            <div className="absolute bottom-3 left-3 right-3 text-[8px] sm:text-[9px] font-mono text-white/30 truncate flex justify-between">
                              <span>COORDS: [X: 43.1, Y: 89.2]</span>
                              <span className="hidden min-[380px]:inline">MATRIX: ACTV</span>
                            </div>
                          </div>

                          {/* Interactive Controls */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                              <span className="text-[10px] font-mono text-indigo-300 block uppercase tracking-wider">Spatial Layer Grid</span>
                              <button 
                                onClick={() => setSpatialGrid(!spatialGrid)}
                                className={`w-full py-2 rounded-lg text-xs font-bold font-mono border transition-all ${
                                  spatialGrid 
                                    ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" 
                                    : "bg-black/40 text-white/40 border-white/5 hover:border-white/10"
                                }`}
                              >
                                {spatialGrid ? "DISABLE GRID GRAPH" : "ENABLE GRID GRAPH"}
                              </button>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                              <span className="text-[10px] font-mono text-purple-300 block uppercase tracking-wider">Frequency Tuning</span>
                              <div className="flex items-center justify-between gap-3">
                                <input 
                                  type="range" 
                                  min="200" 
                                  max="800" 
                                  value={audioFreq}
                                  onChange={(e) => setAudioFreq(Number(e.target.value))}
                                  className="w-full accent-purple-500 h-1 bg-white/10 rounded-lg cursor-pointer"
                                />
                                <span className="text-[10px] font-mono text-purple-400 font-bold shrink-0">{audioFreq}Hz</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedProject === "apex-defi" && (
                        <motion.div
                          key="apex-preview"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-white font-display">Apex Instant Swap Engine</h4>
                              <p className="text-xs text-white/40">Try our gas-optimized multi-hop liquidity router mock</p>
                            </div>
                            <Sparkles className="w-5 h-5 text-cyan-400" />
                          </div>

                          {/* Swap Interface Simulator */}
                          <div className="p-4 sm:p-5 border border-white/5 rounded-2xl bg-white/[0.01] space-y-4">
                            <div className="flex items-center justify-between gap-4">
                              <div className="space-y-1">
                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">You Sell</span>
                                <input 
                                  type="text" 
                                  value={swapAmount}
                                  onChange={(e) => setSwapAmount(e.target.value)}
                                  className="bg-transparent text-white text-2xl font-bold font-mono focus:outline-none w-24"
                                />
                              </div>
                              <div>
                                <select 
                                  value={swapToken}
                                  onChange={(e) => setSwapToken(e.target.value as "ETH" | "SOL")}
                                  className="bg-zinc-900 border border-white/10 text-white rounded-lg px-3 py-1.5 text-xs font-mono font-bold focus:outline-none"
                                >
                                  <option value="ETH">ETH</option>
                                  <option value="SOL">SOL</option>
                                </select>
                              </div>
                            </div>

                            {/* Liquid separator line with reverse arrow */}
                            <div className="flex items-center justify-center">
                              <div className="w-full h-[1px] bg-white/5" />
                              <button 
                                onClick={() => setSwapToken(swapToken === "ETH" ? "SOL" : "ETH")}
                                className="bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-full p-2 text-cyan-400 transition-all cursor-pointer inline-flex shrink-0 mx-2"
                              >
                                <RefreshCw className="w-3.5 h-3.5" />
                              </button>
                              <div className="w-full h-[1px] bg-white/5" />
                            </div>

                            {/* Calculated Receive */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="space-y-1 text-left">
                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">You Receive (Estimated)</span>
                                <div className="text-xl font-bold font-mono text-white/80">
                                  {swapToken === "ETH" 
                                    ? (parseFloat(swapAmount || "0") * 3500).toFixed(2) 
                                    : (parseFloat(swapAmount || "0") * 150).toFixed(2)
                                  } <span className="text-xs font-mono text-white/40">USDC</span>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/10 self-start sm:self-auto">
                                No Price Impact
                              </span>
                            </div>

                            {/* Run Transaction button */}
                            <button
                              onClick={handleSwap}
                              disabled={swapCompleted}
                              className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 border border-cyan-500/30 text-cyan-300 font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl transition-all inline-flex items-center justify-center gap-2"
                            >
                              {swapCompleted ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400 animate-scale" />
                                  TRANSACTION SUCCESSFUL
                                </>
                              ) : (
                                "EXECUTE SWAP ENGINE"
                              )}
                            </button>
                          </div>

                          {/* Transaction Log ticker */}
                          <div className="p-2.5 sm:p-3 border border-white/5 bg-black/40 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-center sm:text-left min-w-0">
                            <span className="text-[8px] sm:text-[9px] font-mono text-white/30 truncate">ROUTING STATUS: DIRECT ROUTE FOUND</span>
                            <span className="text-[8px] sm:text-[9px] font-mono text-teal-400 font-bold shrink-0">SAVED GAS AMOUNT: 0.0034 ETH</span>
                          </div>
                        </motion.div>
                      )}

                      {selectedProject === "kaizen-store" && (
                        <motion.div
                          key="kaizen-preview"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-white font-display">Kaizen Horizontal Lookbook Slider</h4>
                              <p className="text-xs text-white/40">Viewport transition sensory checkout demo tracker</p>
                            </div>
                            <ShoppingBag className="w-5 h-5 text-rose-400" />
                          </div>

                          {/* Lookbook interface */}
                          <div className="relative h-64 border border-white/5 rounded-2xl overflow-hidden group">
                            
                            {/* Large elegant Image block matching slider selection */}
                            <motion.img 
                              key={kaizenSlide}
                              initial={{ opacity: 0, scale: 1.05 }}
                              animate={{ opacity: 0.8, scale: 1 }}
                              transition={{ duration: 0.8 }}
                              src={kaizenImages[kaizenSlide]} 
                              alt="concept fashion model" 
                              className="absolute inset-0 w-full h-full object-cover grayscale brightness-90"
                            />

                            {/* Top-left elegant label */}
                            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/60 backdrop-blur-md border border-white/10 py-1 px-2 sm:py-1.5 sm:px-3 rounded-md">
                              <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-rose-300">COLLECTION CONCEPT V1 / LOOK_0{kaizenSlide + 1}</span>
                            </div>

                            {/* Big minimalist text */}
                            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white font-display font-medium text-lg sm:text-3xl tracking-tight select-none">
                              KAIZEN CLUB <span className="text-rose-400 text-sm">DESIGN DRAFT</span>
                            </div>

                            {/* Quick controls inside lookbook */}
                            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex gap-1 bg-black/65 backdrop-blur-md p-1 border border-white/10 rounded-full">
                              {kaizenImages.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setKaizenSlide(idx)}
                                  className={`w-5 h-5 rounded-full text-[9px] font-mono font-bold flex items-center justify-center transition-all ${
                                    kaizenSlide === idx 
                                      ? "bg-rose-400 text-black font-extrabold" 
                                      : "text-white/40 hover:text-white"
                                  }`}
                                >
                                  {idx + 1}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Boutique Info */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 border border-white/5 rounded-xl bg-white/[0.01]">
                              <span className="text-[10px] font-mono text-rose-300 block uppercase mb-1">INTERACTIVE CURSOR TYPE</span>
                              <span className="text-xs font-light text-white/50 leading-relaxed">Dynamic fluid magnetics with magnetic pull tracking in active view mode.</span>
                            </div>
                            <div className="p-4 border border-white/5 rounded-xl bg-white/[0.01]">
                              <span className="text-[10px] font-mono text-amber-300 block uppercase mb-1">SENSORY REACTION</span>
                              <span className="text-xs font-light text-white/50 leading-relaxed">Subtle haptic micro-vibrations and audio feedback tracks on page transition load.</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedProject === "lumina-heal" && (
                        <motion.div
                          key="lumina-preview"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-white font-display">Lumina Circadian Bioluminescence Tuning</h4>
                              <p className="text-xs text-white/40">Circadian rhythms slider concept aligning sleep state models</p>
                            </div>
                            <Activity className="w-5 h-5 text-emerald-400" />
                          </div>

                          {/* Circular or line visualizer simulating circadian mood lighting */}
                          <div 
                            className="relative h-48 border border-white/5 rounded-3xl overflow-hidden transition-all duration-700 flex items-center justify-center"
                            style={{
                              background: `radial-gradient(circle, rgba(16, 185, 129, ${luminaLight / 400}) 0%, rgba(0, 0, 0, 0.9) 80%)`
                            }}
                          >
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:10px_10px]" />
                            
                            <div className="text-center relative z-10 space-y-2 select-none px-4">
                              <div className="text-white/20 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">AMBIENT STATE</div>
                              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white tracking-widest">
                                {luminaLight > 75 ? "REM SLEEP WAVE" : luminaLight > 45 ? "DUSK GLOW" : "DEEP DELTA"}
                              </div>
                              <div className="text-emerald-400 text-[8px] sm:text-xs font-mono">
                                <span className="hidden min-[380px]:inline">LIGHT CONCENTRATION: </span>
                                <span className="min-[380px]:hidden">LUX: </span>
                                {luminaLight}% &middot; SYNC ACTIVE
                              </div>
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                            <div className="flex justify-between items-center text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
                              <span>Set Circadian Focus Limit</span>
                              <span>{luminaLight}% INTENSITY</span>
                            </div>
                            <input 
                              type="range" 
                              min="10" 
                              max="100" 
                              value={luminaLight}
                              onChange={(e) => setLuminaLight(Number(e.target.value))}
                              className="w-full accent-emerald-400 h-1 bg-white/10 rounded-lg cursor-pointer"
                            />
                            <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-white/30 uppercase tracking-wider">
                              <span>
                                <span className="hidden sm:inline">10% MINDSET (DELTA)</span>
                                <span className="sm:hidden">10% Delta</span>
                              </span>
                              <span>
                                <span className="hidden sm:inline">100% FOCUS (REM / SHIELD)</span>
                                <span className="sm:hidden">100% REM Focus</span>
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </>
                  )}

                </div>

                {/* Shared Project Stats Strip */}
                {(() => {
                  const currentProj = portfolioMode === "live" 
                    ? LIVE_PROJECTS.find(p => p.id === selectedProject)
                    : CONCEPT_PROJECTS.find(p => p.id === selectedProject);
                  if (!currentProj) return null;
                  return (
                    <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-2 sm:gap-4 text-left">
                      {currentProj.stats.map((stat, idx) => (
                        <div key={idx} className="space-y-1 min-w-0">
                          <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.05em] sm:tracking-[0.1em] text-white/30 block truncate" title={stat.label}>{stat.label}</span>
                          <span className={`text-xs sm:text-base font-semibold bg-gradient-to-r ${currentProj.accentColor} bg-clip-text text-transparent truncate block`}>
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                })()}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
