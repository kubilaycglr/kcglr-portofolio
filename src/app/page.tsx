"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { personalInfo, techStack, projects, experience } from "../data/portfolio";
import { ArrowUpRight, Mail, User, X } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

// Yeni Gemini / Siri Aura Arka Planı
const GeminiAuraBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-50">
    <motion.div
      animate={{ x: [0, 60, -40, 0], y: [0, -50, 40, 0], scale: [1, 1.1, 0.9, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] bg-[#4285F4]/30 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ x: [0, -50, 50, 0], y: [0, 60, -40, 0], scale: [1, 0.9, 1.1, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[15%] right-[10%] w-[50vw] h-[50vw] bg-[#9b72cb]/20 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ x: [-40, 40, -40], y: [40, -40, 40] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] bg-[#ea4335]/10 rounded-full blur-[100px]"
    />
    {/* Parlaklığı kırmak ve yumuşatmak için ince karanlık tül */}
    <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[2px]" />
  </div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.92]);
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <main className="bg-[#050505] text-[#ededed] font-sans selection:bg-zinc-800 selection:text-white relative min-h-screen">
      
      {/* GEMINI AURA ANİMASYONU */}
      <GeminiAuraBackground />

      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={() => setIsLoginOpen(true)}
          className="p-3 rounded-full bg-zinc-900/50 backdrop-blur border border-white/10 hover:bg-white/10 hover:text-white transition duration-300 text-zinc-400"
          title="Giriş Yap"
        >
          <User className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isLoginOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl p-8 overflow-hidden"
            >
              <button 
                onClick={() => setIsLoginOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                   <User className="w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="text-xl font-medium text-white mb-1">Sistem Erişimi</h3>
                <p className="text-sm text-zinc-400">VoidChat Admin Paneli</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setIsLoginOpen(false); }} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Kullanıcı Adı</label>
                  <input 
                    type="text" 
                    placeholder="admin" 
                    className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Şifre</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-black font-medium text-sm rounded-xl py-3 hover:bg-zinc-200 transition mt-2"
                >
                  Giriş Yap
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white to-zinc-600 bg-clip-text text-transparent pb-4">
            {personalInfo.name}
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
             <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="p-3.5 rounded-full bg-zinc-900/80 border border-white/10 hover:bg-white hover:text-black transition duration-300">
               <GithubIcon className="w-5 h-5" />
             </a>
             <a href={`mailto:${personalInfo.email}`} className="px-5 py-3.5 rounded-full bg-zinc-900/80 border border-white/10 hover:bg-white hover:text-black transition duration-300 flex items-center gap-2.5">
               <Mail className="w-4 h-4" />
               <span className="font-medium tracking-wide text-sm">{personalInfo.email}</span>
             </a>
          </div>
        </motion.div>
      </motion.section>

      <section className="relative z-20 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/5 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pb-24">
        <div className="max-w-3xl mx-auto px-6 pt-24 space-y-32">

          <div className="space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              Öne Çıkan Projeler
            </motion.h2>
            
            <div className="grid gap-6">
              {projects.map((proj, idx) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-white">{proj.title}</h3>
                    <div className="flex gap-3">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition"><GithubIcon className="w-5 h-5" /></a>
                      )}
                      {proj.live && (
                        <a href={proj.live} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition"><ArrowUpRight className="w-5 h-5" /></a>
                      )}
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-6">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-black/50 border border-white/10 text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              Uzmanlık Alanları
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {techStack.map((group, idx) => (
                <motion.div 
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span key={item} className="px-4 py-2 rounded-xl bg-zinc-900/50 border border-white/5 text-sm text-zinc-300 hover:text-white transition">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}