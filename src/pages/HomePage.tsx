import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Car,
  Shield,
  Clock,
  Award,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  ChevronRight,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { useCarStore } from '@/store/carStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CarCard } from '@/components/cars/CarCard';
import { Marquee } from '@/components/Marquee';
import { ComparisonTable } from '@/components/ComparisonTable';
import { TestimonialCard } from '@/components/TestimonialCard';

const stats = [
  { icon: Car, value: '15,000+', label: 'Cars Listed' },
  { icon: Users, value: '50,000+', label: 'Happy Customers' },
  { icon: Shield, value: '100%', label: 'Verified Sellers' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

const features = [
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'Every car is thoroughly inspected and verified before listing.',
  },
  {
    icon: Clock,
    title: 'Quick Process',
    description: 'Buy or sell your car in as little as 24 hours.',
  },
  {
    icon: Award,
    title: 'Best Prices',
    description: 'Get the best market value for your vehicle.',
  },
  {
    icon: TrendingUp,
    title: 'Price Transparency',
    description: 'No hidden fees. Full price breakdown provided.',
  },
];

const brands = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla', 'Lexus',
  'Jaguar', 'Land Rover', 'Volvo', 'Maserati', 'Bentley', 'Rolls-Royce',
];

export function HomePage() {
  const navigate = useNavigate();
  const { featuredCars } = useCarStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,6,0,0.15),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
              scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-roar-red/10"
          />
          <motion.div
            animate={{ 
              rotate: -360,
            }}
            transition={{ 
              duration: 80, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-roar-red/5"
          />
        </div>

        <div className="relative container-premium pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-roar-red/10 text-roar-red border-roar-red/20">
                <Zap className="w-4 h-4 mr-2" />
                UK's #1 Premium Car Marketplace
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Find Your{' '}
              <span className="gradient-text">Dream Car</span>
              <br />
              <span className="text-foreground">Today</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Browse thousands of verified premium vehicles. Buy with confidence, 
              sell with ease. Your perfect car is just a click away.
            </motion.p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-card rounded-2xl border border-border shadow-premium">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by make, model, or keyword..."
                    className="border-0 bg-transparent focus-visible:ring-0 px-0"
                    onClick={() => navigate('/cars')}
                    readOnly
                  />
                </div>
                <Button 
                  className="btn-primary"
                  onClick={() => navigate('/cars')}
                >
                  Search Cars
                </Button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {['BMW', 'Mercedes', 'Audi', 'Tesla', 'Porsche'].map((brand) => (
                <button
                  key={brand}
                  onClick={() => navigate(`/cars?make=${brand}`)}
                  className="px-4 py-2 text-sm bg-muted hover:bg-muted/80 rounded-full transition-colors"
                >
                  {brand}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-roar-red" />
                <div className="font-rajdhani text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Marquee */}
      <Marquee items={brands} />

      {/* Featured Cars Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
                Featured
              </Badge>
              <h2 className="font-sora text-3xl md:text-4xl font-bold">
                Featured Vehicles
              </h2>
              <p className="text-muted-foreground mt-2">
                Handpicked premium cars just for you
              </p>
            </div>
            <Button
              variant="outline"
              className="btn-secondary w-fit"
              onClick={() => navigate('/cars')}
            >
              View All Cars
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.slice(0, 4).map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              Why Choose Us
            </Badge>
            <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4">
              The Roar Motors Advantage
            </h2>
            <p className="text-muted-foreground">
              We make buying and selling cars simple, transparent, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-roar-red/50 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-roar-red/10 rounded-xl mb-6 group-hover:bg-roar-red/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-roar-red" />
                </div>
                <h3 className="font-sora text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              Comparison
            </Badge>
            <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4">
              Why Choose Roar Motors?
            </h2>
            <p className="text-muted-foreground">
              See how we compare to other car marketplaces
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              Process
            </Badge>
            <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Buy or sell your car in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Browse & Compare',
                description: 'Search through thousands of verified listings with detailed specifications and photos.',
              },
              {
                step: '02',
                title: 'Connect & Negotiate',
                description: 'Contact sellers directly, schedule test drives, and negotiate the best price.',
              },
              {
                step: '03',
                title: 'Buy with Confidence',
                description: 'Complete your purchase with our secure payment and documentation support.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-8xl font-rajdhani font-bold text-roar-red/10 absolute -top-4 -left-2">
                  {item.step}
                </div>
                <div className="relative pt-12">
                  <h3 className="font-sora text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
                Testimonials
              </Badge>
              <h2 className="font-sora text-3xl md:text-4xl font-bold">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground mt-2">
                Real stories from real customers
              </p>
            </div>
            <Button
              variant="outline"
              className="btn-secondary w-fit"
              onClick={() => navigate('/testimonials')}
            >
              View All Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="relative bg-gradient-to-r from-roar-red to-roar-red-hover rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="font-sora text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Sell Your Car?
                </h2>
                <p className="text-white/80 max-w-xl">
                  Get an instant valuation and sell your car to thousands of verified buyers. 
                  Fast, secure, and hassle-free.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-roar-red hover:bg-white/90 font-buttons font-semibold"
                  onClick={() => navigate('/sell')}
                >
                  Sell Your Car <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-buttons font-semibold"
                  onClick={() => navigate('/cars')}
                >
                  Browse Cars
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="pb-16">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              'Verified Sellers',
              'Secure Payments',
              '24/7 Support',
              'Money Back Guarantee',
              'Free Test Drives',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-roar-red" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
