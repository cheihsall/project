import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Twitter, Github, Award, Heart, Lightbulb } from 'lucide-react';
import img from '../assets/ch.png';
import sarr from '../assets/sarr.jpeg';
import diallo from '../assets/diallo.jpeg';


const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
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

  const teamMembers = [
    {
      name: "Cheikh SALL",
      role: "Fondateur & CEO",
      bio: "Expert en intelligence numerique, Entrepreneur.",
      image: img,
      delay: 0.2
    },
    {
      name: "Assane Diallo",
      role: "Co-fondateur",
      bio: "Expert en Automatisation des processus, Expert en logistique.",
      image: diallo,
      delay: 0.4
    },
    {
      name: "Mamadou SARR",
      role: "Co-fondateur",
      bio: "Ingenieur logicel, Expert en logistique et Objets connectés.",
      image:sarr,
      delay: 0.6
    }
  ];

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-full opacity-40 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full opacity-40 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
        ></div>
        
        {/* Animated dots */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 2 === 0 ? '#10b981' : '#3b82f6',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `floatTeam ${15 + Math.random() * 15}s linear infinite`,
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
            L'Équipe
            <span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"
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
            Nous sommes une équipe passionnée alliant experts en logistique, ingénieurs IA et entrepreneurs sociaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '50px'})`,
                transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transitionDelay: `${member.delay}s`
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-500"
                style={{
                  transform: activeCard === index 
                    ? 'translateY(-10px)' 
                    : 'translateY(0)',
                  boxShadow: activeCard === index 
                    ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                }}
              >
                <div 
                  className="h-64 bg-gray-200 relative overflow-hidden"
                >
                  <img 
                    src={member.image}
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: activeCard === index 
                        ? 'scale(1.1)' 
                        : 'scale(1)'
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                  
                  {/* Social icons that appear on hover */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <a href="#" className="bg-white/20 backdrop-blur-sm hover:bg-white/40 p-2 rounded-full transition-colors">
                      <Twitter size={18} className="text-white" />
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-sm hover:bg-white/40 p-2 rounded-full transition-colors">
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-sm hover:bg-white/40 p-2 rounded-full transition-colors">
                      <Github size={18} className="text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-1 text-gray-800 transition-all duration-300"
                    style={{
                      transform: activeCard === index 
                        ? 'translateX(5px)' 
                        : 'translateX(0)'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p 
                    className="text-gray-600 mb-4 transition-all duration-300"
                    style={{
                      opacity: activeCard === index ? 1 : 0.9
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
                
                {/* Bottom border that animates on hover */}
                <div 
                  className="h-1 bg-gradient-to-r from-green-400 to-blue-500 transition-transform duration-500 origin-left"
                  style={{
                    transform: activeCard === index 
                      ? 'scaleX(1)' 
                      : 'scaleX(0)'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="bg-green-50 p-8 rounded-xl relative overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? '0' : '30px'})`,
            transition: 'all 1s ease-out',
            transitionDelay: '0.8s',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Background decoration */}
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
          
          <h3 
            className="text-2xl font-bold mb-6 text-gray-800 relative inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? '0' : '20px'})`,
              transition: 'all 0.8s ease-out',
              transitionDelay: '1s'
            }}
          >
            Notre vision
            <span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500"
              style={{
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.8s ease-out',
                transitionDelay: '1.2s'
              }}
            ></span>
          </h3>
          
          <p 
            className="text-gray-700 text-lg mb-8 leading-relaxed relative z-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? '0' : '20px'})`,
              transition: 'all 0.8s ease-out',
              transitionDelay: '1.1s'
            }}
          >
            Forts de notre expérience terrain, nous avons une vision claire : rendre la logistique urbaine plus accessible, efficace et durable en Afrique. Nous croyons que la combinaison de technologies innovantes et de solutions adaptées au contexte local peut transformer le secteur logistique et créer de nouvelles opportunités pour les commerçants et artisans.
          </p>
          
          <div 
            className="flex flex-col md:flex-row md:items-center gap-4 relative z-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? '0' : '20px'})`,
              transition: 'all 0.8s ease-out',
              transitionDelay: '1.2s'
            }}
          >
            <a 
              href="#roadmap" 
              className="group bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <Lightbulb size={18} className="mr-2" />
              <span>Découvrir notre feuille de route</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#needs" 
              className="text-green-600 hover:text-green-700 font-semibold transition-colors text-center flex items-center justify-center"
            >
              <Heart size={18} className="mr-2" />
              <span>Comment nous soutenir</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          
          {/* Values badges */}
          <div 
            className="absolute top-6 right-8 flex flex-col gap-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-out',
              transitionDelay: '1.3s'
            }}
          >
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-green-700 shadow-sm flex items-center">
              <Award size={12} className="mr-1" />
              Innovation
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-green-700 shadow-sm flex items-center">
              <Heart size={12} className="mr-1" />
              Impact social
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-green-700 shadow-sm flex items-center">
              <Lightbulb size={12} className="mr-1" />
              Durabilité
            </div>
          </div>
        </div>
      </div>
      
      {/* Keyframes for floating animation */}
      <style jsx="true">{`
        @keyframes floatTeam {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-5px) translateX(20px);
          }
          75% {
            transform: translateY(15px) translateX(5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Team;