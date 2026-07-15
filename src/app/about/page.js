import FAQ from '@/components/FAQ';
import { Star } from 'lucide-react';

export const metadata = {
  title: 'About Us | Mango Bite Hotel & Restaurant',
  description: 'Learn about Mango Bite Hotel & Restaurant, our highly rated multi-cuisine restaurant, and our proximity to Mandvi Beach.',
};

export default function About() {
  const faqData = [
    {
      question: "How many types of rooms are available at THE MANGO BITE HOTEL & RESTAURANT in Mandvi Kutch?",
      answer: "At THE MANGO BITE HOTEL & RESTAURANT, we offer 3 room types tailored to meet the needs of every traveler. Check detailed room features, images, and the latest availability. Each room is designed to make your stay unforgettable."
    },
    {
      question: "How far is THE MANGO BITE HOTEL & RESTAURANT from the city center?",
      answer: "From City Center its 21.2 kms away."
    },
    {
      question: "What are the customer ratings for THE MANGO BITE HOTEL & RESTAURANT?",
      answer: "The overall rating for THE MANGO BITE HOTEL & RESTAURANT stands at 4.25 out of 5, as reviewed by 4 guests on MakeMyTrip. You can explore in-depth guest reviews and browse through photos shared by visitors directly on the MakeMyTrip platform."
    },
    {
      question: "What are the Check-In and Check-Out times of THE MANGO BITE HOTEL & RESTAURANT, Mandvi Kutch?",
      answer: "Check-In Time: 12 PM. Check-Out Time: 12 PM. Early check-ins and late check-outs are subject to availability."
    }
  ];

  return (
    <div className="container section">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingBottom: '3rem' }}>
        <h1 className="section-title">About Mango Bite</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Located on the Mandvi Highway in Maska, Gujarat, Mango Bite Hotel & Restaurant is a highly rated, pure-vegetarian property situated about 3.4 km from the serene Mandvi Beach. We pride ourselves on offering an exceptional stay and a popular multi-cuisine dining experience.
        </p>
      </div>

      {/* Reviews Section */}
      <div className="section" style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '3rem', marginBottom: '4rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Guest Reviews</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', marginBottom: '0.5rem' }}>
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" style={{ clipPath: 'inset(0 75% 0 0)' }} />
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>4.25 / 5 on MakeMyTrip</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section">
        <h2 className="section-title">Questions & Answers</h2>
        <FAQ faqData={faqData} />
      </div>
    </div>
  );
}
