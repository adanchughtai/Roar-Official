import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Search,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  MoreHorizontal,
} from 'lucide-react';
import { useAdminStore } from '@/store/adminStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function AdminTestimonials() {
  const { testimonials, deleteTestimonial } = useAdminStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTestimonials = testimonials.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.comment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="font-sora text-3xl font-bold mb-2">Testimonials</h1>
          <p className="text-muted-foreground">
            Manage customer reviews and testimonials
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Testimonial</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input placeholder="Customer Name" />
              <Input placeholder="Car Purchased (optional)" />
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-amber-400" />
                ))}
              </div>
              <Textarea placeholder="Testimonial comment..." />
              <Button className="w-full btn-primary">Add Testimonial</Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search testimonials..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {filteredTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-card rounded-2xl border border-border p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-roar-red to-roar-red-hover flex items-center justify-center text-white font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  {testimonial.carPurchased && (
                    <p className="text-sm text-muted-foreground">
                      Purchased {testimonial.carPurchased}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {testimonial.verified ? (
                  <Badge className="bg-green-500/10 text-green-500">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                ) : (
                  <Badge variant="secondary">Pending</Badge>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-destructive"
                      onClick={() => deleteTestimonial(testimonial.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(testimonial.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <p className="text-muted-foreground">{testimonial.comment}</p>

            <p className="text-xs text-muted-foreground mt-4">
              {new Date(testimonial.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
