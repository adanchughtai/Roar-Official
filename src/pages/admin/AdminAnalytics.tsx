import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Car,
  Eye,
  MessageSquare,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
} from 'lucide-react';
import { useAdminStore } from '@/store/adminStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const stats = [
  { name: 'Total Cars', value: '150', change: '+12', trend: 'up', icon: Car },
  { name: 'Total Leads', value: '450', change: '+48', trend: 'up', icon: MessageSquare },
  { name: 'Cars Sold', value: '89', change: '+15', trend: 'up', icon: TrendingUp },
  { name: 'Total Views', value: '25K', change: '+3.2K', trend: 'up', icon: Eye },
];

const trafficSources = [
  { name: 'Organic Search', value: 180, color: 'bg-roar-red' },
  { name: 'Social Media', value: 95, color: 'bg-blue-500' },
  { name: 'Direct', value: 75, color: 'bg-green-500' },
  { name: 'Referral', value: 45, color: 'bg-amber-500' },
  { name: 'Paid Ads', value: 55, color: 'bg-purple-500' },
];

const mostViewedCars = [
  { name: 'BMW 3 Series', views: 1250, leads: 45 },
  { name: 'Mercedes C-Class', views: 980, leads: 32 },
  { name: 'Audi A4', views: 850, leads: 28 },
  { name: 'Tesla Model 3', views: 720, leads: 24 },
  { name: 'Porsche Cayenne', views: 650, leads: 18 },
];

export function AdminAnalytics() {
  const { analytics } = useAdminStore();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="font-sora text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground">
            Track your business performance and insights
          </p>
        </div>
        <Select defaultValue="30days">
          <SelectTrigger className="w-[180px]">
            <Calendar className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="90days">Last 90 Days</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
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
                <Badge className={stat.trend === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}>
                  {stat.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Leads Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-roar-red" />
                Leads Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end gap-2">
                {analytics.leadsPerDay.slice(-14).map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-roar-red/20 rounded-t-sm hover:bg-roar-red/40 transition-colors"
                      style={{ height: `${(day.count / 10) * 100}%`, minHeight: '4px' }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {new Date(day.date).getDate()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-roar-red" />
                Traffic Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{source.name}</span>
                      <span className="text-sm font-medium">{source.value}</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${source.color} rounded-full`}
                        style={{ width: `${(source.value / 200) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Most Viewed Cars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-roar-red" />
              Most Viewed Cars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Car</th>
                    <th className="text-left py-3 px-4 font-medium">Views</th>
                    <th className="text-left py-3 px-4 font-medium">Leads</th>
                    <th className="text-left py-3 px-4 font-medium">Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  {mostViewedCars.map((car, index) => (
                    <tr key={car.name} className="border-b border-border last:border-0">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 flex items-center justify-center bg-muted rounded-full text-sm font-medium">
                            {index + 1}
                          </span>
                          <span className="font-medium">{car.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{car.views.toLocaleString()}</td>
                      <td className="py-3 px-4">{car.leads}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-roar-red rounded-full"
                              style={{ width: `${(car.leads / car.views) * 100 * 5}%` }}
                            />
                          </div>
                          <span className="text-sm">{((car.leads / car.views) * 100).toFixed(1)}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Conversion Rate */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-sora text-xl font-semibold mb-2">Conversion Rate</h3>
                <p className="text-muted-foreground">
                  Percentage of leads that convert to sales
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="font-rajdhani text-5xl font-bold text-roar-red">
                    {analytics.conversionRate}%
                  </p>
                  <Badge className="mt-2 bg-green-500/10 text-green-500">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +2.3% this month
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
