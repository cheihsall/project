import React, { useState, useEffect, useRef } from 'react';
import { DollarSign, Package, Zap, TrendingUp, BarChart3, CreditCard } from 'lucide-react';

const BusinessModel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [hoverCell, setHoverCell] = useState(null);
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

  const businessModels = [
    {
      icon: DollarSign,
      title: "Commissions sur les ventes",
      description: "Nous prélevons une commission sur les ventes réalisées via notre plateforme e-commerce intégrée.",
      detail: "Taux de commission compétitif de 5-10% selon le volume",
      delay: 0.2
    },
    {
      icon: Package,
      title: "Abonnement aux hubs",
      description: "Abonnement mensuel pour l'accès aux hubs logistiques et aux services de stockage.",
      detail: "Formules flexibles adaptées à la taille des commerçants",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Frais de service IA",
      description: "Frais de service pour l'optimisation des livraisons par notre technologie d'intelligence artificielle.",
      detail: "Tarification basée sur le volume et la complexité des livraisons",
      delay: 0.6
    }
  ];

  const financialData = [
    { year: "Année 1", revenue: "50K €", margin: "30%", profitability: "-" },
    { year: "Année 2", revenue: "200K €", margin: "40%", profitability: "Seuil de rentabilité" },
    { year: "Année 3", revenue: "500K €", margin: "45%", profitability: "Profitable" }
  ];

  return (
    <section 
      id="business" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-50 rounded-full opacity-50 blur-3xl"></div>
        
        {/* Animated dollar signs */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute text-green-100 opacity-20"
            style={{
              fontSize: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatBusiness ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            $
          </div>
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
            Modèle Économique
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
            Une approche durable et rentable pour tous les acteurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {businessModels.map((model, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl hover:border-green-300 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '50px'})`,
                transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transitionDelay: `${model.delay}s`,
                boxShadow: activeCard === index 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-8">
                <div 
                  className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-all duration-500"
                  style={{
                    transform: activeCard === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                  }}
                >
                  <model.icon 
                    size={28} 
                    className="text-green-600 transition-all duration-500"
                    style={{
                      transform: activeCard === index ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                </div>
                <h3 
                  className="text-xl font-bold mb-3 text-gray-800 transition-all duration-300"
                  style={{
                    transform: activeCard === index ? 'translateX(5px)' : 'translateX(0)'
                  }}
                >
                  {model.title}
                </h3>
                <p 
                  className="text-gray-600 mb-4 transition-all duration-300"
                  style={{
                    opacity: activeCard === index ? 1 : 0.9
                  }}
                >
                  {model.description}
                </p>
                <div 
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400 transition-all duration-300"
                  style={{
                    transform: activeCard === index ? 'translateY(0) scale(1.02)' : 'translateY(0) scale(1)',
                    opacity: activeCard === index ? 1 : 0.9
                  }}
                >
                  <p className="text-sm text-gray-500">{model.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="bg-green-50 rounded-xl overflow-hidden shadow-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? '0' : '30px'})`,
            transition: 'all 1s ease-out',
            transitionDelay: '0.8s'
          }}
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <TrendingUp size={24} className="text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Projection financière</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    {["Année", "Revenus", "Marge brute", "Rentabilité"].map((header, index) => (
                      <th 
                        key={index} 
                        className={`p-4 bg-green-100 text-green-800 font-semibold transition-all duration-300 ${
                          index === 0 ? 'rounded-tl-lg' : index === 3 ? 'rounded-tr-lg' : ''
                        }`}
                      >
                        <div className="flex items-center">
                          {index === 0 && <BarChart3 size={16} className="mr-2" />}
                          {index === 1 && <DollarSign size={16} className="mr-2" />}
                          {index === 2 && <CreditCard size={16} className="mr-2" />}
                          {index === 3 && <TrendingUp size={16} className="mr-2" />}
                          {header}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {financialData.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex}
                      className={`${
                        rowIndex < financialData.length - 1 ? 'border-b border-green-100' : ''
                      }`}
                    >
                      {Object.values(row).map((cell, cellIndex) => (
                        <td 
                          key={cellIndex}
                          className={`p-4 transition-all duration-300 ${
                            rowIndex === financialData.length - 1 && cellIndex === 0 ? 'rounded-bl-lg' : 
                            rowIndex === financialData.length - 1 && cellIndex === 3 ? 'rounded-br-lg' : ''
                          } ${
                            hoverCell === `${rowIndex}-${cellIndex}` ? 'bg-green-50' : ''
                          }`}
                          onMouseEnter={() => setHoverCell(`${rowIndex}-${cellIndex}`)}
                          onMouseLeave={() => setHoverCell(null)}
                        >
                          <div 
                            className={`transition-all duration-300 ${
                              cellIndex === 3 && cell === "Profitable" ? 'text-green-600 font-semibold' : 
                              cellIndex === 3 && cell === "Seuil de rentabilité" ? 'text-blue-600' : ''
                            }`}
                            style={{
                              transform: hoverCell === `${rowIndex}-${cellIndex}` ? 'translateX(5px)' : 'translateX(0)'
                            }}
                          >
                            {cell}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Growth indicator */}
            <div 
              className="mt-8 flex items-center justify-end"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-out',
                transitionDelay: '1.2s'
              }}
            >
              <div className="flex items-center text-gray-600">
                <span className="mr-2">Croissance des revenus</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                    style={{
                      width: isVisible ? '85%' : '0%',
                      transition: 'width 1.5s ease-out',
                      transitionDelay: '1.5s'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;