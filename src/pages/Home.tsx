import React from 'react';
import Hero from '../components/home/Hero';
import NewsUpdates from '../components/home/NewsUpdates';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <NewsUpdates />
    </>
  );
};

export default Home;