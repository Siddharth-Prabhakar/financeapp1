# FinanceHub - Modern Finance Management App

A sophisticated, mobile-first finance management application built with modern web technologies. FinanceHub provides users with a comprehensive banking experience including portfolio tracking, multi-currency support, real-time exchange rates, and AI-powered insights.

## 🚀 Features

### Core Functionality
- **Multi-Currency Portfolio Management**: Track balances across USD, EUR, GBP, JPY with real-time conversion rates
- **Secure Authentication**: Google OAuth integration with persistent session management
- **Real-Time Exchange Rates**: Live currency conversion and market data
- **Transaction Timeline**: Comprehensive transaction history with detailed analytics
- **AI-Powered Chatbot**: Intelligent financial assistance and insights
- **Dark/Light Theme**: Seamless theme switching with custom color schemes
- **Mobile-First Design**: Optimized for mobile devices with responsive layout

### Advanced Features
- **Quick Actions**: One-tap access to common banking operations
- **Status Notifications**: Real-time alerts and system status updates
- **Profile Management**: User profile customization and settings
- **Glass Morphism UI**: Modern glassmorphism design with blur effects
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript 5.5.3**: Type-safe development with strict type checking
- **Vite 5.4.2**: Lightning-fast build tool and development server

### UI/UX Libraries
- **Tailwind CSS 3.4.1**: Utility-first CSS framework for rapid styling
- **Framer Motion 10.16.16**: Production-ready motion library for React
- **Lucide React 0.344.0**: Beautiful & consistent icon toolkit

### Development Tools
- **ESLint 9.9.1**: Code linting and quality enforcement
- **PostCSS 8.4.35**: CSS processing and optimization
- **Autoprefixer 10.4.18**: Automatic vendor prefixing

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── LoginPage.tsx   # Authentication interface
│   ├── WalletOverview.tsx # Portfolio dashboard
│   ├── TransactionTimeline.tsx # Transaction history
│   ├── ExchangeRates.tsx # Currency conversion
│   ├── ChatBot.tsx     # AI assistant
│   ├── ProfileSection.tsx # User profile
│   ├── MobileNavigation.tsx # Mobile navigation
│   └── ...             # Additional components
├── contexts/           # React context providers
│   ├── AuthContext.tsx # Authentication state management
│   └── ThemeContext.tsx # Theme switching logic
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## 🎨 Design System

### Color Palette
- **Light Theme**: Clean white base with subtle grays
- **Dark Theme**: Deep charcoal with sophisticated contrast
- **Accent Color**: Lime green (#65A30D) for highlights and CTAs
- **Glass Effects**: Backdrop blur with transparency

### Typography
- **Primary Font**: System UI stack for optimal readability
- **Font Weights**: Bold for headings, regular for body text
- **Responsive Scaling**: Fluid typography that adapts to screen size

### Animations
- **Page Transitions**: Smooth fade and slide effects
- **Micro-interactions**: Hover states and button feedback
- **Loading States**: Elegant loading spinners and skeletons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd financeapp1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📱 Mobile Optimization

The app is specifically designed for mobile devices with:
- **Touch-friendly interfaces**: Large tap targets and gesture support
- **Safe area handling**: Proper spacing for notches and home indicators
- **Responsive navigation**: Bottom tab navigation optimized for thumb reach
- **Performance optimization**: Optimized animations and asset loading

## 🔐 Security Features

- **Mock Authentication**: Simulated Google OAuth for development
- **Session Management**: Persistent login state with localStorage
- **Data Privacy**: Client-side data handling with no external dependencies
- **Secure Storage**: Encrypted local storage for sensitive data

## 🎯 Key Components

### Authentication System
- Google OAuth integration (simulated)
- Persistent session management
- Loading states and error handling

### Portfolio Management
- Multi-currency balance tracking
- Real-time exchange rates
- Portfolio value calculations
- Balance visibility toggle

### Transaction System
- Comprehensive transaction history
- Categorized spending analytics
- Search and filter capabilities
- Export functionality

### AI Assistant
- Intelligent financial advice
- Transaction categorization
- Spending pattern analysis
- Budget recommendations

## 🛠 Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Consistent component structure
- Proper error handling

### Component Architecture
- Functional components with hooks
- Context API for state management
- Custom hooks for reusable logic
- Props interface definitions

### Styling Approach
- Tailwind CSS utility classes
- Custom color scheme and design tokens
- Responsive design patterns
- Dark/light theme support

## 📄 License

MIT License

Copyright (c) 2024 Siddharth Prabhakr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 👨‍💻 Author

**Siddharth Prabhakr**

- **Email**: siddharthprabhakr.yt@gmail.com


