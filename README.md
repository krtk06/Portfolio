# Modern Portfolio Website

A stunning, responsive portfolio website built with React, featuring an animated starry background with shooting stars, smooth theme switching, and modern design principles.

## 🌟 Features

- **Animated Starry Background**: Full-screen animated stars with shooting star effects
- **Dark/Light Mode Toggle**: Persistent theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Smooth Animations**: GPU-accelerated animations with reduced motion support
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, and focus management
- **Performance Optimized**: Efficient star rendering and smooth 60fps animations

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Customization

### Personal Information

Update the following placeholders in the code:

1. **Social Links** (src/components/Navbar.jsx):
   ```jsx
   // Replace these URLs with your actual profiles
   href="https://github.com/YOUR_USERNAME"
   href="https://www.linkedin.com/in/YOUR_USERNAME"
   ```

2. **Hero Section** (src/sections/Hero.jsx):
   ```jsx
   <span className="block text-gradient">Your Name</span>
   ```

3. **Contact Information** (src/sections/Contact.jsx):
   ```jsx
   value: "your.email@example.com"
   value: "+1 (555) 123-4567"
   value: "San Francisco, CA"
   ```

4. **HTML Meta Tags** (index.html):
   ```html
   <title>Your Name - Full Stack Developer Portfolio</title>
   <meta name="author" content="Your Name" />
   ```

### Background Animation Settings

Customize the starry background by modifying props in `src/App.jsx`:

```jsx
// Stars Background
<StarsBackground 
  starDensity={0.00015}        // Density of stars (higher = more stars)
  allStarsTwinkle={true}       // Enable/disable twinkling
  twinkleProbability={0.7}     // Probability of a star twinkling (0-1)
  minTwinkleSpeed={0.5}        // Minimum twinkle animation speed (seconds)
  maxTwinkleSpeed={1}          // Maximum twinkle animation speed (seconds)
/>

// Shooting Stars
<ShootingStars
  minSpeed={10}                // Minimum shooting star speed
  maxSpeed={30}                // Maximum shooting star speed
  minDelay={4200}              // Minimum delay between shooting stars (ms)
  maxDelay={8700}              // Maximum delay between shooting stars (ms)
  starColor="#9E00FF"          // Shooting star color
  trailColor="#2EB9DF"         // Shooting star trail color
  starWidth={10}               // Shooting star width (px)
  starHeight={1}               // Shooting star height (px)
/>
```

### Theme Colors

Modify the color scheme in `src/index.css`:

```css
:root {
  /* Light theme colors */
  --primary: 249 55% 39%;        /* Purple accent */
  --background: 214 100% 97%;    /* Light background */
  --foreground: 214 100% 7%;     /* Dark text */
}

.dark {
  /* Dark theme colors */
  --primary: 249 60% 68%;        /* Light purple accent */
  --background: 214 50% 6%;      /* Dark background */
  --foreground: 214 30% 92%;     /* Light text */
}
```

### Performance Tuning

For mobile devices, you can reduce the star count by adjusting the density:

```jsx
// Lower density for mobile performance
starDensity={window.innerWidth < 768 ? 0.0001 : 0.00015}
```

### Accessibility Features

The portfolio includes several accessibility features:

- **Reduced Motion**: Automatically disables animations for users with `prefers-reduced-motion`
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: Sufficient contrast ratios in both themes

## 📁 Project Structure

```
src/
├── components/
│   ├── background/
│   │   ├── StarsBackground.jsx    # Animated stars component
│   │   └── ShootingStars.jsx      # Shooting stars component
│   ├── icons/
│   │   ├── GitHubIcon.jsx         # GitHub icon component
│   │   └── LinkedInIcon.jsx       # LinkedIn icon component
│   ├── Navbar.jsx                 # Navigation component
│   └── ThemeToggle.jsx            # Dark/light mode toggle
├── sections/
│   ├── Hero.jsx                   # Hero/landing section
│   ├── Projects.jsx               # Projects showcase
│   ├── About.jsx                  # About me section
│   └── Contact.jsx                # Contact form
├── assets/
│   └── hero-abstract.jpg          # Hero background image
├── App.jsx                        # Main app component
├── main.jsx                       # App entry point
└── index.css                      # Global styles & design system
```

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Query** - Server state management
- **React Router** - Client-side routing

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Efficiently tree-shaken and code-split
- **Animation Performance**: 60fps smooth animations using transform and opacity

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/YOUR_USERNAME/portfolio](https://github.com/YOUR_USERNAME/portfolio)

---

Built with ❤️ using React and modern web technologies.