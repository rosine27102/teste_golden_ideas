import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles, Target, Users, Award, Lightbulb, ChevronDown, Star, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  language: 'fr' | 'en';
}

export function HeroSection({ language }: HeroSectionProps) {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  
  const springConfig = { stiffness: 100, damping: 30 };
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const content = {
    fr: {
      hero: {
        company: 'GOLDEN IDEAS',
        tagline: 'HYE',
        subtitle: 'Votre Partenaire Stratégique en Transformation Digitale',
        description: 'Excellence • Innovation • Performance',
        cta: 'Découvrir Notre Univers',
        ctaSecondary: 'Explorer',
        scroll: 'Défiler',
      },
      values: {
        title: 'NOS VALEURS',
        subtitle: 'Les piliers de notre excellence',
        items: [
          { icon: Lightbulb, label: 'Innovation', desc: 'Technologie de pointe', color: 'from-amber-400 to-yellow-500' },
          { icon: Target, label: 'Responsabilité', desc: 'Engagement total', color: 'from-orange-400 to-red-500' },
          { icon: Users, label: "Esprit d'équipe", desc: 'Synergie parfaite', color: 'from-blue-400 to-indigo-500' },
          { icon: Sparkles, label: 'Engagement', desc: 'Dédication absolue', color: 'from-purple-400 to-pink-500' },
          { icon: Award, label: 'Excellence', desc: 'Qualité suprême', color: 'from-green-400 to-emerald-500' },
        ],
      },
      cta: {
        title: 'TRANSFORMEZ',
        subtitle: 'VOTRE VISION',
        action: 'EN RÉALITÉ DIGITALE',
        description: 'Vous avez une idée à digitaliser ou dématérialiser ?',
        button: 'Parlons-en Maintenant',
      },
      transformation: {
        title: 'GOLDEN IDEAS',
        subtitle: 'LA TRANSFORMATION',
        features: ['POSITIVE', 'ÉVIDENTE', 'POUR VOTRE ENTREPRISE'],
        description: 'Où l\'innovation rencontre l\'excellence',
      },
    },
    en: {
      hero: {
        company: 'GOLDEN IDEAS',
        tagline: 'HYE',
        subtitle: 'Your Strategic Partner in Digital Transformation',
        description: 'Excellence • Innovation • Performance',
        cta: 'Discover Our Universe',
        ctaSecondary: 'Explore',
        scroll: 'Scroll',
      },
      values: {
        title: 'OUR VALUES',
        subtitle: 'The pillars of our excellence',
        items: [
          { icon: Lightbulb, label: 'Innovation', desc: 'Cutting-edge tech', color: 'from-amber-400 to-yellow-500' },
          { icon: Target, label: 'Responsibility', desc: 'Total commitment', color: 'from-orange-400 to-red-500' },
          { icon: Users, label: 'Team Spirit', desc: 'Perfect synergy', color: 'from-blue-400 to-indigo-500' },
          { icon: Sparkles, label: 'Commitment', desc: 'Absolute dedication', color: 'from-purple-400 to-pink-500' },
          { icon: Award, label: 'Excellence', desc: 'Supreme quality', color: 'from-green-400 to-emerald-500' },
        ],
      },
      cta: {
        title: 'TRANSFORM',
        subtitle: 'YOUR VISION',
        action: 'INTO DIGITAL REALITY',
        description: 'Have an idea to digitalize or dematerialize?',
        button: 'Let\'s Talk Now',
      },
      transformation: {
        title: 'GOLDEN IDEAS',
        subtitle: 'THE TRANSFORMATION',
        features: ['POSITIVE', 'EVIDENT', 'FOR YOUR BUSINESS'],
        description: 'Where innovation meets excellence',
      },
    },
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative overflow-hidden" ref={sectionRef}>
      {/* Hero Principal - Ultra Premium */}
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Fond multi-couches avec parallax */}
        <div className="absolute inset-0">
          {/* Couche de base */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Image d'arrière-plan avec effet ken burns */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1607385404764-380a5e06c7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYnVzaW5lc3MlMjBza3lsaW5lfGVufDF8fHx8MTc2MDc3NjExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Premium Background"
              className="w-full h-full object-cover opacity-30"
            />
          </motion.div>

          {/* Overlays de gradient animés */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0"
          ></motion.div>

          {/* Grille de luxe animée */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

          {/* Particules dorées élaborées */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${
                    i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#D4AF37' : '#F4E4C1'
                  }, transparent)`,
                }}
                animate={{
                  y: [0, -100 - Math.random() * 100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Rayons de lumière */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute inset-0 opacity-10"
              style={{
                background: `linear-gradient(${90 + i * 36}deg, transparent 40%, rgba(212, 175, 55, 0.3) 50%, transparent 60%)`,
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Contenu Hero avec effet 3D */}
        <motion.div
          style={{ 
            opacity, 
            scale,
            rotateX: mousePosition.y * 0.05,
            rotateY: mousePosition.x * 0.05,
          }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center perspective-1000"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
           
            {/* Logo principal avec effet glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, type: 'spring', bounce: 0.4 }}
              className="relative mb-12"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] opacity-30"></div>
              </div>

              <div className="relative">
                <h1
                  className="text-7xl md:text-9xl lg:text-[12rem] bg-gradient-to-br from-[#FFD700] via-[#F4E4C1] to-[#D4AF37] bg-clip-text text-transparent mb-6 tracking-tighter leading-none"
                  style={{ 
                    fontWeight: 900,
                    textShadow: '0 0 80px rgba(212, 175, 55, 0.5)',
                  }}
                >
                  {content[language].hero.company}
                </h1>

                {/* Badge HYE avec animation */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(255, 215, 0, 0.3)',
                      '0 0 60px rgba(255, 215, 0, 0.6)',
                      '0 0 20px rgba(255, 215, 0, 0.3)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block px-12 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(90deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                    backgroundSize: '200% 100%',
                  }}
                >
                  <motion.div
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <span className="relative text-black text-3xl md:text-5xl tracking-[0.3em]" style={{ fontWeight: 900 }}>
                    {content[language].hero.tagline}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Sous-titre avec effet de machine à écrire visuel */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-3xl md:text-5xl text-white mb-6 max-w-5xl mx-auto leading-relaxed"
            >
              {content[language].hero.subtitle}
            </motion.h2>

            {/* Séparateur animé */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              {content[language].hero.description.split(' • ').map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.2 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-[#D4AF37] text-xl md:text-2xl tracking-wider">{item}</span>
                  {i < 2 && <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>}
                </motion.div>
              ))}
            </motion.div>

            {/* Boutons CTA ultra-premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="relative group overflow-hidden bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-black px-12 py-8 text-xl shadow-2xl shadow-[#D4AF37]/50 transition-all duration-500 border-2 border-[#FFD700]"
                  style={{ backgroundSize: '200% 100%' }}
                >
                  {/* Effet de brillance au survol */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center gap-3" style={{ fontWeight: 700 }}>
                    {content[language].hero.cta}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToNext}
                  variant="outline"
                  size="lg"
                  className="group px-12 py-8 text-xl border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 backdrop-blur-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    {content[language].hero.ctaSecondary}
                    <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Indicateur de scroll luxueux */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-center gap-3">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative"
            >
              <div className="w-10 h-16 border-3 border-[#D4AF37] rounded-full flex justify-center pt-4 backdrop-blur-sm bg-black/20">
                <motion.div
                  animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2.5 h-2.5 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-full"
                />
              </div>
              {/* Glow */}
              <div className="absolute inset-0 blur-xl bg-[#D4AF37]/30 rounded-full"></div>
            </motion.div>
            <span className="text-[#D4AF37] text-sm tracking-widest uppercase">{content[language].hero.scroll}</span>
          </div>
        </motion.div>

        {/* Vignette de bordure */}
        <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20"></div>
      </div>

      {/* Section Valeurs - Design moderne avec cartes 3D */}
      <div className="min-h-screen relative flex items-center justify-center py-32 overflow-hidden">
        {/* Fond sophistiqué */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black"></div>
        
        {/* Effet de lumière architecturale */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1634412114581-6376e49ef8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnbGFzc3xlbnwxfHx8fDE3NjA3NzYxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Architecture"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Grille de fond animée */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* En-tête de section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 1 }}
              className="inline-block mb-8"
            >
              <div className="flex items-center gap-4 px-8 py-4 rounded-full border-2 border-[#D4AF37]/30 backdrop-blur-xl bg-[#D4AF37]/5">
                <div className="w-3 h-3 rounded-full bg-[#FFD700] animate-pulse"></div>
                <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm">Excellence</span>
                <div className="w-3 h-3 rounded-full bg-[#FFD700] animate-pulse"></div>
              </div>
            </motion.div>

            <h2 className="text-6xl md:text-8xl mb-8 bg-gradient-to-r from-white via-[#F4E4C1] to-white bg-clip-text text-transparent" style={{ fontWeight: 900 }}>
              {content[language].values.title}
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]"
              />
              <Star className="w-6 h-6 text-[#D4AF37]" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]"
              />
            </div>

            <p className="text-2xl text-gray-400">{content[language].values.subtitle}</p>
          </motion.div>

          {/* Cartes de valeurs en 3D */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {content[language].values.items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, type: 'spring' }}
                whileHover={{ 
                  y: -20, 
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative perspective-1000"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden transform-gpu">
                  {/* Effet de brillance en diagonale */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%', y: '-100%' }}
                    whileHover={{ x: '100%', y: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Glow au survol */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>

                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Icône avec halo */}
                    <div className="relative mb-8">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}
                      >
                        <item.icon className="w-12 h-12 text-white" />
                      </motion.div>
                      {/* Halo animé */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-50`}
                      />
                    </div>

                    {/* Texte */}
                    <h3 className="text-2xl mb-3 text-white text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#FFD700] transition-all duration-300" style={{ fontWeight: 700 }}>
                      {item.label}
                    </h3>

                    <p className="text-gray-400 text-center text-sm leading-relaxed">{item.desc}</p>

                    {/* Indicateur du bas */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-b-3xl`}
                    />
                  </div>

                  {/* Coins décoratifs */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-xl"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/20 rounded-bl-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section CTA - Design cinématique */}
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Fond avec image abstraite */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1594896733292-9a77b5809c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYwNjc5NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Gold Abstract"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Orbes de lumière flottants */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 200 + Math.random() * 300,
              height: 200 + Math.random() * 300,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 215, 0, 0.2)'
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            {/* Titre principal avec effet 3D */}
            <motion.div
              className="mb-12"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.h2
                initial={{ opacity: 0, z: -100 }}
                whileInView={{ opacity: 1, z: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl mb-4 text-white"
                style={{ 
                  fontWeight: 900,
                  textShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)',
                }}
              >
                {content[language].cta.title}
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, z: -50 }}
                whileInView={{ opacity: 1, z: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent"
                style={{ 
                  fontWeight: 900,
                  textShadow: '0 0 80px rgba(212, 175, 55, 0.5)',
                }}
              >
                {content[language].cta.subtitle}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl mb-8 text-[#F4E4C1]"
                style={{ fontWeight: 700 }}
              >
                {content[language].cta.action}
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto"
            >
              {content[language].cta.description}
            </motion.p>

            {/* Bouton CTA mega-premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="relative group overflow-hidden px-20 py-10 text-2xl bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#F4E4C1] hover:to-[#FFD700] text-black border-4 border-[#FFD700]/50 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:shadow-[0_0_100px_rgba(255,215,0,0.8)] transition-all duration-500"
                  style={{ 
                    fontWeight: 900,
                    backgroundSize: '200% 100%',
                  }}
                >
                  {/* Effet de vague lumineuse */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      ],
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-4">
                    {content[language].cta.button}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-8 h-8" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section Transformation - Finale épique */}
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Fond noir profond */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Effet d'étoiles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Orbes géants animés */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#D4AF37]/20 via-[#FFD700]/10 to-transparent rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            {/* Logo géant en 3D */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, type: 'spring' }}
              className="text-8xl md:text-[12rem] lg:text-[16rem] mb-12"
              style={{
                fontWeight: 900,
                background: 'linear-gradient(180deg, #FFD700 0%, #D4AF37 50%, #B8941E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 20px 60px rgba(212, 175, 55, 0.6)',
              }}
            >
              {content[language].transformation.title}
            </motion.h2>

            {/* Sous-titre */}
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl mb-20 text-white/90"
              style={{ fontWeight: 600 }}
            >
              {content[language].transformation.subtitle}
            </motion.h3>

            {/* Features avec effet holographique */}
            <div className="space-y-10">
              {content[language].transformation.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 90 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.3, 
                    duration: 1,
                    type: 'spring',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateZ: index % 2 === 0 ? -2 : 2,
                  }}
                  className="inline-block mx-4"
                >
                  <div className="relative group cursor-pointer">
                    {/* Effet holographique */}
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.1))',
                          'linear-gradient(225deg, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.1))',
                          'linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.1))',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -inset-4 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="relative px-16 py-10 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border-2 border-[#D4AF37]/30 group-hover:border-[#FFD700] backdrop-blur-xl transition-all duration-500 overflow-hidden">
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      />

                      <span className="relative text-4xl md:text-6xl bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent group-hover:from-[#FFD700] group-hover:via-white group-hover:to-[#FFD700] transition-all duration-500" style={{ fontWeight: 900 }}>
                        {feature}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tagline finale */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="text-2xl md:text-3xl text-[#D4AF37] mt-20 tracking-wider"
            >
              {content[language].transformation.description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
