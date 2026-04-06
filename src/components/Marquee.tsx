import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

export function Marquee({ 
  items, 
  speed = 30,
  direction = 'left' 
}: MarqueeProps) {
  const isMobile = useIsMobile();
  // On mobile, use a very fast 2s loop duration
  const duration = isMobile ? 2 : speed;
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative py-8 bg-muted/30 overflow-hidden">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee Container */}
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          },
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-6 py-3 bg-card rounded-full border border-border hover:border-roar-red/50 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 bg-roar-red rounded-full" />
            <span className="font-sora font-semibold text-lg">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
