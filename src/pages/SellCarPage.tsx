import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Camera,
  MapPin,
  PoundSterling,
  Gauge,
  CheckCircle,
  ArrowRight,
  Upload,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const steps = [
  { number: '01', title: 'Car Details', description: 'Basic information' },
  { number: '02', title: 'Specifications', description: 'Technical specs' },
  { number: '03', title: 'Photos', description: 'Upload images' },
  { number: '04', title: 'Pricing', description: 'Set your price' },
];

const makes = ['BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla', 'Lexus', 'Jaguar', 'Land Rover', 'Volvo', 'Maserati'];
const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid'];
const transmissions = ['Manual', 'Automatic', 'Semi-Automatic'];
const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van'];
const conditions = ['New', 'Used', 'Certified Pre-Owned'];

export function SellCarPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-green-500/10 rounded-full">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-sora text-3xl font-bold mb-4">Listing Submitted!</h1>
          <p className="text-muted-foreground mb-8">
            Your car listing has been submitted for review. We'll notify you once it's approved.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => navigate('/account/listings')}
            >
              View My Listings
            </Button>
            <Button
              className="btn-primary"
              onClick={() => navigate('/cars')}
            >
              Browse Cars
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
            Sell Your Car
          </Badge>
          <h1 className="font-sora text-3xl md:text-4xl font-bold mb-4">
            List Your Car in Minutes
          </h1>
          <p className="text-muted-foreground">
            Reach thousands of potential buyers. Fast, easy, and secure.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex justify-between max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col items-center ${
                  index <= currentStep ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full font-rajdhani font-bold text-lg mb-2 ${
                    index <= currentStep
                      ? 'bg-roar-red text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step.number}
                </div>
                <p className="font-semibold text-sm">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8">
            {currentStep === 0 && (
              <div className="space-y-6">
                <h2 className="font-sora text-xl font-semibold mb-6">Car Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Make</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent>
                        {makes.map((make) => (
                          <SelectItem key={make} value={make}>{make}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Model</Label>
                    <Input placeholder="Enter model" className="mt-2" />
                  </div>
                  <div>
                    <Label>Year</Label>
                    <Input type="number" placeholder="2024" className="mt-2" />
                  </div>
                  <div>
                    <Label>Condition</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map((condition) => (
                          <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="font-sora text-xl font-semibold mb-6">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Mileage</Label>
                    <div className="relative mt-2">
                      <Gauge className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input type="number" placeholder="Enter mileage" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <Label>Fuel Type</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        {fuelTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Transmission</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select transmission" />
                      </SelectTrigger>
                      <SelectContent>
                        {transmissions.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Body Type</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select body type" />
                      </SelectTrigger>
                      <SelectContent>
                        {bodyTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Describe your car..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="font-sora text-xl font-semibold mb-6">Photos</h2>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                  <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">
                    Drag and drop photos here, or click to browse
                  </p>
                  <Label className="btn-primary cursor-pointer inline-block">
                    <Upload className="w-4 h-4 inline mr-2" />
                    Upload Photos
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </Label>
                </div>

                {images.length > 0 && (
                  <div className="grid grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-square">
                        <img
                          src={image}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-destructive text-white rounded-full"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="font-sora text-xl font-semibold mb-6">Pricing</h2>
                <div>
                  <Label>Asking Price</Label>
                  <div className="relative mt-2">
                    <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input type="number" placeholder="Enter price" className="pl-10" />
                  </div>
                </div>
                <div>
                  <Label>Location</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="Enter location" className="pl-10" />
                  </div>
                </div>
                <div>
                  <Label>Contact Phone</Label>
                  <Input type="tel" placeholder="Enter phone number" className="mt-2" />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button
                  type="button"
                  className="btn-primary"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" className="btn-primary">
                  Submit Listing
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
