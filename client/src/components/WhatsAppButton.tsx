import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const handleClick = () => {
    // Replace with your WhatsApp number
    window.open('https://wa.me/96812345678', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed h-14 w-14 rounded-full shadow-lg hover:shadow-xl z-50 transition-all duration-300 bg-green-600 text-white border-0"
      style={{ bottom: '1.25rem', right: '5.5rem' }}
      data-testid="button-whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
