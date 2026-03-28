import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-card rounded-full px-8 py-4 flex items-center justify-between border-white/10">
        <div className="flex items-center gap-12">
          <a href="#" className="text-2xl font-black italic tracking-tighter text-brand-burgundy">
            Dr Pepper
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest opacity-70">
            <a href="#flavor-match" className="hover:opacity-100 transition-opacity">Flavors</a>
            <a href="#dirty-soda" className="hover:opacity-100 transition-opacity">Recipes</a>
            <a href="#where-to-buy" className="hover:opacity-100 transition-opacity">Find Us</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <button className="p-2 hover:bg-brand-burgundy/5 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-brand-burgundy/5 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
          <button className="relative p-2 bg-brand-burgundy text-white rounded-full hover:scale-110 transition-transform">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-brand-burgundy text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
