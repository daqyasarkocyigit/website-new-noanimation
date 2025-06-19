import React, { useState, useEffect } from 'react';
import { Mail, Users, Briefcase, Send, MessageCircle, Globe, Clock, Phone, Sparkles, ArrowRight } from 'lucide-react';

const ContactHeroVisual: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState(0);
  const [messageFlow, setMessageFlow] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const methodInterval = setInterval(() => {
      setActiveMethod((prev) => (prev + 1) % 3);
    }, 3000);
    
    const flowInterval = setInterval(() => {
      setMessageFlow(true);
      setTimeout(() => setMessageFlow(false), 2000);
    }, 4000);
    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(methodInterval);
      clearInterval(flowInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: 'General Inquiries',
      email: 'info@daqconsulting.com',
      response: '< 2 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Talent & Hiring',
      email: 'talent@daqconsulting.com',
      response: '< 24 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Join Our Team',
      email: 'careers@daqconsulting.com',
      response: '< 48 hours',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const currentMethod = contactMethods[activeMethod];
  const MethodIcon = currentMethod.icon;

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Pattern - Site colors */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated connection lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          {messageFlow && (
            <g>
              <line
                x1="20%" y1="30%"
                x2="50%" y2="50%"
                stroke="#ef4444"
                strokeWidth="2"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  from="0" to="1" to="0"
                  dur="2s"
                  repeatCount="1"
                />
              </line>
              <line
                x1="80%" y1="30%"
                x2="50%" y2="50%"
                stroke="#ef4444"
                strokeWidth="2"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  from="0" to="1" to="0"
                  dur="2s"
                  begin="0.5s"
                  repeatCount="1"
                />
              </line>
            </g>
          )}
        </svg>
      </div>

      {/* Main container */}
      <div className="relative w-full h-full flex flex-col p-3 sm:p-4 lg:p-6">
        
        {/* Header */}
        <div className="text-center mb-6 flex-shrink-0">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-brand-red-600/20 rounded-2xl mb-3">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-brand-red-500" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            Let's Start a Conversation
          </h2>
          <p className="text-sm text-gray-400">
            Choose how you'd like to connect with us
          </p>
        </div>

        {/* Active Contact Method Display */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="relative">
            {/* Central contact hub */}
            <div className="relative">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br ${currentMethod.color} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl`}>
                <MethodIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-brand-red-600/20 animate-ping" />
            </div>

            {/* Orbiting contact options */}
            <div className="absolute inset-0">
              {contactMethods.map((method, index) => {
                const angle = (index * 120) * Math.PI / 180;
                const radius = window.innerWidth < 640 ? 60 : 80;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = method.icon;
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 transition-all duration-700"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    <div className={`
                      w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center
                      transition-all duration-500
                      ${activeMethod === index 
                        ? 'bg-white/20 scale-110 shadow-lg' 
                        : 'bg-gray-800/50 border border-gray-700 scale-90'
                      }
                    `}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        activeMethod === index ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Method Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-4 flex-shrink-0">
          <h3 className="text-lg font-semibold text-white mb-2">{currentMethod.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-brand-red-400" />
            <span className="text-sm text-gray-300">{currentMethod.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400">Response time: {currentMethod.response}</span>
          </div>
        </div>

        {/* Global Presence Indicator */}
        <div className="grid grid-cols-2 gap-2 flex-shrink-0">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <div>
                <div className="text-sm font-semibold text-white">Global</div>
                <div className="text-xs text-gray-400">24/7 Support</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <div>
                <div className="text-sm font-semibold text-white">AI-Powered</div>
                <div className="text-xs text-gray-400">Fast Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live chat indicator */}
        <div className="absolute bottom-4 right-4 bg-brand-red-600 text-white rounded-full p-2 shadow-lg">
          <MessageCircle className="w-4 h-4" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-15px) translateX(8px); 
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactHeroVisual;