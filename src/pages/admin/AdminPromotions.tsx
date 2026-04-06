import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Calendar,
  Percent,
  PoundSterling,
  CheckCircle,
  XCircle,
  MoreHorizontal,
} from 'lucide-react';
import { useAdminStore } from '@/store/adminStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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

export function AdminPromotions() {
  const { promotions, deletePromotion } = useAdminStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPromotions = promotions.filter((promo) =>
    promo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isActive = (promo: typeof promotions[0]) => {
    const now = new Date();
    const start = new Date(promo.startDate);
    const end = new Date(promo.endDate);
    return promo.active && now >= start && now <= end;
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
          <h1 className="font-sora text-3xl font-bold mb-2">Promotions</h1>
          <p className="text-muted-foreground">
            Manage discounts and special offers
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              New Promotion
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Promotion</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input placeholder="Promotion Title" />
              <Textarea placeholder="Description" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Discount Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percentage">Percentage (%)</SelectItem>
                  <SelectItem value="fixed">Fixed Amount (£)</SelectItem>
                </SelectContent>
              </Select>
              <Input type="number" placeholder="Discount Value" />
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" placeholder="Start Date" />
                <Input type="date" placeholder="End Date" />
              </div>
              <Button className="w-full btn-primary">Create Promotion</Button>
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
            placeholder="Search promotions..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Promotions Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {filteredPromotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-card rounded-2xl border border-border p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-roar-red/10 rounded-xl">
                {promo.discountType === 'percentage' ? (
                  <Percent className="w-6 h-6 text-roar-red" />
                ) : (
                  <PoundSterling className="w-6 h-6 text-roar-red" />
                )}
              </div>
              <div className="flex items-center gap-2">
                {isActive(promo) ? (
                  <Badge className="bg-green-500/10 text-green-500">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                ) : (
                  <Badge variant="secondary">
                    <XCircle className="w-3 h-3 mr-1" />
                    Inactive
                  </Badge>
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
                      onClick={() => deletePromotion(promo.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">{promo.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{promo.description}</p>

            <div className="flex items-center gap-2 mb-4">
              <span className="font-rajdhani text-3xl font-bold text-roar-red">
                {promo.discountType === 'percentage' ? `${promo.discount}%` : `£${promo.discount}`}
              </span>
              <span className="text-muted-foreground">OFF</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(promo.startDate).toLocaleDateString()} - {new Date(promo.endDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
