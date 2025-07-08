import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import AnimatedSection from '../components/utils/AnimatedSection';
import CallToAction from '../components/home/CallToAction';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="px-6 py-3 bg-brand-red-600 text-white rounded-lg hover:bg-brand-red-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                to="/blog"
                className="inline-flex items-center text-gray-600 hover:text-brand-red-600 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Bookmark size={16} />
                  <span>Save</span>
                </button>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 sm:h-96 object-cover object-center rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg prose-gray max-w-none"
            >
              {/* Article Excerpt */}
              <div className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-brand-red-600 pl-6 bg-gray-50 p-6 rounded-r-lg">
                {post.excerpt}
              </div>

              {/* Article Content */}
              <div 
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default BlogPost;