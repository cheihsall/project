import React, { useState, useEffect, useRef } from 'react';
import { Globe, TrendingUp, Leaf, BarChart3, Users, Target } from 'lucide-react';

const Market = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = sectionRef.current?.getBoundingClientRect() || {};
      
      if (left && top) {
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const marketData = [
    {
      icon: Globe,
      value: "20 Mds $",
      subtitle: "d'ici 2030",
      description: "Le marché de la logistique urbaine en Afrique est estimé à 20 milliards de dollars d'ici 2030, avec une croissance accélérée dans les grandes villes.",
      color: "blue",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      value: "+25%",
      subtitle: "croissance annuelle",
      description: "Le e-commerce au Sénégal connaît une croissance annuelle de +25%, créant une demande croissante pour des solutions logistiques adaptées.",
      color: "green",
      delay: 0.4
    },
    {
      icon: Leaf,
      value: "50%",
      subtitle: "livraisons vertes",
      description: "Avec 50% des livraisons pouvant être effectuées avec des véhicules électriques, EkoLogis s'inscrit dans la transition écologique du pays.",
      color: "green",
      delay: 0.6
    }
  ];

  const strategicPositions = [
    {
      icon: Target,
      title: "Marché adressable",
      description: "Commerçants et artisans locaux, plateformes e-commerce existantes, services de livraison urbaine",
      delay: 0.8
    },
    {
      icon: BarChart3,
      title: "Avantage concurrentiel",
      description: "Solution intégrée combinant logistique verte, e-commerce et optimisation par IA",
      delay: 1.0
    },
    {
      icon: Users,
      title: "Potentiel de croissance",
      description: "Expansion régionale après validation du modèle à Dakar",
      delay: 1.2
    }
  ];

  return (
    <section 
      id="market" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 rounded-full opacity-30 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-50 rounded-full opacity-30 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        ></div>
        
        {/* Animated dots */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 2 === 0 ? '#3b82f6' : '#10b981',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `floatMarket ${15 + Math.random() * 15}s linear infinite`,
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
            Opportunité de Marché
            <span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-green-400"
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
            Un secteur en pleine croissance avec un potentiel énorme
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {marketData.map((item, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl overflow-hidden group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '50px'})`,
                transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transitionDelay: `${item.delay}s`,
                boxShadow: activeIndex === index 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Background decoration */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div 
                    className={`bg-${item.color}-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mr-4 transition-all duration-500 group-hover:scale-110`}
                  >
                    <item.icon 
                      size={28} 
                      className={`text-${item.color}-600`} 
                    />
                  </div>
                  <div>
                    <h3 
                      className={`text-2xl font-bold text-${item.color}-600 transition-all duration-300 group-hover:translate-x-1`}
                    >
                      {item.value}
                    </h3>
                    <p className="text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
                <p 
                  className="text-gray-700 relative"
                  style={{
                    transform: activeIndex === index ? 'translateY(0)' : 'translateY(5px)',
                    opacity: activeIndex === index ? 1 : 0.8,
                    transition: 'all 0.3s ease-out'
                  }}
                >
                  {item.description}
                </p>
                
                {/* Animated line */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 bg-${item.color}-400 transition-all duration-500 ease-out`}
                  style={{
                    width: activeIndex === index ? '100%' : '0%'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? '0' : '30px'})`,
            transition: 'all 1s ease-out',
            transitionDelay: '0.7s',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="p-8">
            <h3 
              className="text-2xl font-bold mb-6 text-gray-800 relative inline-block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.9s'
              }}
            >
              Notre positionnement stratégique
              <span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-green-400"
                style={{
                  transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.8s ease-out',
                  transitionDelay: '1.1s'
                }}
              ></span>
            </h3>
            <p 
              className="text-gray-700 mb-8 leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                transition: 'all 0.8s ease-out',
                transitionDelay: '1s'
              }}
            >
              EkoLogis se positionne à l'intersection de trois tendances majeures : la croissance du e-commerce, la demande pour des solutions logistiques efficaces, et la transition écologique. Cette position unique nous permet de capturer une part significative d'un marché en pleine expansion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategicPositions.map((position, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: `translateY(${isVisible ? '0' : '20px'})`,
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${position.delay}s`
                  }}
                >
                  <div className="flex items-center mb-3">
                    <position.icon size={20} className="text-blue-500 mr-2" />
                    <h4 className="font-bold text-gray-800">{position.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div 
            className="h-2 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-out',
              transitionDelay: '1.3s'
            }}
          ></div>
        </div>
      </div>
      
      {/* Keyframes for floating animation */}
      <style jsx="true">{`
        @keyframes floatMarket {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-10px) translateX(30px);
          }
          75% {
            transform: translateY(20px) translateX(15px);
          }
        }
      `}</style>
    </section>
  );
};

export default Market;