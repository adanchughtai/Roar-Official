import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Plus,
  Edit,
  Eye,
  TrendingUp,
  MessageSquare,
  MoreHorizontal,
  ArrowRight,
} from 'lucide-react';
import { useCarStore } from '@/store/carStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function AccountListings() {
  const navigate = useNavigate();
  const { cars } = useCarStore();
  const myListings = cars.slice(0, 3);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500/10 text-green-500';
      case 'sold':
        return 'bg-gray-500/10 text-gray-500';
      case 'reserved':
        return 'bg-amber-500/10 text-amber-500';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="font-sora text-3xl font-bold mb-2">My Listings</h1>
          <p className="text-muted-foreground">
            Manage your car listings
          </p>
        </div>
        <Button
          className="btn-primary"
          onClick={() => navigate('/sell')}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Listing
        </Button>
      </motion.div>

      {myListings.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {myListings.map((carItem) => (
            <div
              key={carItem.id}
              className="bg-card rounded-2xl border border-border p-4 hover:border-roar-red/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Image */}
                <img
                  src={carItem.images[0]}
                  alt={`${carItem.make} ${carItem.model}`}
                  className="w-full md:w-48 h-32 object-cover rounded-xl"
                />

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-sora text-lg font-semibold">
                        {carItem.make} {carItem.model}
                      </h3>
                      <p className="text-muted-foreground">{carItem.year} • {carItem.mileage.toLocaleString()} miles</p>
                    </div>
                    <Badge className={getStatusColor(carItem.status)}>
                      {carItem.status.charAt(0).toUpperCase() + carItem.status.slice(1)}
                    </Badge>
                  </div>

                  <p className="font-rajdhani text-2xl font-bold text-roar-red mt-2">
                    £{carItem.price.toLocaleString()}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{carItem.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>{carItem.leads} inquiries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Active</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/cars/${carItem.id}`)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Promote</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Sold</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center py-16 bg-muted rounded-2xl"
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-muted rounded-full">
            <span className="text-4xl">🚗</span>
          </div>
          <h3 className="font-sora text-xl font-semibold mb-2">No listings yet</h3>
          <p className="text-muted-foreground mb-6">
            Start selling your car today
          </p>
          <Button
            className="btn-primary"
            onClick={() => navigate('/sell')}
          >
            List Your Car
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
