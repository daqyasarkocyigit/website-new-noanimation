const CloudModernizationVisual: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [dataTransferred, setDataTransferred] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
      
      setDataTransferred((prev) => {
        if (prev >= 3) return 3;
        return prev + 0.03;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col p-8">
        
        {/* Cloud Migration Progress Card */}
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/30 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-brand-red-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-brand-red-500 rounded-full animate-ping" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Cloud Migration Progress</h3>
                <p className="text-sm text-slate-400">Migrating infrastructure to cloud</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-white tabular-nums tracking-tight">
                {progress}%
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Complete</div>
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="relative w-full h-5 bg-slate-800/80 rounded-full overflow-hidden shadow-inner border border-slate-700/50">
            <div 
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #f97316 100%)'
              }}
            >
              {/* Glossy Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              
              {/* Animated Glow */}
              <div className="absolute inset-0 opacity-50">
                <div 
                  className="h-full w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  style={{ animation: 'shimmer 2s linear infinite' }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-3">
            <span className="text-sm text-slate-500">0TB</span>
            <span className="text-sm font-medium text-brand-red-400 tabular-nums">
              {dataTransferred.toFixed(1)}TB / 3TB
            </span>
          </div>
        </div>

        {/* Professional Cloud Architecture Diagram */}
        <div className="flex-1 flex items-center justify-center mt-8">
          <div className="relative w-full max-w-md">
            {/* On-Premise to Cloud Flow */}
            <div className="grid grid-cols-3 gap-4 items-center">
              
              {/* On-Premise Section */}
              <div className="relative">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-xs font-medium text-slate-400 mb-3 text-center">On-Premise</div>
                  <div className="space-y-2">
                    {[Server, Database, Network].map((Icon, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-lg p-3 flex items-center justify-center border border-slate-600/30">
                        <Icon className="w-5 h-5 text-slate-500" strokeWidth={1.5} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Migration Arrow */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-full h-0.5 bg-gradient-to-r from-slate-700 via-brand-red-500 to-slate-700" />
                <div className="relative bg-slate-900 rounded-full p-3 border-2 border-brand-red-500/50">
                  <ChevronRight className="w-6 h-6 text-brand-red-500" strokeWidth={2} />
                </div>
                <div 
                  className="absolute w-3 h-3 bg-brand-red-500 rounded-full"
                  style={{
                    animation: 'migrate 2s linear infinite',
                    left: 0
                  }}
                />
              </div>

              {/* Cloud Section */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-brand-red-500/30 rounded-xl p-4 backdrop-blur-sm shadow-lg">
                  <div className="text-xs font-medium text-brand-red-400 mb-3 text-center">Cloud Platform</div>
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-brand-red-900/30 to-brand-red-800/30 rounded-lg p-3 flex items-center justify-center border border-brand-red-500/30">
                      <Cloud className="w-5 h-5 text-brand-red-400" strokeWidth={1.5} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[Shield, Globe, Activity, Zap].map((Icon, i) => (
                        <div key={i} className="bg-slate-900/50 rounded p-2 flex items-center justify-center border border-slate-600/30">
                          <Icon className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Cloud Glow Effect */}
                <div className="absolute inset-0 bg-brand-red-500/10 rounded-xl blur-2xl" />
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '-20px', height: 'calc(100% + 40px)' }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                  <stop offset="50%" stopColor="rgba(239, 68, 68, 0.3)" />
                  <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                </linearGradient>
              </defs>
              <path
                d="M 50 20 Q 200 10, 350 20"
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M 50 180 Q 200 190, 350 180"
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>

        {/* Professional Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Infrastructure Cost</span>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-white">-42%</div>
            <div className="text-xs text-slate-500 mt-1">$2.1M annual savings</div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Performance</span>
              <Activity className="w-4 h-4 text-brand-red-500" />
            </div>
            <div className="text-2xl font-bold text-white">3.2x</div>
            <div className="text-xs text-slate-500 mt-1">Faster deployment</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes migrate {
          0% { 
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateX(200px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
