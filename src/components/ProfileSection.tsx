import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Bell, Lock, HelpCircle, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const stats = [
  { label: 'Total Transactions', value: '1,247' },
  { label: 'Countries Visited', value: '23' },
  { label: 'Member Since', value: '2021' },
];

const settingsSections = [
  {
    title: 'Security',
    description: 'Manage your security settings and two-factor authentication',
    icon: Shield,
    color: 'bg-green-500'
  },
  {
    title: 'Payment Methods',
    description: 'Add or remove payment methods and cards',
    icon: CreditCard,
    color: 'bg-blue-500'
  },
  {
    title: 'Notifications',
    description: 'Control your notification preferences',
    icon: Bell,
    color: 'bg-purple-500'
  },
  {
    title: 'Privacy',
    description: 'Manage your privacy and data settings',
    icon: Lock,
    color: 'bg-red-500'
  },
  {
    title: 'Help & Support',
    description: 'Get help and contact customer support',
    icon: HelpCircle,
    color: 'bg-orange-500'
  },
  {
    title: 'App Settings',
    description: 'Customize your app experience',
    icon: Settings,
    color: 'bg-indigo-500'
  },
];

export const ProfileSection: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">Profile</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Account settings</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSignOut}
          className="px-3 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-colors text-sm"
        >
          Sign Out
        </motion.button>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-br from-light-surface to-light-glass dark:from-dark-surface dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
      >
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-16 h-16 bg-lime-accent rounded-full flex items-center justify-center shadow-glow">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-light-base dark:text-dark-base font-bold text-xl">
                {user?.displayName?.charAt(0) || 'U'}
              </span>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">
              {user?.displayName || 'User'}
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">{user?.email}</p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-2 h-2 bg-lime-accent rounded-full"></div>
              <span className="text-sm text-lime-accent">Premium Member</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center p-3 bg-light-glass dark:bg-dark-glass rounded-xl transition-colors duration-300"
            >
              <p className="text-lg font-bold text-lime-accent font-editorial">{stat.value}</p>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Edit Profile Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-lime-accent text-light-base dark:text-dark-base rounded-xl font-medium hover:shadow-glow transition-all"
        >
          Edit Profile
        </motion.button>
      </motion.div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {settingsSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-4 hover:border-lime-accent/30 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-full ${section.color}`}>
                <section.icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-light-text dark:text-dark-text font-editorial">{section.title}</h3>
            </div>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4">{section.description}</p>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text hover:border-lime-accent/30 transition-all text-sm"
            >
              Manage
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};