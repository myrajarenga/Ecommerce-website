import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { CartSidebar } from '@/components/ui/CartSidebar';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhoneHub - Premium Phones & Accessories Store',
  description: 'Discover the latest smartphones, accessories, and mobile technology. Fast delivery, genuine products, and excellent customer service in Kenya.',
  keywords: 'phones, smartphones, iPhone, Samsung, accessories, mobile, Kenya, electronics',
  authors: [{ name: 'PhoneHub' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'PhoneHub - Premium Phones & Accessories Store',
    description: 'Discover the latest smartphones, accessories, and mobile technology.',
    siteName: 'PhoneHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhoneHub - Premium Phones & Accessories Store',
    description: 'Discover the latest smartphones, accessories, and mobile technology.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <CartSidebar />
        <WhatsAppFloat />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#10B981',
                color: '#fff',
              },
            },
            error: {
              style: {
                background: '#EF4444',
                color: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
