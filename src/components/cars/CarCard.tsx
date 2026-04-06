import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Fuel,
  Settings,
  Gauge,
  Calendar,
  MapPin,
  CheckCircle,
  Eye,
} from 'lucide-react';
import type { Car } from '@/store/carStore';
import { Badge } from '@/components/ui/badge';

interface CarCardProps {
  car: Car;
  showActions?: boolean;
}

export function CarCard({ car, showActions = true }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-GB').format(mileage);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-premium dark:hover:shadow-premium-dark transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={car.images[0] || '/cars/placeholder.jpg'}
          alt={`${car.make} ${car.model}`}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-roar-red/20 border-t-roar-red rounded-full animate-spin" />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {car.featured && (
            <Badge className="bg-roar-red text-white border-0">
              Featured
            </Badge>
          )}
          {car.promoted && (
            <Badge className="bg-amber-500 text-white border-0">
              Hot Deal
            </Badge>
          )}
          {car.originalPrice && (
            <Badge className="bg-green-500 text-white border-0">
              Save {formatPrice(car.originalPrice - car.price)}
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        {showActions && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm transition-colors hover:bg-white"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? 'fill-roar-red text-roar-red' : 'text-foreground'
              }`}
            />
          </button>
        )}

        {/* Condition Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge
            variant="secondary"
            className={`${
              car.condition === 'New'
                ? 'bg-green-500/90 text-white'
                : car.condition === 'Certified Pre-Owned'
                ? 'bg-blue-500/90 text-white'
                : 'bg-muted/90'
            }`}
          >
            {car.condition}
          </Badge>
        </div>

        {/* Views */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs">
          <Eye className="w-3 h-3" />
          {car.views}
        </div>
      </div>

      {/* Content */}
      <Link to={`/cars/${car.id}`} className="flex-1 flex flex-col p-5">
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-sora text-lg font-semibold line-clamp-1 group-hover:text-roar-red transition-colors">
              {car.make} {car.model}
            </h3>
            <p className="text-sm text-muted-foreground">{car.year}</p>
          </div>
          <div className="text-right">
            <p className="font-rajdhani text-xl font-bold text-roar-red">
              {formatPrice(car.price)}
            </p>
            {car.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </p>
            )}
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Fuel className="w-4 h-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Settings className="w-4 h-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Gauge className="w-4 h-4" />
            <span>{formatMileage(car.mileage)} mi</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{car.year}</span>
          </div>
        </div>

        {/* Location & Seller */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{car.location.city}</span>
          </div>
          <div className="flex items-center gap-2">
            {car.seller.verified && (
              <CheckCircle className="w-4 h-4 text-green-500" />
            )}
            <span className="text-sm text-muted-foreground">{car.seller.name}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
