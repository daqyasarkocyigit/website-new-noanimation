import React from 'react';
import Hero from '../components/home/Hero';
import NewsTicker from '../components/home/NewsTicker';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <NewsTicker />
    </>
  );
};

export default Home;