import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, MapPin, DollarSign, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { doctors } from '@/data/doctors';
import Header from '@/components/Header';

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Doctor not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    available: 'bg-status-available text-white',
    busy: 'bg-status-busy text-white',
    offline: 'bg-status-offline text-white'
  };

  const statusText = {
    available: 'Available Today',
    busy: 'Busy',
    offline: 'Offline'
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Doctors
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative inline-block">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <Badge className={`absolute bottom-2 right-2 ${statusColors[doctor.status]}`}>
                      {statusText[doctor.status]}
                    </Badge>
                  </div>
                  
                  <h1 className="text-2xl font-bold text-foreground mb-2">{doctor.name}</h1>
                  <p className="text-primary font-medium text-lg mb-4">{doctor.specialization}</p>
                  
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground">(150+ reviews)</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Experience</span>
                      </div>
                      <span className="font-medium">{doctor.experience} years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Location</span>
                      </div>
                      <span className="font-medium text-sm">{doctor.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>Consultation</span>
                      </div>
                      <span className="font-medium">${doctor.consultationFee}</span>
                    </div>
                  </div>

                  <Link to={`/book/${doctor.id}`}>
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  About Dr. {doctor.name.split(' ')[1]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{doctor.about}</p>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Education & Qualifications</h4>
                  <p className="text-muted-foreground">{doctor.education}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Available Slots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {doctor.availability.map((schedule, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-medium text-foreground mb-3">{schedule.day}</h4>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {schedule.slots.map((slot, slotIndex) => (
                          <Button
                            key={slotIndex}
                            variant="outline"
                            size="sm"
                            className="hover:bg-primary hover:text-white transition-colors"
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;