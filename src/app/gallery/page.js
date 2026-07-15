export const metadata = {
  title: 'Gallery | Mango Bite Hotel & Restaurant',
  description: 'View photos of Mango Bite Hotel & Restaurant, our premium rooms, and facilities.',
};

export default function Gallery() {
  return (
    <div className="container section animate-fade-in-up">
      <h1 className="section-title">Photo Gallery</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>
        Take a glimpse into the luxurious experience that awaits you at Mango Bite.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {/* Placeholder images */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} style={{
            position: 'relative',
            height: '250px',
            backgroundColor: '#e2e8f0',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a0aec0',
            fontWeight: 'bold'
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(45deg, #fdfbf7, #fff0e6)',
              opacity: 0.5
            }}></div>
            <span style={{ zIndex: 1 }}>Gallery Image {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
