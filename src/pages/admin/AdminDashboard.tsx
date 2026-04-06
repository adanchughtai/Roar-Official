import { motion } from 'framer-motion';
import {
  Car,
  MessageSquare,
  TrendingUp,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { useCarStore } from '@/store/carStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const stats = [
  { name: 'Total Cars', value: '150', change: '+12%', trend: 'up', icon: Car },
  { name: 'Total Leads', value: '48', change: '+8%', trend: 'up', icon: MessageSquare },
  { name: 'Cars Sold', value: '89', change: '+23%', trend: 'up', icon: TrendingUp },
  { name: 'Total Views', value: '25K', change: '+15%', trend: 'up', icon: Eye },
];

const recentActivity = [
  { type: 'lead', message: 'New lead for BMW 3 Series', time: '2 min ago', user: 'John Doe' },
  { type: 'sale', message: 'Audi A4 marked as sold', time: '15 min ago', user: 'Admin' },
  { type: 'listing', message: 'New car listing added', time: '1 hour ago', user: 'Sarah Smith' },
  { type: 'review', message: 'New testimonial received', time: '2 hours ago', user: 'Mike Johnson' },
];

export function AdminDashboard() {
  const { cars } = useCarStore();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-sora text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s what&apos;s happening with your business.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 flex items-center justify-center bg-roar-red/10 rounded-xl">
                  <stat.icon className="w-6 h-6 text-roar-red" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Activity</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted rounded-xl"
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      activity.type === 'lead' ? 'bg-blue-500/10 text-blue-500' :
                      activity.type === 'sale' ? 'bg-green-500/10 text-green-500' :
                      activity.type === 'listing' ? 'bg-purple-500/10 text-purple-500' :
                      'bg-amber-500/10 text-amber-500'
                    }`}>
                      {activity.type === 'lead' ? <MessageSquare className="w-5 h-5" /> :
                       activity.type === 'sale' ? <TrendingUp className="w-5 h-5" /> :
                       activity.type === 'listing' ? <Car className="w-5 h-5" /> :
                       <Eye className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.message}</p>
                      <p className="text-sm text-muted-foreground">
                        by {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Today&apos;s Views</span>
                  <Badge variant="secondary">+24%</Badge>
                </div>
                <p className="text-2xl font-bold">1,234</p>
                <div className="w-full h-2 bg-muted rounded-full mt-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-roar-red rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">New Leads</span>
                  <Badge variant="secondary">+12%</Badge>
                </div>
                <p className="text-2xl font-bold">48</p>
                <div className="w-full h-2 bg-muted rounded-full mt-2 overflow-hidden">
                  <div className="w-1/2 h-full bg-green-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Conversion Rate</span>
                  <Badge variant="secondary">+5%</Badge>
                </div>
                <p className="text-2xl font-bold">18.5%</p>
                <div className="w-full h-2 bg-muted rounded-full mt-2 overflow-hidden">
                  <div className="w-2/3 h-full bg-amber-500 rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Popular Cars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Most Viewed Cars</CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Car</th>
                    <th className="text-left py-3 px-4 font-medium">Price</th>
                    <th className="text-left py-3 px-4 font-medium">Views</th>
                    <th className="text-left py-3 px-4 font-medium">Leads</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.slice(0, 5).map((car) => (
                    <tr key={car.id} className="border-b border-border last:border-0">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={car.images[0]}
                            alt={`${car.make} ${car.model}`}
                            className="w-12 h-8 object-cover rounded"
                          />
                          <span className="font-medium">{car.make} {car.model}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">£{car.price.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          {car.views}
                        </div>
                      </td>
                      <td className="py-3 px-4">{car.leads}</td>
                      <td className="py-3 px-4">
                        <Badge className={
                          car.status === 'available' ? 'bg-green-500/10 text-green-500' :
                          car.status === 'sold' ? 'bg-gray-500/10 text-gray-500' :
                          'bg-amber-500/10 text-amber-500'
                        }>
                          {car.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
