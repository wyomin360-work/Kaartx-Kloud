import { SiWhatsapp } from 'react-icons/si';

const message = 'Hi%20I%20want%20to%20know%20more%20about%20Kaartx%20Kloud';
const phone = '96898209353';

function getWhatsAppUrl() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return isMobile 
    ? `https://wa.me/${phone}?text=${message}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
}

export { getWhatsAppUrl };

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = getWhatsAppUrl();
      }}
      target="_blank"
      rel="noopener noreferrer"
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
        textDecoration: 'none',
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
    </a>
  );
}
