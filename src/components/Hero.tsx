import React, { useState, useEffect } from 'react';
import { Truck, ShoppingBag, Leaf, Package } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallaxPosition, setParallaxPosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(0);
  
  // Animation au chargement
  useEffect(() => {
    setIsLoaded(true);
    
    // Gestion du parallaxe
    const handleMouseMove = (e) => {
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      setParallaxPosition({ x, y });
    };
    
    // Gestion du défilement
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.min(scrollTop / 500, 1);
      setScrolled(scrollPercentage);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white py-24 md:py-36 overflow-hidden">
      {/* Éléments décoratifs avec parallaxe */}
      <div className="absolute inset-0 bg-pattern bg-opacity-10"
        style={{ 
          transform: `translate(${parallaxPosition.x * -0.5}px, ${parallaxPosition.y * -0.5}px)` 
        }}
      ></div>
      
      {/* Cercles animés */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl transition-all duration-1000 ease-in-out"
        style={{ 
          transform: `translate(${parallaxPosition.x * 1.5}px, ${parallaxPosition.y * 1.5}px) scale(${isLoaded ? '1' : '0'})`,
          opacity: isLoaded ? 0.7 : 0 
        }}
      ></div>
      <div className="absolute top-32 -right-16 w-72 h-72 rounded-full bg-green-500/20 blur-3xl transition-all duration-1000 ease-in-out"
        style={{ 
          transform: `translate(${parallaxPosition.x * -1.2}px, ${parallaxPosition.y * -1.2}px) scale(${isLoaded ? '1' : '0'})`,
          opacity: isLoaded ? 0.7 : 0 
        }}
      ></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.7,
              transform: `scale(${0.5 + Math.random() * 1})`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-4xl mx-auto text-center transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${isLoaded ? '0' : '30px'})`,
            opacity: isLoaded ? 1 : 0,
          }}
        >
          {/* Logo et icônes avec rotation */}
          <div className="flex justify-center items-center mb-8">
            <div 
              className="relative bg-white/20 backdrop-blur-md p-6 rounded-full transition-all duration-1000 ease-out"
              style={{
                transform: `rotate(${isLoaded ? '0' : '-180deg'}) scale(${isLoaded ? '1' : '0.5'})`,
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: Truck, delay: 0 },
                  { Icon: ShoppingBag, delay: 0.2 },
                  { Icon: Leaf, delay: 0.4 },
                  { Icon: Package, delay: 0.6 }
                ].map(({ Icon, delay }, index) => (
                  <div 
                    key={index}
                    className="transition-all duration-1000 hover:scale-125"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: `translateY(${isLoaded ? '0' : '20px'})`,
                      transitionDelay: `${delay}s`
                    }}
                  >
                    <Icon size={32} className="text-white animate-pulse" style={{ animationDuration: '3s' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Titre avec animation de texte */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 relative"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: `translateY(${isLoaded ? '0' : '30px'})`,
              transitionDelay: '0.3s'
            }}
          >
            <span className="relative inline-block">
              E
              <span className="absolute top-0 left-0 h-full w-0 bg-white/20 -z-10"
                style={{
                  width: isLoaded ? '100%' : '0%',
                  transition: 'width 0.8s ease-out',
                  transitionDelay: '0.5s'
                }}
              ></span>
            </span>
            <span className="relative inline-block">ko</span>
            <span className="relative inline-block">
              L
              <span className="absolute top-0 left-0 h-full w-0 bg-white/20 -z-10"
                style={{
                  width: isLoaded ? '100%' : '0%',
                  transition: 'width 0.8s ease-out',
                  transitionDelay: '0.8s'
                }}
              ></span>
            </span>
            <span className="relative inline-block">ogis</span>
          </h1>
          
          {/* Sous-titre avec apparition lettre par lettre */}
          <p 
            className="text-xl md:text-2xl mb-10 font-light tracking-wide overflow-hidden"
            style={{
              opacity: isLoaded ? 1 : 0,
              transitionDelay: '0.6s'
            }}
          >
            <span className="block">
              {"La logistique urbaine ".split('').map((char, index) => (
                <span 
                  key={index}
                  className="inline-block"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: `translateY(${isLoaded ? '0' : '20px'})`,
                    transition: 'all 0.5s ease-out',
                    transitionDelay: `${0.8 + index * 0.03}s`
                  }}
                >
                  {char}
                </span>
              ))}
              <span className="font-semibold">
                {"durable & inclusive".split('').map((char, index) => (
                  <span 
                    key={index + 20}
                    className="inline-block"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: `translateY(${isLoaded ? '0' : '20px'})`,
                      transition: 'all 0.5s ease-out',
                      transitionDelay: `${1.4 + index * 0.03}s`
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </span>
            <span className="block mt-2">
              {"avec e-commerce intégré".split('').map((char, index) => (
                <span 
                  key={index + 40}
                  className="inline-block"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: `translateY(${isLoaded ? '0' : '20px'})`,
                    transition: 'all 0.5s ease-out',
                    transitionDelay: `${2 + index * 0.03}s`
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </p>
          
          {/* Encadré d'information avec animation 3D */}
          <div 
            className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-xl mb-10 transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: `perspective(1000px) rotateX(${isLoaded ? '0' : '30deg'}) translateY(${isLoaded ? '0' : '50px'})`,
              transitionDelay: '0.9s',
              transformStyle: 'preserve-3d',
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2), 
                          ${parallaxPosition.x * 0.2}px ${parallaxPosition.y * 0.2}px 20px rgba(0, 0, 0, 0.1)`
            }}
          >
            <p className="text-lg md:text-xl leading-relaxed">
              Saviez-vous qu'à Dakar, le coût des livraisons a augmenté de <span className="font-bold text-green-200 relative inline-block">
                <span className="relative z-10">plus de 30%</span>
                <span 
                  className="absolute bottom-0 left-0 h-1 bg-green-400 w-0"
                  style={{
                    width: isLoaded ? '100%' : '0%',
                    transition: 'width 0.8s ease-out',
                    transitionDelay: '2.2s'
                  }}
                ></span>
              </span> en 5 ans en raison de la congestion urbaine et du manque de solutions adaptées aux petits commerçants ? Pendant ce temps, des milliers d'artisans et commerçants peinent à vendre leurs produits en ligne faute d'une logistique fiable et abordable. 
              <span 
                className="font-bold block mt-3 text-xl md:text-2xl"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: `translateY(${isLoaded ? '0' : '20px'})`,
                  transition: 'all 0.8s ease-out',
                  transitionDelay: '2.4s'
                }}
              >
                EkoLogis change la donne !
              </span>
            </p>
          </div>
          
          {/* Boutons d'action avec animation */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#solution" 
              className="group bg-white text-green-700 hover:bg-green-100 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden relative"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: `translateY(${isLoaded ? '0' : '30px'})`,
                transition: 'all 0.8s ease-out',
                transitionDelay: '1.3s'
              }}
            >
              <span className="flex items-center justify-center relative z-10">
                Découvrir notre solution
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span 
                className="absolute inset-0 w-0 bg-gradient-to-r from-green-200 to-green-300 transition-all duration-700 ease-out group-hover:w-full"
                style={{ transformOrigin: 'left' }}
              ></span>
            </a>
            <a 
              href="#needs" 
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:border-green-200 hover:text-green-200 overflow-hidden relative"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: `translateY(${isLoaded ? '0' : '30px'})`,
                transition: 'all 0.8s ease-out',
                transitionDelay: '1.5s'
              }}
            >
              <span className="relative z-10">Nous soutenir</span>
              <span className="absolute inset-0 scale-x-0 bg-white/5 transform origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Keyframes for floating animation */}
      <style jsx="true">{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;