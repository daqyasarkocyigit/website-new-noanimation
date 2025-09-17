import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We deliver <span className="text-red-600">Azure Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with enterprise-grade data platforms, AI solutions, and cloud modernization services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Start Your Project
              <ArrowRight size={20} className="inline ml-2" />
            </a>
            <a href="/services" className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive data and AI solutions for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Engineering",
                description: "Build robust data pipelines and infrastructure"
              },
              {
                title: "AI Engineering", 
                description: "Implement advanced machine learning solutions"
              },
              {
                title: "Cloud Modernization",
                description: "Migrate to modern cloud platforms"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business
          </p>
          <a href="/contact" className="px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;