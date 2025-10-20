import { SiWhatsapp } from 'react-icons/si';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/96898209353', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      data-testid="button-whatsapp-float"
      aria-label="Contact us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
    >
      <SiWhatsapp style={{ color: 'white', fontSize: '24px' }} />
    </button>
  );
}
