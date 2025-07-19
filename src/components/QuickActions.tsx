import React from 'react';
import { motion } from 'framer-motion';
import { Send, Download, CreditCard, Smartphone, QrCode, Users } from 'lucide-react';

const quickActions = [
  { id: 'send', label: 'Send', icon: Send, color: 'bg-blue-500' },
  { id: 'receive', label: 'Receive', icon: Download, color: 'bg-lime-accent' },
  { id: 'cards', label: 'Cards', icon: CreditCard, color: 'bg-purple-500' },
  { id: 'topup', label: 'Top Up', icon: Smartphone, color: 'bg-orange-500' },
  { id: 'qr', label: 'QR Pay', icon: QrCode, color: 'bg-pink-500' },
  { id: 'split', label: 'Split Bill', icon: Users, color: 'bg-indigo-500' },
];

export const QuickActions: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
    >
      <h3 className="text-lg font-bold text-light-text dark:text-dark-text font-editorial mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-light-glass dark:bg-dark-glass hover:bg-light-border dark:hover:bg-dark-border transition-all duration-300"
          >
            <div className={`p-3 rounded-full ${action.color} shadow-lg`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-light-text dark:text-dark-text">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};