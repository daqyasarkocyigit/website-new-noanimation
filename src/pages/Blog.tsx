import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0"></div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 z-0"
          style={{
            backgroundImage: 'url("/images/pattern-dots.svg")',
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Technical <span className="text-brand-red-600">Blog</span>
              </h1>
              <div className="w-20 h-1.5 bg-brand-red-600 rounded-full mb-6 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-cool-gray-600 leading-relaxed mb-6">
                Deep dives into data engineering, cloud architecture, and AI implementation strategies. 
                Learn from real-world experiences and industry best practices.
              </p>
              <p className="text-base sm:text-lg text-cool-gray-600 leading-relaxed">
                Our technical insights help you navigate the complexities of modern data platforms 
                and accelerate your digital transformation journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full mb-6">
                FEATURED ARTICLE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Latest Technical Insights
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="max-w-4xl mx-auto">
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="block bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 sm:h-80 object-cover object-center"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{featuredPost.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center text-brand-red-600 font-medium">
                      <span>Read Full Article</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                More Technical Articles
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Explore our collection of in-depth technical guides and industry insights.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <AnimatedSection key={post.slug} delay={index * 0.1}>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-brand-red-600 font-medium text-sm">
                        <span>Read More</span>
                        <ArrowRight size={14} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <CallToAction />
    </>
  );
};

export default Blog;