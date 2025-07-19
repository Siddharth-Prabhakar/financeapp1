import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Eye, EyeOff, Plus } from 'lucide-react';

const currencies = [
  { code: 'USD', symbol: '$', balance: 12847.32, change: +2.34, flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', balance: 8923.41, change: -1.12, flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', balance: 6432.18, change: +0.89, flag: '🇬🇧' },
  { code: 'JPY', symbol: '¥', balance: 1234567, change: -0.45, flag: '🇯🇵' },
];

export const WalletOverview: React.FC = () => {
  const [showBalances, setShowBalances] = React.useState(true);

  return (
    <div className="space-y-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">Portfolio</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">Global currencies</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowBalances(!showBalances)}
          className="p-2 bg-light-glass dark:bg-dark-glass rounded-full hover:bg-lime-accent/10 transition-colors duration-300"
        >
          {showBalances ? (
            <Eye className="w-4 h-4 text-light-text dark:text-dark-text" />
          ) : (
            <EyeOff className="w-4 h-4 text-light-text dark:text-dark-text" />
          )}
        </motion.button>
      </motion.div>

      {/* Total Balance Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-br from-light-surface to-light-glass dark:from-dark-surface dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass relative overflow-hidden transition-colors duration-300"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-lime-accent/5 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm uppercase tracking-wider">Total Portfolio Value</p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            className="flex items-baseline space-x-2 mt-2"
          >
            <span className="text-3xl font-bold text-lime-accent font-editorial">
              {showBalances ? '$28,203.91' : '••••••••'}
            </span>
            <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">USD</span>
          </motion.div>
          <div className="flex items-center space-x-2 mt-3">
            <TrendingUp className="w-4 h-4 text-lime-accent" />
            <span className="text-lime-accent text-sm">+4.2% this month</span>
          </div>
        </div>
      </motion.div>

      {/* Currency Cards Grid */}
      <div className="grid grid-cols-2 gap-4">
        {currencies.map((currency, index) => (
          <motion.div
            key={currency.code}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileTap={{ scale: 0.98 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-4 hover:border-lime-accent/30 transition-all hover:shadow-glow group duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-xl">{currency.flag}</span>
                <div>
                  <h3 className="text-sm font-bold text-light-text dark:text-dark-text font-editorial">{currency.code}</h3>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Balance</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 ${currency.change >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
                {currency.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span className="text-xs">{currency.change > 0 ? '+' : ''}{currency.change}%</span>
              </div>
            </div>
            <div className="space-y-2">
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="text-lg font-bold text-light-text dark:text-dark-text font-editorial"
              >
                {showBalances ? `${currency.symbol}${currency.balance.toLocaleString()}` : '••••••'}
              </motion.p>
              <div className="w-full bg-dark-glass rounded-full h-1">
                <div className="w-full bg-light-glass dark:bg-dark-glass rounded-full h-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(currency.balance / 20000 * 100, 100)}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="h-1 bg-lime-accent rounded-full opacity-70"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Currency Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center space-x-2 p-4 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl hover:border-lime-accent/30 transition-all duration-300"
      >
        <Plus className="w-5 h-5 text-lime-accent" />
        <span className="text-lime-accent font-medium">Add Currency</span>
      </motion.button>
    </div>
  );
};