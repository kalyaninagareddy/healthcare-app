import { useState } from 'react';
import { Phone, MapPin, Clock, AlertTriangle, Ambulance, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

const Emergency = () => {
  const { toast } = useToast();
  const [isCallPlaced, setIsCallPlaced] = useState(false);
  const [emergencyForm, setEmergencyForm] = useState({
    name: '',
    phone: '',
    location: '',
    emergency: '',
    description: ''
  });

  const emergencyServices = [
    {
      title: 'Ambulance Service',
      phone: '+91 108',
      description: '24/7 Emergency ambulance with medical staff',
      icon: Ambulance,
      priority: 'critical'
    },
    {
      title: 'Emergency Helpline',
      phone: '+91 98765 43210',
      description: 'NirogGyan emergency medical consultation',
      icon: Phone,
      priority: 'high'
    },
    {
      title: 'Cardiac Emergency',
      phone: '+91 98765 43211',
      description: 'Specialized cardiac emergency unit',
      icon: Heart,
      priority: 'critical'
    },
    {
      title: 'General Emergency',
      phone: '+91 98765 43212',
      description: 'General medical emergency assistance',
      icon: Users,
      priority: 'medium'
    }
  ];

  const nearbyHospitals = [
    {
      name: 'NirogGyan Medical Center',
      address: '123 Healthcare Avenue, Medical District',
      distance: '0.5 km',
      emergency: true,
      phone: '+91 98765 43210'
    },
    {
      name: 'City General Hospital',
      address: '456 Main Street, Downtown',
      distance: '1.2 km',
      emergency: true,
      phone: '+91 98765 43213'
    },
    {
      name: 'Metro Emergency Hospital',
      address: '789 Emergency Lane, Central Area',
      distance: '2.1 km',
      emergency: true,
      phone: '+91 98765 43214'
    }
  ];

  const handleEmergencyCall = (phone: string, service: string) => {
    setIsCallPlaced(true);
    toast({
      title: "Emergency Call Initiated",
      description: `Connecting you to ${service} at ${phone}`,
    });
    
    // Simulate call
    setTimeout(() => {
      setIsCallPlaced(false);
    }, 3000);
  };

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Emergency Request Sent",
      description: "Our emergency team has been notified and will contact you shortly.",
    });
    setEmergencyForm({
      name: '',
      phone: '',
      location: '',
      emergency: '',
      description: ''
    });
  };

  const priorityColors = {
    critical: 'border-red-500 bg-red-50 dark:bg-red-950',
    high: 'border-orange-500 bg-orange-50 dark:bg-orange-950',
    medium: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950'
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Emergency Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl font-bold mb-4">Emergency Services</h1>
            <p className="text-xl opacity-90">
              Immediate medical assistance available 24/7
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Emergency Alert */}
        <Alert className="mb-8 border-red-500 bg-red-50 dark:bg-red-950">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Life-threatening emergency?</strong> Call 108 immediately for ambulance or go to the nearest emergency room.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Emergency Contacts</h2>
            
            <div className="space-y-4">
              {emergencyServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className={`border-2 ${priorityColors[service.priority]} hover:shadow-lg transition-shadow`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Icon className="w-8 h-8 text-primary" />
                          <div>
                            <h3 className="font-semibold text-foreground">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                            <p className="text-lg font-bold text-primary mt-1">{service.phone}</p>
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="lg"
                          onClick={() => handleEmergencyCall(service.phone, service.title)}
                          disabled={isCallPlaced}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {isCallPlaced ? 'Calling...' : 'Call Now'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Emergency Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Quick Emergency Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmergencySubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={emergencyForm.name}
                      onChange={(e) => setEmergencyForm({...emergencyForm, name: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      value={emergencyForm.phone}
                      onChange={(e) => setEmergencyForm({...emergencyForm, phone: e.target.value})}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Your Current Location"
                    value={emergencyForm.location}
                    onChange={(e) => setEmergencyForm({...emergencyForm, location: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Type of Emergency"
                    value={emergencyForm.emergency}
                    onChange={(e) => setEmergencyForm({...emergencyForm, emergency: e.target.value})}
                    required
                  />
                  <Textarea
                    placeholder="Brief description of the emergency"
                    value={emergencyForm.description}
                    onChange={(e) => setEmergencyForm({...emergencyForm, description: e.target.value})}
                    rows={3}
                  />
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Send Emergency Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Nearby Hospitals */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Nearby Emergency Hospitals</h2>
            
            <div className="space-y-4">
              {nearbyHospitals.map((hospital, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{hospital.name}</h3>
                          <div className="flex items-center text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{hospital.address}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground mt-1">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{hospital.distance} away</span>
                          </div>
                        </div>
                        {hospital.emergency && (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                            24/7 Emergency
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEmergencyCall(hospital.phone, hospital.name)}
                          className="flex-1"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Hospital
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(hospital.address)}`, '_blank')}
                          className="flex-1"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* First Aid Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Emergency First Aid Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>For Cardiac Emergency:</strong>
                    <p className="text-muted-foreground">Call 108, perform CPR if trained, use AED if available</p>
                  </div>
                  <div>
                    <strong>For Severe Bleeding:</strong>
                    <p className="text-muted-foreground">Apply direct pressure, elevate if possible, call for help</p>
                  </div>
                  <div>
                    <strong>For Breathing Problems:</strong>
                    <p className="text-muted-foreground">Keep person calm, loosen tight clothing, ensure airway is clear</p>
                  </div>
                  <div>
                    <strong>For Poisoning:</strong>
                    <p className="text-muted-foreground">Do not induce vomiting, call poison control immediately</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;