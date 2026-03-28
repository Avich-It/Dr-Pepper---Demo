import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wand2, Loader2, GlassWater } from 'lucide-react';
import Markdown from 'react-markdown';
import { generateDirtySodaRecipe } from '@/src/services/gemini';

export const DirtySodaAI = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.trim()) return;
    
    setLoading(true);
    const result = await generateDirtySodaRecipe(ingredients);
    setRecipe(result);
    setLoading(false);
  };

  return (
    <section id="dirty-soda" className="py-24 px-6 bg-brand-burgundy text-white relative overflow-hidden">
      {/* Background bubbles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5 pointer-events-none"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold tracking-widest uppercase">
            <GlassWater className="w-4 h-4" /> Dirty Soda AI
          </div>
          <h2 className="text-6xl leading-tight">Mix It Up With <br /><span className="text-white/60 italic">Liquid Magic</span></h2>
          <p className="text-xl opacity-80">
            Tell us what's in your fridge, and our AI mixologist will craft the perfect Dr Pepper "Dirty Soda" recipe just for you.
          </p>
          
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="relative">
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="e.g. Lime, coconut cream, vanilla syrup, cherries..."
                className="w-full bg-white/10 border border-white/20 rounded-3xl p-6 text-lg focus:outline-none focus:ring-2 focus:ring-white/40 min-h-[120px] placeholder:text-white/30"
              />
            </div>
            <button
              disabled={loading}
              className="w-full bg-white text-brand-burgundy py-5 rounded-full font-bold text-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Wand2 className="w-6 h-6" />}
              Generate My Recipe
            </button>
          </form>
        </div>

        <div className="relative">
          <div className="glass-card rounded-[40px] p-10 min-h-[400px] flex flex-col justify-center border-white/10">
            {recipe ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert max-w-none"
              >
                <div className="markdown-body">
                  <Markdown>{recipe}</Markdown>
                </div>
              </motion.div>
            ) : (
              <div className="text-center space-y-4 opacity-40">
                <GlassWater className="w-20 h-20 mx-auto" />
                <p className="text-xl italic">Your custom creation will appear here...</p>
              </div>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
};
