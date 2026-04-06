import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: April 1, 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-sora">
            <p>
              At Roar Motors, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other 
                contact details you provide when creating an account or contacting us.
              </li>
              <li>
                <strong>Vehicle Information:</strong> Details about vehicles you list, including make, 
                model, year, mileage, and photos.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website, 
                including pages visited, time spent, and features used.
              </li>
              <li>
                <strong>Device Information:</strong> IP address, browser type, operating system, 
                and device identifiers.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To process transactions and send related information</li>
              <li>To communicate with you about your account and our services</li>
              <li>To improve our website and user experience</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in operating our website</li>
              <li>Other users when you engage in transactions (limited information)</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience. 
              You can control cookies through your browser settings.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@roarmotors.com">privacy@roarmotors.com</a>.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Shield, text: 'GDPR Compliant' },
                { icon: CheckCircle, text: 'Data Protection' },
                { icon: Shield, text: 'Secure Encryption' },
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
