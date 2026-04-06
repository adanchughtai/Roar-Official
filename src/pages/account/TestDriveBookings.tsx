import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
  Clock4,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const bookings = [
  {
    id: '1',
    car: 'BMW 3 Series',
    carImage: '/cars/car-1.jpg',
    date: '2024-04-15',
    time: '14:00',
    location: 'Premium Motors, London',
    status: 'confirmed',
  },
  {
    id: '2',
    car: 'Mercedes C-Class',
    carImage: '/cars/car-2.jpg',
    date: '2024-04-18',
    time: '10:30',
    location: 'Auto Gallery, Manchester',
    status: 'pending',
  },
  {
    id: '3',
    car: 'Audi A4',
    carImage: '/cars/car-3.jpg',
    date: '2024-04-10',
    time: '16:00',
    location: 'City Cars, Birmingham',
    status: 'completed',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'confirmed':
      return <Badge className="bg-green-500/10 text-green-500"><CheckCircle className="w-3 h-3 mr-1" />Confirmed</Badge>;
    case 'pending':
      return <Badge className="bg-amber-500/10 text-amber-500"><Clock4 className="w-3 h-3 mr-1" />Pending</Badge>;
    case 'completed':
      return <Badge className="bg-blue-500/10 text-blue-500"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
    case 'cancelled':
      return <Badge className="bg-destructive/10 text-destructive"><XCircle className="w-3 h-3 mr-1" />Cancelled</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export function TestDriveBookings() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-sora text-3xl font-bold mb-2">Test Drive Bookings</h1>
        <p className="text-muted-foreground">
          Manage your scheduled test drives
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-card rounded-2xl border border-border p-6 hover:border-roar-red/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Car Image */}
              <img
                src={booking.carImage}
                alt={booking.car}
                className="w-full md:w-48 h-32 object-cover rounded-xl"
              />

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-sora text-lg font-semibold">{booking.car}</h3>
                    {getStatusBadge(booking.status)}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-roar-red/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-roar-red" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{booking.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-roar-red/10 rounded-lg">
                      <Clock className="w-5 h-5 text-roar-red" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{booking.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-roar-red/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-roar-red" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{booking.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              {booking.status === 'pending' && (
                <div className="flex md:flex-col gap-2">
                  <Button variant="outline" size="sm" className="text-destructive">
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
