import React from 'react';
import { motion } from 'framer-motion';
import { Bell, MessageCircle, Wifi, Battery, Signal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../contexts/AuthContext';

interface MobileTopBarProps {
  onChatToggle: () => void;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({ onChatToggle }) => {
  const { user } = useAuth();
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl border-b border-light-border dark:border-dark-border transition-colors duration-300"
    >
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-xs">
        <div className="flex items-center space-x-1">
          <span className="font-medium text-light-text dark:text-dark-text">{currentTime}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Signal className="w-3 h-3 text-light-text dark:text-dark-text" />
          <Wifi className="w-3 h-3 text-light-text dark:text-dark-text" />
          <Battery className="w-4 h-3 text-light-text dark:text-dark-text" />
          <span className="text-light-text dark:text-dark-text">100%</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: User Info */}
        <div className="flex items-center space-x-3">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-lime-accent rounded-full flex items-center justify-center shadow-glow"
          >
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-light-base dark:text-dark-base font-bold text-sm">
                {user?.displayName?.charAt(0) || 'U'}
              </span>
            )}
          </motion.div>
          <div>
            <p className="text-sm font-medium text-light-text dark:text-dark-text">
              Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'}
            </p>
            <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
              {user?.displayName || 'Welcome back'}
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onChatToggle}
            className="relative p-2 bg-light-glass dark:bg-dark-glass rounded-full hover:bg-lime-accent/10 transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5 text-light-text dark:text-dark-text" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-lime-accent rounded-full"
            />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative p-2 bg-light-glass dark:bg-dark-glass rounded-full hover:bg-lime-accent/10 transition-colors duration-300"
          >
            <Bell className="w-5 h-5 text-light-text dark:text-dark-text" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};