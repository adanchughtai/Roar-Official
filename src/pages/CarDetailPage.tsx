import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  CheckCircle,
  Shield,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Car,
} from 'lucide-react';
import { useCarStore } from '@/store/carStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CarCard } from '@/components/cars/CarCard';

export function CarDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { cars, selectedCar, setSelectedCar, incrementViews } = useCarStore();
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const car = cars.find((c) => c.id === id);
      if (car) {
        setSelectedCar(car);
        incrementViews(car.id);
      }
    }
  }, [id, cars]);

  if (!selectedCar) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <Car className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
          <h2 className="font-sora text-2xl font-bold mb-2">Car Not Found</h2>
          <p className="text-muted-foreground mb-6">The car you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/cars')}>Browse Cars</Button>
        </div>
      </div>
    );
  }

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

  const relatedCars = cars
    .filter((c) => c.id !== selectedCar.id && c.make === selectedCar.make)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedCar.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedCar.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="container-premium py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to results
        </button>
      </div>

      {/* Main Content */}
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted mb-4"
            >
              <img
                src={selectedCar.images[currentImageIndex] || '/cars/placeholder.jpg'}
                alt={`${selectedCar.make} ${selectedCar.model}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation */}
              {selectedCar.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {selectedCar.featured && (
                  <Badge className="bg-roar-red text-white">Featured</Badge>
                )}
                <Badge
                  className={`${
                    selectedCar.condition === 'New'
                      ? 'bg-green-500'
                      : selectedCar.condition === 'Certified Pre-Owned'
                      ? 'bg-blue-500'
                      : 'bg-muted'
                  } text-white`}
                >
                  {selectedCar.condition}
                </Badge>
              </div>

              {/* Actions */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isFavorite ? 'fill-roar-red text-roar-red' : 'text-foreground'
                    }`}
                  />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm transition-colors hover:bg-white">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Thumbnails */}
            {selectedCar.images.length > 1 && (
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {selectedCar.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? 'border-roar-red'
                        : 'border-transparent hover:border-muted'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedCar.make} ${selectedCar.model} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="seller">Seller</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="font-sora text-2xl font-bold mb-4">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCar.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[
                      { icon: Calendar, label: 'Year', value: selectedCar.year },
                      { icon: Gauge, label: 'Mileage', value: `${formatMileage(selectedCar.mileage)} mi` },
                      { icon: Fuel, label: 'Fuel Type', value: selectedCar.fuelType },
                      { icon: Settings, label: 'Transmission', value: selectedCar.transmission },
                    ].map((item) => (
                      <div key={item.label} className="p-4 bg-muted rounded-xl">
                        <item.icon className="w-5 h-5 text-roar-red mb-2" />
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="specs">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h2 className="font-sora text-2xl font-bold mb-4">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Make', value: selectedCar.make },
                      { label: 'Model', value: selectedCar.model },
                      { label: 'Year', value: selectedCar.year },
                      { label: 'Body Type', value: selectedCar.bodyType },
                      { label: 'Fuel Type', value: selectedCar.fuelType },
                      { label: 'Transmission', value: selectedCar.transmission },
                      { label: 'Engine Size', value: selectedCar.engineSize || 'N/A' },
                      { label: 'Horsepower', value: selectedCar.horsepower ? `${selectedCar.horsepower} hp` : 'N/A' },
                      { label: 'Doors', value: selectedCar.doors },
                      { label: 'Seats', value: selectedCar.seats },
                      { label: 'Color', value: selectedCar.color },
                      { label: 'Mileage', value: `${formatMileage(selectedCar.mileage)} miles` },
                      { label: 'Previous Owners', value: selectedCar.previousOwners || 'N/A' },
                      { label: 'Service History', value: selectedCar.serviceHistory ? 'Yes' : 'No' },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between p-4 bg-muted rounded-xl"
                      >
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="features">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="font-sora text-2xl font-bold mb-4">Features & Options</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCar.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-3 bg-muted rounded-xl"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="seller">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-muted rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-roar-red to-roar-red-hover flex items-center justify-center text-white text-xl font-bold">
                      {selectedCar.seller.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-sora text-xl font-semibold">
                          {selectedCar.seller.name}
                        </h3>
                        {selectedCar.seller.verified && (
                          <Badge className="bg-green-500 text-white">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{selectedCar.seller.rating.toFixed(1)}</span>
                        <span className="text-muted-foreground">rating</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`tel:${selectedCar.seller.phone}`}
                      className="flex items-center gap-3 p-3 bg-card rounded-xl hover:bg-card/80 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-roar-red" />
                      <span>{selectedCar.seller.phone}</span>
                    </a>
                    <a
                      href={`mailto:${selectedCar.seller.email}`}
                      className="flex items-center gap-3 p-3 bg-card rounded-xl hover:bg-card/80 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-roar-red" />
                      <span>{selectedCar.seller.email}</span>
                    </a>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Price & Actions */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24 space-y-4"
            >
              {/* Price Card */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="mb-6">
                  <p className="text-muted-foreground mb-1">Price</p>
                  <p className="font-rajdhani text-4xl font-bold text-roar-red">
                    {formatPrice(selectedCar.price)}
                  </p>
                  {selectedCar.originalPrice && (
                    <p className="text-lg text-muted-foreground line-through">
                      {formatPrice(selectedCar.originalPrice)}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full btn-primary">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Seller
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Contact Seller</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <Input placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Input type="tel" placeholder="Your Phone" />
                        <Textarea
                          placeholder="Your message..."
                          defaultValue={`Hi, I'm interested in the ${selectedCar.make} ${selectedCar.model}. Please contact me.`}
                        />
                        <Button className="w-full btn-primary">Send Message</Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full btn-secondary">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Test Drive
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Book Test Drive</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <Input placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Input type="tel" placeholder="Your Phone" />
                        <Input type="date" />
                        <Button className="w-full btn-primary">Book Now</Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Seller
                  </Button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
                  <MapPin className="w-5 h-5 text-roar-red" />
                  <span>{selectedCar.location.city}, {selectedCar.location.country}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h4 className="font-sora font-semibold mb-4">Why Buy from Roar Motors?</h4>
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: 'Verified Seller' },
                    { icon: Clock, text: 'Quick Response' },
                    { icon: CheckCircle, text: 'Quality Guarantee' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-roar-red" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="mt-16">
            <h2 className="font-sora text-2xl font-bold mb-6">Similar Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
