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
      
      {/* News Updates Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with <span className="text-brand-red-600">DAQ</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Latest updates on our services, technology expertise, and data & AI solutions
            </p>
          </div>
          <NewsTicker />
        </div>
      </section>

      <Services />
      <WhyUs />
      <Industries />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;