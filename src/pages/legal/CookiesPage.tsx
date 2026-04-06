import { motion } from 'framer-motion';
import { Cookie, Settings, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

export function CookiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
              Legal
            </Badge>
            <h1 className="font-sora text-4xl font-bold mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: April 1, 2024
            </p>
          </div>

          {/* Cookie Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 mb-8"
          >
            <h2 className="font-sora text-xl font-semibold mb-4">Cookie Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div>
                  <p className="font-medium">Essential Cookies</p>
                  <p className="text-sm text-muted-foreground">
                    Required for the website to function properly
                  </p>
                </div>
                <Switch checked disabled />
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div>
                  <p className="font-medium">Analytics Cookies</p>
                  <p className="text-sm text-muted-foreground">
                    Help us improve our website by collecting usage data
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div>
                  <p className="font-medium">Marketing Cookies</p>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver relevant advertisements
                  </p>
                </div>
                <Switch />
              </div>
            </div>
            <Button className="w-full mt-4 btn-primary">
              <Settings className="w-4 h-4 mr-2" />
              Save Preferences
            </Button>
          </motion.div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-sora">
            <p>
              This Cookie Policy explains how Roar Motors uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies are 
              and why we use them, as well as your rights to control our use of them.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when 
              you visit a website. Cookies are widely used by website owners to make their websites 
              work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h2>Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are strictly necessary to provide you with services available through 
              our website and to use some of its features, such as access to secure areas. Because 
              these cookies are strictly necessary to deliver the website, you cannot refuse them 
              without impacting how our site functions.
            </p>

            <h3>Performance and Analytics Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which 
              pages visitors go to most often and if they receive error messages. These cookies 
              don't collect information that identifies a visitor. All information these cookies 
              collect is aggregated and therefore anonymous.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow our website to remember choices you make (such as your username, 
              language, or the region you're in) and provide enhanced, more personal features.
            </p>

            <h3>Targeting/Advertising Cookies</h3>
            <p>
              These cookies are used to deliver advertisements more relevant to you and your interests. 
              They are also used to limit the number of times you see an advertisement and help measure 
              the effectiveness of advertising campaigns.
            </p>

            <h2>How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your 
              cookie preferences by adjusting the settings above or through your browser settings.
            </p>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. 
              However, if you limit the ability of websites to set cookies, you may worsen your overall 
              user experience.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report 
              usage statistics of the website, deliver advertisements, and so on.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes to the cookies 
              we use or for other operational, legal, or regulatory reasons. Please revisit this 
              policy regularly to stay informed about our use of cookies.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please 
              contact us at <a href="mailto:privacy@roarmotors.com">privacy@roarmotors.com</a>.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Cookie, text: 'Cookie Compliant' },
                { icon: Shield, text: 'Privacy Protected' },
                { icon: Settings, text: 'Your Control' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-roar-red" />
                  <span className="text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
