import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create email body
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service of Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}
      `.trim();

      // Create mailto link
      const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:info@daqconsulting.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent rounded-xl hover:shadow-lg hover:bg-white/5 hover:border-[#FF3333]/30 hover:-translate-y-2 transition-all duration-500 p-4 sm:p-6 md:p-8 border border-gray-200/20">
      {isSubmitted ? (
        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Email Client Opened!</h3>
          <p className="text-gray-600">
            Your email client should have opened with your message. Please send the email to complete your inquiry.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <h2 className="text-heading-3 mb-6">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`form-input ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="your.email@company.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select a service</option>
                <option value="data-engineering">Data Engineering</option>
                <option value="data-visualization">Data Visualization</option>
                <option value="business-intelligence">Business Intelligence & Analytics</option>
                <option value="cloud-modernization">Cloud Modernization</option>
                <option value="ai-engineering">AI Engineering</option>
                <option value="talent-hiring">Talent & Hiring</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full px-4 py-3 text-base border rounded-lg transition-all duration-200 bg-transparent border-gray-200/30 hover:border-brand-red-300/50 focus:border-brand-red-500 focus:ring-2 focus:ring-brand-red-500/20 focus:bg-white/5 resize-none min-h-[120px] ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50/10' : ''}`}
              placeholder="Tell us about your project or requirements..."
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={16} className="mr-1" />
                {errors.message}
              </p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary w-full flex items-center justify-center ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            aria-describedby="submit-status"
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner w-4 h-4 mr-2" />
                Opening Email...
              </>
            ) : (
              <>
                Send Message 
                <Send size={16} className="ml-2" />
              </>
            )}
          </button>
          
          <p className="mt-3 text-xs text-gray-500 text-center">
            This will open your email client with your message pre-filled to send to info@daqconsulting.com
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;