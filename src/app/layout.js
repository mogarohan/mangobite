import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata = {
  title: 'Mango Bite Hotel & Restaurant | Mandvi, Gujarat',
  description: 'Experience premium stay and pure-vegetarian multi-cuisine dining at Mango Bite Hotel & Restaurant, Maska, Gujarat. Just 3.4 km from Mandvi Beach.',
  keywords: 'Mango Bite Hotel, Mandvi Kutch, pure veg restaurant Mandvi Beach, best hotel Mandvi, Maska Gujarat hotel, multi-cuisine restaurant',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
