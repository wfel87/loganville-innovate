
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'Personalized IT strategies tailored to your business',
    'Proactive monitoring to prevent issues before they occur',
    'Fast response times with 24/7 support availability',
    'Local service with deep knowledge of Loganville and Atlanta businesses',
    'Transparent pricing with no hidden costs',
    'Certified IT professionals with extensive experience'
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square max-w-lg rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
                <div className="w-full h-full glass rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-xl mix-blend-overlay"></div>
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center rounded-lg"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary">
              About Us
            </div>
            <h2 className="heading-lg mb-6">
              IT expertise you can trust in Loganville & Atlanta
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded by Matthew Anderson, our IT consulting firm brings enterprise-level technology 
              services to small and medium businesses throughout Loganville and the greater Atlanta area. 
              With over a decade of experience, we understand the unique challenges businesses face in today's 
              digital landscape.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="button-primary inline-block">
              Work with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
