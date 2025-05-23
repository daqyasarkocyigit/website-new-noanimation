import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from '../utils/AnimatedSection';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "DAQ Consulting transformed our data infrastructure, enabling us to make faster, more informed decisions. Their expertise in cloud solutions and AI has been invaluable to our business growth.",
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechStream Inc.",
    image: "https://images.pexels.com/photos/5993101/pexels-photo-5993101.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    quote: "The team at DAQ delivered exceptional results for our analytics platform. Their deep understanding of data engineering and visualization helped us unlock insights we didn't know were possible.",
    name: "Michael Chen",
    title: "VP of Analytics",
    company: "Global Retail Partners",
    image: "https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    quote: "Working with DAQ Consulting has been a game-changer for our organization. Their AI solutions have automated critical processes and uncovered opportunities that have directly impacted our bottom line.",
    name: "Jennifer Williams",
    title: "Director of Innovation",
    company: "HealthPlus Systems",
    image: "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title mx-auto">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud of the results we've achieved for our clients and the relationships we've built along the way.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl p-6 md:p-10 relative"
            >
              <Quote size={48} className="absolute top-6 left-6 text-electric-blue-100" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-electric-blue-100">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 relative z-10">
                    "{testimonials[current].quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="text-lg font-semibold">{testimonials[current].name}</h4>
                    <p className="text-gray-600">
                      {testimonials[current].title}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'bg-electric-blue-500 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;