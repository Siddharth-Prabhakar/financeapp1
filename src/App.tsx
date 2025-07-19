import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoginPage } from './components/LoginPage';
import { MobileNavigation } from './components/MobileNavigation';
import { MobileTopBar } from './components/MobileTopBar';
import { WalletOverview } from './components/WalletOverview';
import { TransactionTimeline } from './components/TransactionTimeline';
import { ExchangeRates } from './components/ExchangeRates';
import { ChatBot } from './components/ChatBot';
import { ProfileSection } from './components/ProfileSection';
import { StatusNotifications } from './components/StatusNotifications';
import { QuickActions } from './components/QuickActions';
import { MobileCards } from './components/MobileCards';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [showChat, setShowChat] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-base dark:bg-dark-base flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-lime-accent border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6 pb-24">
            <WalletOverview />
            <QuickActions />
            <MobileCards />
            <TransactionTimeline />
          </div>
        );
      case 'exchange':
        return (
          <div className="pb-24">
            <ExchangeRates />
          </div>
        );
      case 'profile':
        return (
          <div className="pb-24">
            <ProfileSection />
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-96 pb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial mb-4">
                Coming Soon
              </h2>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                This feature is under development
              </p>
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text font-editorial transition-colors duration-300 overflow-x-hidden">
      {/* Mobile Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-lime-accent/5 dark:bg-lime-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-lime-accent/3 dark:bg-lime-accent/3 rounded-full blur-3xl"></div>
      </div>

      {/* Status Notifications */}
      <StatusNotifications />

      {/* Mobile Top Bar */}
      <MobileTopBar onChatToggle={() => setShowChat(!showChat)} />

      {/* Main Content */}
      <div className="pt-20 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Floating Chat Bot */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-4 bottom-24 top-32 z-50"
          >
            <ChatBot onClose={() => setShowChat(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;