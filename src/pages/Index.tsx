import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchBar from '@/components/SearchBar';
import DoctorCard from '@/components/DoctorCard';
import Footer from '@/components/Footer';
import { doctors } from '@/data/doctors';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = useMemo(() => {
    if (!searchTerm) return doctors;
    
    return doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Find Your Doctor</h2>
            <p className="text-xl text-muted-foreground">Connect with qualified healthcare professionals</p>
          </div>
          
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No doctors found matching your search.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
