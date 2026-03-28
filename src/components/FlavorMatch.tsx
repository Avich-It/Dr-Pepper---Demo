import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Droplets, Zap, ChevronRight, RefreshCw } from 'lucide-react';
import { cn } from '@/src/lib/utils';

type QuizState = 'start' | 'q1' | 'q2' | 'q3' | 'result';

export const FlavorMatch = () => {
  const [state, setState] = useState<QuizState>('start');
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = {
    q1: {
      text: "What's your current vibe?",
      options: [
        { label: 'Classic & Timeless', value: 'original', icon: <Sparkles className="w-5 h-5" /> },
        { label: 'Modern & Sharp', value: 'zero', icon: <Zap className="w-5 h-5" /> },
      ]
    },
    q2: {
      text: "How do you like your sweetness?",
      options: [
        { label: 'Bold & Spicy', value: 'bold', icon: <Droplets className="w-5 h-5" /> },
        { label: 'Smooth & Creamy', value: 'smooth', icon: <Sparkles className="w-5 h-5" /> },
      ]
    },
    q3: {
      text: "Pick an afternoon activity:",
      options: [
        { label: 'Gaming Marathon', value: 'intense', icon: <Zap className="w-5 h-5" /> },
        { label: 'Sunset Chill', value: 'relaxed', icon: <Droplets className="w-5 h-5" /> },
      ]
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers([...answers, value]);
    if (state === 'q1') setState('q2');
    else if (state === 'q2') setState('q3');
    else setState('result');
  };

  const reset = () => {
    setState('start');
    setAnswers([]);
  };

  return (
    <section id="flavor-match" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto glass-dark rounded-[40px] p-12 relative z-10">
        <AnimatePresence mode="wait">
          {state === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-5xl mb-6">Find Your Flavor</h2>
              <p className="text-xl mb-8 opacity-80">23 flavors, but which one matches your soul today?</p>
              <button
                onClick={() => setState('q1')}
                className="bg-brand-burgundy text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center mx-auto gap-2"
              >
                Start the Quiz <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {state.startsWith('q') && (
            <motion.div
              key={state}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold uppercase tracking-widest opacity-50">Question {state.slice(1)} of 3</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={cn("h-1 w-8 rounded-full", parseInt(state.slice(1)) >= i ? "bg-brand-burgundy" : "bg-brand-burgundy/20")} />
                  ))}
                </div>
              </div>
              <h3 className="text-4xl">{questions[state as keyof typeof questions].text}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[state as keyof typeof questions].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="flex items-center gap-4 p-6 rounded-2xl glass-card hover:bg-brand-burgundy hover:text-white transition-all text-left group"
                  >
                    <div className="p-3 rounded-xl bg-brand-burgundy/10 group-hover:bg-white/20 transition-colors">
                      {opt.icon}
                    </div>
                    <span className="text-xl font-semibold">{opt.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {state === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="inline-block p-4 rounded-full bg-brand-burgundy/10 mb-4">
                <Sparkles className="w-12 h-12 text-brand-burgundy" />
              </div>
              <h2 className="text-5xl">Your Match: Dr Pepper Zero Sugar</h2>
              <p className="text-xl opacity-80 max-w-xl mx-auto">
                You're sharp, modern, and appreciate the bold things in life without the extra weight. 
                Perfect for your next intense session.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-brand-burgundy text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                  Shop Now
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg border-2 border-brand-burgundy/20 hover:bg-brand-burgundy/5 transition-all"
                >
                  <RefreshCw className="w-5 h-5" /> Retake
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
