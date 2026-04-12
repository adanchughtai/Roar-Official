import { motion } from 'framer-motion';
import whatsappLogo from '../../whatsapplogo.png';

export function WhatsAppButton() {
  const phoneNumber = '441234567890'; // Replace with actual number
  const message = 'Hello! I have a question about Roar Motors.';

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 lg:bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center overflow-hidden transition-all hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-10 h-10 object-contain"
        aria-hidden="true"
      />
    </motion.a>
  );
}
