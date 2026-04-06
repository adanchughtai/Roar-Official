import { motion } from 'framer-motion';
import {
  Car,
  Users,
  Shield,
  Award,
  TrendingUp,
  Heart,
  Target,
  Globe,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '15K+', label: 'Cars Listed', icon: Car },
  { value: '50K+', label: 'Happy Customers', icon: Users },
  { value: '99%', label: 'Satisfaction Rate', icon: Heart },
  { value: '10+', label: 'Years Experience', icon: Award },
];

const values = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We believe in complete honesty. Every car is thoroughly inspected and all information is disclosed upfront.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do. We strive to exceed expectations at every touchpoint.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We constantly evolve our platform and services to provide the best possible experience.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'We are committed to promoting sustainable practices in the automotive industry.',
  },
];

const team = [
  { name: 'Muhammad Arsal Shahzad', role: 'Director', image: '/team/team-1.jpg' },
  { name: 'Rumman Haider', role: 'Head of Operations', image: '/team/rumman.jpg' },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="container-premium mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
            About Us
          </Badge>
          <h1 className="font-sora text-4xl md:text-5xl font-bold mb-6">
            Revolutionizing the Way You Buy and Sell Cars
          </h1>
          <p className="text-lg text-muted-foreground">
            Roar Motors is the UK's premier marketplace for premium vehicles. 
            We connect buyers and sellers with transparency, trust, and exceptional service.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 py-12 md:py-16 mb-16 md:mb-20">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-roar-red" />
                <p className="font-rajdhani text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container-premium mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              Our Mission
            </Badge>
            <h2 className="font-sora text-3xl font-bold mb-4">
              Making Car Trading Simple and Transparent
            </h2>
            <p className="text-muted-foreground mb-6">
              At Roar Motors, we believe that buying or selling a car should be an 
              enjoyable experience, not a stressful one. That's why we've built a 
              platform that puts transparency and trust at its core.
            </p>
            <p className="text-muted-foreground mb-6">
              Every vehicle on our platform undergoes a rigorous verification process. 
              We provide detailed histories, professional inspections, and fair pricing 
              to ensure that both buyers and sellers can transact with confidence.
            </p>
            <div className="flex items-center gap-4">
              <Target className="w-10 h-10 text-roar-red" />
              <div>
                <p className="font-semibold">Our Goal</p>
                <p className="text-sm text-muted-foreground">
                  To become the most trusted automotive marketplace in the UK
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
              <img
                src="/about/mission.jpg"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container-premium mb-16 md:mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
            Our Values
          </Badge>
          <h2 className="font-sora text-3xl font-bold mb-4">
            What We Stand For
          </h2>
          <p className="text-muted-foreground">
            Our core values guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-card rounded-2xl border border-border hover:border-roar-red/30 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-roar-red/10 rounded-xl flex-shrink-0">
                <value.icon className="w-6 h-6 text-roar-red" />
              </div>
              <div>
                <h3 className="font-sora text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-premium mb-16 md:mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
            Our Team
          </Badge>
          <h2 className="font-sora text-3xl font-bold mb-4">
            Meet the People Behind Roar Motors
          </h2>
          <p className="text-muted-foreground">
            A dedicated team passionate about transforming the car buying experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const container = target.parentElement;
                    if (container) {
                      container.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-roar-red/20 to-roar-red-hover/20 flex items-center justify-center"><span class="font-sora text-4xl font-bold text-roar-red">${member.name.split(' ').map(n => n[0]).join('')}</span></div>`;
                    }
                  }}
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-premium pb-4 md:pb-0">
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
            Join thousands of satisfied customers who have found their perfect car through Roar Motors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-roar-red hover:bg-white/90"
            >
              Browse Cars
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Sell Your Car
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
