import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Clock, MapPin, Globe } from 'lucide-react';

const Roadmap = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? '0' : '-20px'})`,
            transition: 'opacity 0.7s ease, transform 0.7s ease'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 relative inline-block">
            Étapes Importantes & Prochaines Actions
            <span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"
              style={{
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.5s ease-in-out',
                transitionDelay: '0.3s'
              }}
            ></span>
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.7s ease',
              transitionDelay: '0.4s'
            }}
          >
            Notre plan de développement stratégique pour révolutionner la logistique urbaine
          </p>
        </div>

        <div className="relative">
          {/* Timeline line with animation */}
          <div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-300 via-blue-300 to-purple-300"
            style={{
              transform: `scaleY(${isVisible ? 1 : 0})`,
              transformOrigin: 'top',
              transition: 'transform 1.5s ease-in-out'
            }}
          ></div>
          
          <div className="space-y-24">
            {/* Phase 1 */}
            <div 
              className="relative phase-item"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.2s'
              }}
              onMouseEnter={() => setActivePhase(0)}
              onMouseLeave={() => setActivePhase(null)}
            >
              <div className="md:flex items-center">
                <div className="hidden md:block w-1/2 pr-8 text-right">
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg inline-block relative overflow-hidden group"
                    style={{
                      transform: activePhase === 0 ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-end mb-3">
                        <h3 className="text-xl font-bold text-gray-800 mr-3">Phase 1</h3>
                        <div className="bg-green-100 p-2 rounded-full shadow-md">
                          <CheckCircle size={24} className="text-green-600" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">Étude terrain & co-création</h4>
                      <p className="text-gray-600">Durée : 3 mois</p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 rounded-full h-10 w-10 flex items-center justify-center z-10 shadow-lg"
                    style={{
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transition: 'transform 0.5s ease',
                      transitionDelay: '0.5s'
                    }}
                  >
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <div className="md:hidden flex items-center mb-4">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 rounded-full h-10 w-10 flex items-center justify-center mr-3 shadow-md"
                      style={{
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transition: 'transform 0.5s ease'
                      }}
                    >
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Phase 1</h3>
                      <p className="text-gray-600">Étude terrain & co-création</p>
                    </div>
                  </div>
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg group"
                    style={{
                      transform: activePhase === 0 ? 'translateY(-5px)' : 'translateY(0)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <ul className="space-y-4">
                      {[
                        "Enquête auprès des commerçants et artisans locaux",
                        "Analyse des besoins des livreurs indépendants",
                        "Cartographie des zones de congestion urbaine",
                        "Conception participative de la solution"
                      ].map((item, index) => (
                        <li 
                          key={index}
                          className="flex items-start"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                            transitionDelay: `${0.2 * index + 0.5}s`
                          }}
                        >
                          <CheckCircle size={20} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 2 */}
            <div 
              className="relative phase-item"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.4s'
              }}
              onMouseEnter={() => setActivePhase(1)}
              onMouseLeave={() => setActivePhase(null)}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-8">
                  <div className="md:hidden flex items-center mb-4">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full h-10 w-10 flex items-center justify-center mr-3 shadow-md"
                      style={{
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transition: 'transform 0.5s ease'
                      }}
                    >
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Phase 2</h3>
                      <p className="text-gray-600">MVP & test pilote</p>
                    </div>
                  </div>
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg group"
                    style={{
                      transform: activePhase === 1 ? 'translateY(-5px)' : 'translateY(0)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <ul className="space-y-4">
                      {[
                        "Développement de la plateforme e-commerce et logistique",
                        "Mise en place d'un hub logistique pilote",
                        "Acquisition de 10 véhicules électriques",
                        "Intégration de 50 commerçants pour la phase test"
                      ].map((item, index) => (
                        <li 
                          key={index}
                          className="flex items-start"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                            transitionDelay: `${0.2 * index + 0.7}s`
                          }}
                        >
                          <Clock size={20} className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full h-10 w-10 flex items-center justify-center z-10 shadow-lg"
                    style={{
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transition: 'transform 0.5s ease',
                      transitionDelay: '0.7s'
                    }}
                  >
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2 pl-8">
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg inline-block relative overflow-hidden group"
                    style={{
                      transform: activePhase === 1 ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-yellow-100 transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-3">
                        <div className="bg-yellow-100 p-2 rounded-full shadow-md mr-3">
                          <Clock size={24} className="text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Phase 2</h3>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">MVP & test pilote</h4>
                      <p className="text-gray-600">Durée : 6 mois</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div 
              className="relative phase-item"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.6s'
              }}
              onMouseEnter={() => setActivePhase(2)}
              onMouseLeave={() => setActivePhase(null)}
            >
              <div className="md:flex items-center">
                <div className="hidden md:block w-1/2 pr-8 text-right">
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg inline-block relative overflow-hidden group"
                    style={{
                      transform: activePhase === 2 ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-end mb-3">
                        <h3 className="text-xl font-bold text-gray-800 mr-3">Phase 3</h3>
                        <div className="bg-blue-100 p-2 rounded-full shadow-md">
                          <MapPin size={24} className="text-blue-600" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">Lancement à Dakar</h4>
                      <p className="text-gray-600">Durée : 12 mois</p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-10 w-10 flex items-center justify-center z-10 shadow-lg"
                    style={{
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transition: 'transform 0.5s ease',
                      transitionDelay: '0.9s'
                    }}
                  >
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <div className="md:hidden flex items-center mb-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-3 shadow-md"
                      style={{
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transition: 'transform 0.5s ease'
                      }}
                    >
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Phase 3</h3>
                      <p className="text-gray-600">Lancement à Dakar</p>
                    </div>
                  </div>
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg group"
                    style={{
                      transform: activePhase === 2 ? 'translateY(-5px)' : 'translateY(0)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <ul className="space-y-4">
                      {[
                        "Déploiement de 5 hubs stratégiquement placés à Dakar",
                        "Intégration de 500 vendeurs actifs sur la plateforme",
                        "Recrutement et formation de 50 livreurs",
                        "Campagne marketing et sensibilisation"
                      ].map((item, index) => (
                        <li 
                          key={index}
                          className="flex items-start"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                            transitionDelay: `${0.2 * index + 0.9}s`
                          }}
                        >
                          <Clock size={20} className="text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 4 */}
            <div 
              className="relative phase-item"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                transition: 'all 0.8s ease-out',
                transitionDelay: '0.8s'
              }}
              onMouseEnter={() => setActivePhase(3)}
              onMouseLeave={() => setActivePhase(null)}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-8">
                  <div className="md:hidden flex items-center mb-4">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full h-10 w-10 flex items-center justify-center mr-3 shadow-md"
                      style={{
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transition: 'transform 0.5s ease'
                      }}
                    >
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Phase 4</h3>
                      <p className="text-gray-600">Expansion régionale</p>
                    </div>
                  </div>
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg group"
                    style={{
                      transform: activePhase === 3 ? 'translateY(-5px)' : 'translateY(0)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <ul className="space-y-4">
                      {[
                        "Expansion vers Thiès et Saint-Louis",
                        "Adaptation du modèle pour d'autres villes africaines",
                        "Développement de partenariats stratégiques régionaux",
                        "Levée de fonds pour l'expansion internationale"
                      ].map((item, index) => (
                        <li 
                          key={index}
                          className="flex items-start"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                            transitionDelay: `${0.2 * index + 1.1}s`
                          }}
                        >
                          <Clock size={20} className="text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full h-10 w-10 flex items-center justify-center z-10 shadow-lg"
                    style={{
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transition: 'transform 0.5s ease',
                      transitionDelay: '1.1s'
                    }}
                  >
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2 pl-8">
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg inline-block relative overflow-hidden group"
                    style={{
                      transform: activePhase === 3 ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-3">
                        <div className="bg-purple-100 p-2 rounded-full shadow-md mr-3">
                          <Globe size={24} className="text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Phase 4</h3>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">Expansion régionale</h4>
                      <p className="text-gray-600">Après validation du modèle à Dakar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;