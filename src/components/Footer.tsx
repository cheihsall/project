import React from 'react';
import { Truck, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Truck size={28} className="text-green-400" />
              <span className="text-xl font-bold">EkoLogis</span>
            </div>
            <p className="text-gray-300 mb-6">
              La logistique urbaine durable & inclusive avec e-commerce intégré pour les commerçants et artisans locaux.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#problem" className="text-gray-300 hover:text-green-400 transition-colors">Problème</a></li>
              <li><a href="#solution" className="text-gray-300 hover:text-green-400 transition-colors">Solution</a></li>
              <li><a href="#market" className="text-gray-300 hover:text-green-400 transition-colors">Marché</a></li>
              <li><a href="#business" className="text-gray-300 hover:text-green-400 transition-colors">Modèle économique</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-green-400 transition-colors">Équipe</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-green-400 transition-colors">Feuille de route</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Fasse casier, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+221 77 783 93 59</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">chmouhammed2605@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous pour recevoir nos actualités et suivre notre développement.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-500"
                />
              </div>
              <button 
                type="button" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} EkoLogis. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;