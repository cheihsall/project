import React from 'react';
import { Truck, ShoppingBag, BarChart3, Users, MapPin, Leaf, Rocket, Clock, DollarSign } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Market from './components/Market';
import BusinessModel from './components/BusinessModel';
import Competition from './components/Competition';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Needs from './components/Needs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <BusinessModel />
        <Competition />
        <Team />
        <Roadmap />
        <Needs />
      </main>
      <Footer />
    </div>
  );
}

export default App;