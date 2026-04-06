import { motion } from 'framer-motion';
import {
  Star,
  Quote,
  CheckCircle,
  TrendingUp,
  Users,
  ThumbsUp,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: '1',
    name: 'John Smith',
    avatar: 'JS',
    rating: 5,
    comment: 'Amazing experience buying my BMW through Roar Motors. The process was smooth, transparent, and I got a great deal. The team was professional and helpful throughout.',
    car: 'BMW 3 Series',
    date: 'March 2024',
    verified: true,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    avatar: 'SJ',
    rating: 5,
    comment: 'Sold my car in just 3 days! The valuation was fair and the entire process was hassle-free. Highly recommend to anyone looking to sell their car quickly.',
    car: 'Mercedes C-Class',
    date: 'February 2024',
    verified: true,
  },
  {
    id: '3',
    name: 'Michael Brown',
    avatar: 'MB',
    rating: 5,
    comment: 'The best car marketplace I\'ve used. Detailed listings, great photos, and responsive sellers. Found my dream Audi within a week!',
    car: 'Audi A4',
    date: 'January 2024',
    verified: true,
  },
  {
    id: '4',
    name: 'Emily Davis',
    avatar: 'ED',
    rating: 5,
    comment: 'Customer service is top-notch. They helped me with financing and made the whole buying process stress-free. Will definitely use again!',
    car: 'Tesla Model 3',
    date: 'December 2023',
    verified: true,
  },
  {
    id: '5',
    name: 'David Wilson',
    avatar: 'DW',
    rating: 5,
    comment: 'I was skeptical about buying a car online, but Roar Motors exceeded my expectations. The car was exactly as described and the delivery was prompt.',
    car: 'Porsche Cayenne',
    date: 'November 2023',
    verified: true,
  },
  {
    id: '6',
    name: 'Lisa Anderson',
    avatar: 'LA',
    rating: 5,
    comment: 'Fantastic platform for car enthusiasts. The comparison tools and detailed specs helped me make an informed decision. Love my new Lexus!',
    car: 'Lexus RX',
    date: 'October 2023',
    verified: true,
  },
];

const stats = [
  { icon: Users, value: '50,000+', label: 'Happy Customers' },
  { icon: ThumbsUp, value: '4.9/5', label: 'Average Rating' },
  { icon: TrendingUp, value: '98%', label: 'Would Recommend' },
];

export function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
            Testimonials
          </Badge>
          <h1 className="font-sora text-4xl font-bold mb-4">
            What Our Customers Say
          </h1>
          <p className="text-muted-foreground">
            Real stories from real customers who have experienced the Roar Motors difference
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-2xl border border-border"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-roar-red" />
              <p className="font-rajdhani text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 hover:border-roar-red/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-roar-red/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground mb-6">{testimonial.comment}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-roar-red to-roar-red-hover flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{testimonial.name}</span>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Purchased {testimonial.car}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="font-sora text-2xl font-bold mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-muted-foreground mb-6">
            Experience the Roar Motors difference today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">Browse Cars</Button>
            <Button variant="outline" className="btn-secondary">
              Sell Your Car
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
