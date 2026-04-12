import { motion } from 'framer-motion';
import {
  Car,
  DollarSign,
  Shield,
  FileText,
  Wrench,
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Car,
    title: 'Buy a Car',
    description: 'Browse thousands of verified premium vehicles. Find your dream car with our advanced search and filtering.',
    features: ['Verified listings', 'Price comparison', 'Test drive booking', 'Secure payments'],
    cta: 'Browse Cars',
    href: '/cars',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: DollarSign,
    title: 'Sell Your Car',
    description: 'List your car and reach thousands of potential buyers. Get the best market value for your vehicle.',
    features: ['Free listing', 'Instant valuation', 'Buyer verification', 'Fast payment'],
    cta: 'List Your Car',
    href: '/sell',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Shield,
    title: 'Car Insurance',
    description: 'Get comprehensive insurance coverage for your vehicle at competitive rates.',
    features: ['Multiple quotes', 'Instant coverage', '24/7 claims', 'No-claims bonus'],
    cta: 'Get Quote',
    href: '/services/insurance',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FileText,
    title: 'Car Finance',
    description: 'Flexible financing options to help you purchase your dream car with ease.',
    features: ['Low APR rates', 'Flexible terms', 'Quick approval', 'No hidden fees'],
    cta: 'Apply Now',
    href: '/services/finance',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Wrench,
    title: 'Part Exchange',
    description: 'Trade in your old car and get a great deal on your new purchase.',
    features: ['Fair valuation', 'Instant quote', 'Hassle-free process', 'Best prices'],
    cta: 'Get Valuation',
    href: '#',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: Calendar,
    title: 'Test Drive',
    description: 'Book a test drive for any car in our inventory and experience it firsthand.',
    features: ['Easy booking', 'Flexible timing', 'Multiple locations', 'No obligation'],
    cta: 'Book Now',
    href: '/cars',
    color: 'from-cyan-500 to-cyan-600',
  },
];

const whyChooseUs = [
  'Verified and inspected vehicles',
  'Transparent pricing with no hidden fees',
  'Secure payment processing',
  'Dedicated customer support',
  'Easy returns and refunds',
  'Comprehensive vehicle history reports',
];

export function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
            Our Services
          </Badge>
          <h1 className="font-sora text-4xl font-bold mb-4">
            Everything You Need for Your Car Journey
          </h1>
          <p className="text-muted-foreground">
            From buying and selling to financing and insurance, we've got you covered
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-roar-red/30 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-6">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-sora text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full btn-primary">
                  <Link to={service.href}>
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 md:mb-20"
        >
          <div>
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              Why Choose Us
            </Badge>
            <h2 className="font-sora text-3xl font-bold mb-4">
              The Roar Motors Advantage
            </h2>
            <p className="text-muted-foreground mb-8">
              We go above and beyond to ensure that every customer has an exceptional 
              experience when buying or selling a car through our platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-roar-red fill-roar-red" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <div className="w-full h-full bg-gradient-to-br from-roar-red/20 to-roar-red-hover/20 flex items-center justify-center">
                <Shield className="w-32 h-32 text-roar-red/30" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-roar-red to-roar-red-hover rounded-3xl px-6 py-10 md:p-12 text-center text-white"
        >
          <h2 className="font-sora text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Whether you're looking to buy, sell, or explore financing options, 
            we're here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-roar-red hover:bg-white/90"
              asChild
            >
              <Link to="/cars">Browse Cars</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/sell">Sell Your Car</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
