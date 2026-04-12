import { motion } from 'framer-motion';
import {
  Shield,
  FileText,
  PhoneCall,
  AlertTriangle,
  CheckCircle,
  Car,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const coverBenefits = [
  {
    icon: Shield,
    title: 'Comprehensive Protection',
    description:
      'Cover for accidental damage, fire, theft, vandalism, and more, depending on your chosen policy.',
  },
  {
    icon: Car,
    title: 'Courtesy Car Options',
    description:
      'Stay on the road with courtesy car options while your vehicle is being repaired after an insured event.',
  },
  {
    icon: AlertTriangle,
    title: 'Breakdown & Emergency Support',
    description:
      'Optional breakdown assistance and roadside support so you are never stranded for long.',
  },
  {
    icon: FileText,
    title: 'Clear Policy Documents',
    description:
      'Easy-to-read documentation with clear explanations of what is and isn’t covered.',
  },
];

const coverTypes = [
  'Comprehensive cover',
  'Third party, fire & theft',
  'Third party only',
  'Young driver and new driver options',
  'Specialist cover for performance and classic cars',
];

const howItWorks = [
  {
    step: '01',
    title: 'Tell Us About Your Car',
    description:
      'Share a few details about your vehicle, how you use it, and your driving history.',
  },
  {
    step: '02',
    title: 'Compare Quotes',
    description:
      'We work with trusted insurance partners to present you with competitive quotes.',
  },
  {
    step: '03',
    title: 'Choose & Get Covered',
    description:
      'Pick the cover that suits you best and activate your policy online in minutes.',
  },
];

export function CarInsurancePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Hero */}
        <section className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              Car Insurance
            </Badge>
            <h1 className="font-sora text-4xl md:text-5xl font-bold mb-6">
              Protect Your Car with the Right Cover
            </h1>
            <p className="text-lg text-muted-foreground">
              Find insurance options designed to keep you protected on every journey, with
              transparent cover and support when it matters most.
            </p>
          </motion.div>
        </section>

        {/* Benefits */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverBenefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border hover:border-roar-red/30 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-roar-red/10 text-roar-red flex-shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-sora text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cover types & process */}
        <section className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              Types of Cover
            </Badge>
            <h2 className="font-sora text-3xl font-bold mb-4">Choose the Protection You Need</h2>
            <p className="text-muted-foreground mb-6">
              Different drivers need different levels of protection. Explore the main types
              of cover typically available through our partners.
            </p>
            <ul className="space-y-2 mb-2">
              {coverTypes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground">
              Availability and exact terms depend on the insurer and your individual
              circumstances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-roar-red" />
              <h3 className="font-sora text-xl font-semibold">How It Works</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Getting covered is simple. Follow these steps to start exploring insurance
              options that could work for you.
            </p>
            <div className="space-y-4">
              {howItWorks.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 p-4 rounded-2xl bg-muted/40"
                >
                  <div className="w-10 h-10 rounded-full bg-roar-red/10 text-roar-red flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-sora font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="pb-4 md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-roar-red to-roar-red-hover rounded-3xl px-6 py-10 md:p-12 text-center text-white"
          >
            <h2 className="font-sora text-3xl font-bold mb-4">
              Ready to Explore Insurance Options?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Start by finding a car you love, then talk to us or our partners
              about the insurance options that could work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-roar-red hover:bg-white/90"
                asChild
              >
                <Link to="/cars">
                  Browse Cars
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-roar-red bg-white/95 hover:bg-white"
                asChild
              >
                <Link to="/contact">
                  Talk to Our Team
                  <PhoneCall className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
