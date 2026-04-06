import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Car,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const footerLinks = {
  services: [
    { name: 'Buy a Car', href: '/cars' },
    { name: 'Sell Your Car', href: '/sell' },
    { name: 'Car Finance', href: '/services/finance' },
    { name: 'Car Insurance', href: '/services/insurance' },
    { name: 'Part Exchange', href: '/services/part-exchange' },
    { name: 'Test Drive', href: '/services/test-drive' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="relative bg-roar-dark text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-roar-dark via-roar-dark-grey to-roar-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-roar-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-roar-red/5 rounded-full blur-3xl" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-premium py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-roar-red to-roar-red-hover rounded-xl">
                  <Car className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sora font-bold text-2xl tracking-tight">
                    ROAR
                  </span>
                  <span className="text-xs -mt-1 text-white/60 tracking-widest">
                    MOTORS
                  </span>
                </div>
              </Link>
              
              <p className="text-white/60 mb-6 max-w-sm">
                Your trusted destination for premium vehicles. We connect buyers 
                and sellers with transparency, trust, and exceptional service.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:info@roarmotors.com"
                  className="flex items-center gap-3 text-white/60 hover:text-roar-red transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@roarmotors.com</span>
                </a>
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-3 text-white/60 hover:text-roar-red transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+44 123 456 7890</span>
                </a>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>123 Motor Street, London, UK</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-roar-red hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Mobile Links (Accordion) */}
              <div className="mt-10 md:hidden">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services">
                    <AccordionTrigger>Services</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {footerLinks.services.map((link) => (
                          <li key={link.name}>
                            <Link
                              to={link.href}
                              className="text-white/60 hover:text-roar-red transition-colors"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="company">
                    <AccordionTrigger>Company</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {footerLinks.company.map((link) => (
                          <li key={link.name}>
                            <Link
                              to={link.href}
                              className="text-white/60 hover:text-roar-red transition-colors"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="support">
                    <AccordionTrigger>Support</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {footerLinks.support.map((link) => (
                          <li key={link.name}>
                            <Link
                              to={link.href}
                              className="text-white/60 hover:text-roar-red transition-colors"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Links Columns */}
            <div className="hidden md:grid lg:col-span-8 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h4 className="font-sora font-semibold text-lg mb-4">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-roar-red transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-sora font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-roar-red transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-sora font-semibold text-lg mb-4">Support</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-roar-red transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-roar-border-dark">
          <div className="container-premium py-6">
            <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 text-center md:text-left">
              <p className="text-white/40 text-sm">
                &copy; {new Date().getFullYear()} Roar Motors. All rights reserved.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
                <Link
                  to="/terms"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/cookies"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  Cookies
                </Link>
              </div>

              <a
                href="https://www.inversestudios.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-white/40 hover:text-roar-red text-sm transition-colors"
              >
                <span>Made with</span>
                <Heart className="w-4 h-4 text-roar-red fill-roar-red" />
                <span>by</span>
                <span className="font-semibold">Inverse Studios</span>
              </a>
            </div>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="container-premium pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="font-sora text-[8vw] md:text-[6vw] font-bold text-white/[0.03] tracking-wider select-none">
              INVERSE STUDIOS
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
