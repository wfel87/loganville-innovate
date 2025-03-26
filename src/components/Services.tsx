
import React from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Smartphone, 
  HardDrive, 
  Network, 
  MessageSquare, 
  Headphones 
} from 'lucide-react';

const services = [
  {
    icon: <Server size={22} />,
    title: 'Managed IT Services',
    description: 'Comprehensive monitoring, management and support for your entire IT infrastructure.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Shield size={22} />,
    title: 'Cybersecurity',
    description: 'Advanced threat protection, security assessments, and compliance solutions.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: <Cloud size={22} />,
    title: 'Cloud Services',
    description: 'Secure cloud migration, management and optimization for your business.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Business Continuity',
    description: 'Disaster recovery and business continuity planning to keep you running.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <HardDrive size={22} />,
    title: 'Data Backup',
    description: 'Robust backup solutions to protect your critical business data.',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    icon: <Network size={22} />,
    title: 'Network Infrastructure',
    description: 'Design, implementation and management of reliable network systems.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: <MessageSquare size={22} />,
    title: 'IT Consulting',
    description: 'Strategic technology planning and advisory services for business growth.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: <Headphones size={22} />,
    title: '24/7 Support',
    description: 'Around-the-clock technical support and helpdesk services when you need it most.',
    color: 'from-pink-500 to-pink-600'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-accent/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-block px-3 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary">
            Our Services
          </div>
          <h2 className="heading-lg mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full range of IT services to help your business succeed in the digital world. 
            From infrastructure to security and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group glass rounded-xl p-6 card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg mb-5 flex items-center justify-center text-white bg-gradient-to-br ${service.color} transition-transform group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
