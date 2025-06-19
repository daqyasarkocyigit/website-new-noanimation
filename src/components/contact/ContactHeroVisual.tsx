import React, { useState, useEffect } from 'react';
import { Mail, Users, Briefcase, MessageCircle, Clock, CheckCircle, ArrowRight, Send } from 'lucide-react';

const ContactHeroVisual: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [messageAnimation, setMessageAnimation] = useState(false);
  
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    
    const messageInterval = setInterval(() => {
      setMessageAnimation(true);
      setTimeout(() => setMessageAnimation(false), 2000);
    }, 5000);
    
    return () => {
      clearInterval(cardInterval);
      clearInterval(messageInterval);
    };
  }, []);

  const contactCards = [
    {
      icon: Mail,
      title: 'General Inquiries',
      email: 'info@daqconsulting.com',
      response: '< 2 hours',
      description: 'Project discussions & questions',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Talent & Hiring',
      email: 'talent@daqconsulting.com',
      response: '< 24 hours',
      description: 'Find the right professionals',
      color: 'purple'
    },
    {
      icon: Briefcase,
      title: 'Join Our Team',
      email: 'careers@daqconsulting.com',
      response: '< 48 hours',
      description: 'Career opportunities',
      color: 'green'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-4 sm:p-6">
        
        {/* Header */}
        <div className="text-center mb-6 flex-shrink-0">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red-100 rounded-2xl mb-4">
            <MessageCircle className="w-8 h-8 text-brand-red-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Choose how you'd like to connect with us
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="flex-1 grid grid-cols-1 gap-4 mb-6">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                className={`
                  relative p-4 rounded-xl border transition-all duration-500
                  ${isActive 
                    ? 'bg-white shadow-lg border-brand-red-200 scale-105' 
                    : 'bg-white/50 border-gray-200 hover:bg-white hover:shadow-md'
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                    ${isActive 
                      ? 'bg-brand-red-600 text-white' 
                      : 'bg-gray-100 text-gray-600'
                    }
                  `}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{card.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-brand-red-500" />
                      <span className="text-brand-red-600 font-medium">{card.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-green-600">Response: {card.response}</span>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className={`
                    transition-all duration-300
                    ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
                  `}>
                    <ArrowRight className="w-5 h-5 text-brand-red-500" />
                  </div>
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-brand-red-500 rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Message Section */}
        <div className="bg-gradient-to-r from-brand-red-50 to-brand-red-100 rounded-xl p-4 border border-brand-red-200 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-red-600 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Quick Message</h3>
                <p className="text-sm text-gray-600">Send us a message directly</p>
              </div>
            </div>
            <div className={`
              transition-all duration-300
              ${messageAnimation ? 'scale-110' : 'scale-100'}
            `}>
              <div className="w-8 h-8 bg-brand-red-600 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4 flex-shrink-0">
          <div className="text-center p-3 bg-white/70 rounded-lg border border-gray-200">
            <div className="flex items-center justify-center gap-1 mb-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-lg font-bold text-gray-900">98%</span>
            </div>
            <p className="text-xs text-gray-600">Response Rate</p>
          </div>
          <div className="text-center p-3 bg-white/70 rounded-lg border border-gray-200">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-lg font-bold text-gray-900">2hrs</span>
            </div>
            <p className="text-xs text-gray-600">Avg Response</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroVisual;