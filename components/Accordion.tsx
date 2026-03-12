'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
          >
            <span className="font-bold text-slate-900">{item.question}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              className="text-indigo-800"
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
