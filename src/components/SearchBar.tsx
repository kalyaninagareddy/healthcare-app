import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="relative">
        <div className="flex bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search doctors by name or specialization..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 pr-4 py-4 border-0 bg-transparent text-lg focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center px-4 border-l border-border">
            <MapPin className="text-muted-foreground w-5 h-5 mr-2" />
            <span className="text-muted-foreground">New York</span>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-glow text-white font-medium hover:shadow-lg transition-all duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;