import React, { useState, useEffect, useRef } from 'react';
import { Leaf, MapPin, ShoppingBag, Shield, Award, Zap } from 'lucide-react';

const Competition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAdvantage, setActiveAdvantage] = useState(null);
  const [hoverBar, setHoverBar] = useState(null);
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

  const advantages = [
    {
      icon: Leaf,
      title: "Un modèle éco-responsable",
      description: "Contrairement aux services de livraison traditionnels, notre flotte de véhicules électriques et vélos-cargos réduit significativement l'empreinte carbone tout en offrant une solution adaptée à la congestion urbaine.",
      delay: 0.3
    },
    {
      icon: MapPin,
      title: "Une logistique hyper-locale",
      description: "Nos micro-hubs communautaires stratégiquement placés permettent un stockage de proximité et des livraisons plus rapides que les entrepôts centralisés des concurrents.",
      delay: 0.5
    },
    {
      icon: ShoppingBag,
      title: "Accompagnement digital complet",
      description: "Nous offrons un accompagnement des commerçants et artisans pour digitaliser leur activité, contrairement aux plateformes qui se contentent de proposer un espace de vente sans support.",
      delay: 0.7
    }
  ];

  const competitors = [
    {
      name: "Services de livraison traditionnels",
      metrics: [
        { name: "Rapidité", value: 60, color: "yellow" },
        { name: "Écologie", value: 20, color: "red" },
        { name: "Intégration", value: 40, color: "yellow" }
      ]
    },
    {
      name: "Plateformes e-commerce",
      metrics: [
        { name: "Rapidité", value: 50, color: "yellow" },
        { name: "Écologie", value: 30, color: "yellow" },
        { name: "Intégration", value: 70, color: "green" }
      ]
    },
    {
      name: "EkoLogis",
      metrics: [
        { name: "Rapidité", value: 80, color: "green" },
        { name: "Écologie", value: 90, color: "green" },
        { name: "Intégration", value: 85, color: "green" }
      ]
    }
  ];

  return (
    <section 
      id="competition" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-50 rounded-full opacity-40 blur-3xl"></div>
        
        {/* Animated elements */}
        <div 
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full border-4 border-green-100 opacity-20"
          style={{
            animation: 'pulse 6s infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full border-4 border-green-100 opacity-20"
          style={{
            animation: 'pulse 8s infinite'
          }}
        ></div>
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
            Concurrence & Positionnement
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
            EkoLogis se différencie par sa combinaison unique de logistique durable et e-commerce intégré
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div 
            className="col-span-1 lg:col-span-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateX(${isVisible ? '0' : '-50px'})`,
              transition: 'all 1s ease-out',
              transitionDelay: '0.2s'
            }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-3">
                  <Award size={24} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Notre avantage concurrentiel</h3>
              </div>
              
              <div className="space-y-8">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="flex items-start group"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: `translateY(${isVisible ? '0' : '30px'})`,
                      transition: 'all 0.8s ease-out',
                      transitionDelay: `${advantage.delay}s`
                    }}
                    onMouseEnter={() => setActiveAdvantage(index)}
                    onMouseLeave={() => setActiveAdvantage(null)}
                  >
                    <div 
                      className="bg-green-100 p-3 rounded-full flex items-center justify-center mr-4 mt-1 transition-all duration-300"
                      style={{
                        transform: activeAdvantage === index ? 'scale(1.2)' : 'scale(1)'
                      }}
                    >
                      <advantage.icon 
                        size={20} 
                        className="text-green-600"
                        style={{
                          transform: activeAdvantage === index ? 'rotate(10deg)' : 'rotate(0)'
                        }}
                      />
                    </div>
                    <div>
                      <h4 
                        className="text-lg font-semibold mb-2 text-gray-800 transition-all duration-300"
                        style={{
                          transform: activeAdvantage === index ? 'translateX(5px)' : 'translateX(0)'
                        }}
                      >
                        {advantage.title}
                      </h4>
                      <p 
                        className="text-gray-600 transition-all duration-300"
                        style={{
                          opacity: activeAdvantage === index ? 1 : 0.9
                        }}
                      >
                        {advantage.description}
                      </p>
                      
                      {/* Animated underline */}
                      <div 
                        className="h-0.5 bg-green-400 mt-2 transition-all duration-500 ease-out"
                        style={{
                          width: activeAdvantage === index ? '100%' : '0%',
                          opacity: activeAdvantage === index ? 1 : 0
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateX(${isVisible ? '0' : '50px'})`,
              transition: 'all 1s ease-out',
              transitionDelay: '0.4s'
            }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Analyse concurrentielle</h3>
              </div>
              
              <div className="space-y-8">
                {competitors.map((competitor, compIndex) => (
                  <div key={compIndex} className="mb-6">
                    <h4 
                      className="text-lg font-semibold mb-3 text-gray-800"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: `translateY(${isVisible ? '0' : '20px'})`,
                        transition: 'all 0.8s ease-out',
                        transitionDelay: `${0.6 + compIndex * 0.2}s`
                      }}
                    >
                      {competitor.name}
                      {competitor.name === "EkoLogis" && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Zap size={12} className="mr-1" />
                          Notre solution
                        </span>
                      )}
                    </h4>
                    
                    {competitor.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex}
                        className="flex items-center mb-3"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: `translateX(${isVisible ? '0' : '-20px'})`,
                          transition: 'all 0.8s ease-out',
                          transitionDelay: `${0.8 + compIndex * 0.2 + metricIndex * 0.1}s`
                        }}
                        onMouseEnter={() => setHoverBar(`${compIndex}-${metricIndex}`)}
                        onMouseLeave={() => setHoverBar(null)}
                      >
                        <div className="w-24 text-sm text-gray-600">{metric.name}</div>
                        <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`bg-${metric.color}-500 h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: isVisible ? `${metric.value}%` : '0%',
                              transform: hoverBar === `${compIndex}-${metricIndex}` ? 'scaleY(1.5)' : 'scaleY(1)',
                              transformOrigin: 'center'
                            }}
                          ></div>
                        </div>
                        <div 
                          className="ml-2 text-xs font-medium transition-all duration-300"
                          style={{
                            opacity: hoverBar === `${compIndex}-${metricIndex}` ? 1 : 0,
                            width: hoverBar === `${compIndex}-${metricIndex}` ? '40px' : '0',
                            overflow: 'hidden'
                          }}
                        >
                          {metric.value}%
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div 
                className="mt-6 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 1s ease-out',
                  transitionDelay: '1.5s'
                }}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>Faible</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span>Moyen</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Keyframes for pulse animation */}
      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default Competition;