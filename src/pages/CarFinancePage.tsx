import { motion } from 'framer-motion';
import {
  DollarSign,
  Shield,
  Clock,
  FileText,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: DollarSign,
    title: 'Flexible Monthly Payments',
    description:
      'Choose from a range of repayment terms designed to fit your budget and lifestyle.',
  },
  {
    icon: Shield,
    title: 'Trusted Lending Partners',
    description:
      'We work with reputable finance providers to secure competitive rates on your behalf.',
  },
  {
    icon: Clock,
    title: 'Fast Decisions',
    description:
      'Get a quick decision with a simple, digital application process and minimal paperwork.',
  },
  {
    icon: FileText,
    title: 'Transparent Agreements',
    description:
      'No hidden fees or surprises – every cost is clearly explained before you sign.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Choose Your Car',
    description:
      'Browse our inventory and pick the car you love. You can finance most vehicles listed on Roar Motors.',
  },
  {
    step: '02',
    title: 'Get a Finance Quote',
    description:
      'Tell us a few details about yourself and your budget, and we’ll show you indicative monthly payments.',
  },
  {
    step: '03',
    title: 'Apply & Drive Away',
    description:
      'Submit your application securely online. Once approved, complete the paperwork and collect your car.',
  },
];

const eligibility = [
  'You are at least 18 years old',
  'You are a UK resident',
  'You have a regular source of income',
  'You can provide proof of identity and address',
];

export function CarFinancePage() {
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
              Car Finance
            </Badge>
            <h1 className="font-sora text-4xl md:text-5xl font-bold mb-6">
              Flexible Finance for Your Next Car
            </h1>
            <p className="text-lg text-muted-foreground">
              Spread the cost of your next vehicle with simple, transparent finance options
              tailored around you.
            </p>
          </motion.div>
        </section>

        {/* Benefits */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
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

        {/* How it works + Eligibility */}
        <section className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              How It Works
            </Badge>
            <h2 className="font-sora text-3xl font-bold mb-4">Simple, Three-Step Process</h2>
            <p className="text-muted-foreground mb-6">
              We keep things straightforward so you can focus on choosing the right car,
              not worrying about the paperwork.
            </p>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 p-4 rounded-2xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-roar-red/10 text-roar-red flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-roar-red" />
              <h3 className="font-sora text-xl font-semibold">Basic Eligibility</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Every application is assessed individually, but most lenders will look for the
              following as a starting point:
            </p>
            <ul className="space-y-2 mb-6">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mb-4">
              Finance is subject to status and affordability checks. This page does not
              constitute financial advice.
            </p>
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
              Ready to Explore Finance Options?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Start by finding a car you love, then talk to us about the finance options
              that could work for you.
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
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
