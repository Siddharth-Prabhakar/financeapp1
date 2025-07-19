import React from 'react';
import { motion } from 'framer-motion';
import { Home, TrendingUp, CreditCard, BarChart3, User, Plus } from 'lucide-react';

interface MobileNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'cards', label: 'Cards', icon: CreditCard },
  { id: 'add', label: 'Add', icon: Plus, isSpecial: true },
  { id: 'exchange', label: 'Exchange', icon: TrendingUp },
  { id: 'profile', label: 'Profile', icon: User },
];

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl border-t border-light-border dark:border-dark-border z-40 transition-colors duration-300"
    >
      {/* Safe area for iPhone */}
      <div className="pb-safe">
        <div className="flex items-center justify-around px-4 py-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center p-3 rounded-2xl transition-all ${
                tab.isSpecial
                  ? 'bg-lime-accent text-light-base dark:text-dark-base shadow-glow'
                  : activeTab === tab.id
                  ? 'text-lime-accent'
                  : 'text-light-text-secondary dark:text-dark-text-secondary'
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Active indicator */}
              {activeTab === tab.id && !tab.isSpecial && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-1 w-1 h-1 bg-lime-accent rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Icon with glow effect for special button */}
              <div className={`relative ${tab.isSpecial ? 'mb-1' : 'mb-1'}`}>
                <tab.icon className={`w-6 h-6 ${tab.isSpecial ? 'drop-shadow-glow' : ''}`} />
                {tab.isSpecial && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-lime-accent/20 rounded-full blur-sm"
                  />
                )}
              </div>
              
              {/* Label */}
              <span className={`text-xs font-medium ${
                tab.isSpecial ? 'text-light-base dark:text-dark-base' : ''
              }`}>
                {tab.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};