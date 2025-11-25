# Malik Muhammad Raza - iOS Developer Portfolio

A premium, high-end Next.js portfolio showcasing the work and expertise of Malik Muhammad Raza, a professional iOS Developer with 4+ years of experience.

## 🚀 Features

- **Modern Design**: Polished, visually stunning UI with mobile app development focus
- **Interactive Hero Section**: Animated mobile UI visuals showcasing iOS expertise
- **Skills Showcase**: Comprehensive display of iOS development skills and technologies
- **Project Portfolio**: Featured projects with screenshots, demo videos, and App Store links
- **Experience Timeline**: Professional journey with achievements and apps developed
- **Client Testimonials**: Social proof from clients and colleagues
- **Contact Form**: Easy-to-use contact form with social media links
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

- Edit `components/Hero.tsx` for hero section content
- Update `components/Skills.tsx` for skills and technologies
- Modify `components/Projects.tsx` with your actual projects
- Edit `components/Experience.tsx` with your work history
- Update `components/Contact.tsx` with your contact information

### Add Resume

Place your resume PDF file in the `public` folder and update the link in `components/Hero.tsx`:

```tsx
href="/resume.pdf"
```

### Update Project Images

Replace placeholder images in `components/Projects.tsx` with your actual project screenshots. You can:
- Add images to the `public` folder
- Use external URLs
- Update the `image` property in the projects array

## 🎨 Color Scheme

The portfolio uses a primary blue color scheme that can be customized in `tailwind.config.js`:

```js
primary: {
  500: '#0ea5e9',
  600: '#0284c7',
  // ... more shades
}
```

## 📱 Sections

1. **Hero** - Introduction with interactive mobile UI
2. **Skills** - Technical expertise and tools
3. **Projects** - Portfolio of iOS applications
4. **Experience** - Professional timeline
5. **Testimonials** - Client feedback
6. **Contact** - Contact form and social links

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

## 📄 License

This portfolio is created for Malik Muhammad Raza. All rights reserved.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion

