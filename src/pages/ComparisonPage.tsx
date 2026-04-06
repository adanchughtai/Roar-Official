import { motion } from 'framer-motion';
import {
  Check,
  X,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  { name: 'No seller fees', roar: true, competitor1: true, competitor2: false, competitor3: true },
  { name: 'Multiple offers for your car', roar: true, competitor1: false, competitor2: true, competitor3: false },
  { name: 'Free collection', roar: true, competitor1: false, competitor2: false, competitor3: true },
  { name: 'Entire sale from your home', roar: true, competitor1: false, competitor2: false, competitor3: false },
  { name: 'Sell & buy from one platform', roar: true, competitor1: true, competitor2: false, competitor3: false },
  { name: 'Expert car reviews', roar: true, competitor1: true, competitor2: false, competitor3: false },
  { name: '24/7 Customer support', roar: true, competitor1: false, competitor2: true, competitor3: true },
  { name: 'Price match guarantee', roar: true, competitor1: false, competitor2: false, competitor3: false },
  { name: 'Free vehicle history report', roar: true, competitor1: true, competitor2: false, competitor3: true },
  { name: 'Test drive booking', roar: true, competitor1: false, competitor2: true, competitor3: false },
  { name: 'Secure payment processing', roar: true, competitor1: true, competitor2: true, competitor3: true },
  { name: 'Finance options available', roar: true, competitor1: false, competitor2: false, competitor3: true },
];

const competitors = [
  { name: 'Roar Motors', key: 'roar', isPrimary: true },
  { name: 'Competitor A', key: 'competitor1', isPrimary: false },
  { name: 'Competitor B', key: 'competitor2', isPrimary: false },
  { name: 'Competitor C', key: 'competitor3', isPrimary: false },
];

export function ComparisonPage() {
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
            Comparison
          </Badge>
          <h1 className="font-sora text-4xl font-bold mb-4">
            Why Choose Roar Motors?
          </h1>
          <p className="text-muted-foreground">
            See how we compare to other car marketplaces and why we're the best choice
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="overflow-x-auto mb-16"
        >
          <div className="min-w-[800px] bg-card rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 p-4 bg-muted">
              {competitors.map((comp) => (
                <div
                  key={comp.key}
                  className={`p-4 rounded-xl text-center font-sora font-semibold ${
                    comp.isPrimary
                      ? 'bg-gradient-to-r from-roar-red to-roar-red-hover text-white'
                      : 'bg-card text-muted-foreground'
                  }`}
                >
                  {comp.name}
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="divide-y divide-border">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center font-medium">
                    {feature.name}
                  </div>
                  {competitors.map((comp) => {
                    const value = feature[comp.key as keyof typeof feature] as boolean;
                    return (
                      <div
                        key={comp.key}
                        className="flex items-center justify-center"
                      >
                        {value ? (
                          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                            comp.isPrimary ? 'bg-roar-red/10' : 'bg-green-500/10'
                          }`}>
                            <Check className={`w-5 h-5 ${comp.isPrimary ? 'text-roar-red' : 'text-green-500'}`} />
                          </div>
                        ) : (
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted">
                            <X className="w-5 h-5 text-muted-foreground/50" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              title: 'More Features',
              description: 'We offer more features and services than any other platform',
              stat: '12/12',
            },
            {
              title: 'Better Value',
              description: 'No hidden fees and competitive pricing for all our services',
              stat: '0%',
            },
            {
              title: 'Trusted Platform',
              description: 'Verified sellers and secure transactions every time',
              stat: '50K+',
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-2xl border border-border p-6 text-center"
            >
              <p className="font-rajdhani text-4xl font-bold text-roar-red mb-2">
                {benefit.stat}
              </p>
              <h3 className="font-sora text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-roar-red to-roar-red-hover rounded-3xl p-12 text-center text-white"
        >
          <h2 className="font-sora text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join thousands of satisfied customers who have chosen Roar Motors 
            for their car buying and selling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-roar-red hover:bg-white/90"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
