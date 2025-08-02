import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
     <div className="container mx-auto px-4 text-center">
  <div className="grid md:grid-cols-4 gap-8 justify-center">
    <div className="md:col-span-4 flex flex-col items-center">
      <div className="flex items-center space-x-2 mb-4 justify-center">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">NirogGyan</h3>
          <p className="text-sm text-muted">Healthcare Connect</p>
        </div>
      </div>
      <p className="text-muted mb-4 max-w-md">
        Connecting patients with qualified healthcare professionals. 
        Your health is our priority, and we're here to make healthcare accessible and convenient.
      </p>
      <div className="flex space-x-4 justify-center">
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span className="text-sm">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span className="text-sm">support@niroggyan.com</span>
        </div>
      </div>
    </div>
  </div>

  <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
    <p className="text-sm text-muted">
      © 2024 NirogGyan Healthcare Connect. All rights reserved.
    </p>
  </div>
</div>

    </footer>
  );
};

export default Footer;