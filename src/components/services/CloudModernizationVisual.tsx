{/* Enterprise Metrics Dashboard */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Cost Reduction', value: '42%', trend: '↓ $2.1M/year', color: 'from-blue-500 to-blue-600' },
            { label: 'Deployment Speed', value: '3.2x', trend: '↑ 68% faster', color: 'from-cyan-500 to-blue-600' },
            { label: 'System Uptime', value: '99.99%', trend: 'SLA Exceeded', color: 'from-indigo-500 to-purple-600' },
            { label: 'Auto-Scaling', value: 'Active', trend: '24/7 Monitor', color: 'from-slate-500 to-slate-600' }
          ].map((metric, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm rounded-xl p-3 border border-slate-600/40 group hover:border-blue-500/50 transition-all duration-300 shadow-lg"
              style={{
                animation: `metricSlide 0.5s ease-out forwards`,
                animationDelay: `${1.2 + i * 0.1}s`,
                opacity: 0
              }}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${metric.color} rounded-full mb-3 shadow-sm`} />
              <div className="text-xl font-bold text-white tracking-tight">{metric.value}</div>
              <div className="text-xs text-slate-300 font-medium">{metric.label}</div>
              <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                <ChevronRight className="w-3 h-3 text-blue-400" />
                {metric.trend}
              </div>
            </div>
          ))}
        </div>
