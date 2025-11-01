# 🌱 Smart Farmer

> **Your pocket assistant for better planting and profit**

A modern, offline-first Progressive Web App (PWA) designed to empower small and medium-scale farmers in Nigeria with smart, localized agricultural insights for better yields and sustainable farming practices.

![Smart Farmer Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Authors](#-authors)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## ✨ Features

### Core Functionality
- 🌾 **Crop Guide** - Comprehensive database of 6+ Nigerian crops with planting information
- 📅 **Planting Calendar** - Region-specific monthly planting recommendations
- 📊 **Farm Tracker** - Log and monitor your farming activities with progress tracking
- 🐛 **Pest & Disease Diagnosis** - Interactive symptom checker with solutions
- 🔔 **Smart Notifications** - Reminders for weeding, fertilizing, and harvesting
- ⚙️ **Settings & Preferences** - Customizable language, units, and notifications

### Technical Features
- 📱 **Offline-First PWA** - Works without internet connectivity
- 🎨 **Beautiful UI/UX** - Modern design with smooth animations
- 📲 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🌍 **Regional Customization** - Supports all 6 Nigerian regions
- 🔄 **Real-time Updates** - Dynamic data management with React
- 🎭 **Smooth Animations** - Engaging user experience with CSS animations

### Target Audience
- **Primary**: Small/medium-scale farmers in rural Nigeria (ages 25-55)
- **Secondary**: Urban gardeners in cities like Lagos, Abuja, Enugu (ages 18-40)

---

## 🎥 Demo

### Screenshots

#### Onboarding
![Onboarding Screen](./docs/screenshots/onboarding.png)

#### Home Dashboard
![Home Dashboard](./docs/screenshots/home.png)

#### Crop Guide
![Crop Guide](./docs/screenshots/crop-guide.png)

#### Farm Tracker
![Farm Tracker](./docs/screenshots/tracker.png)

### Live Demo
🚀 [View Live Demo](https://smart-farmer-theta.vercel.app/) 

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.x
- **Styling**: Tailwind CSS 3.x
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

### PWA Features
- Service Workers (planned)
- Web App Manifest
- LocalStorage for data persistence
- Offline capability

### Development Tools
- Node.js & npm
- ESLint for code quality
- Git for version control

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v8.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

Check your installations:
```bash
node --version
npm --version
git --version
```

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/smart-farmer.git
cd smart-farmer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Tailwind CSS
```bash
npm install -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0
```

### 4. Install Additional Packages
```bash
npm install lucide-react
```

### 5. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

---

## 💻 Usage

### Development
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Production Deployment

#### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

#### Deploy to Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

#### Deploy to GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from 'dist' folder
```

---

## 📁 Project Structure

```
smart-farmer/
├── public/
│   ├── favicon.svg              # App favicon
│   └── manifest.json            # PWA manifest (optional)
├── src/
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & animations
├── .gitignore
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

### Key Files

#### `src/App.jsx`
Main application component containing:
- All app logic and state management
- Routing between different sections
- Modal components (Notifications, Settings, Add Log, etc.)
- Pest diagnosis system
- Farm tracking functionality

#### `src/index.css`
Custom CSS including:
- Tailwind directives
- Custom animations (fadeIn, slideIn, bounce, etc.)
- Responsive styles
- Accessibility improvements

#### `tailwind.config.js`
Tailwind configuration with:
- Custom color scheme
- Extended animations
- Content paths for purging

---

## 🗺️ Roadmap

### Phase 1: MVP ✅ (Current)
- [x] Core offline features
- [x] Crop guide with 6+ crops
- [x] Planting calendar
- [x] Farm tracker
- [x] Pest diagnosis system
- [x] Responsive design
- [x] Settings & notifications

### Phase 2: Enhancement (Q1 2026)
- [ ] Weather API integration (OpenWeatherMap)
- [ ] Market price checker
- [ ] User authentication
- [ ] Data synchronization
- [ ] Multilingual support (Hausa, Yoruba, Igbo)
- [ ] Voice commands

### Phase 3: Advanced Features (Q2 2026)
- [ ] Image-based pest detection (AI/ML)
- [ ] Community forum
- [ ] Expert consultation booking
- [ ] E-commerce integration
- [ ] IoT sensor support
- [ ] Analytics dashboard

### Phase 4: Scale (Q3 2026)
- [ ] Expand to other African countries
- [ ] Livestock management module
- [ ] Financial planning tools
- [ ] Government subsidy integration
- [ ] Mobile apps (iOS & Android)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/smart-farmer.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues

### Contribution Guidelines

- **Code Style**: Follow existing patterns and conventions
- **Documentation**: Update README if adding new features
- **Testing**: Test thoroughly on multiple devices
- **Commits**: Use clear, descriptive commit messages
- **Issues**: Check existing issues before creating new ones

### Areas for Contribution

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🌍 Translations
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations

---

## 👥 Authors

This project was developed by a talented team of developers:

### Development Team

**Ajibade Tosin Francis**
- Role: Lead Developer
- GitHub: [@bishopkbb](#)
- Email: ajibade_tosin@yahoo.com

**Omoyeni Naomi**
- Role: Frontend Developer
- GitHub: [@omoyeninaomi](#)
- Email: olumuyiwanaomiomoyeni@gmail.com

**Sandra Ogechi Ezeugonna**
- Role: UI/UX Designer
- GitHub: [@sandraezeugonna](#)
- Email: sandraezeugonna@gmail.com

**Tolough Nelson Aondongu**
- Role: Team Lead and product designer
- GitHub: [@toloughnelson](#)
- Email: toloughnelson@gmail.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

## 🙏 Acknowledgments

### Inspiration & Resources
- Nigerian Ministry of Agriculture for crop data
- FAO (Food and Agriculture Organization) for agricultural insights
- IITA (International Institute of Tropical Agriculture) for research data
- World Bank Climate Knowledge Portal for climate data

### Technologies & Libraries
- [React](https://react.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

### Design Inspiration
- FarmLogs - Farm management interface
- Agrivi - Agricultural analytics
- Farmonaut - Satellite-based insights

### Special Thanks
- Nigerian farming communities for feedback
- Agricultural extension officers for domain expertise
- Open source community for tools and libraries

---

## 📞 Contact & Support

### Get Help
- 📧 Email: support@smartfarmer.ng
- 🐛 Report bugs: [GitHub Issues](https://github.com/yourusername/smart-farmer/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/smart-farmer/discussions)

### Stay Connected
- 🌐 Website: [https://smart-farmer-theta.vercel.app/](#)
- 🐦 Twitter: [@smartfarmerng](#)
- 📘 Facebook: [Smart Farmer NG](#)
- 📸 Instagram: [@smartfarmerng](#)

---

## 📊 Project Status

**Current Version**: 1.0.0 (MVP)  
**Status**: Active Development  
**Last Updated**: November 2025  
**Next Release**: Version 1.1.0 (Weather Integration) - Q1 2026

---

## 🌟 Star History

If you find this project helpful, please consider giving it a ⭐️ on GitHub!

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/smart-farmer&type=Date)](https://star-history.com/#yourusername/smart-farmer&Date)

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

---

<div align="center">

### Built with ❤️ for Nigerian Farmers

**Smart Farmer** © 2025. All rights reserved.

[⬆ Back to Top](#-smart-farmer)

</div>
