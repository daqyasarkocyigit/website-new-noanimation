import React from 'react';
import { Target, Zap, TrendingUp, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About DAQ Consulting
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            DAQ Consulting is a premier data solutions provider dedicated to helping organizations harness the power of their data.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is to empower organizations to unlock the full potential of their data through advanced analytics, cloud modernization, and AI.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target size={32} className="text-red-600" />,
                title: "Discovery & Strategy",
                description: "Understanding your business goals and challenges"
              },
              {
                icon: <Zap size={32} className="text-red-600" />,
                title: "Solution Design", 
                description: "Architecting scalable, future-proof solutions"
              },
              {
                icon: <TrendingUp size={32} className="text-red-600" />,
                title: "Implementation",
                description: "Delivering with precision and expertise"
              },
              {
                icon: <Shield size={32} className="text-red-600" />,
                title: "Continuous Support",
                description: "Ongoing optimization and support"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 py-16 px-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your data capabilities
          </p>
          <a href="/contact" className="px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;