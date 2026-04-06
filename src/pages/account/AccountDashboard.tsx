import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Car,
  Heart,
  MessageSquare,
  Calendar,
  ArrowRight,
  Plus,
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useCarStore } from '@/store/carStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  { name: 'Saved Cars', value: '12', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { name: 'My Listings', value: '3', icon: Car, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Messages', value: '5', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-500/10' },
  { name: 'Test Drives', value: '2', icon: Calendar, color: 'text-amber-500', bg: 'bg-amber-500/10' },
];

const recentActivity = [
  { type: 'view', message: 'You viewed BMW 3 Series', time: '2 hours ago' },
  { type: 'save', message: 'You saved Mercedes C-Class to favorites', time: '5 hours ago' },
  { type: 'message', message: 'New message from Seller', time: '1 day ago' },
  { type: 'test_drive', message: 'Test drive booked for Audi A4', time: '2 days ago' },
];

export function AccountDashboard() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { featuredCars } = useCarStore();

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-sora text-3xl font-bold mb-2">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your account
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:border-roar-red/30 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.name}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Card className="bg-gradient-to-br from-roar-red to-roar-red-hover text-white">
          <CardContent className="p-6">
            <h3 className="font-sora text-xl font-semibold mb-2">
              Sell Your Car
            </h3>
            <p className="text-white/80 mb-4">
              List your car and reach thousands of potential buyers
            </p>
            <Button
              variant="secondary"
              className="bg-white text-roar-red hover:bg-white/90"
              onClick={() => navigate('/sell')}
            >
              <Plus className="w-4 h-4 mr-2" />
              List Your Car
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-sora text-xl font-semibold mb-2">
              Browse Cars
            </h3>
            <p className="text-muted-foreground mb-4">
              Find your dream car from our extensive collection
            </p>
            <Button
              variant="outline"
              className="btn-secondary"
              onClick={() => navigate('/cars')}
            >
              Browse Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Activity & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-xl"
                  >
                    <span className="text-sm">{activity.message}</span>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommended Cars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recommended for You</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/cars')}
              >
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {featuredCars.slice(0, 3).map((car) => (
                  <div
                    key={car.id}
                    className="flex items-center gap-4 p-3 bg-muted rounded-xl cursor-pointer hover:bg-muted/80 transition-colors"
                    onClick={() => navigate(`/cars/${car.id}`)}
                  >
                    <img
                      src={car.images[0]}
                      alt={`${car.make} ${car.model}`}
                      className="w-16 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{car.make} {car.model}</p>
                      <p className="text-sm text-muted-foreground">{car.year}</p>
                    </div>
                    <p className="font-rajdhani font-bold text-roar-red">
                      £{car.price.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
