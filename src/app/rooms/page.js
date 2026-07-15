import RoomCard from '@/components/RoomCard';

export const metadata = {
  title: 'Our Rooms | Mango Bite Hotel & Restaurant',
  description: 'Discover the 3 luxurious room types available at Mango Bite Hotel & Restaurant in Mandvi Kutch.',
};

export default function Rooms() {
  return (
    <div className="container section animate-fade-in-up">
      <h1 className="section-title">Our Rooms</h1>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
        At Mango Bite Hotel & Restaurant, we offer 3 room types tailored to meet the needs of every traveler. Check detailed room features, images, and the latest availability. Each room is designed to make your stay unforgettable. Check-In Time: 12 PM. Check-Out Time: 12 PM.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        <RoomCard 
          title="Deluxe Room"
          description="A beautiful, well-appointed room featuring all basic modern amenities. Perfect for couples or single travelers looking for a cozy stay."
          amenities={['Air Conditioning', 'Free Wi-Fi', 'Mineral Water (Paid)']}
          imageSrc=""
          price="Starting from ₹2,500"
        />
        <RoomCard 
          title="Super Deluxe Room"
          description="Experience enhanced comfort with additional space. Some of these rooms come with a beautiful balcony for you to relax."
          amenities={['Balcony (Subject to availability)', 'Air Conditioning', 'Free Wi-Fi', 'Bathtub (Subject to availability)']}
          imageSrc=""
          price="Starting from ₹3,500"
        />
        <RoomCard 
          title="Suite Room"
          description="Our most luxurious offering with a private terrace and premium furnishings. A truly unforgettable experience."
          amenities={['Terrace', 'Bathtub', 'Lounge Access', 'Air Conditioning']}
          imageSrc=""
          price="Starting from ₹5,000"
        />
      </div>
    </div>
  );
}
