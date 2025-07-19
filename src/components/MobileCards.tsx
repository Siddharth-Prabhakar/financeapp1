import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Eye, EyeOff, MoreHorizontal } from 'lucide-react';

const cards = [
  {
    id: 1,
    type: 'Platinum',
    number: '**** **** **** 4532',
    balance: 12847.32,
    currency: 'USD',
    gradient: 'from-lime-accent to-green-600',
    textColor: 'text-white'
  },
  {
    id: 2,
    type: 'Business',
    number: '**** **** **** 8901',
    balance: 8923.41,
    currency: 'EUR',
    gradient: 'from-purple-600 to-blue-600',
    textColor: 'text-white'
  },
];

export const MobileCards: React.FC = () => {
  const [showBalance, setShowBalance] = React.useState(true);
  const [activeCard, setActiveCard] = React.useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-light-text dark:text-dark-text font-editorial">My Cards</h3>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowBalance(!showBalance)}
          className="p-2 bg-light-glass dark:bg-dark-glass rounded-full"
        >
          {showBalance ? (
            <Eye className="w-4 h-4 text-light-text dark:text-dark-text" />
          ) : (
            <EyeOff className="w-4 h-4 text-light-text dark:text-dark-text" />
          )}
        </motion.button>
      </div>

      {/* Card Carousel */}
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCard(index)}
              className={`relative min-w-[280px] h-44 bg-gradient-to-br ${card.gradient} rounded-2xl p-6 shadow-xl cursor-pointer transition-all duration-300 ${
                activeCard === index ? 'ring-2 ring-lime-accent ring-offset-2 ring-offset-light-base dark:ring-offset-dark-base' : ''
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <CreditCard className={`w-6 h-6 ${card.textColor}`} />
                  <span className={`text-sm font-medium ${card.textColor}`}>{card.type}</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`p-1 rounded-full hover:bg-white/20 transition-colors ${card.textColor}`}
                >
                  <MoreHorizontal className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Card Number */}
              <div className="mb-4">
                <p className={`text-lg font-mono ${card.textColor} tracking-wider`}>
                  {card.number}
                </p>
              </div>

              {/* Balance */}
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-xs ${card.textColor} opacity-80`}>Available Balance</p>
                  <p className={`text-xl font-bold ${card.textColor}`}>
                    {showBalance ? `${card.currency} ${card.balance.toLocaleString()}` : '••••••••'}
                  </p>
                </div>
                <div className="w-12 h-8 bg-white/20 rounded-md flex items-center justify-center">
                  <div className="w-6 h-4 bg-white/40 rounded-sm"></div>
                </div>
              </div>

              {/* Card shine effect */}
              <motion.div
                animate={{ x: [-100, 300] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {cards.map((_, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeCard === index ? 'bg-lime-accent w-6' : 'bg-light-border dark:bg-dark-border'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};