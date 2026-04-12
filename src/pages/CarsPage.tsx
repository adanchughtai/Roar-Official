import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  X,
  Car,
} from 'lucide-react';
import { useCarStore } from '@/store/carStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { CarCard } from '@/components/cars/CarCard';
import { CarListItem } from '@/components/cars/CarListItem';

const makes = ['All', 'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla', 'Lexus', 'Jaguar', 'Land Rover', 'Volvo', 'Maserati'];
const models: Record<string, string[]> = {
  'All': ['All'],
  'BMW': ['All', '3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X7', 'M3', 'M5'],
  'Mercedes-Benz': ['All', 'C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'GLS', 'AMG GT'],
  'Audi': ['All', 'A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'RS6'],
  'Porsche': ['All', '911', 'Cayenne', 'Panamera', 'Macan', 'Taycan', '718 Cayman'],
  'Tesla': ['All', 'Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck'],
  'Lexus': ['All', 'IS', 'ES', 'LS', 'RX', 'NX', 'UX', 'LC'],
  'Jaguar': ['All', 'XE', 'XF', 'XJ', 'F-PACE', 'E-PACE', 'I-PACE', 'F-TYPE'],
  'Land Rover': ['All', 'Range Rover', 'Range Rover Sport', 'Discovery', 'Defender', 'Velar'],
  'Volvo': ['All', 'S60', 'S90', 'XC40', 'XC60', 'XC90', 'V60', 'V90'],
  'Maserati': ['All', 'Ghibli', 'Quattroporte', 'Levante', 'MC20'],
};
const fuelTypes = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid'];
const transmissions = ['All', 'Manual', 'Automatic', 'Semi-Automatic'];
const bodyTypes = ['All', 'Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van'];
const conditions = ['All', 'New', 'Used', 'Certified Pre-Owned'];
const locations = ['All', 'London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Bristol', 'Sheffield'];
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'mileage-low', label: 'Lowest Mileage' },
  { value: 'year-new', label: 'Newest Year' },
  { value: 'popular', label: 'Most Popular' },
];

export function CarsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filteredCars, filters, setFilters, setSortBy, sortBy, applyFilters } = useCarStore();
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [yearRange, setYearRange] = useState([2010, 2025]);
  const [selectedMake, setSelectedMake] = useState(searchParams.get('make') || 'All');

  useEffect(() => {
    const make = searchParams.get('make');
    if (make) {
      setFilters({ ...filters, make });
      setSelectedMake(make);
    }
    applyFilters();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value === 'All' ? undefined : value };
    setFilters(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    setFilters({ ...filters, minPrice: value[0], maxPrice: value[1] });
  };

  const handleYearChange = (value: number[]) => {
    setYearRange(value);
    setFilters({ ...filters, minYear: value[0], maxYear: value[1] });
  };

  const clearAllFilters = () => {
    setFilters({});
    setPriceRange([0, 200000]);
    setYearRange([2010, 2025]);
    setSelectedMake('All');
    setSearchParams({});
  };

  const activeFiltersCount = Object.values(filters).filter(v => v !== undefined).length;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Make */}
      <div>
        <label className="text-sm font-medium mb-2 block">Make</label>
        <Select
          value={selectedMake}
          onValueChange={(value) => {
            setSelectedMake(value);
            handleFilterChange('make', value);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select make" />
          </SelectTrigger>
          <SelectContent>
            {makes.map((make) => (
              <SelectItem key={make} value={make}>{make}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Model */}
      <div>
        <label className="text-sm font-medium mb-2 block">Model</label>
        <Select
          value={filters.model || 'All'}
          onValueChange={(value) => handleFilterChange('model', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            {models[selectedMake]?.map((model) => (
              <SelectItem key={model} value={model}>{model}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium mb-2 block">
          Price Range: £{priceRange[0].toLocaleString()} - £{priceRange[1].toLocaleString()}
        </label>
        <Slider
          value={priceRange}
          onValueChange={handlePriceChange}
          max={200000}
          step={1000}
          className="mt-4"
        />
      </div>

      {/* Year Range */}
      <div>
        <label className="text-sm font-medium mb-2 block">
          Year Range: {yearRange[0]} - {yearRange[1]}
        </label>
        <Slider
          value={yearRange}
          onValueChange={handleYearChange}
          min={2010}
          max={2025}
          step={1}
          className="mt-4"
        />
      </div>

      {/* Grouped selects in two columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fuel Type */}
        <div>
          <label className="text-sm font-medium mb-2 block">Fuel Type</label>
          <Select
            value={filters.fuelType || 'All'}
            onValueChange={(value) => handleFilterChange('fuelType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select fuel type" />
            </SelectTrigger>
            <SelectContent>
              {fuelTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Transmission */}
        <div>
          <label className="text-sm font-medium mb-2 block">Transmission</label>
          <Select
            value={filters.transmission || 'All'}
            onValueChange={(value) => handleFilterChange('transmission', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select transmission" />
            </SelectTrigger>
            <SelectContent>
              {transmissions.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Body Type */}
        <div>
          <label className="text-sm font-medium mb-2 block">Body Type</label>
          <Select
            value={filters.bodyType || 'All'}
            onValueChange={(value) => handleFilterChange('bodyType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select body type" />
            </SelectTrigger>
            <SelectContent>
              {bodyTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Condition */}
        <div>
          <label className="text-sm font-medium mb-2 block">Condition</label>
          <Select
            value={filters.condition || 'All'}
            onValueChange={(value) => handleFilterChange('condition', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              {conditions.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="md:col-span-2">
          <label className="text-sm font-medium mb-2 block">Location</label>
          <Select
            value={filters.location || 'All'}
            onValueChange={(value) => handleFilterChange('location', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={clearAllFilters}
      >
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-sora text-3xl md:text-4xl font-bold mb-2">
            Browse Our Cars
          </h1>
          <p className="text-muted-foreground">
            Find your perfect vehicle from our extensive collection
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="pl-12 h-12"
                value={filters.search || ''}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="h-12 px-6 lg:hidden">
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge className="ml-2 bg-roar-red">{activeFiltersCount}</Badge>
                  )}
                </Button>
              </SheetTrigger>
              {/* Mobile filters drawer */}
              <SheetContent
                side="right"
                className="w-full sm:max-w-sm p-0"
              >
                <div className="flex h-full flex-col">
                  <SheetHeader className="px-4 pt-4 pb-2 border-b">
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
                    <FilterContent />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block w-72 flex-shrink-0"
          >
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24 min-h-[60vh] max-h-[calc(100vh-7rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sora font-semibold text-lg">Filters</h3>
                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                  >
                    Clear
                  </Button>
                )}
              </div>
              <FilterContent />
            </div>
          </motion.aside>

          {/* Results */}
          <div className="flex-1">
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
            >
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredCars.length}</span> results
              </p>

              <div className="flex items-center gap-3">
                {/* Sort */}
                <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-roar-red text-white' : 'bg-card hover:bg-muted'}`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-roar-red text-white' : 'bg-card hover:bg-muted'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {Object.entries(filters).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <Badge
                      key={key}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleFilterChange(key, 'All')}
                    >
                      {key}: {value}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  );
                })}
              </motion.div>
            )}

            {/* Cars Grid/List */}
            {filteredCars.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'
                : 'space-y-4'
              }>
                {filteredCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {viewMode === 'grid' ? (
                      <CarCard car={car} />
                    ) : (
                      <CarListItem car={car} />
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Car className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="font-sora text-xl font-semibold mb-2">No cars found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more results
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
