import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CaseStudies from '../components/home/CaseStudies';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <CallToAction />
    </>
  );
};

export default Home;