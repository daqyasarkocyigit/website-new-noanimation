import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedIn?: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  image, 
  bio, 
  linkedIn,
  delay 
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
        {linkedIn && (
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-electric-blue-50 transition-colors"
          >
            <Linkedin size={20} className="text-electric-blue-500" />
          </a>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-electric-blue-500 font-medium mb-4">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;