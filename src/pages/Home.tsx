import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import WhyUs from '../components/home/WhyUs';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <CallToAction />
    </>
  );
};

export default Home;