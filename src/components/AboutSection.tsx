import { motion } from 'motion/react';
import { Building2, Heart, Zap, Factory, Sprout, Users as UsersIcon, Mountain, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutSectionProps {
  language: 'fr' | 'en';
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    fr: {
      title: 'À PROPOS',
      description:
        "GOLDEN IDEAS HYE est un acteur de la transformation des performances des entreprises qui ambitionnent de se positionner comme le partenaire stratégique de ses clients en les accompagnants dans la dématérialisation, la digitalisation, la formation, la maitrise et la valorisation de leurs données.",
      interventionTitle: 'Nous intervenons dans :',
      sectors: [
        { icon: Building2, label: "L'industrie financière" },
        { icon: Heart, label: 'La médecine' },
        { icon: Zap, label: "L'énergie" },
        { icon: Sprout, label: "L'environnement" },
        { icon: Factory, label: "L'agro-alimentaire" },
        { icon: UsersIcon, label: 'Les organisations' },
        { icon: Mountain, label: 'Les mines' },
        { icon: GraduationCap, label: 'La formation' },
      ],
    },
    en: {
      title: 'ABOUT US',
      description:
        'GOLDEN IDEAS HYE is a key player in business performance transformation, positioning itself as a strategic partner to its clients by supporting them in dematerialization, digitalization, training, data management and valorization.',
      interventionTitle: 'We work in:',
      sectors: [
        { icon: Building2, label: 'Financial Industry' },
        { icon: Heart, label: 'Medicine' },
        { icon: Zap, label: 'Energy' },
        { icon: Sprout, label: 'Environment' },
        { icon: Factory, label: 'Agro-food' },
        { icon: UsersIcon, label: 'Organizations' },
        { icon: Mountain, label: 'Mining' },
        { icon: GraduationCap, label: 'Training' },
      ],
    },
  };

  const sectorImages = [
    'https://images.unsplash.com/photo-1726065235158-d9c3f817f331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNzAzNjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1758691463203-cce9d415b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYwNzIwMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzYwNzc1NjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NjA3NzU2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNzc1NjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1758691736872-61a1f75fe2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjA2OTA5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1593437955835-fc8c51725430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYwNzc1NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1568209865332-a15790aed756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMGdvbGR8ZW58MXx8fHwxNzYwNzc1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-8 text-[#0a0a0a]">{content[language].title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-12"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {content[language].description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-center mb-12 text-[#D4AF37]">
            {content[language].interventionTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content[language].sectors.map((sector, index) => (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={sectorImages[index]}
                    alt={sector.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <sector.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-white text-lg text-center">{sector.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
