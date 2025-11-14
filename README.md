# 🌱 Smart Farmer

> **Your pocket assistant for better planting and profit**

A modern, offline-first Progressive Web App (PWA) designed to empower small and medium-scale farmers in Nigeria with smart, localized agricultural insights for better yields and sustainable farming practices.

![Smart Farmer Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Dark Mode](#-dark-mode)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Authors](#-authors)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## ✨ Features

### 🌾 Core Functionality
- **Comprehensive Crop Guide** - Database of 20+ Nigerian crops with detailed planting information
- **Smart Planting Calendar** - Region-specific monthly recommendations for optimal planting times
- **Farm Activity Tracker** - Log and monitor your farming activities with visual progress tracking
- **Pest & Disease Diagnosis** - Interactive symptom checker with actionable solutions and prevention tips
- **Weather Updates** - 7-day forecast with farming recommendations and weather alerts
- **Market Prices** - Real-time crop prices with trend indicators and market insights
- **Farming Tips** - Expert advice across 6 categories (Soil, Planting, Pest, Water, Fertilizer, Harvest)
- **Community Forum** - Connect with fellow farmers and share experiences
- **Help Center** - Comprehensive guides and support resources

### 🎨 User Experience
- **Onboarding Flow** - Personalized setup based on region and farming type
- **Interactive Tour** - Step-by-step guide for new users
- **Smart Notifications** - Timely reminders for weeding, fertilizing, and harvesting
- **Dark Mode** - Beautiful dark theme with optimized contrast and readability
- **Settings & Preferences** - Customizable language, units, and notification preferences

### 🔧 Technical Features
- **Offline-First Architecture** - Works seamlessly without internet connectivity
- **Progressive Web App (PWA)** - Installable on any device with app-like experience
- **Local Data Persistence** - Your data stays on your device with localStorage
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Regional Customization** - Supports all 6 Nigerian geopolitical zones
- **SEO Optimized** - Meta tags for better discoverability
- **Fast Performance** - Lightning-fast load times with Vite
- **Smooth Animations** - Engaging user experience with custom CSS animations

### 🎯 Target Audience
- **Primary**: Small/medium-scale farmers in rural Nigeria (ages 25-55)
- **Secondary**: Urban gardeners and agri-enthusiasts in cities like Lagos, Abuja, Enugu (ages 18-40)

---

## 🎥 Demo

### 🚀 Live Application
**[View Live Demo →](https://smart-farmer-theta.vercel.app/)**

Experience the full application with all features including:
- Interactive crop guide with 20+ crops
- Monthly planting calendar
- Farm tracking system
- Pest diagnosis tool
- Weather updates and market prices
- Community forum and help center

---

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Onboarding Experience
![Onboarding Screen](./docs/screenshots/onboarding.png)
*Personalized setup based on your region and farming type*

### Home Dashboard
![Home Dashboard](./docs/screenshots/home.png)
*Quick access to weather, active crops, and key features*

### Crop Guide
![Crop Guide](./docs/screenshots/crop-guide.png)
*Comprehensive information on 20+ Nigerian crops*

### Planting Calendar
![Planting Calendar](./docs/screenshots/calendar.png)
*Region-specific monthly planting recommendations*

### Farm Tracker
![Farm Tracker](./docs/screenshots/tracker.png)
*Monitor your farming activities with progress tracking*

### Pest Diagnosis
![Pest Diagnosis](./docs/screenshots/pest.png)
*Interactive symptom checker with solutions*

### Dark Mode
![Dark Mode](./docs/screenshots/dark-mode.png)
*Beautiful dark theme with optimized contrast*

</details>

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.x | UI framework with hooks |
| Tailwind CSS | 3.4.x | Utility-first styling |
| Lucide React | 0.552.0 | Beautiful icon library |
| Vite | 6.x | Fast build tool |
| JavaScript | ES6+ | Modern JavaScript features |

### Form & Validation
- **react-hook-form** - Performant form validation
- **react-hot-toast** - Toast notifications

### SEO & Meta
- **react-helmet-async** - Dynamic meta tags for SEO

### PWA Features
- Service Workers (planned)
- Web App Manifest
- LocalStorage for data persistence
- Offline capability

### Development Tools
- Node.js (v16+)
- npm (v8+)
- ESLint for code quality
- Git for version control

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v16.0+ | [Download](https://nodejs.org/) |
| npm | v8.0+ | Comes with Node.js |
| Git | Latest | [Download](https://git-scm.com/) |

**Check your installations:**
```bash
node --version  # Should show v16.0 or higher
npm --version   # Should show v8.0 or higher
git --version   # Should show latest version
```

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/bishopkbb/smart-farmer.git
cd smart-farmer
```

### 2. Install Dependencies

**Option A: Standard Installation**
```bash
npm install
```

**Option B: If you encounter peer dependency issues (React 19)**
```bash
npm install --legacy-peer-deps
```

### 3. Start Development Server
```bash
npm run dev
```

The app will be available at **`http://localhost:5173/`**

---

## 💻 Usage

### Development Commands
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

### Production Deployment

#### 🔷 Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or connect your GitHub repo to Vercel dashboard
```

#### 🟢 Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy via Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### 🔶 Deploy to GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📁 Project Structure
```
smart-farmer/
├── public/
│   ├── favicon.svg              # App favicon
│   └── manifest.json            # PWA manifest
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Toast.jsx        # Toast notification system
│   │   │   └── SkeletonLoader.jsx # Loading skeletons
│   │   ├── SEO.jsx              # SEO meta tags
│   │   └── OnboardingTour.jsx   # User onboarding
│   ├── pages/
│   │   ├── PrivacyPolicy.jsx    # Privacy policy page
│   │   └── TermsOfService.jsx   # Terms of service page
│   ├── utils/
│   │   └── storage.js           # LocalStorage utilities
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & animations
├── .npmrc                       # npm configuration
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── README.md                    # Project documentation
```

### Key Files Explained

#### `src/App.jsx` (1,200+ lines)
Main application component containing:
- **State Management**: 15+ state variables for app-wide data
- **Navigation System**: Tab-based routing between sections
- **Modal Components**: Notifications, Settings, Add Log, Crop Details
- **Pest Diagnosis System**: Interactive symptom checker with solutions
- **Farm Tracking**: CRUD operations for farm logs
- **Resource Pages**: Weather, Market Prices, Farming Tips, Forum, Help Center

#### `src/index.css` (600+ lines)
Comprehensive styling including:
- Tailwind directives and custom utilities
- **Dark Mode Styles**: Complete dark theme with optimized contrast
- **Custom Animations**: fadeIn, slideIn, bounce, float, scale, etc.
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Focus states, touch targets, semantic colors

#### `src/utils/storage.js`
LocalStorage utilities for:
- Farm logs persistence
- User preferences (location, farming type)
- App settings (theme, language, units)
- Data import/export

---

## 🌙 Dark Mode

Smart Farmer features a **beautiful dark mode** with optimized contrast and readability.

### Features
- **Manual Toggle** - Switch between light and dark themes in settings
- **Persistent Preference** - Your choice is saved locally
- **Optimized Colors** - Carefully selected color palette for dark mode:
  - Background: Deep green gradients (`#064e3b`, `#022c22`)
  - Cards: Dark green tones (`#0a2f29`, `#031a16`)
  - Text: Bright whites and greens for excellent contrast
  - Borders: Vibrant green accents (`#10b981`)
- **All Components Supported** - Every UI element adapts to dark mode
- **Smooth Transitions** - Seamless theme switching with CSS transitions

### Recent Improvements (v1.1.0)
- ✅ Fixed contrast issues in Active Crops section
- ✅ Improved text visibility on dark backgrounds
- ✅ Enhanced status badges (Growing, Flowering, etc.)
- ✅ Better visual hierarchy with layered backgrounds

---

## 🗺️ Roadmap

### ✅ Phase 1: MVP (Completed - November 2025)
- [x] Core offline features with localStorage
- [x] Crop guide with 20+ Nigerian crops
- [x] Interactive planting calendar
- [x] Farm tracker with CRUD operations
- [x] Pest diagnosis system with solutions
- [x] Weather updates page with 7-day forecast
- [x] Market prices with trend indicators
- [x] Farming tips across 6 categories
- [x] Community forum interface
- [x] Help center with FAQs
- [x] Dark mode with optimized contrast
- [x] Responsive design (mobile, tablet, desktop)
- [x] Settings & notifications
- [x] Onboarding tour
- [x] SEO optimization

### 🔄 Phase 2: Enhancement (Q1 2026)
- [ ] **Weather API Integration** - Live weather data from OpenWeatherMap
- [ ] **Real Market Prices** - Integration with agricultural market APIs
- [ ] **User Authentication** - Firebase/Supabase login system
- [ ] **Data Synchronization** - Cloud backup for farm logs
- [ ] **Multilingual Support** - Hausa, Yoruba, Igbo translations
- [ ] **Voice Commands** - Voice input for farm logging
- [ ] **Push Notifications** - Web push for reminders
- [ ] **Advanced Analytics** - Charts and insights dashboard

### 🚀 Phase 3: Advanced Features (Q2 2026)
- [ ] **AI Pest Detection** - Image-based pest identification using TensorFlow
- [ ] **Real-time Community Forum** - Live chat with other farmers
- [ ] **Expert Consultation** - Book video calls with agricultural experts
- [ ] **E-commerce Integration** - Buy seeds, fertilizers, equipment
- [ ] **IoT Sensor Support** - Connect smart farming devices
- [ ] **Financial Planning** - Budget tracking and profit calculator
- [ ] **Yield Prediction** - ML-based harvest forecasting

### 🌍 Phase 4: Scale (Q3 2026)
- [ ] **Geographic Expansion** - Support for Ghana, Kenya, and other African countries
- [ ] **Livestock Management** - Module for animal husbandry
- [ ] **Government Integration** - Subsidy application assistance
- [ ] **Mobile Apps** - Native iOS and Android applications
- [ ] **Blockchain Traceability** - Farm-to-table product tracking
- [ ] **Insurance Integration** - Crop insurance recommendations

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🎯 Ways to Contribute

| Area | Examples |
|------|----------|
| 🐛 Bug Fixes | Report or fix bugs in existing features |
| ✨ New Features | Add new crops, regions, or functionality |
| 📝 Documentation | Improve README, add tutorials, create guides |
| 🌍 Translations | Add Hausa, Yoruba, Igbo, or other languages |
| 🎨 UI/UX | Design improvements, animations, accessibility |
| ⚡ Performance | Optimize load times, reduce bundle size |
| 🧪 Testing | Write unit tests, integration tests |

### 📝 Contribution Workflow

1. **Fork the repository**
```bash
   git clone https://github.com/bishopkbb/smart-farmer.git
   cd smart-farmer
```

2. **Create a feature branch**
```bash
   git checkout -b feature/amazing-feature
   # Or for bug fixes
   git checkout -b fix/bug-description
```

3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style and conventions
   - Add comments for complex logic
   - Test thoroughly on multiple devices

4. **Commit your changes**
```bash
   git add .
   git commit -m "feat: Add amazing feature"
   # Use conventional commits: feat, fix, docs, style, refactor, test, chore
```

5. **Push to your fork**
```bash
   git push origin feature/amazing-feature
```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Add screenshots for UI changes
   - Wait for review and address feedback

### 📋 Contribution Guidelines

#### Code Style
- Use **functional components** and **React Hooks**
- Follow **Tailwind CSS** utility-first approach
- Use **meaningful variable names** (not `x`, `y`, `temp`)
- Keep components **small and focused**
- Add **PropTypes** or TypeScript types (when available)

#### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```bash
feat: Add market price comparison feature
fix: Resolve dark mode contrast issue in footer
docs: Update installation instructions
style: Format code with Prettier
refactor: Simplify pest diagnosis logic
test: Add unit tests for storage utilities
chore: Update dependencies
```

#### Pull Request Checklist
- [ ] Code builds without errors (`npm run build`)
- [ ] Linter passes (`npm run lint`)
- [ ] Tested on mobile and desktop
- [ ] Dark mode works correctly
- [ ] No console errors or warnings
- [ ] README updated (if needed)
- [ ] Screenshots added (for UI changes)

---

## 👥 Authors

This project was developed by a talented team of passionate developers and designers:

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/bishopkbb.png" width="100px;" alt="Ajibade Tosin Francis"/><br />
      <sub><b>Ajibade Tosin Francis</b></sub><br />
      <i>Lead Developer</i><br />
      <a href="https://github.com/bishopkbb">GitHub</a> • 
      <a href="mailto:ajibade_tosin@yahoo.com">Email</a>
    </td>
    <td align="center">
      <img src="https://github.com/omoyeninaomi.png" width="100px;" alt="Omoyeni Naomi"/><br />
      <sub><b>Omoyeni Naomi</b></sub><br />
      <i>Frontend Developer</i><br />
      <a href="https://github.com/omoyeninaomi">GitHub</a> • 
      <a href="mailto:olumuyiwanaomiomoyeni@gmail.com">Email</a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/sandraezeugonna.png" width="100px;" alt="Sandra Ogechi Ezeugonna"/><br />
      <sub><b>Sandra Ogechi Ezeugonna</b></sub><br />
      <i>UI/UX Designer</i><br />
      <a href="https://github.com/sandraezeugonna">GitHub</a> • 
      <a href="mailto:sandraezeugonna@gmail.com">Email</a>
    </td>
    <td align="center">
      <img src="https://github.com/toloughnelson.png" width="100px;" alt="Tolough Nelson Aondongu"/><br />
      <sub><b>Tolough Nelson Aondongu</b></sub><br />
      <i>Team Lead & Product Designer</i><br />
      <a href="https://github.com/toloughnelson">GitHub</a> • 
      <a href="mailto:toloughnelson@gmail.com">Email</a>
    </td>
  </tr>
</table>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
```
✅ Commercial use      ✅ Modification
✅ Distribution        ✅ Private use
❌ Liability           ❌ Warranty
```

**In simple terms**: You can use, copy, modify, and distribute this software freely, even for commercial purposes. Just keep the copyright notice.

---

## 🙏 Acknowledgments

### 🌍 Data Sources & Research
- **Nigerian Ministry of Agriculture and Rural Development** - Crop data and agricultural guidelines
- **FAO (Food and Agriculture Organization)** - International agricultural standards
- **IITA (International Institute of Tropical Agriculture)** - Tropical agriculture research
- **World Bank Climate Knowledge Portal** - Climate and weather data
- **FMARD (Federal Ministry of Agriculture)** - Regional crop recommendations

### 🛠️ Technologies & Libraries
- [React](https://react.dev/) - The library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible forms
- [React Hot Toast](https://react-hot-toast.com/) - Smoking hot notifications

### 🎨 Design Inspiration
- [FarmLogs](https://farmlogs.com/) - Farm management software
- [Agrivi](https://www.agrivi.com/) - Agricultural analytics platform
- [Farmonaut](https://farmonaut.com/) - Satellite-based farm management

### 💚 Special Thanks
- Nigerian farming communities for valuable feedback and real-world testing
- Agricultural extension officers for domain expertise and guidance
- Open source community for amazing tools and libraries
- Our families for unwavering support during development

---

## 📞 Contact & Support

### 🆘 Get Help
- **📧 Email**: smartfarmer121@gmail.com
- **🐛 Report Bugs**: [GitHub Issues](https://github.com/bishopkbb/smart-farmer/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/bishopkbb/smart-farmer/discussions)
- **📖 Documentation**: [Wiki](https://github.com/bishopkbb/smart-farmer/wiki)

### 🌐 Stay Connected
- **Website**: [https://smart-farmer-theta.vercel.app/](https://smart-farmer-theta.vercel.app/)
- **Twitter**: [@smartfarmer121](https://twitter.com/smartfarmer121)
- **LinkedIn**: [Smart Farmer](https://linkedin.com/company/smartfarmer)
- **GitHub**: [@bishopkbb](https://github.com/bishopkbb/smart-farmer)

---

## 📊 Project Status

| Metric | Value |
|--------|-------|
| **Current Version** | v1.1.0 |
| **Status** | 🟢 Active Development |
| **Last Updated** | November 14, 2025 |
| **Next Release** | v1.2.0 (Weather API Integration) - Q1 2026 |
| **Total Commits** | 50+ |
| **Contributors** | 4 |
| **Lines of Code** | 2,000+ |

---

## 🌟 Show Your Support

If you find this project helpful, please consider:

- ⭐ **Star this repository** on GitHub
- 🐦 **Share on Twitter** with #SmartFarmerNG
- 🗣️ **Tell other farmers** about the app
- 🤝 **Contribute** to the project
- ☕ **Sponsor** development

[![Star History Chart](https://api.star-history.com/svg?repos=bishopkbb/smart-farmer&type=Date)](https://star-history.com/#bishopkbb/smart-farmer&Date)

---

## 📝 Changelog

### Version 1.1.0 (November 14, 2025)
**New Features**
- ✨ Added Weather Updates page with 7-day forecast
- ✨ Added Market Prices page with trend indicators
- ✨ Added Farming Tips page with 6 expert categories
- ✨ Added Community Forum interface
- ✨ Added Help Center with comprehensive guides
- ✨ Cookie Policy page with proper formatting

**Improvements**
- 🎨 Fixed dark mode contrast in Active Crops section
- 🎨 Improved text visibility on all dark backgrounds
- 🎨 Enhanced status badges (Growing, Flowering, etc.)
- 🎨 Better visual hierarchy with layered backgrounds
- ⚡ All footer links now fully functional
- ⚡ Optimized build configuration for React 19

**Bug Fixes**
- 🐛 Fixed peer dependency issues with react-helmet-async
- 🐛 Resolved Vercel deployment errors
- 🐛 Fixed dark mode color contrast issues

### Version 1.0.0 (November 2025)
- 🎉 Initial MVP release
- 🌾 Crop guide with 20+ crops
- 📅 Interactive planting calendar
- 📊 Farm activity tracker
- 🐛 Pest diagnosis system
- 🌙 Dark mode support
- 📱 Responsive design

[View Full Changelog →](CHANGELOG.md)

---

## 🔮 Future Vision

Our vision is to **empower 1 million Nigerian farmers** by 2027 with:
- 🌍 **Accessible Technology** - Available even in rural areas with limited connectivity
- 📱 **Mobile-First Design** - Optimized for smartphones, the primary device for farmers
- 🌐 **Localized Content** - Crop data specific to Nigerian regions and climate
- 💰 **Financial Inclusion** - Connect farmers to markets, credit, and insurance
- 🤝 **Community Building** - Foster knowledge sharing among farmers
- 🌱 **Sustainable Practices** - Promote eco-friendly farming methods

---

<div align="center">

### Built with ❤️ for Nigerian Farmers

**Smart Farmer** © 2025. All rights reserved.

**Made in Nigeria 🇳🇬**

[⬆ Back to Top](#-smart-farmer)

---

<sub>If this project helped you, please consider giving it a ⭐️!</sub>

</div>