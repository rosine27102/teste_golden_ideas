import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

interface ContactSectionProps {
  language: 'fr' | 'en';
}

export function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const content = {
    fr: {
      title: 'CONTACT',
      subtitle: 'Contactez-nous pour discuter de votre projet',
      info: {
        email: 'contact@goldenideas.bf',
        address: 'Rue Charles Kaboré, Ouaga 2000',
        phone: '+226 78 44 66 66',
      },
      support: {
        title: 'AIDE ET SUPPORT',
        hours: 'Du lundi au Samedi 6 jours / 7 de 7H30 à 18H00',
        question: 'Comment pouvons-nous vous aider ?',
        description:
          "Nous proposons une variété de services dans l'univers du digital. N'hésitez pas à nous contacter si vous ne trouvez pas ce que vous cherchez.",
      },
      form: {
        name: 'Nom complet',
        email: 'Email',
        message: 'Message',
        submit: 'Envoyer le message',
      },
    },
    en: {
      title: 'CONTACT',
      subtitle: 'Contact us to discuss your project',
      info: {
        email: 'contact@goldenideas.bf',
        address: 'Rue Charles Kaboré, Ouaga 2000',
        phone: '+226 78 44 66 66',
      },
      support: {
        title: 'HELP AND SUPPORT',
        hours: 'Monday to Saturday, 6 days / 7 from 7:30 AM to 6:00 PM',
        question: 'How can we help you?',
        description:
          "We offer a variety of services in the digital universe. Don't hesitate to contact us if you can't find what you're looking for.",
      },
      form: {
        name: 'Full name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(language === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-[#0a0a0a]">{content[language].title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">{content[language].subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-[#0a0a0a]">Email</h4>
                  <a
                    href={`mailto:${content[language].info.email}`}
                    className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                  >
                    {content[language].info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-[#0a0a0a]">Adresse</h4>
                  <p className="text-gray-600">{content[language].info.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-[#0a0a0a]">Téléphone</h4>
                  <a
                    href={`tel:${content[language].info.phone}`}
                    className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                  >
                    {content[language].info.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#FFD700] p-8 rounded-2xl shadow-xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h3 className="text-2xl">{content[language].support.title}</h3>
              </div>
              <p className="mb-4">{content[language].support.hours}</p>
              <h4 className="text-xl mb-3">{content[language].support.question}</h4>
              <p className="text-white/90 leading-relaxed">{content[language].support.description}</p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    {content[language].form.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    {content[language].form.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    {content[language].form.message}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#B8941E] hover:to-[#D4AF37] text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {content[language].form.submit}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
