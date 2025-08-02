import { Heart, Users, Award, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';

const AboutUs = () => {
  const stats = [
    { label: 'Doctors', value: '500+', icon: Users },
    { label: 'Patients Served', value: '10,000+', icon: Heart },
    { label: 'Years of Service', value: '15+', icon: Award },
    { label: 'Success Rate', value: '98%', icon: Shield }
  ];

  const values = [
    {
      title: 'Quality Care',
      description: 'We provide the highest quality medical care with state-of-the-art facilities and experienced professionals.',
      icon: Shield
    },
    {
      title: 'Compassionate Service',
      description: 'Our team is dedicated to treating every patient with empathy, respect, and personalized attention.',
      icon: Heart
    },
    {
      title: 'Innovation',
      description: 'We embrace the latest medical technologies and treatment methods to ensure the best outcomes.',
      icon: Award
    },
    {
      title: 'Accessibility',
      description: 'Healthcare should be accessible to everyone. We offer flexible scheduling and affordable options.',
      icon: Users
    }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Sharma',
      role: 'Chief Medical Officer',
      image: '/src/assets/doctor-sarah-johnson.jpg',
      experience: '20+ years'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Cardiology',
      image: '/src/assets/doctor-emily-davis.jpg',
      experience: '15+ years'
    },
    {
      name: 'Dr. Amit Kumar',
      role: 'Director of Operations',
      image: '/src/assets/doctor-michael-chen.jpg',
      experience: '18+ years'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary-glow/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About NirogGyan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connecting patients with quality healthcare through innovative technology and compassionate care. 
            Our mission is to make healthcare accessible, efficient, and patient-centered.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2009, NirogGyan began with a simple vision: to bridge the gap between patients and 
                quality healthcare providers. What started as a small clinic has grown into a comprehensive 
                healthcare platform serving thousands of patients across the region.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our name "NirogGyan" combines "Nirog" (healthy) and "Gyan" (knowledge), reflecting our 
                commitment to empowering patients with knowledge while providing the path to better health. 
                We believe that informed patients make better health decisions.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to offer a network of specialist doctors, modern facilities, and 
                innovative digital solutions that make healthcare more accessible and efficient for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience} in healthcare</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">
                  123 Healthcare Avenue,<br />
                  Medical District,<br />
                  Mumbai, Maharashtra 400001
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  Emergency: +91 98765 43210<br />
                  Appointments: +91 98765 43211<br />
                  General: +91 98765 43212
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  info@niroggyan.com<br />
                  support@niroggyan.com<br />
                  emergency@niroggyan.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: 6:00 AM - 10:00 PM<br />
                  Sat-Sun: 8:00 AM - 8:00 PM<br />
                  Emergency: 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Healthcare?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied patients who trust NirogGyan for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/'}
            >
              Find a Doctor
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              onClick={() => window.location.href = '/appointments'}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;