import { useState } from "react";
import { Mail, Phone, Menu } from "lucide-react";
import Instagram from "lucide-react/dist/esm/icons/instagram";

export default function App() {
  const [filter, setFilter] = useState("All");
  const [activeMedia, setActiveMedia] = useState(null);

  const projects = [
    {  category: "Video Editing", type: "video", img: "/images/kochi.png", video: "/videos/kochi.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/pcb.png", video: "/videos/pcb.mp4" },
    { category: "Video Editing", type: "video", img: "/images/ifthar.png", video: "/videos/ifthar.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/wagamon.png", video: "/videos/wagamon.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/memories.png", video: "/videos/memories.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/thattekad.png", video: "/videos/thattekad.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/calicut.png", video: "/videos/calicut.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/illikkalkallu.png", video: "/videos/illikkalkallu.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/industrialvisit.png", video: "/videos/industrialvisit.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/short-video.png", video: "/videos/short-video.mp4" },
    {  category: "Video Editing", type: "video", img: "/images/model-shoot.png", video: "/videos/model-shoot.mp4" },

    {  category: "Graphic Design", type: "image", img: "/images/biennae 2026.jpg" },
    {  category: "Graphic Design", type: "image", img: "/images/PORCHE gt3 rs.jpg" },
    {  category: "Graphic Design", type: "image", img: "/images/r1.png" },
    {  category: "Graphic Design", type: "image", img: "/images/apple.jpg" },
  ];

  const categories = ["All", "Video Editing", "Graphic Design"];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-slate-950 text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-12xl mx-auto flex justify-between items-center px-6 py-4 ">
          <div className="font-bold text-lg">A</div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Menu className="md:hidden" />
        </div>
      </header>

      {/* HERO */}
      <section className="h-[85vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Anugrah M Suku
        </h1>
        <p className="text-xl text-slate-300 mb-6">
          Cinematic Video Editor • Videographer • Graphic Designer
        </p>

        <div className="flex gap-4">
          <a href="#work">
            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:scale-105 transition">
              View Work
            </button>
          </a>
          <a href="#contact">
            <button className="px-6 py-3 rounded-2xl border border-indigo-400 bg-indigo-500/20 hover:bg-indigo-500/40 transition">
              Contact
            </button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Video Editing", desc: "YouTube, reels, ads, cinematic films" },
            { title: "Videography", desc: "Events, weddings, brand shoots" },
            { title: "Graphic Design", desc: "Posters, thumbnails, social creatives" },
          ].map((s, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* FILTER */}
          <div className="flex gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-2xl border transition ${
                  filter === cat
                    ? "bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/30"
                    : "bg-indigo-500/20 border-indigo-400 hover:bg-indigo-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <div
                key={i}
                onClick={() => setActiveMedia(p)}
                className="group relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-indigo-500/30"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[260px] object-cover"
                />

                {/* PLAY ICON ONLY FOR VIDEOS */}
                {p.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition">
                    <div className="opacity-0 group-hover:opacity-100 transition">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                        <div className="ml-1 w-0 h-0 border-l-[14px] border-l-slate-900 border-y-[10px] border-y-transparent" />
                      </div>
                    </div>
                  </div>
                )}

                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center bg-slate-900">
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

        <div className="flex flex-col gap-3 items-center text-slate-300">
          <div className="flex gap-2 items-center"><Mail size={18}/>anugrahms46@gmail.com</div>
          <div className="flex gap-2 items-center"><Phone size={18}/> +91 8590756177</div>
          <div className="flex gap-2 items-center"><Instagram size={18}/> @__.t.r.o.n.__</div>
        </div>
      </section>

      {/* MEDIA MODAL */}
      {activeMedia && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setActiveMedia(null)}
        >
          {activeMedia.type === "video" ? (
            <video
              src={activeMedia.video}
              controls
              autoPlay
              className="max-h-[85vh] rounded-xl"
            />
          ) : (
            <img
              src={activeMedia.img}
              alt={activeMedia.title}
              className="max-h-[85vh] rounded-xl"
            />
          )}
        </div>
      )}

      <footer className="text-center py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Anugrah M Suku
      </footer>
    </div>
  );
} 