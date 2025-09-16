import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="relative z-10">
      <Hero />
      <Services />
      <CallToAction />
    </div>
  );
};

export default Home;