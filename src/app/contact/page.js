import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Mango Bite Hotel & Restaurant',
  description: 'Get in touch with Mango Bite Hotel & Restaurant in Mandvi, Gujarat for room bookings and reservations.',
};

export default function Contact() {
  return (
    <div className="container section animate-fade-in-up">
      <h1 className="section-title">Contact Us</h1>
      
      <div style={{ position: 'relative', marginTop: '3rem' }}>
        {/* Camel sitting on the card */}
        <img src="/images/contact-camel-clean.png" alt="Decorative Camel" className="contact-graphic" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Contact Info */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Get in Touch</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            We'd love to hear from you. Whether you have a question about room availability, pricing, or our multi-cuisine menu, our team is ready to answer all your questions.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <MapPin style={{ color: 'var(--primary)' }} />
              <div>
                <strong>Address</strong>
                <p style={{ color: 'var(--text-muted)' }}>Mandvi Highway, Maska, Gujarat</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Phone style={{ color: 'var(--primary)' }} />
              <div>
                <strong>Phone</strong>
                <p style={{ color: 'var(--text-muted)' }}>+91 99999 99999 (Booking & Room Service)</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Mail style={{ color: 'var(--primary)' }} />
              <div>
                <strong>Email</strong>
                <p style={{ color: 'var(--text-muted)' }}>info@mangobitehotel.com</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form Placeholder */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Send us a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name</label>
              <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} placeholder="Your Name" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
              <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} placeholder="Your Email" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message</label>
              <textarea rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
