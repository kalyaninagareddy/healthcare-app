import { Doctor } from '@/types';
import drSarah from '@/assets/doctor-sarah-johnson.jpg';
import drMichael from '@/assets/doctor-michael-chen.jpg';
import drEmily from '@/assets/doctor-emily-davis.jpg';
import drDavid from '@/assets/doctor-david-kumar.jpg';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'General Medicine',
    image: drSarah,
    status: 'available',
    rating: 4.8,
    experience: 12,
    education: 'MBBS, MD - Harvard Medical School',
    about: 'Dr. Sarah Johnson is a highly experienced general practitioner with over 12 years of experience in primary healthcare. She specializes in preventive care, chronic disease management, and family medicine.',
    availability: [
      {
        day: 'Monday',
        slots: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
      },
      {
        day: 'Tuesday',
        slots: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM']
      },
      {
        day: 'Wednesday',
        slots: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
      },
      {
        day: 'Thursday',
        slots: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM']
      },
      {
        day: 'Friday',
        slots: ['9:00 AM', '10:00 AM', '11:00 AM']
      }
    ],
    consultationFee: 150,
    location: 'New York Medical Center'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Cardiology',
    image: drMichael,
    status: 'available',
    rating: 4.9,
    experience: 15,
    education: 'MBBS, MD, DM Cardiology - Johns Hopkins',
    about: 'Dr. Michael Chen is a renowned cardiologist with extensive experience in treating heart conditions. He specializes in interventional cardiology, cardiac imaging, and preventive cardiology.',
    availability: [
      {
        day: 'Monday',
        slots: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM']
      },
      {
        day: 'Wednesday',
        slots: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM']
      },
      {
        day: 'Friday',
        slots: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
      }
    ],
    consultationFee: 300,
    location: 'Heart Care Institute'
  },
  {
    id: '3',
    name: 'Dr. Emily Davis',
    specialization: 'Pediatrics',
    image: drEmily,
    status: 'busy',
    rating: 4.7,
    experience: 8,
    education: 'MBBS, MD Pediatrics - Stanford Medical School',
    about: 'Dr. Emily Davis is a compassionate pediatrician dedicated to providing comprehensive healthcare for children from infancy through adolescence. She has a special interest in developmental pediatrics.',
    availability: [
      {
        day: 'Tuesday',
        slots: ['9:00 AM', '10:00 AM', '11:00 AM']
      },
      {
        day: 'Thursday',
        slots: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
      },
      {
        day: 'Saturday',
        slots: ['9:00 AM', '10:00 AM', '11:00 AM']
      }
    ],
    consultationFee: 200,
    location: 'Children\'s Healthcare Center'
  },
  {
    id: '4',
    name: 'Dr. David Kumar',
    specialization: 'Orthopedics',
    image: drDavid,
    status: 'available',
    rating: 4.6,
    experience: 18,
    education: 'MBBS, MS Orthopedics - Mayo Clinic',
    about: 'Dr. David Kumar is an experienced orthopedic surgeon specializing in joint replacement, sports injuries, and trauma surgery. He has performed over 2000 successful surgeries.',
    availability: [
      {
        day: 'Monday',
        slots: ['11:00 AM', '2:00 PM', '3:00 PM']
      },
      {
        day: 'Tuesday',
        slots: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM']
      },
      {
        day: 'Wednesday',
        slots: ['9:00 AM', '10:00 AM']
      },
      {
        day: 'Friday',
        slots: ['2:00 PM', '3:00 PM', '4:00 PM']
      }
    ],
    consultationFee: 250,
    location: 'Orthopedic Surgery Center'
  }
];