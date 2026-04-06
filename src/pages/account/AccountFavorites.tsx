import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Trash2, ArrowRight } from 'lucide-react';
import { useCarStore } from '@/store/carStore';
import { Button } from '@/components/ui/button';
import { CarCard } from '@/components/cars/CarCard';

export function AccountFavorites() {
  const navigate = useNavigate();
  const { featuredCars } = useCarStore();
  const [favorites, setFavorites] = useState(featuredCars.slice(0, 4));

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((car) => car.id !== id));
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-sora text-3xl font-bold mb-2">My Favorites</h1>
        <p className="text-muted-foreground">
          Cars you've saved for later
        </p>
      </motion.div>

      {favorites.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {favorites.map((car) => (
            <div key={car.id} className="relative">
              <CarCard car={car} />
              <button
                onClick={() => removeFavorite(car.id)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-destructive text-white hover:bg-destructive/90 transition-colors z-10"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center py-16 bg-muted rounded-2xl"
        >
          <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="font-sora text-xl font-semibold mb-2">No favorites yet</h3>
          <p className="text-muted-foreground mb-6">
            Start browsing and save cars you like
          </p>
          <Button
            className="btn-primary"
            onClick={() => navigate('/cars')}
          >
            Browse Cars
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
