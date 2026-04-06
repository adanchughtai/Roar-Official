import { motion } from 'framer-motion';
import { FileText, Scale, Gavel } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: April 1, 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-sora">
            <p>
              Welcome to Roar Motors. By accessing or using our website and services, you agree to be 
              bound by these Terms of Service. Please read them carefully before using our platform.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By creating an account, listing a vehicle, or using any part of our services, you 
              acknowledge that you have read, understood, and agree to be bound by these Terms of 
              Service and our Privacy Policy.
            </p>

            <h2>2. Eligibility</h2>
            <p>To use our services, you must:</p>
            <ul>
              <li>Be at least 18 years old</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
            </ul>

            <h2>3. Account Registration</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current 
              information. You are responsible for safeguarding your password and for all activities 
              that occur under your account.
            </p>

            <h2>4. Vehicle Listings</h2>
            <p>When listing a vehicle on our platform, you agree to:</p>
            <ul>
              <li>Provide accurate and truthful information about the vehicle</li>
              <li>Upload clear, recent photos that accurately represent the vehicle</li>
              <li>Disclose any known defects or issues with the vehicle</li>
              <li>Not list vehicles that you do not have the right to sell</li>
              <li>Respond to inquiries in a timely manner</li>
            </ul>

            <h2>5. Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our platform for any illegal purposes</li>
              <li>Post false, misleading, or fraudulent information</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access our platform</li>
              <li>Interfere with the proper functioning of our services</li>
            </ul>

            <h2>6. Fees and Payments</h2>
            <p>
              Some of our services may require payment of fees. All fees are non-refundable unless 
              otherwise stated. You agree to pay all applicable fees and taxes associated with your 
              use of our services.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on our platform, including text, graphics, logos, and software, is the 
              property of Roar Motors or its licensors and is protected by copyright and other 
              intellectual property laws.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without any warranties, express or implied. We do 
              not guarantee the accuracy of listings or the quality of vehicles sold through our platform.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Roar Motors shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your 
              use of our services.
            </p>

            <h2>10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violations 
              of these Terms of Service or for any other reason at our sole discretion.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws 
              of the United Kingdom, without regard to its conflict of law provisions.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We may modify these Terms of Service at any time. We will notify you of significant 
              changes by posting the updated terms on our website.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@roarmotors.com">legal@roarmotors.com</a>.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: FileText, text: 'Transparent Terms' },
                { icon: Scale, text: 'Fair Practice' },
                { icon: Gavel, text: 'Legal Compliance' },
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
