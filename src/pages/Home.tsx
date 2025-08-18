import React from 'react';
import Hero from '../components/home/Hero';
import NewsTicker from '../components/home/NewsTicker';
import Services from '../components/home/Services';
import WhyUs from '../components/home/WhyUs';
import Industries from '../components/home/Industries';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <Services />
      <WhyUs />
      <Industries />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;