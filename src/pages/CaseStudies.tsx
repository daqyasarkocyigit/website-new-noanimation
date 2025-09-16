import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const CaseStudies: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FF3333;
          border-radius: 50%;
          opacity: 0;
          left: ${Math.random() * 100}%;
          animation: particleFloat ${15 + Math.random() * 10}s infinite;
          animation-delay: ${Math.random() * 15}s;
        `;
        container.appendChild(particle);
      }
    };

    // Create particles
    setTimeout(() => {
      createParticles();
    }, 500);

    return () => {
      // Cleanup particles
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  // Animate metric values
  const animateValue = (element: HTMLElement, start: number, end: number, duration: number, decimal = false, suffix = '') => {
    const startTime = performance.now();
    
    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;
      
      if (decimal) {
        element.textContent = current.toFixed(1) + suffix;
      } else {
        element.textContent = Math.round(current) + suffix;
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  };

  // Handle metric animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('metrics-section')) {
          const metrics = entry.target.querySelectorAll('.metric-value');
          metrics.forEach((metric: any) => {
            const target = parseFloat(metric.dataset.target);
            const suffix = metric.dataset.suffix || '';
            const decimal = metric.dataset.decimal === 'true';
            animateValue(metric, 0, target, 2500, decimal, suffix);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
      observer.observe(metricsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes particleFloat {
          0%, 100% {
            opacity: 0;
            transform: translateY(100vh) scale(0);
          }
          10% {
            opacity: 0.6;
            transform: translateY(90vh) scale(1);
          }
          90% {
            transform: translateY(10vh) scale(1);
          }
        }

        @keyframes bgRotate {
          from { transform: rotate(0deg) scale(1.5); }
          to { transform: rotate(360deg) scale(1.5); }
        }

        @keyframes gridMove {
          from { transform: translate(0, 0); }
          to { transform: translate(50px, 50px); }
        }

        @keyframes headerPulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes badgeShine {
          to { left: 100%; }
        }

        @keyframes statusPulse {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }

        .bg-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .bg-gradient {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(255, 51, 51, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(107, 114, 128, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 51, 51, 0.04) 0%, transparent 50%);
          animation: bgRotate 45s linear infinite;
        }

        .bg-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 51, 51, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 51, 51, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 30s linear infinite;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FF3333;
          border-radius: 50%;
          opacity: 0;
          animation: particleFloat 15s infinite;
        }
        <section className="pt-32 pb-20 relative overflow-hidden">
              <h2 className="text-heading-1 mb-4 text-gray-900">
                Performance Metrics
              </h2>
              <p className="text-body-large text-gray-600">
                Real-world results from our enterprise implementations
              </p>
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-label">Data Sources</div>
                <div className="metric-value" data-target="50">0</div>
                <div className="metric-change positive">+12%</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Daily Volume</div>
                <div className="metric-value" data-target="10" data-suffix="TB">0TB</div>
                <div className="metric-change positive">+25%</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Processing Time</div>
                <div className="metric-value" data-target="2" data-suffix="h">0h</div>
                <div className="metric-change negative">-8h</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">SLA Achievement</div>
                <div className="metric-value" data-target="99.9" data-suffix="%" data-decimal="true">0%</div>
                <div className="metric-change positive">+0.5%</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Cost Reduction</div>
                <div className="metric-value" data-target="85" data-suffix="%">0%</div>
                <div className="metric-change positive">+15%</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Performance Gain</div>
                <div className="metric-value" data-target="20" data-suffix="x">0x</div>
                <div className="metric-change positive">+5x</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Daily Pipelines</div>
                <div className="metric-value" data-target="500">0</div>
                <div className="metric-change positive">+120</div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Data Quality</div>
                <div className="metric-value" data-target="98" data-suffix="%">0%</div>
                <div className="metric-change positive">+3%</div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection delay={0.8}>
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-heading-1 mb-4 text-gray-900">
                Key Architecture Features
              </h2>
              <p className="text-body-large text-gray-600">
                Enterprise-grade capabilities for modern data platforms
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-number">01</div>
                <h3 className="feature-title">Metadata-Driven Orchestration</h3>
                <p className="feature-description">
                  Dynamic pipeline generation based on configuration metadata, eliminating custom code for each data source integration.
                </p>
                <div className="feature-code">
                  <span className="code-keyword">SELECT</span> * <span className="code-keyword">FROM</span> unity.configurations<br />
                  <span className="code-keyword">WHERE</span> is_active = <span className="code-string">true</span><br />
                  <span className="code-keyword">ORDER BY</span> priority <span className="code-keyword">DESC</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">02</div>
                <h3 className="feature-title">Medallion Architecture</h3>
                <p className="feature-description">
                  Three-layer data refinement process ensuring data quality, consistency, and optimal query performance at scale.
                </p>
                <div className="feature-code">
                  Bronze: Raw Data | Immutable<br />
                  Silver: Cleansed | Validated<br />
                  Gold: Business Ready | Optimized
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">03</div>
                <h3 className="feature-title">Unity Catalog Governance</h3>
                <p className="feature-description">
                  Centralized metadata management with fine-grained access control and comprehensive data lineage tracking.
                </p>
                <div className="feature-code">
                  <span className="code-keyword">GRANT SELECT ON</span> gold.*<br />
                  <span className="code-keyword">TO</span> data_analysts<br />
                  <span className="code-keyword">WITH</span> row_filter
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">04</div>
                <h3 className="feature-title">Real-time Processing</h3>
                <p className="feature-description">
                  Streaming data ingestion with Event Hub and Kafka integration for near real-time analytics.
                </p>
                <div className="feature-code">
                  Latency: <span className="code-number">500ms</span><br />
                  Throughput: <span className="code-number">1M events/sec</span><br />
                  Auto-scaling: <span className="code-string">Enabled</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">05</div>
                <h3 className="feature-title">Automated Quality Checks</h3>
                <p className="feature-description">
                  Built-in data validation, deduplication, and business rule enforcement at each processing layer.
                </p>
                <div className="feature-code">
                  Null Checks: <span className="code-number">100%</span><br />
                  Deduplication: <span className="code-string">Automatic</span><br />
                  Schema Validation: <span className="code-string">Enforced</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-number">06</div>
                <h3 className="feature-title">Zero-Downtime Deployment</h3>
                <p className="feature-description">
                  Blue-green deployment strategy with automated rollback capabilities ensuring continuous availability.
                </p>
                <div className="feature-code">
                  Strategy: <span className="code-string">Blue/Green</span><br />
                  Rollback: <span className="code-number">30 seconds</span><br />
                  Availability: <span className="code-number">99.99%</span>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>

      <CallToAction />
    </>
  )
  )
  )
  );
};

export default CaseStudies;
    }
  )
}
    }
  )
}</section>
        </AnimatedSection>
      </div>

      <CallToAction />
    </>
  )
  )
  )
  );
};

export default CaseStudies;
    }
  )
}
    }
  )
}
    }
  )
}
    }
  )
}
    }
  )
}