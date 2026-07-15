import { Wifi, Car, Wind, ShieldAlert, Briefcase, HeartPulse, Droplet, Coffee, Eye, PhoneCall } from 'lucide-react';

export const metadata = {
  title: 'Facilities | Mango Bite Hotel & Restaurant',
  description: 'Explore the basic facilities, room amenities, health and wellness services, and common areas at Mango Bite Hotel.',
};

export default function Facilities() {
  const facilityCategories = [
    {
      category: 'Highlighted Amenities',
      icon: <Coffee size={24} />,
      items: ['Restaurant', 'Lounge (Cigar lounge)']
    },
    {
      category: 'Basic Facilities',
      icon: <Wifi size={24} />,
      items: ['Free Wi-Fi (Lobby)', 'Free Parking', 'Air Conditioning (Room controlled)', 'Laundry Service (Paid)', 'Smoke Detector (Lobby)']
    },
    {
      category: 'General Services',
      icon: <Briefcase size={24} />,
      items: ['Luggage Assistance', 'Reception']
    },
    {
      category: 'Health & Wellness',
      icon: <HeartPulse size={24} />,
      items: ['First-aid Services']
    },
    {
      category: 'Room Amenities',
      icon: <Droplet size={24} />,
      items: ['Bathtub (Some rooms)', 'Air Conditioning', 'Terrace (Some rooms)', 'Balcony (Some rooms)', 'Mineral Water (Additional charge)']
    },
    {
      category: 'Safety & Security',
      icon: <ShieldAlert size={24} />,
      items: ['Fire Extinguishers', 'CCTV']
    }
  ];

  return (
    <div className="container section animate-fade-in-up">
      <h1 className="section-title">Our Facilities</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {facilityCategories.map((cat, index) => (
          <div key={index} className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              {cat.icon}
              <h3 style={{ fontSize: '1.3rem', color: 'var(--dark)' }}>{cat.category}</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cat.items.map((item, i) => (
                <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
