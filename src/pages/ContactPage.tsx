import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@roarmotors.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+44 123 456 7890',
    description: 'Mon-Fri 9am-6pm',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: '123 Motor Street, London',
    description: 'United Kingdom',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Sat: 9AM - 6PM',
    description: 'Sunday: Closed',
  },
];

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // When arriving with ?section=faq, automatically show and scroll to FAQs
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('section') === 'faq') {
      setShowFaq(true);
    }
  }, [location.search]);

  useEffect(() => {
    if (showFaq) {
      const el = document.getElementById('faq-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [showFaq]);

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
            Contact Us
          </Badge>
          <h1 className="font-sora text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground">
            Have a question or need assistance? We're here to help. 
            Reach out to us and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="bg-card rounded-2xl border border-border p-6 text-center hover:border-roar-red/30 transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-roar-red/10 rounded-xl mx-auto mb-4">
                <info.icon className="w-7 h-7 text-roar-red" />
              </div>
              <h3 className="font-semibold mb-1">{info.title}</h3>
              <p className="text-foreground font-medium mb-1">{info.value}</p>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl border border-border p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="font-sora text-2xl font-bold mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" className="mt-2" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="mt-2" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="mt-2 min-h-[150px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full btn-primary">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-500/10 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-sora text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.905625719007!2d-0.1277586842316866!3d51.50735097963553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1635959567400!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>

        {/* FAQ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 p-6 bg-muted rounded-2xl">
            <MessageSquare className="w-8 h-8 text-roar-red" />
            <div className="text-left">
              <p className="font-semibold">Have a quick question?</p>
              <p className="text-sm text-muted-foreground">
                Check our FAQ section for instant answers
              </p>
            </div>
            <Button
              variant="outline"
              className="ml-4"
              onClick={() => setShowFaq(true)}
            >
              View FAQs
            </Button>
          </div>
        </motion.div>

        {/* FAQ Section */}
        {showFaq && (
          <div id="faq-section" className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-sora text-2xl font-bold mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                Find quick answers to common questions about Roar Motors.
              </p>

              <Accordion type="single" collapsible className="w-full text-left">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>
                    How do I book a test drive?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can request a test drive from any car detail page by clicking
                    the "Book Test Drive" button and selecting your preferred date and
                    time. Our team will confirm your booking by email or phone.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger>
                    Can I sell my car through Roar Motors?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. Visit the "Sell Your Car" page, fill in your vehicle details,
                    and we&apos;ll provide an instant valuation. You can then book an
                    appointment to complete the sale.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger>
                    Do you offer finance or payment plans?
                  </AccordionTrigger>
                  <AccordionContent>
                    We work with trusted finance partners to offer flexible payment
                    options. On eligible cars you&apos;ll see finance information on the
                    listing, or you can contact us directly for personalised options.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                  <AccordionTrigger>
                    What should I do if I can&apos;t find the car I want?
                  </AccordionTrigger>
                  <AccordionContent>
                    Use the filters on the Buy a Car page to refine your search. If you
                    still can&apos;t find what you&apos;re looking for, send us a message with
                    your requirements and we&apos;ll help you source the right car.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
