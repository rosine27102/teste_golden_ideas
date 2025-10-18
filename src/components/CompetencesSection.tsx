import { motion } from 'motion/react';
import { Code, Database, Globe, Rocket, Shield, Zap } from 'lucide-react';

interface CompetencesSectionProps {
  language: 'fr' | 'en';
}

export function CompetencesSection({ language }: CompetencesSectionProps) {
  const content = {
    fr: {
      title: 'NOS COMPÉTENCES',
      subtitle: 'Des expertises au service de votre transformation digitale',
      competences: [
        {
          icon: Globe,
          title: 'Digitalisation',
          description: 'Transformation numérique complète de vos processus métier',
        },
        {
          icon: Database,
          title: 'Gestion des Données',
          description: 'Maîtrise et valorisation de vos données stratégiques',
        },
        {
          icon: Shield,
          title: 'Sécurité & Conformité',
          description: 'Protection et conformité de vos systèmes d\'information',
        },
        {
          icon: Code,
          title: 'Développement',
          description: 'Solutions sur mesure adaptées à vos besoins spécifiques',
        },
        {
          icon: Rocket,
          title: 'Innovation',
          description: 'Technologies de pointe pour optimiser vos performances',
        },
        {
          icon: Zap,
          title: 'Automatisation',
          description: 'Optimisation de vos workflows et processus métier',
        },
      ],
    },
    en: {
      title: 'OUR SKILLS',
      subtitle: 'Expertise at the service of your digital transformation',
      competences: [
        {
          icon: Globe,
          title: 'Digitalization',
          description: 'Complete digital transformation of your business processes',
        },
        {
          icon: Database,
          title: 'Data Management',
          description: 'Mastery and valorization of your strategic data',
        },
        {
          icon: Shield,
          title: 'Security & Compliance',
          description: 'Protection and compliance of your information systems',
        },
        {
          icon: Code,
          title: 'Development',
          description: 'Custom solutions tailored to your specific needs',
        },
        {
          icon: Rocket,
          title: 'Innovation',
          description: 'Cutting-edge technologies to optimize your performance',
        },
        {
          icon: Zap,
          title: 'Automation',
          description: 'Optimization of your workflows and business processes',
        },
      ],
    },
  };

  return (
    <section id="competences" className="py-24 bg-gradient-to-br from-gray-50 to-white">
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content[language].subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].competences.map((competence, index) => (
            <motion.div
              key={competence.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/30"
            >
              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <competence.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl mb-4 text-[#0a0a0a] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {competence.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">{competence.description}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
