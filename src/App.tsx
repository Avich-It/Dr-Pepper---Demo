import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlavorMatch } from './components/FlavorMatch';
import { DirtySodaAI } from './components/DirtySodaAI';
import { StoreLocator } from './components/StoreLocator';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-burgundy selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Product Explorer Section */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4">
                <h2 className="text-6xl md:text-8xl leading-none">The 2026<br /><span className="text-brand-burgundy/30 italic">Lineup</span></h2>
                <p className="text-xl opacity-60 max-w-md">Every flavor tells a story. Find yours in our latest collection.</p>
              </div>
              <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-brand-burgundy pb-1 hover:opacity-60 transition-opacity">
                View All Flavors
              </button>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
              {[
                { name: 'Original', color: 'bg-brand-burgundy', img: 'classic' },
                { name: 'Zero Sugar', color: 'bg-black', img: 'zero' },
                { name: 'Cream Soda', color: 'bg-[#F3E5AB]', img: 'cream' },
                { name: 'Cherry', color: 'bg-[#8B0000]', img: 'cherry' },
                { name: 'Strawberries & Cream', color: 'bg-[#FFC0CB]', img: 'strawberry' },
              ].map((flavor, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -20 }}
                  className="min-w-[300px] md:min-w-[400px] snap-center"
                >
                  <div className="glass-card rounded-[40px] p-8 h-[500px] flex flex-col justify-between border-brand-burgundy/5 group cursor-pointer">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-widest opacity-40">Flavor {i + 1}</span>
                      <h3 className="text-4xl">{flavor.name}</h3>
                    </div>
                    
                    <div className="relative h-64 flex items-center justify-center">
                      <div className={`absolute inset-0 ${flavor.color} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity`} />
                      <img 
                        src={`https://picsum.photos/seed/drpepper-${flavor.img}/300/500`} 
                        alt={flavor.name}
                        className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <button className="w-full py-4 rounded-2xl bg-brand-burgundy/5 group-hover:bg-brand-burgundy group-hover:text-white transition-all font-bold">
                      Quick Sip
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FlavorMatch />
        
        <DirtySodaAI />
        
        <StoreLocator />
      </main>

      <footer className="bg-brand-white py-24 px-6 border-t border-brand-burgundy/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl">Dr Pepper</h2>
            <p className="opacity-60">Uniquely crafted since 1885. 23 flavors in every drop.</p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-brand-burgundy hover:text-white transition-all cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
              ))}
            </div>
          </div>
          
          {[
            { title: 'Shop', links: ['All Flavors', 'Merchandise', 'Gift Cards', 'Subscriptions'] },
            { title: 'Company', links: ['Our Story', 'Sustainability', 'Careers', 'Press'] },
            { title: 'Support', links: ['Contact Us', 'FAQ', 'Shipping', 'Returns'] },
          ].map((col, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest opacity-40">{col.title}</h4>
              <ul className="space-y-4 font-bold">
                {col.links.map(link => (
                  <li key={link}><a href="#" className="hover:text-brand-burgundy/60 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brand-burgundy/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 Dr Pepper/Seven Up, Inc.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
