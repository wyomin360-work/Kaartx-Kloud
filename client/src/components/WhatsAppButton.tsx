import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const handleClick = () => {
    console.log('WhatsApp button clicked');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-glow md:hidden z-40"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
