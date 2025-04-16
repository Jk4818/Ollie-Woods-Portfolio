# Ollie Woods - Drummer Portfolio

A modern and interactive portfolio site for professional session drummer Ollie Woods. Built using a scalable and performant tech stack, this project is designed to showcase multimedia content, past performances, and client engagement options in a sleek and responsive format.

## 🧰 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter & Lora (Google Fonts)
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: @vercel/analytics
- **Carousel**: Embla Carousel + Autoplay
- **Icons**: Lucide & React Icons

## 📐 Architecture & Structure

- **App Directory**: Follows the Next.js 13+ App Router convention for scalable routing.
- **Component-Based**: Modular UI components enable reusability and easier maintenance.
- **Responsive Layout**: Mobile-first design with full responsiveness across screen sizes.
- **Animation Layer**: Uses Framer Motion for smooth transitions and immersive scroll-based animations.
- **Utility Functions**: Includes utilities for smooth scroll behavior and layout interactions.
- **Public Assets**: Optimized images and SVGs housed in `public/` for performance.

```
src/
├── app/               # Page routing & layout logic
│   ├── about/         # Biography & timeline
│   ├── contact/       # Contact info & social links
│   ├── services/      # Services & offerings
│   └── page.tsx       # Landing page
├── components/        # Reusable UI components
├── utils/             # Utility functions (e.g., smooth scrolling)
public/
├── images/            # Gallery images
├── *.svg              # Icons and branding
```

## ✨ Key Features

- Hero section with animated brand intro and scroll indicator
- Biography sections with image layout and animated reveal
- Interactive event timeline with data-driven content
- Milestone gallery with scroll-triggered animation
- Email & social links with motion-enhanced interactions
- Lazy loading & priority rendering for image performance
- Smooth client-side navigation with animated link transitions

## 🚀 Deployment

This site is hosted on [Vercel](https://vercel.com/), optimized for static performance with dynamic interactivity.

```bash
# Development
npm run dev

# Production
npm run build
npm run start
```

## 🧩 Dependencies Highlights

```json
"framer-motion": "^12.5.0",
"embla-carousel-react": "^8.5.2",
"@vercel/analytics": "^1.5.0",
"lucide-react": "^0.482.0",
"tailwindcss": "^4",
"react": "^19",
"next": "15.2.2"
```

---

_Designed and developed by [iamjkeung.com](https://iamjkeung.com/)_

---
