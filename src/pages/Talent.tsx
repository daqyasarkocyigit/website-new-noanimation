import React from 'react';
import { Users, CheckCircle, Briefcase } from 'lucide-react';

const Talent: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hire Top Data Experts
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find the right data professionals for your business needs. We specialize in Azure Data Platform, Microsoft Fabric, and Databricks solutions.
          </p>
          <a href="/contact" className="px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700 transition-colors">
            Request Talent
          </a>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">The DAQ Talent Advantage</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={40} className="text-red-600" />,
                title: "Certified Azure & Databricks Experts",
                description: "All our professionals are Microsoft and Databricks certified with proven experience."
              },
              {
                icon: <Briefcase size={40} className="text-red-600" />,
                title: "Modern Data Architecture", 
                description: "Specialists in Data Lakes, Lakehouses, and Real-time Intelligence solutions."
              },
              {
                icon: <CheckCircle size={40} className="text-red-600" />,
                title: "End-to-End Solutions",
                description: "From strategy to implementation, we deliver complete data transformation."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 py-16 px-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Team?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your talent requirements and find the perfect match
          </p>
          <a href="/contact" className="px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700 transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Talent;