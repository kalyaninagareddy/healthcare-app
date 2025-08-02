import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

interface Appointment {
  id: string;
  doctorName: string;
  doctorSpecialization: string;
  doctorImage: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  patientName: string;
  appointmentType: 'consultation' | 'follow-up' | 'emergency';
  location: string;
  notes?: string;
}

const MyAppointments = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock appointments data
  const [appointments] = useState<Appointment[]>([
    {
      id: '1',
      doctorName: 'Dr. Sarah Johnson',
      doctorSpecialization: 'Cardiologist',
      doctorImage: '/src/assets/doctor-sarah-johnson.jpg',
      date: '2024-08-05',
      time: '10:00 AM',
      status: 'upcoming',
      patientName: 'John Doe',
      appointmentType: 'consultation',
      location: 'Room 301, Cardiology Wing',
      notes: 'Regular checkup for heart condition'
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Chen',
      doctorSpecialization: 'Neurologist',
      doctorImage: '/src/assets/doctor-michael-chen.jpg',
      date: '2024-07-25',
      time: '2:30 PM',
      status: 'completed',
      patientName: 'John Doe',
      appointmentType: 'follow-up',
      location: 'Room 205, Neurology Department'
    },
    {
      id: '3',
      doctorName: 'Dr. Emily Davis',
      doctorSpecialization: 'Dermatologist',
      doctorImage: '/src/assets/doctor-emily-davis.jpg',
      date: '2024-08-10',
      time: '3:00 PM',
      status: 'upcoming',
      patientName: 'John Doe',
      appointmentType: 'consultation',
      location: 'Room 102, Dermatology Clinic'
    }
  ]);

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.doctorSpecialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusColors = {
    upcoming: 'bg-blue-500 text-white',
    completed: 'bg-green-500 text-white',
    cancelled: 'bg-red-500 text-white'
  };

  const typeColors = {
    consultation: 'bg-primary text-white',
    'follow-up': 'bg-secondary text-secondary-foreground',
    emergency: 'bg-destructive text-white'
  };

  const handleReschedule = (appointmentId: string) => {
    toast({
      title: "Reschedule Request",
      description: "Your reschedule request has been sent to the doctor's office.",
    });
  };

  const handleCancel = (appointmentId: string) => {
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully.",
      variant: "destructive"
    });
  };

  const upcomingAppointments = filteredAppointments.filter(apt => apt.status === 'upcoming');
  const pastAppointments = filteredAppointments.filter(apt => apt.status === 'completed');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Appointments</h1>
          <p className="text-muted-foreground">Manage your healthcare appointments</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search by doctor name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Appointments</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming ({upcomingAppointments.length})</TabsTrigger>
            <TabsTrigger value="history">Past Appointments ({pastAppointments.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingAppointments.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">No upcoming appointments</h3>
                  <p className="text-muted-foreground mb-4">Book your next appointment with our specialists</p>
                  <Button onClick={() => window.location.href = '/'}>Find Doctors</Button>
                </CardContent>
              </Card>
            ) : (
              upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={appointment.doctorImage}
                        alt={appointment.doctorName}
                        className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0"
                      />
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{appointment.doctorName}</h3>
                            <p className="text-primary font-medium">{appointment.doctorSpecialization}</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className={statusColors[appointment.status]}>
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </Badge>
                            <Badge className={typeColors[appointment.appointmentType]}>
                              {appointment.appointmentType.charAt(0).toUpperCase() + appointment.appointmentType.slice(1)}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{appointment.location}</span>
                          </div>
                        </div>

                        {appointment.notes && (
                          <div className="bg-muted rounded-lg p-3">
                            <p className="text-sm text-muted-foreground">
                              <strong>Notes:</strong> {appointment.notes}
                            </p>
                          </div>
                        )}

                        <div className="flex gap-3 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleReschedule(appointment.id)}
                          >
                            Reschedule
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleCancel(appointment.id)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {pastAppointments.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Clock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">No past appointments</h3>
                  <p className="text-muted-foreground">Your appointment history will appear here</p>
                </CardContent>
              </Card>
            ) : (
              pastAppointments.map((appointment) => (
                <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={appointment.doctorImage}
                        alt={appointment.doctorName}
                        className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0"
                      />
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{appointment.doctorName}</h3>
                            <p className="text-primary font-medium">{appointment.doctorSpecialization}</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className={statusColors[appointment.status]}>
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </Badge>
                            <Badge className={typeColors[appointment.appointmentType]}>
                              {appointment.appointmentType.charAt(0).toUpperCase() + appointment.appointmentType.slice(1)}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{appointment.location}</span>
                          </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.location.href = `/doctor/${appointment.id}`}
                          >
                            Book Again
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => toast({
                              title: "Download Prescription",
                              description: "Prescription download started.",
                            })}
                          >
                            Download Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyAppointments;