import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/96812345678', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      data-testid="button-whatsapp-float"
      aria-label="Contact us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '88px',
        width: '56px',
        height: '56px',
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
      <MessageCircle style={{ color: 'white', width: '24px', height: '24px' }} />
    </button>
  );
}
