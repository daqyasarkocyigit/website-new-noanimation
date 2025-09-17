import React from 'react';
import { Database, Brain, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for your data and AI needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center mb-6">
              <Database size={40} className="text-red-600 mr-4" />
              <h2 className="text-3xl font-bold">Data Engineering</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Build robust data pipelines and infrastructure to collect, process, and store your data efficiently.
            </p>
            <ul className="space-y-3">
              {[
                "Scalable data pipeline development",
                "Data warehouse design and implementation", 
                "ETL/ELT process optimization",
                "Real-time data processing solutions"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <Database size={80} className="text-gray-400" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <Brain size={80} className="text-gray-400" />
          </div>
          <div>
            <div className="flex items-center mb-6">
              <Brain size={40} className="text-red-600 mr-4" />
              <h2 className="text-3xl font-bold">AI Engineering</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Implement advanced machine learning and AI solutions to automate processes.
            </p>
            <ul className="space-y-3">
              {[
                "Machine learning model development",
                "AI solution architecture",
                "MLOps implementation",
                "Generative AI integration"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Cloud size={40} className="text-red-600 mr-4" />
              <h2 className="text-3xl font-bold">Cloud Modernization</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Migrate and optimize your infrastructure on modern cloud platforms.
            </p>
            <ul className="space-y-3">
              {[
                "Cloud migration strategy",
                "Infrastructure optimization",
                "Multi-cloud solutions",
                "Security and compliance"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <Cloud size={80} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;