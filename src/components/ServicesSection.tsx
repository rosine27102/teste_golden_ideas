import { motion } from 'motion/react';
import { FileText, Laptop, BarChart3, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ServicesSectionProps {
  language: 'fr' | 'en';
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const content = {
    fr: {
      title: 'NOS SERVICES',
      subtitle: 'Des solutions complètes pour votre transformation digitale',
      services: [
        {
          id: 'dematerialisation',
          icon: FileText,
          title: 'Dématérialisation',
          description:
            'La dématérialisation est le processus de transformation des supports d\'information physiques (principalement le papier) en supports numériques. Il s\'agit de remplacer les documents papier par des fichiers électroniques qui peuvent être stockés, gérés et consultés sur des ordinateurs, des serveurs ou dans le cloud.',
          points: [
            'Documents administratifs et commerciaux : factures, contrats, bons de commande, bulletins de salaire',
            'Processus métiers : gestion des congés, notes de frais, workflow de validation',
            'Échanges d\'informations : courriers, formulaires',
            'Archivage : conservation numérique des documents à valeur probante',
          ],
        },
        {
          id: 'digitalisation',
          icon: Laptop,
          title: 'Digitalisation',
          description:
            'La digitalisation est le processus d\'intégration des technologies numériques dans tous les aspects d\'une entreprise ou d\'une organisation. Cela implique l\'utilisation de données et de technologies numériques pour transformer la façon dont les activités sont menées, les interactions avec les clients sont gérées et de nouvelles sources de revenus sont créées.',
          points: [],
        },
        {
          id: 'audit',
          icon: BarChart3,
          title: 'Audit de la Fonction Achat',
          description:
            'L\'audit d\'achat apporte une réelle solution dans la relation entre une société et ses fournisseurs et ses sous-traitants. Il vérifie si la sélection d\'un fournisseur correspond à son attente. Il permet également de revoir l\'exécution des composantes de la fonction achat.',
          details:
            'Grâce à la technologie et à l\'amélioration des processus, nous travaillons en sorte que votre service achats crée de la valeur pour votre entreprise et réduise les coûts dus aux pertes de temps, d\'énergie et de ressources.',
          points: [],
        },
        {
          id: 'formation',
          icon: Users,
          title: 'Formation',
          description: '',
          subsections: [
            {
              subtitle: 'MÉTHODE PCM',
              content:
                'C\'est une méthode universelle pour mieux communiquer, collaborer et réduire les conflits.',
              details:
                'Votre organisation souhaite améliorer les relations entre collaborateurs, entre collaborateurs et managers, ou avec vos clients dans le but de booster les relations du collectif pour accroitre la performance au sein de l\'entreprise ?',
              description:
                'Golden ideas hye en collaboration avec ProCom Training & Consulting, vous proposent des solutions personnalisées et axées sur l\'amélioration de vos relations à travers des ateliers créatifs et/ou des séances de coaching. Nous vous aidons à vous réaliser professionnellement et à être épanoui(e) personnellement, car tout commence avec vous.',
              question:
                'Comment se connecter authentiquement à l\'autre dans ce monde en perpétuel mouvement ? Et comment créer un environnement dans lequel votre équipe va se développer, s\'épanouir en s\'appuyant sur les talents de tous ?',
              pcm: 'Process Communication Model® (PCM) est le premier outil de décodage des interactions humaines. Avec votre équipe, vous pouvez apprendre à parler le langage de chacun et contribuer ensemble à un collectif qui se renforce grâce aux différences.',
            },
            {
              subtitle: 'LEADERSHIP',
              content: 'Contenu à pourvoir',
            },
          ],
          points: [],
        },
      ],
    },
    en: {
      title: 'OUR SERVICES',
      subtitle: 'Complete solutions for your digital transformation',
      services: [
        {
          id: 'dematerialisation',
          icon: FileText,
          title: 'Dematerialization',
          description:
            'Dematerialization is the process of transforming physical information media (mainly paper) into digital media. It involves replacing paper documents with electronic files that can be stored, managed and accessed on computers, servers or in the cloud.',
          points: [
            'Administrative and commercial documents: invoices, contracts, purchase orders, pay slips',
            'Business processes: leave management, expense reports, validation workflow',
            'Information exchanges: mail, forms',
            'Archiving: digital preservation of documents with probative value',
          ],
        },
        {
          id: 'digitalisation',
          icon: Laptop,
          title: 'Digitalization',
          description:
            'Digitalization is the process of integrating digital technologies into all aspects of a business or organization. This involves using data and digital technologies to transform how activities are conducted, customer interactions are managed, and new revenue streams are created.',
          points: [],
        },
        {
          id: 'audit',
          icon: BarChart3,
          title: 'Procurement Function Audit',
          description:
            'The procurement audit provides a real solution in the relationship between a company and its suppliers and subcontractors. It verifies whether the selection of a supplier meets expectations. It also allows for reviewing the execution of procurement function components.',
          details:
            'Through technology and process improvement, we work to ensure that your procurement department creates value for your business and reduces costs due to time, energy, and resource waste.',
          points: [],
        },
        {
          id: 'formation',
          icon: Users,
          title: 'Training',
          description: '',
          subsections: [
            {
              subtitle: 'PCM METHOD',
              content: 'A universal method to better communicate, collaborate and reduce conflicts.',
              details:
                'Does your organization want to improve relationships between employees, between employees and managers, or with your customers in order to boost collective relationships and increase performance within the company?',
              description:
                'Golden ideas hye in collaboration with ProCom Training & Consulting, offer you personalized solutions focused on improving your relationships through creative workshops and/or coaching sessions. We help you fulfill yourself professionally and be fulfilled personally, because everything starts with you.',
              question:
                'How to authentically connect with others in this constantly moving world? And how to create an environment in which your team will develop and thrive by relying on everyone\'s talents?',
              pcm: 'Process Communication Model® (PCM) is the first tool for decoding human interactions. With your team, you can learn to speak everyone\'s language and contribute together to a collective that is strengthened by differences.',
            },
            {
              subtitle: 'LEADERSHIP',
              content: 'Content to be provided',
            },
          ],
          points: [],
        },
      ],
    },
  };

  return (
    <section id="services" className="py-24 bg-white">
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

        <Tabs defaultValue="dematerialisation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-gray-100 p-2 rounded-xl h-auto">
            {content[language].services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex items-center justify-center gap-2 py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#FFD700] data-[state=active]:text-white rounded-lg transition-all"
              >
                <service.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {content[language].services.map((service, index) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl text-[#0a0a0a]">{service.title}</h3>
                </div>

                {service.description && (
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                )}

                {service.details && (
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">{service.details}</p>
                )}

                {service.points && service.points.length > 0 && (
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.subsections && (
                  <div className="space-y-8 mt-8">
                    {service.subsections.map((subsection, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#D4AF37]"
                      >
                        <h4 className="text-2xl mb-4 text-[#D4AF37]">{subsection.subtitle}</h4>
                        <p className="text-gray-700 mb-4">{subsection.content}</p>
                        {subsection.details && (
                          <p className="text-gray-700 mb-4">{subsection.details}</p>
                        )}
                        {subsection.description && (
                          <p className="text-gray-700 mb-4">{subsection.description}</p>
                        )}
                        {subsection.question && (
                          <p className="text-gray-700 mb-4 italic">{subsection.question}</p>
                        )}
                        {subsection.pcm && <p className="text-gray-700">{subsection.pcm}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
