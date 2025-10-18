import { motion } from 'motion/react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.jpeg';

interface FooterProps {
  language: 'fr' | 'en';
}

export function Footer({ language }: FooterProps) {
  const content = {
    fr: {
      tagline: 'Votre partenaire pour la transformation digitale',
      rights: 'Tous droits réservés.',
      links: {
        title: 'Liens Rapides',
        items: ['Accueil', 'À Propos', 'Compétences', 'Services', 'Contact'],
      },
      contact: {
        title: 'Contact',
        email: 'contact@goldenideas.bf',
        address: 'Rue Charles Kaboré, Ouaga 2000',
        phone: '+226 78 44 66 66',
      },
      social: 'Suivez-nous',
    },
    en: {
      tagline: 'Your partner for digital transformation',
      rights: 'All rights reserved.',
      links: {
        title: 'Quick Links',
        items: ['Home', 'About', 'Skills', 'Services', 'Contact'],
      },
      contact: {
        title: 'Contact',
        email: 'contact@goldenideas.bf',
        address: 'Rue Charles Kaboré, Ouaga 2000',
        phone: '+226 78 44 66 66',
      },
      social: 'Follow us',
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center shadow-lg">
                           <img
                             src={logo}
                             alt="Logo Golden Ideas"
                             className="w-10 h-10 object-contain rounded-lg"
                           />
                         </div>
              <div>
                <h3 className="text-xl">Golden Ideas</h3>
                <p className="text-sm text-[#D4AF37]">HYE</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">{content[language].tagline}</p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#FFD700] flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg mb-4 text-[#D4AF37]">{content[language].links.title}</h4>
            <ul className="space-y-2">
              {content[language].links.items.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${['accueil', 'apropos', 'competences', 'services', 'contact'][index]}`}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg mb-4 text-[#D4AF37]">{content[language].contact.title}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href={`mailto:${content[language].contact.email}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {content[language].contact.email}
                </a>
              </li>
              <li>{content[language].contact.address}</li>
              <li>
                <a
                  href={`tel:${content[language].contact.phone}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {content[language].contact.phone}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter or Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg mb-4 text-[#D4AF37]">{content[language].social}</h4>
            <p className="text-gray-400 mb-4">
              {language === 'fr'
                ? 'Restez informé de nos dernières actualités et services.'
                : 'Stay informed about our latest news and services.'}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"></div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Golden Ideas HYE. {content[language].rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
