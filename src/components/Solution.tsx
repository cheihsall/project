import React, { useState, useEffect, useRef } from 'react';
import { Bike, Brain, Home, ShoppingCart, Users } from 'lucide-react';

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const solutions = [
    {
      icon: Bike,
      title: "Flotte verte",
      description: "Livraison avec des vélos-cargos et scooters électriques pour une logistique propre et rapide en milieu urbain.",
      delay: 0.1
    },
    {
      icon: Brain,
      title: "Optimisation par IA",
      description: "Algorithmes intelligents pour réduire les trajets, optimiser les routes et livrer plus vite tout en économisant de l'énergie.",
      delay: 0.3
    },
    {
      icon: Home,
      title: "Micro-hubs logistiques",
      description: "Espaces de stockage de proximité stratégiquement placés pour fluidifier les livraisons et réduire les distances.",
      delay: 0.5
    },
    {
      icon: ShoppingCart,
      title: "Plateforme e-commerce",
      description: "Les commerçants et artisans peuvent vendre leurs produits en ligne et les stocker directement dans nos hubs pour une livraison optimisée.",
      delay: 0.7
    },
    {
      icon: Users,
      title: "Inclusion des livreurs indépendants",
      description: "Une application mobile pour intégrer les moto-taxis et coursiers locaux dans notre réseau de livraison.",
      delay: 0.9
    }
  ];

  return (
    <section id="solution" ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-green-50 opacity-70"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-green-50 opacity-60"></div>
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-green-200"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? '0' : '30px'})`,
            transition: 'opacity 1s ease-out, transform 1s ease-out'
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 relative inline-block">
            Notre Solution
            <span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"
              style={{
                transform: `scaleX(${isVisible ? 1 : 0})`,
                transformOrigin: 'left',
                transition: 'transform 1s ease-out',
                transitionDelay: '0.5s'
              }}
            ></span>
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-out',
              transitionDelay: '0.7s'
            }}
          >
            EkoLogis est une plateforme intégrée qui révolutionne la logistique urbaine en combinant IA, mobilité durable et e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl border border-green-100 transition-all duration-500 ease-out"
              style={{
                background: activeCard === index 
                  ? 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' 
                  : 'linear-gradient(135deg, #f0fdf4 0%, #f0fdf4 100%)',
                boxShadow: activeCard === index 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                  : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                transform: isVisible 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(50px) scale(0.95)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transitionDelay: `${solution.delay}s`
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background decoration */}
              <div 
                className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-green-200 opacity-20 transition-transform duration-700 ease-out"
                style={{
                  transform: activeCard === index 
                    ? 'scale(2.5)' 
                    : 'scale(1)'
                }}
              ></div>
              
              <div className="p-8 relative z-10">
                <div 
                  className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-all duration-500 ease-out"
                  style={{
                    transform: activeCard === index 
                      ? 'scale(1.1) rotate(5deg)' 
                      : 'scale(1) rotate(0)'
                  }}
                >
                  <solution.icon 
                    size={28} 
                    className="text-green-600 transition-all duration-500"
                    style={{
                      transform: activeCard === index 
                        ? 'scale(1.2)' 
                        : 'scale(1)'
                    }}
                  />
                </div>
                <h3 
                  className="text-xl font-bold mb-3 text-gray-800 transition-all duration-300"
                  style={{
                    transform: activeCard === index 
                      ? 'translateX(5px)' 
                      : 'translateX(0)'
                  }}
                >
                  {solution.title}
                </h3>
                <p 
                  className="text-gray-600 transition-all duration-300"
                  style={{
                    opacity: activeCard === index ? 1 : 0.8
                  }}
                >
                  {solution.description}
                </p>
                
                {/* Animated underline */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-green-400 transition-all duration-500 ease-out"
                  style={{
                    width: activeCard === index ? '100%' : '0%'
                  }}
                ></div>
              </div>
            </div>
          ))}

          <div 
            className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl text-white relative overflow-hidden shadow-lg"
            style={{
              transform: isVisible 
                ? 'translateY(0) scale(1)' 
                : 'translateY(50px) scale(0.95)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transitionDelay: '1.1s'
            }}
          >
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative">
              Une solution complète
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-white"></span>
            </h3>
            <p className="mb-6 text-white/90 leading-relaxed">
              EkoLogis combine tous ces éléments pour créer un écosystème logistique durable, efficace et inclusif.
            </p>
            <a 
              href="#market" 
              className="inline-flex items-center group bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Découvrir le potentiel</span>
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
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
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(15px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Solution;