import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowDown, Droplets } from 'lucide-react';
import { getAIGreeting } from '@/src/services/gemini';

export const Hero = () => {
  const [greeting, setGreeting] = useState('');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  useEffect(() => {
    const fetchGreeting = async () => {
      const time = new Date().getHours();
      const timeStr = time < 12 ? 'morning' : time < 18 ? 'afternoon' : 'evening';
      // Mock weather for demo
      const weather = "sunny 75°F";
      const msg = await getAIGreeting(timeStr, weather);
      setGreeting(msg);
    };
    fetchGreeting();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-burgundy/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-burgundy/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-sm font-bold tracking-widest uppercase"
          >
            <Sparkles className="w-4 h-4" /> {greeting || "Loading your vibe..."}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl leading-[0.9] text-glow"
          >
            23 FLAVORS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-burgundy to-brand-burgundy/40">ONE YOU.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl opacity-70 max-w-xl mx-auto lg:mx-0"
          >
            Experience the liquid newstalgia of 1885, reimagined for 2026. 
            Bold, spicy, and uniquely yours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <button className="bg-brand-burgundy text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-burgundy/20">
              Find Your Flavor
            </button>
            <button className="glass-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-burgundy/5 transition-all">
              Explore Recipes
            </button>
          </motion.div>
        </div>

        <div className="relative flex justify-center items-center">
          <motion.div
            style={{ y: y1, rotate }}
            className="relative z-20"
          >
            {/* Interactive 3D Can Mockup */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 20, rotateX: -10 }}
              className="anti-gravity cursor-pointer perspective-1000"
            >
              <div className="relative w-64 h-[500px] md:w-80 md:h-[600px] bg-brand-burgundy rounded-[60px] shadow-[0_50px_100px_rgba(113,31,37,0.4)] overflow-hidden border-4 border-white/20">
                {/* Can Texture/Label Mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="text-6xl font-black italic mb-4">Dr<br />Pepper</div>
                  <div className="w-full h-1 bg-white/40 my-4" />
                  <div className="text-xl font-bold tracking-widest uppercase opacity-80">Est. 1885</div>
                  <div className="absolute bottom-12 text-4xl font-black opacity-20">23 FLAVORS</div>
                </div>
                {/* Condensation Effect */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white/20 rounded-full blur-[1px]"
                    style={{
                      width: Math.random() * 6 + 2,
                      height: Math.random() * 12 + 4,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Floating Accents */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-24 h-24 glass-card rounded-3xl flex items-center justify-center"
          >
            <Droplets className="w-10 h-10 text-brand-burgundy" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 w-32 h-32 glass-card rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-12 h-12 text-brand-burgundy" />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};
