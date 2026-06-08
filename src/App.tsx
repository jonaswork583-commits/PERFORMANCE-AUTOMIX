/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  Zap,
  Instagram,
  Globe
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { PERFORMANCE_DATA } from './constants';

// --- Slide Transitional Wrapper ---

const SlideWrapper = ({ children, slideKey }: { children: React.ReactNode; slideKey: number }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={slideKey}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-start overflow-y-auto px-4 md:px-6 lg:px-8 py-3 scrollbar-thin scrollbar-thumb-brand-cyan/20 scrollbar-track-transparent"
    >
      {/* 
        Zero-collapsible my-auto child:
        Automatically centers content vertically when there is free space,
        and gracefully defaults to aligning to the top with a normal flow
        when the content height is taller than the viewport. This completely
        prevents any vertical clipping at the top.
      */}
      <div className="w-full max-w-6xl my-auto py-3 sm:py-4 pb-6 flex flex-col items-center justify-center shrink-0">
        {children}
      </div>
    </motion.div>
  </AnimatePresence>
);

// --- Main App Component ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6; // Capa (0) + 5 Content Slides (1 to 5)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-brand-black flex flex-col relative text-white select-none">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Header */}
      <header className="py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter">AEG<span className="text-brand-cyan">MEDIA</span></span>
            <span className="text-[9px] text-white/40 tracking-[0.2em] font-bold uppercase -mt-1">Relatórios Estratégicos</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">AUTOMIX</p>
          <div className="w-full h-[1px] bg-brand-cyan/30 mt-1" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center">
        <SlideWrapper slideKey={currentSlide}>
          {currentSlide === 0 && (
            <div className="text-center space-y-6 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block"
              >
                <h2 className="text-brand-cyan text-sm sm:text-base font-bold tracking-[0.6em] uppercase mb-4 text-center">Apresentação de Performance</h2>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-4 uppercase text-center">
                  RESULTADOS <br />
                  <span className="text-brand-cyan cyan-glow">AUTOMIX</span>
                </h1>
                <div className="h-1.5 w-24 bg-brand-cyan mx-auto mt-6" />
              </motion.div>
              
              <div className="pt-8 text-white/40 font-mono tracking-[0.3em] text-[10px] uppercase">
                Análise de Tráfego • {PERFORMANCE_DATA.period}
              </div>
            </div>
          )}

          {currentSlide > 0 && currentSlide <= 5 && (() => {
            const slide = PERFORMANCE_DATA.slides[currentSlide - 1];
            if (!slide) return null;

            // Determine appropriate icon base on results
            let ResultIcon = Target;
            if (slide.resultLabel.includes("Alcançadas")) {
              ResultIcon = Users;
            } else if (slide.resultLabel.includes("Visitas")) {
              ResultIcon = Instagram;
            }

            // High-contrast semantic badges
            let statusBadgeColor = "bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30";
            let valueColor = "text-brand-cyan cyan-glow";
            let cardBorder = "border-white/5";

            if (slide.status === "Alta Performance" || slide.status === "Máxima Eficiência" || slide.status === "Excelente Alcance") {
              statusBadgeColor = "bg-emerald-400/20 text-emerald-300 border-emerald-400/30";
              valueColor = "text-emerald-300";
              cardBorder = "border-emerald-400/10";
            } else if (slide.status === "Atenção ao Custo") {
              statusBadgeColor = "bg-amber-400/20 text-amber-300 border-amber-400/30";
              valueColor = "text-amber-300";
              cardBorder = "border-amber-400/10";
            }

            return (
              <div className="w-full max-w-6xl space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 px-2 sm:px-4">
                {/* Title block */}
                <div className="flex flex-col items-center gap-0.5 text-center">
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.3em] text-brand-cyan uppercase">
                    SLIDE {currentSlide} DE 5
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black italic uppercase tracking-tighter mt-0.5 leading-tight py-0.5">
                    {slide.title}
                  </h2>
                  <div className="h-[2px] w-12 bg-brand-cyan/40 mt-1" />
                  <p className="text-white/40 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold mt-1.5">
                    {slide.subtitle} • {slide.platform}
                  </p>
                </div>

                {/* Metric grid of 3 impact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  {/* Card 1: Investment */}
                  <div className="glass-card p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-white/5 bg-white/[0.01] flex items-center justify-between shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-brand-cyan/30 transition-all duration-300">
                    <div className="space-y-1">
                      <p className="text-white/40 text-[7px] sm:text-[8px] font-mono uppercase font-black tracking-widest leading-none">Investimento</p>
                      <p className="text-xl sm:text-2xl md:text-3xl font-black italic text-white leading-none mt-1">
                        R$ {slide.invested.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      <p className="text-white/20 text-[8px] sm:text-[9px] font-medium font-mono mt-1">Verba Utilizada na Campanha</p>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-full bg-white/5 text-brand-cyan opacity-80 shadow-inner">
                      <DollarSign size={20} />
                    </div>
                  </div>

                  {/* Card 2: Results */}
                  <div className={cn(
                    "glass-card p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.01] flex items-center justify-between shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-brand-cyan/30 transition-all duration-300",
                    cardBorder
                  )}>
                    <div className="space-y-1">
                      <p className="text-white/40 text-[7px] sm:text-[8px] font-mono uppercase font-black tracking-widest leading-none">{slide.resultLabel}</p>
                      <p className={cn("text-xl sm:text-2xl md:text-3xl font-black italic leading-none mt-1", valueColor)}>
                        {slide.result.toLocaleString("pt-BR")} <span className="text-xs font-normal text-white/45">{slide.resultLabel.includes("Leads") ? "Leads" : slide.resultLabel.includes("Visitas") ? "Visitas" : "Pessoas"}</span>
                      </p>
                      <p className="text-white/20 text-[8px] sm:text-[9px] font-medium font-mono mt-1">Volume de Retorno</p>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-full bg-white/5 text-brand-cyan animate-pulse-slow">
                      <ResultIcon size={20} className="cyan-glow" />
                    </div>
                  </div>

                  {/* Card 3: Cost per result */}
                  <div className="glass-card p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-white/5 bg-white/[0.01] flex items-center justify-between shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-brand-cyan/30 transition-all duration-300">
                    <div className="space-y-1">
                      <p className="text-white/40 text-[7px] sm:text-[8px] font-mono uppercase font-black tracking-widest leading-none">Custo Unitário</p>
                      <p className="text-xl sm:text-2xl md:text-3xl font-black italic text-white leading-none mt-1">
                        R$ {slide.costPerResult.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      <p className="text-white/20 text-[8px] sm:text-[9px] font-medium font-mono mt-1">{slide.costPerResultLabel}</p>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-full bg-white/5 text-brand-cyan opacity-80">
                      <TrendingUp size={20} />
                    </div>
                  </div>
                </div>

                {/* Dual-column bento information block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                  {/* Detailed Description with progress meter */}
                  <div className="lg:col-span-7 glass-card p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-white/5 flex flex-col justify-between space-y-2.5 sm:space-y-3 md:space-y-4">
                    <div>
                      <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                        <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/60">
                          Mapeamento Estratégico
                        </h3>
                        <span className={cn("text-[8px] sm:text-[9px] font-mono font-bold px-2 sm:px-2.5 py-0.5 rounded-full border", statusBadgeColor)}>
                          {slide.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed pt-2.5 sm:pt-4 font-medium">
                        {slide.description}
                      </p>
                    </div>

                    {/* Funnel relative strength bar */}
                    <div className="pt-2.5 sm:pt-4 border-t border-white/5 space-y-2 sm:space-y-3">
                      <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                        <span>Eficiência Geral</span>
                        <span className={valueColor}>{slide.efficiency}</span>
                      </div>
                      <div className="h-1.5 sm:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: slide.id === 2 ? "50%" : slide.id === 4 ? "75%" : "95%" }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={cn(
                            "h-full rounded-full",
                            slide.id === 2 ? "bg-amber-400" : "bg-brand-cyan"
                          )}
                        />
                      </div>
                      <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-white/30">
                        <span>MONITORADO INTEGRALMENTE</span>
                        <span>AGENCIA AEG</span>
                      </div>
                    </div>
                  </div>

                  {/* Tactical recommendations column */}
                  <div className="lg:col-span-5 glass-card p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-white/5 flex flex-col justify-between space-y-2.5 sm:space-y-3 md:space-y-4">
                    <div>
                      <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan font-mono mb-1">Análise de Canal</h4>
                      <h3 className="text-lg sm:text-xl font-black italic uppercase leading-tight text-white">Próximo Direcionamento</h3>
                      <div className="h-0.5 w-8 bg-brand-cyan/60 mt-1" />
                      
                      <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                        {slide.insights.map((insight, idx) => (
                          <div key={idx} className="space-y-0.5">
                            <p className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wide italic leading-none">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> 
                              Diagnóstico {idx + 1}
                            </p>
                            <p className="text-[10px] sm:text-[11px] text-white/50 leading-relaxed pr-2">
                              {insight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-3 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] text-white/30 font-bold uppercase tracking-wider font-mono">
                      <span>Período Ativo</span>
                      <span className="text-brand-cyan font-black italic text-xs">Dia 1 ao Dia 7</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </SlideWrapper>
      </main>

      {/* Footer / Controls */}
      <footer className="py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 flex justify-between items-center z-50 shrink-0">
        <div className="flex gap-2 sm:gap-4">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1 md:h-1.5 rounded-full transition-all duration-500",
                currentSlide === i ? "w-8 sm:w-16 bg-brand-cyan" : "w-2 sm:w-4 bg-white/10"
              )} 
            />
          ))}
        </div>

        <div className="flex gap-2 sm:gap-4">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full glass-card flex items-center justify-center text-white hover:text-brand-cyan hover:border-brand-cyan/40 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="px-5 sm:px-7 md:px-9 h-10 sm:h-12 md:h-14 lg:h-16 rounded-full bg-white text-brand-black font-black italic tracking-widest flex items-center gap-2 hover:bg-brand-cyan transition-all active:scale-95 shadow-xl cursor-pointer"
          >
             <span className="text-xs sm:text-sm">{currentSlide === totalSlides - 1 ? "REINICIAR" : "PRÓXIMO"}</span> 
             <ChevronRight size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
