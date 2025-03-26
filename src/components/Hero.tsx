
import React from 'react';
import { ArrowRight, Server, Shield, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="flex items-center px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                  IT Solutions for Loganville & Atlanta
                </div>
              </div>
              <h1 className="heading-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Enterprise-grade IT solutions for <span className="text-primary">growing businesses</span>
              </h1>
              <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Technology consulting that helps your business thrive. Our experts provide reliable, scalable, and secure IT solutions tailored to your needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="#contact" className="button-primary flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="button-secondary flex items-center justify-center">
                Explore Services
              </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                  <Server size={18} />
                </div>
                <span className="text-sm font-medium">Managed IT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                  <Shield size={18} />
                </div>
                <span className="text-sm font-medium">Cybersecurity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                  <Cpu size={18} />
                </div>
                <span className="text-sm font-medium">Cloud Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="aspect-square rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
              <div className="w-full h-full glass rounded-lg lg:rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 rounded-xl lg:rounded-2xl mix-blend-overlay"></div>
                <div className="absolute top-6 left-6 right-6 h-12 bg-white/80 backdrop-blur-sm rounded-lg"></div>
                <div className="absolute top-24 left-6 right-6 bottom-6 bg-white/80 backdrop-blur-sm rounded-lg grid grid-cols-2 grid-rows-2 gap-4 p-4">
                  <div className="bg-accent rounded-md animate-float" style={{ animationDelay: '0s' }}></div>
                  <div className="bg-accent rounded-md animate-float" style={{ animationDelay: '0.5s' }}></div>
                  <div className="bg-accent rounded-md animate-float" style={{ animationDelay: '1s' }}></div>
                  <div className="bg-accent rounded-md animate-float" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
