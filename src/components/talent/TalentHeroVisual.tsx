import React from 'react';
import { Users, Code, Database, Cloud, Brain, Layers, GitBranch, Terminal } from 'lucide-react';

const TalentHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Grid Pattern */}
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

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 animate-float-slow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-red-500/30">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
          </div>
        </div>
        
        <div className="absolute top-12 sm:top-20 right-12 sm:right-20 animate-float-medium" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-500/30">
            <Database className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />
          </div>
        </div>
        
        <div className="absolute bottom-12 sm:bottom-20 left-12 sm:left-20 animate-float-medium" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-500/30">
            <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" />
          </div>
        </div>
        
        <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-16 animate-float-slow" style={{ animationDelay: '0.5s' }}>
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-green-500/30">
            <Cloud className="w-5 h-5 sm:w-7 sm:h-7 text-green-400" />
          </div>
        </div>

        <div className="absolute top-24 sm:top-40 left-1/4 sm:left-1/3 animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <div className="w-6 h-6 sm:w-10 sm:h-10 bg-yellow-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-yellow-500/30">
            <GitBranch className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Central Talent Network Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Central Hub */}
          <div className="relative z-10">
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
              <Users className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping" />
          </div>

          {/* Orbiting Talent Nodes */}
          <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 -left-16 -top-16 sm:-left-20 sm:-top-20 lg:-left-32 lg:-top-32">
            {/* Node 1 - Data Engineer */}
            <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 animate-orbit">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-red-500/50 flex flex-col items-center justify-center">
                <Terminal className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-300 mb-0.5 sm:mb-1" />
                <span className="text-xs sm:text-xs text-gray-400 hidden sm:block">Data Eng</span>
              </div>
            </div>

            {/* Node 2 - AI/ML */}
            <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 animate-orbit-reverse" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-purple-500/50 flex flex-col items-center justify-center">
                <Brain className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-300 mb-0.5 sm:mb-1" />
                <span className="text-xs sm:text-xs text-gray-400 hidden sm:block">AI/ML</span>
              </div>
            </div>

            {/* Node 3 - Cloud */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-orbit" style={{ animationDelay: '4s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-blue-500/50 flex flex-col items-center justify-center">
                <Cloud className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-300 mb-0.5 sm:mb-1" />
                <span className="text-xs sm:text-xs text-gray-400 hidden sm:block">Cloud</span>
              </div>
            </div>

            {/* Node 4 - Full Stack */}
            <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 animate-orbit-reverse" style={{ animationDelay: '6s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-green-500/50 flex flex-col items-center justify-center">
                <Layers className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-300 mb-0.5 sm:mb-1" />
                <span className="text-xs sm:text-xs text-gray-400 hidden sm:block">Full Stack</span>
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <circle 
                cx="50%" 
                cy="50%" 
                r="80" 
                fill="none" 
                stroke="rgba(239,68,68,0.2)" 
                strokeWidth="1"
                strokeDasharray="5,5"
                className="animate-rotate-slow sm:r-[100] lg:r-[120]"
              />
              <circle 
                cx="50%" 
                cy="50%" 
                r="100" 
                fill="none" 
                stroke="rgba(147,51,234,0.2)" 
                strokeWidth="1"
                strokeDasharray="3,7"
                className="animate-rotate-reverse sm:r-[120] lg:r-[160]"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent p-4 sm:p-6 lg:p-8">
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8">
          <div className="text-center">
            <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">2,847</div>
            <div className="text-xs sm:text-sm text-gray-400">Active Talents</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">98.5%</div>
            <div className="text-xs sm:text-sm text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">1.2w</div>
            <div className="text-xs sm:text-sm text-gray-400">Avg Deploy Time</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(-360deg) translateX(100px) rotate(360deg); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 25s linear infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }
        
        .animate-rotate-reverse {
          animation: rotate-reverse 40s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
          }
          
          @keyframes orbit-reverse {
            from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
            to { transform: rotate(-360deg) translateX(120px) rotate(360deg); }
          }
        }

        @media (min-width: 1024px) {
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
          }
          
          @keyframes orbit-reverse {
            from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
            to { transform: rotate(-360deg) translateX(150px) rotate(360deg); }
          }
        }
      `}</style>
    </div>
  );
};

export default TalentHeroVisual;