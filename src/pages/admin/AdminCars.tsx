import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Edit,
  Eye,
  Filter,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Clock,
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function AdminCars() {
  const { cars, deleteCar } = useCarStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || car.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="bg-green-500/10 text-green-500"><CheckCircle className="w-3 h-3 mr-1" />Available</Badge>;
      case 'sold':
        return <Badge className="bg-gray-500/10 text-gray-500"><XCircle className="w-3 h-3 mr-1" />Sold</Badge>;
      case 'reserved':
        return <Badge className="bg-amber-500/10 text-amber-500"><Clock className="w-3 h-3 mr-1" />Reserved</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="font-sora text-3xl font-bold mb-2">Car Listings</h1>
          <p className="text-muted-foreground">
            Manage all car listings on the platform
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add New Car
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Car Listing</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <Input placeholder="Make" />
              <Input placeholder="Model" />
              <Input type="number" placeholder="Year" />
              <Input type="number" placeholder="Price" />
              <Input type="number" placeholder="Mileage" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol">Petrol</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full btn-primary">Add Car</Button>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search cars..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="sold">Sold</SelectItem>
            <SelectItem value="reserved">Reserved</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      {/* Cars Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl border border-border overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-4 px-6 font-medium">Car</th>
                <th className="text-left py-4 px-6 font-medium">Price</th>
                <th className="text-left py-4 px-6 font-medium">Status</th>
                <th className="text-left py-4 px-6 font-medium">Views</th>
                <th className="text-left py-4 px-6 font-medium">Leads</th>
                <th className="text-left py-4 px-6 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map((car) => (
                <tr key={car.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={car.images[0]}
                        alt={`${car.make} ${car.model}`}
                        className="w-12 h-8 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{car.make} {car.model}</p>
                        <p className="text-sm text-muted-foreground">{car.year}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">£{car.price.toLocaleString()}</td>
                  <td className="py-4 px-4">{getStatusBadge(car.status)}</td>
                  <td className="py-4 px-4">{car.views}</td>
                  <td className="py-4 px-4">{car.leads}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Mark as Sold</DropdownMenuItem>
                          <DropdownMenuItem>Feature</DropdownMenuItem>
                          <DropdownMenuItem 
                            className="text-destructive"
                            onClick={() => deleteCar(car.id)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
