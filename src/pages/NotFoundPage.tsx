import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-lg mx-auto"
        >
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto flex items-center justify-center bg-roar-red/10 rounded-full">
              <Car className="w-16 h-16 text-roar-red" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 flex items-center justify-center bg-card border-2 border-roar-red rounded-full font-rajdhani font-bold text-xl text-roar-red">
              404
            </div>
          </div>

          <h1 className="font-sora text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            Oops! It looks like the page you're looking for has driven off. 
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/cars">
                <Search className="w-4 h-4 mr-2" />
                Browse Cars
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Buy a Car', 'Sell Your Car', 'About Us', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 text-sm bg-muted hover:bg-muted/80 rounded-full transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
