import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Mail, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { doctors } from '@/data/doctors';
import { AppointmentForm } from '@/types';
import Header from '@/components/Header';

const BookAppointment = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const doctor = doctors.find(d => d.id === id);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<AppointmentForm>({
    patientName: '',
    patientEmail: '',
    date: '',
    time: '',
    notes: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment booked:', { ...formData, doctorId: doctor.id });
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof AppointmentForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Appointment Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Your appointment with Dr. {doctor.name} has been successfully booked. 
              You will receive a confirmation email shortly.
            </p>
            <div className="space-y-3">
              <Button onClick={() => navigate('/')} className="w-full">
                Back to Home
              </Button>
              <Button variant="outline" onClick={() => setIsSubmitted(false)} className="w-full">
                Book Another Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get available days for select options
  const availableDays = doctor.availability.map(schedule => schedule.day);
  const selectedDaySchedule = doctor.availability.find(schedule => 
    schedule.day === formData.date
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to={`/doctor/${doctor.id}`} className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Profile
        </Link>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-4">{doctor.specialization}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Consultation Fee:</span>
                      <span className="font-medium">${doctor.consultationFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium text-right">{doctor.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Book Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="patientName" className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Patient Name
                      </Label>
                      <Input
                        id="patientName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.patientName}
                        onChange={(e) => handleInputChange('patientName', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientEmail" className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address
                      </Label>
                      <Input
                        id="patientEmail"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.patientEmail}
                        onChange={(e) => handleInputChange('patientEmail', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Select Day
                      </Label>
                      <Select value={formData.date} onValueChange={(value) => handleInputChange('date', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a day" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableDays.map((day) => (
                            <SelectItem key={day} value={day}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Select Time
                      </Label>
                      <Select 
                        value={formData.time} 
                        onValueChange={(value) => handleInputChange('time', value)}
                        disabled={!formData.date}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedDaySchedule?.slots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Describe your symptoms or reason for visit..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
                      disabled={!formData.patientName || !formData.patientEmail || !formData.date || !formData.time}
                    >
                      Confirm Appointment
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;