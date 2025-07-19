import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Globe, TrendingUp, CreditCard, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const LoginPage: React.FC = () => {
  const { signInWithGoogle, loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your money is protected with military-grade encryption'
    },
    {
      icon: Globe,
      title: 'Global Transfers',
      description: 'Send money to 180+ countries instantly'
    },
    {
      icon: TrendingUp,
      title: 'Smart Insights',
      description: 'AI-powered financial advice and spending analytics'
    },
    {
      icon: CreditCard,
      title: 'Multi-Currency Cards',
      description: 'Spend in any currency without hidden fees'
    }
  ];

  return (
    <div className="min-h-screen bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-lime-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-lime-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-16 pb-8 px-6 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-lime-accent rounded-2xl flex items-center justify-center shadow-glow">
              <Smartphone className="w-8 h-8 text-light-base dark:text-dark-base" />
            </div>
          </div>
          <h1 className="text-3xl font-bold font-editorial text-lime-accent mb-2">FinanceHub</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary">Your Global Banking Partner</p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 px-6 flex flex-col justify-center"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-editorial mb-4 leading-tight">
              Banking Made
              <span className="text-lime-accent block">Simple & Secure</span>
            </h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Experience the future of banking with instant transfers, AI insights, and global accessibility.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-4 text-center"
              >
                <div className="w-12 h-12 bg-lime-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-lime-accent" />
                </div>
                <h3 className="font-bold text-sm font-editorial mb-2">{feature.title}</h3>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sign In Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4"
          >
            <motion.button
              onClick={handleGoogleSignIn}
              disabled={loading || isLoading}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-lime-accent text-light-base dark:text-dark-base py-4 rounded-2xl font-bold text-lg shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              {(loading || isLoading) ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-light-base dark:border-dark-base border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </motion.button>

            <div className="text-center">
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                By continuing, you agree to our{' '}
                <span className="text-lime-accent">Terms of Service</span> and{' '}
                <span className="text-lime-accent">Privacy Policy</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="pb-8 px-6"
        >
          <div className="flex items-center justify-center space-x-6 text-xs text-light-text-secondary dark:text-dark-text-secondary">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-lime-accent" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-lime-accent" />
              <span>Bank-Grade Security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};