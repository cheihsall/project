import React, { useState, useEffect } from 'react';
import { MapPin, DollarSign, Store, Wind } from 'lucide-react';

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

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

    const section = document.getElementById('problem-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const problems = [
    {
      icon: MapPin,
      title: "Trafic saturé",
      description: "Livraisons lentes et coûteuses en raison de la congestion urbaine.",
      color: "red",
      delay: 0
    },
    {
      icon: Store,
      title: "Manque de stockage",
      description: "Petits commerçants sans entrepôts accessibles pour leurs produits.",
      color: "orange",
      delay: 0.2
    },
    {
      icon: DollarSign,
      title: "Solutions trop chères",
      description: "Micro-entreprises et artisans exclus du e-commerce par manque de solutions abordables.",
      color: "yellow",
      delay: 0.4
    },
    {
      icon: Wind,
      title: "Pollution excessive",
      description: "Livraisons inefficaces et nuisibles à l'environnement urbain.",
      color: "purple",
      delay: 0.6
    }
  ];

  return (
    <section id="problem-section" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-100 opacity-30 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-orange-100 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? '0' : '30px'})`
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 relative inline-block">
            Le Problème
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-purple-400 transform scale-x-0 transition-transform duration-1000"
              style={{ 
                transformOrigin: 'left',
                transform: `scaleX(${isVisible ? 1 : 0})`,
                transitionDelay: '0.5s'
              }}
            ></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Aujourd'hui, la logistique urbaine au Sénégal est un défi majeur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '50px'})`,
                transitionDelay: `${0.3 + problem.delay}s`,
                transitionDuration: '0.8s'
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background gradient that appears on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(135deg, ${problem.color}-200, ${problem.color}-400)` 
                }}
              ></div>
              
              {/* Content */}
              <div className="p-8 relative z-10">
                <div 
                  className={`bg-${problem.color}-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}
                >
                  <problem.icon 
                    size={28} 
                    className={`text-${problem.color}-600`} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 transition-transform duration-300 group-hover:translate-x-1">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
                
                {/* Animated border on hover */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 bg-${problem.color}-400 transition-all duration-500 ease-out`}
                  style={{ 
                    width: hovered === index ? '100%' : '0%',
                    opacity: hovered === index ? 1 : 0
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <div 
            className="w-24 h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 rounded-full transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              width: isVisible ? '6rem' : '0',
              transitionDelay: '1s'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Problem;