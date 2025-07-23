# PhoneHub - Professional E-commerce Website

A modern, responsive e-commerce platform specializing in mobile phones and accessories, built with Next.js, TypeScript, and Tailwind CSS.

![PhoneHub Preview](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop)

## 🚀 Features

### Core E-commerce Functionality
- **Product Management**: Comprehensive product catalog with detailed specifications
- **Advanced Search & Filtering**: Search by name, brand, category, price range, and stock status
- **Shopping Cart**: Persistent cart with quantity management
- **Wishlist**: Save favorite products for later
- **Responsive Design**: Mobile-first approach for all devices

### User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized for Core Web Vitals
- **WhatsApp Integration**: Floating chat button for instant customer support
- **Interactive Product Display**: Image galleries, ratings, and reviews
- **Toast Notifications**: Real-time feedback for user actions

### Pages & Components
- **Home Page**: Hero section, featured products, categories, newsletter signup
- **Shop Page**: Product grid/list view with filters and sorting
- **Product Detail Pages**: Comprehensive product information
- **About Us**: Company story, mission, values, and statistics
- **Contact Us**: Contact form, Google Maps integration, business hours
- **FAQ**: Searchable, categorized frequently asked questions
- **Terms & Conditions**: Legal information and policies

### Technical Features
- **TypeScript**: Full type safety
- **State Management**: Zustand for global state
- **Responsive Design**: Tailwind CSS for utility-first styling
- **Animation**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form with validation
- **Toast Notifications**: React Hot Toast for user feedback

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **UI Components**: Headless UI
- **Development**: ESLint, Prettier

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.x or later)
- npm or yarn package manager
- Git

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd phone-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
phone-store/
├── src/
│   ├── app/                    # Next.js 14 app directory
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── faq/               # FAQ page
│   │   ├── shop/              # Shop page with filters
│   │   ├── terms/             # Terms & Conditions
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.tsx     # Navigation bar
│   │   │   └── Footer.tsx     # Footer
│   │   └── ui/                # UI components
│   │       └── WhatsAppFloat.tsx
│   ├── data/                  # Sample data
│   │   └── products.ts        # Product catalog
│   ├── lib/                   # Utilities
│   │   └── utils.ts           # Helper functions
│   ├── store/                 # State management
│   │   └── useStore.ts        # Zustand store
│   └── types/                 # TypeScript types
│       └── index.ts           # Type definitions
├── public/                    # Static assets
├── package.json              # Dependencies
└── README.md                 # Project documentation
```

## 🎨 Customization

### Brand Colors
The website uses a blue, black, and white color scheme. You can customize colors in:
- `src/app/globals.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind configuration

### Products
Update the product catalog in `src/data/products.ts`:
```typescript
export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 129999,
    // ... other properties
  }
];
```

### Contact Information
Update contact details in:
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/app/contact/page.tsx`
- `src/components/ui/WhatsAppFloat.tsx`

## 📱 Key Features Implementation

### Shopping Cart
- Persistent storage using Zustand
- Add/remove items with quantity management
- Real-time total calculation
- Toast notifications for actions

### Product Filtering
- Category filter (phones/accessories)
- Brand filter
- Price range filter
- Stock availability filter
- Search functionality
- Sorting options

### WhatsApp Integration
- Floating chat button
- Pre-filled message templates
- Mobile-optimized for direct app opening

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Optimized images and loading

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Traditional Hosting
1. Build for production: `npm run build`
2. Export static files: `npm run export`
3. Upload the `out` folder to your hosting provider

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+254700000000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```

## 📈 Performance Optimization

The website is optimized for:
- **Core Web Vitals**: Fast loading and interactivity
- **SEO**: Proper meta tags and structured data
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load on demand

## 🛡️ Security Features

- Secure payment processing integration ready
- Input validation and sanitization
- XSS protection
- CSRF protection
- Secure headers configuration

## 📞 Support & Contact

For questions about this project:
- **Email**: info@phonehub.co.ke
- **WhatsApp**: +254 700 000 000
- **Website**: [Your Website URL]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- UI inspiration from modern e-commerce platforms
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

---

**PhoneHub** - Your trusted partner for premium phones and accessories in Kenya.
