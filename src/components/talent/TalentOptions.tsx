import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

// TalentOptions Component (renamed from TalentVisual)
const TalentOptions: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-4">
        
        {/* Talent Pool Status Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-xl mb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-brand-red-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Global Talent Network</h3>
                <p className="text-xs text-gray-300">Pre-vetted professionals ready to deploy</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white tabular-nums">
                2,847
              </div>
              <div className="text-xs text-gray-300 uppercase">Available Experts</div>
            </div>
          </div>
          
          {/* Talent Categories */}
          <div className="grid grid-cols-5 gap-1.5">
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Data Eng.</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-brand-red-500 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">AI/ML</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-purple-500 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Cloud</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-blue-500 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Frontend</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[89%] bg-green-500 rounded-full" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Backend</div>
              <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-yellow-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Talent Showcase Grid */}
        <div className="flex-1 grid grid-cols-3 gap-3">
          
          {/* Featured Talent Profiles */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center">
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Featured Talent
            </h4>
            
            <div className="space-y-2">
              <div className="bg-gray-900/50 rounded p-2 border border-gray-700/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-brand-red-500 to-brand-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-gray-300">Sarah Chen</div>
                    <div className="text-xs text-gray-500">Senior Data Engineer</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  </svg>
                  <span>Remote</span>
                  <svg className="w-2.5 h-2.5 ml-2 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                  <span>Available</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2 border border-gray-700/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.5 2A7.5 7.5 0 0 0 2 9.5C2 14.06 6.94 19 9.5 19c1.24 0 2.47-.24 3.6-.7L19 24l1-1-5.9-5.9c.46-1.13.7-2.36.7-3.6A7.5 7.5 0 0 0 9.5 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-gray-300">Marcus Kumar</div>
                    <div className="text-xs text-gray-500">AI/ML Specialist</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  </svg>
                  <span>NYC</span>
                  <svg className="w-2.5 h-2.5 ml-2 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                  <span>Available</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-2 border border-gray-700/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-gray-300">Alex Rodriguez</div>
                    <div className="text-xs text-gray-500">Cloud Architect</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  </svg>
                  <span>SF</span>
                  <svg className="w-2.5 h-2.5 ml-2 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Talent Metrics Dashboard */}
          <div className="bg-gradient-to-br from-brand-red-900/20 to-brand-red-800/10 backdrop-blur-sm rounded-lg p-3 border border-brand-red-500/30 shadow-lg">
            <h4 className="text-xs font-semibold text-brand-red-400 mb-2 flex items-center">
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
              Talent Metrics
            </h4>
            
            {/* Key Performance Indicators */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">98.5%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">4.9/5</div>
                  <div className="text-xs text-gray-400">Avg Rating</div>
                </div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">1.2 weeks</div>
                  <div className="text-xs text-gray-400">Avg Deploy</div>
                </div>
              </div>
              <div className="bg-white/5 rounded p-2 border border-white/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">847</div>
                  <div className="text-xs text-gray-400">Active Projects</div>
                </div>
              </div>
            </div>
            
            {/* Live Activity Feed */}
            <div className="bg-white/5 rounded p-2 border border-white/10">
              <div className="flex items-center justify-center gap-1 mb-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-300">Live Activity</span>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-400">
                  <span className="text-green-400">Sarah</span> matched to Data Eng. role
                </div>
                <div className="text-xs text-gray-400">
                  <span className="text-blue-400">Alex</span> started Cloud migration
                </div>
                <div className="text-xs text-gray-400">
                  <span className="text-purple-400">Marcus</span> deployed ML model
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
            <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center">
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="5"/>
                <path d="m20.5 14.5-4 4L14 16"/>
                <path d="M3 19v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2"/>
              </svg>
              Top Skills
            </h4>
            
            {/* Skill Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {[
                { name: 'Python', color: 'bg-blue-500/20 text-blue-300' },
                { name: 'AWS', color: 'bg-orange-500/20 text-orange-300' },
                { name: 'React', color: 'bg-cyan-500/20 text-cyan-300' },
                { name: 'Docker', color: 'bg-blue-600/20 text-blue-300' },
                { name: 'TensorFlow', color: 'bg-yellow-500/20 text-yellow-300' },
                { name: 'Kubernetes', color: 'bg-purple-500/20 text-purple-300' }
              ].map((skill, i) => (
                <span 
                  key={i} 
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
            
            {/* Certification Levels */}
            <div className="space-y-1.5">
              <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs text-gray-300">Expert Level</span>
                  <span className="text-xs text-gray-500">67%</span>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[67%] bg-gradient-to-r from-brand-red-500 to-brand-red-600 rounded-full" />
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs text-gray-300">Senior Level</span>
                  <span className="text-xs text-gray-500">89%</span>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[89%] bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded p-1.5 border border-gray-700/30">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs text-gray-300">Mid Level</span>
                  <span className="text-xs text-gray-500">94%</span>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          <div className="bg-white/5 backdrop-blur-sm rounded p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Active</div>
                <div className="text-sm font-bold text-white">2,847</div>
                <div className="text-xs text-gray-500">professionals</div>
              </div>
              <Users className="w-3 h-3 text-brand-red-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Projects</div>
                <div className="text-sm font-bold text-white">847</div>
                <div className="text-xs text-gray-500">ongoing</div>
              </div>
              <svg className="w-3 h-3 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Success</div>
                <div className="text-sm font-bold text-white">98.5%</div>
                <div className="text-xs text-gray-500">rate</div>
              </div>
              <CheckCircle className="w-3 h-3 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded p-2 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Deploy</div>
                <div className="text-sm font-bold text-white">1.2w</div>
                <div className="text-xs text-gray-500">average</div>
              </div>
              <svg className="w-3 h-3 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentOptions;