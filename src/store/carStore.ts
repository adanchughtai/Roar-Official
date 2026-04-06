import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  originalPrice?: number;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'Plug-in Hybrid';
  transmission: 'Manual' | 'Automatic' | 'Semi-Automatic';
  bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Convertible' | 'Wagon' | 'Van';
  color: string;
  engineSize?: string;
  horsepower?: number;
  doors: number;
  seats: number;
  description: string;
  features: string[];
  images: string[];
  location: {
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
  seller: {
    id: string;
    name: string;
    phone: string;
    email: string;
    rating: number;
    verified: boolean;
  };
  condition: 'New' | 'Used' | 'Certified Pre-Owned';
  warranty?: string;
  serviceHistory: boolean;
  previousOwners?: number;
  status: 'available' | 'sold' | 'reserved' | 'pending';
  views: number;
  leads: number;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  promoted: boolean;
}

export interface CarFilters {
  make?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  fuelType?: string;
  transmission?: string;
  bodyType?: string;
  location?: string;
  condition?: string;
  search?: string;
}

interface CarState {
  cars: Car[];
  filteredCars: Car[];
  featuredCars: Car[];
  selectedCar: Car | null;
  filters: CarFilters;
  sortBy: 'newest' | 'price-low' | 'price-high' | 'mileage-low' | 'year-new' | 'popular';
  loading: boolean;
  
  // Actions
  setCars: (cars: Car[]) => void;
  addCar: (car: Car) => void;
  updateCar: (id: string, car: Partial<Car>) => void;
  deleteCar: (id: string) => void;
  setSelectedCar: (car: Car | null) => void;
  setFilters: (filters: CarFilters) => void;
  clearFilters: () => void;
  setSortBy: (sort: CarState['sortBy']) => void;
  applyFilters: () => void;
  incrementViews: (carId: string) => void;
  addLead: (carId: string) => void;
}

// Generate mock cars
const generateMockCars = (): Car[] => {
  const makes = ['BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla', 'Lexus', 'Jaguar', 'Land Rover', 'Volvo', 'Maserati'];
  const models: Record<string, string[]> = {
    'BMW': ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X7', 'M3', 'M5'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'GLS', 'AMG GT'],
    'Audi': ['A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'RS6'],
    'Porsche': ['911', 'Cayenne', 'Panamera', 'Macan', 'Taycan', '718 Cayman'],
    'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck'],
    'Lexus': ['IS', 'ES', 'LS', 'RX', 'NX', 'UX', 'LC'],
    'Jaguar': ['XE', 'XF', 'XJ', 'F-PACE', 'E-PACE', 'I-PACE', 'F-TYPE'],
    'Land Rover': ['Range Rover', 'Range Rover Sport', 'Discovery', 'Defender', 'Velar'],
    'Volvo': ['S60', 'S90', 'XC40', 'XC60', 'XC90', 'V60', 'V90'],
    'Maserati': ['Ghibli', 'Quattroporte', 'Levante', 'MC20'],
  };
  
  const fuelTypes: Car['fuelType'][] = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid'];
  const transmissions: Car['transmission'][] = ['Manual', 'Automatic', 'Semi-Automatic'];
  const bodyTypes: Car['bodyType'][] = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van'];
  const colors = ['Black', 'White', 'Silver', 'Grey', 'Blue', 'Red', 'Green', 'Brown', 'Beige'];
  const conditions: Car['condition'][] = ['New', 'Used', 'Certified Pre-Owned'];
  const cities = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Bristol', 'Sheffield'];
  
  const cars: Car[] = [];
  
  for (let i = 0; i < 50; i++) {
    const make = makes[Math.floor(Math.random() * makes.length)];
    const model = models[make][Math.floor(Math.random() * models[make].length)];
    const year = 2019 + Math.floor(Math.random() * 6);
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const price = condition === 'New' 
      ? 40000 + Math.floor(Math.random() * 100000)
      : 15000 + Math.floor(Math.random() * 60000);
    
    cars.push({
      id: `car-${i + 1}`,
      make,
      model,
      year,
      price,
      originalPrice: Math.random() > 0.7 ? Math.floor(price * 1.1) : undefined,
      mileage: condition === 'New' ? 0 : Math.floor(Math.random() * 100000),
      fuelType: fuelTypes[Math.floor(Math.random() * fuelTypes.length)],
      transmission: transmissions[Math.floor(Math.random() * transmissions.length)],
      bodyType: bodyTypes[Math.floor(Math.random() * bodyTypes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      engineSize: ['2.0L', '3.0L', '4.0L', '5.0L', 'Electric'][Math.floor(Math.random() * 5)],
      horsepower: 200 + Math.floor(Math.random() * 400),
      doors: [2, 4, 5][Math.floor(Math.random() * 3)],
      seats: [2, 4, 5, 7][Math.floor(Math.random() * 4)],
      description: `Experience luxury and performance with this stunning ${year} ${make} ${model}. Meticulously maintained and ready for its new owner.`,
      features: [
        'Leather Seats',
        'Navigation System',
        'Bluetooth',
        'Parking Sensors',
        'Climate Control',
        'Cruise Control',
        'Sunroof',
        'Heated Seats',
      ].sort(() => Math.random() - 0.5).slice(0, 5 + Math.floor(Math.random() * 4)),
      images: [`/cars/car-${(i % 10) + 1}.jpg`],
      location: {
        city: cities[Math.floor(Math.random() * cities.length)],
        country: 'United Kingdom',
        lat: 51.5074 + (Math.random() - 0.5) * 2,
        lng: -0.1278 + (Math.random() - 0.5) * 2,
      },
      seller: {
        id: `seller-${Math.floor(Math.random() * 10)}`,
        name: `Dealer ${Math.floor(Math.random() * 20) + 1}`,
        phone: `+44 ${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
        email: `dealer${Math.floor(Math.random() * 20) + 1}@example.com`,
        rating: 3.5 + Math.random() * 1.5,
        verified: Math.random() > 0.3,
      },
      condition,
      warranty: condition === 'New' ? '3 Years / 60,000 Miles' : '1 Year',
      serviceHistory: Math.random() > 0.2,
      previousOwners: condition === 'New' ? 0 : Math.floor(Math.random() * 3) + 1,
      status: ['available', 'sold', 'reserved'][Math.floor(Math.random() * 3)] as Car['status'],
      views: Math.floor(Math.random() * 1000),
      leads: Math.floor(Math.random() * 50),
      createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
      featured: i < 8,
      promoted: i < 4,
    });
  }
  
  return cars;
};

export const useCarStore = create<CarState>()(
  persist(
    (set, get) => ({
      cars: generateMockCars(),
      filteredCars: generateMockCars(),
      featuredCars: generateMockCars().filter(c => c.featured),
      selectedCar: null,
      filters: {},
      sortBy: 'newest',
      loading: false,

      setCars: (cars) => set({ cars, filteredCars: cars }),

      addCar: (car) => set((state) => {
        const newCars = [car, ...state.cars];
        return { cars: newCars, filteredCars: newCars };
      }),

      updateCar: (id, updates) => set((state) => {
        const newCars = state.cars.map((c) => c.id === id ? { ...c, ...updates } : c);
        return { cars: newCars, filteredCars: newCars };
      }),

      deleteCar: (id) => set((state) => {
        const newCars = state.cars.filter((c) => c.id !== id);
        return { cars: newCars, filteredCars: newCars };
      }),

      setSelectedCar: (car) => set({ selectedCar: car }),

      setFilters: (filters) => set({ filters }),

      clearFilters: () => set({ filters: {} }),

      setSortBy: (sortBy) => set({ sortBy }),

      applyFilters: () => {
        const { cars, filters, sortBy } = get();
        let result = [...cars];

        // Apply filters
        if (filters.search) {
          const search = filters.search.toLowerCase();
          result = result.filter(c => 
            c.make.toLowerCase().includes(search) ||
            c.model.toLowerCase().includes(search) ||
            c.description.toLowerCase().includes(search)
          );
        }

        if (filters.make) {
          result = result.filter(c => c.make === filters.make);
        }

        if (filters.model) {
          result = result.filter(c => c.model === filters.model);
        }

        if (filters.minPrice) {
          result = result.filter(c => c.price >= filters.minPrice!);
        }

        if (filters.maxPrice) {
          result = result.filter(c => c.price <= filters.maxPrice!);
        }

        if (filters.minYear) {
          result = result.filter(c => c.year >= filters.minYear!);
        }

        if (filters.maxYear) {
          result = result.filter(c => c.year <= filters.maxYear!);
        }

        if (filters.fuelType) {
          result = result.filter(c => c.fuelType === filters.fuelType);
        }

        if (filters.transmission) {
          result = result.filter(c => c.transmission === filters.transmission);
        }

        if (filters.bodyType) {
          result = result.filter(c => c.bodyType === filters.bodyType);
        }

        if (filters.location) {
          result = result.filter(c => c.location.city === filters.location);
        }

        if (filters.condition) {
          result = result.filter(c => c.condition === filters.condition);
        }

        // Apply sorting
        switch (sortBy) {
          case 'price-low':
            result.sort((a, b) => a.price - b.price);
            break;
          case 'price-high':
            result.sort((a, b) => b.price - a.price);
            break;
          case 'year-new':
            result.sort((a, b) => b.year - a.year);
            break;
          case 'mileage-low':
            result.sort((a, b) => a.mileage - b.mileage);
            break;
          case 'popular':
            result.sort((a, b) => b.views - a.views);
            break;
          case 'newest':
          default:
            result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        set({ filteredCars: result });
      },

      incrementViews: (carId) => set((state) => ({
        cars: state.cars.map((c) => c.id === carId ? { ...c, views: c.views + 1 } : c),
      })),

      addLead: (carId) => set((state) => ({
        cars: state.cars.map((c) => c.id === carId ? { ...c, leads: c.leads + 1 } : c),
      })),
    }),
    {
      name: 'roar-car-storage',
    }
  )
);
