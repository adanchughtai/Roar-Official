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
  ArrowRight,
} from 'lucide-react';
import type { Car } from '@/store/carStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CarListItemProps {
  car: Car;
}

export function CarListItem({ car }: CarListItemProps) {
  const [isFavorite, setIsFavorite] = useState(false);

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
      whileHover={{ x: 4 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-roar-red/50 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative md:w-72 aspect-[4/3] md:aspect-auto overflow-hidden bg-muted flex-shrink-0">
          <img
            src={car.images[0] || '/cars/placeholder.jpg'}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {car.featured && (
              <Badge className="bg-roar-red text-white border-0">
                Featured
              </Badge>
            )}
            {car.condition === 'New' && (
              <Badge className="bg-green-500 text-white border-0">
                New
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
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
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-sora text-xl font-semibold group-hover:text-roar-red transition-colors">
                  {car.make} {car.model}
                </h3>
                <p className="text-muted-foreground">{car.year} • {car.bodyType}</p>
              </div>
              <div className="text-right">
                <p className="font-rajdhani text-2xl font-bold text-roar-red">
                  {formatPrice(car.price)}
                </p>
                {car.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through">
                    {formatPrice(car.originalPrice)}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {car.description}
            </p>

            {/* Specs */}
            <div className="flex flex-wrap gap-4 mb-4">
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{car.location.city}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                <span>{car.views} views</span>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {car.features.slice(0, 4).map((feature) => (
                <Badge key={feature} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              {car.seller.verified && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
              <span className="text-sm text-muted-foreground">{car.seller.name}</span>
            </div>
            <Button asChild className="btn-primary">
              <Link to={`/cars/${car.id}`}>
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
