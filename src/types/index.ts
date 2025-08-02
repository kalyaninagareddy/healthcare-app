export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  status: 'available' | 'busy' | 'offline';
  rating: number;
  experience: number;
  education: string;
  about: string;
  availability: {
    day: string;
    slots: string[];
  }[];
  consultationFee: number;
  location: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface AppointmentForm {
  patientName: string;
  patientEmail: string;
  date: string;
  time: string;
  notes?: string;
}