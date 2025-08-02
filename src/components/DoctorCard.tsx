import { Star, Clock, MapPin, DollarSign, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Doctor } from '@/types';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className={`absolute top-4 right-4 ${statusColors[doctor.status]}`}>
            {statusText[doctor.status]}
          </Badge>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{doctor.name}</h3>
              <p className="text-primary font-medium">{doctor.specialization}</p>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{doctor.rating}</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              <span>{doctor.experience} years experience</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{doctor.location}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>${doctor.consultationFee} consultation</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Link to={`/doctor/${doctor.id}`} className="flex-1">
              <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300">
                View Profile
              </Button>
            </Link>
            <Button variant="outline" className="px-4">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;