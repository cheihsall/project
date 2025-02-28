import React from 'react';
import { Target, DollarSign, Users } from 'lucide-react';

const Needs = () => {
  return (
    <section id="needs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nos Besoins</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pour concrétiser notre vision, nous recherchons des soutiens stratégiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Objectif</h3>
            <p className="text-gray-600 mb-4">
              Déploiement du MVP en 6 mois avec un premier hub fonctionnel et 50 commerçants intégrés.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Progression</span>
                <span className="text-sm font-medium text-blue-600">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <DollarSign size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Financement</h3>
            <p className="text-gray-600 mb-4">
              Besoin de 150 000 € pour financer les premiers hubs, la flotte de véhicules électriques et le développement de l'application.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Hubs logistiques</span>
                <span className="text-sm font-medium">50 000 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Flotte électrique</span>
                <span className="text-sm font-medium">60 000 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Développement tech</span>
                <span className="text-sm font-medium">40 000 €</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users size={28} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Partenariats</h3>
            <p className="text-gray-600 mb-4">
              Recherche de partenaires stratégiques pour l'expansion et le développement du réseau.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-600">Investisseurs impact</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-600">Acteurs de la mobilité électrique</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-600">Associations de commerçants</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-600">Collectivités locales</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-600 text-white p-8 rounded-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Pourquoi EkoLogis est le projet à soutenir ?</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Une solution innovante et durable</h4>
                  <p className="text-white/80">
                    Adaptée aux besoins locaux et aux défis spécifiques de la logistique urbaine en Afrique.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Un modèle économique scalable</h4>
                  <p className="text-white/80">
                    Dans un marché en pleine croissance avec un potentiel d'expansion régionale significatif.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Un impact social & environnemental fort</h4>
                  <p className="text-white/80">
                    Création d'emplois, réduction de la pollution, inclusion des petits commerçants dans l'économie numérique.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4">Rejoignez-nous pour bâtir la logistique urbaine de demain !</h4>
              <a href="#" className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition-colors">
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Needs;