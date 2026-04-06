import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'No seller fees', roar: true, competitor1: true, competitor2: false, competitor3: true },
  { name: 'Multiple offers for your car', roar: true, competitor1: false, competitor2: true, competitor3: false },
  { name: 'Free collection', roar: true, competitor1: false, competitor2: false, competitor3: true },
  { name: 'Entire sale from your home', roar: true, competitor1: false, competitor2: false, competitor3: false },
  { name: 'Sell & buy from one platform', roar: true, competitor1: true, competitor2: false, competitor3: false },
  { name: 'Expert car reviews', roar: true, competitor1: true, competitor2: false, competitor3: false },
  { name: '24/7 Customer support', roar: true, competitor1: false, competitor2: true, competitor3: true },
  { name: 'Price match guarantee', roar: true, competitor1: false, competitor2: false, competitor3: false },
];

const competitors = [
  { name: 'Roar Motors', key: 'roar', isPrimary: true },
  { name: 'Competitor A', key: 'competitor1', isPrimary: false },
  { name: 'Competitor B', key: 'competitor2', isPrimary: false },
  { name: 'Competitor C', key: 'competitor3', isPrimary: false },
];

export function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto"
    >
      {/* Desktop View */}
      <div className="hidden md:block min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          {/* Empty header for feature names column */}
          <div className="p-4" />

          {competitors.map((comp) => (
            <div
              key={comp.key}
              className={`p-4 rounded-xl text-center font-sora font-semibold ${
                comp.isPrimary
                  ? 'bg-gradient-to-r from-roar-red to-roar-red-hover text-white'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {comp.name}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="grid grid-cols-5 gap-4"
            >
              <div className="p-4 bg-card rounded-xl border border-border flex items-center">
                <span className="font-medium">{feature.name}</span>
              </div>
              {competitors.map((comp) => {
                const value = feature[comp.key as keyof typeof feature] as boolean;
                return (
                  <div
                    key={comp.key}
                    className={`p-4 rounded-xl flex items-center justify-center ${
                      comp.isPrimary
                        ? 'bg-roar-red/5'
                        : 'bg-muted/50'
                    }`}
                  >
                    {value ? (
                      <Check className={`w-6 h-6 ${comp.isPrimary ? 'text-roar-red' : 'text-green-500'}`} />
                    ) : (
                      <X className="w-6 h-6 text-muted-foreground/50" />
                    )}
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-card rounded-xl border border-border p-4"
          >
            <h4 className="font-sora font-semibold mb-4 text-foreground">{feature.name}</h4>
            <div className="space-y-3">
              {competitors.map((comp) => {
                const value = feature[comp.key as keyof typeof feature] as boolean;
                return (
                  <div key={comp.key} className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${comp.isPrimary ? 'text-roar-red font-semibold' : 'text-muted-foreground'}`}>
                      {comp.name}
                    </span>
                    {value ? (
                      <Check className={`w-5 h-5 ${comp.isPrimary ? 'text-roar-red' : 'text-green-500'}`} />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
