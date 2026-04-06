import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  MessageSquare,
  Search,
  Filter,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { useAdminStore } from '@/store/adminStore';
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';


const statusColors: Record<string, string> = {
  new: 'bg-blue-500/10 text-blue-500',
  contacted: 'bg-amber-500/10 text-amber-500',
  qualified: 'bg-purple-500/10 text-purple-500',
  converted: 'bg-green-500/10 text-green-500',
  lost: 'bg-gray-500/10 text-gray-500',
};

const typeIcons: Record<string, typeof MessageSquare> = {
  inquiry: MessageSquare,
  test_drive: Calendar,
  finance: Phone,
  trade_in: CheckCircle,
};

export function AdminLeads() {
  const { leads } = useAdminStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lead.carTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="font-sora text-3xl font-bold mb-2">Lead Management</h1>
          <p className="text-muted-foreground">
            Track and manage customer inquiries
          </p>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-blue-500/10 text-blue-500">
            {leads.filter(l => l.status === 'new').length} New
          </Badge>
          <Badge className="bg-amber-500/10 text-amber-500">
            {leads.filter(l => l.status === 'contacted').length} Pending
          </Badge>
        </div>
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
            placeholder="Search leads..."
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
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="qualified">Qualified</SelectItem>
            <SelectItem value="converted">Converted</SelectItem>
            <SelectItem value="lost">Lost</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      {/* Leads Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredLeads.map((lead) => {
          const TypeIcon = typeIcons[lead.type] || MessageSquare;
          return (
            <Dialog key={lead.id}>
              <DialogTrigger asChild>
                <div className="bg-card rounded-2xl border border-border p-6 cursor-pointer hover:border-roar-red/30 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-roar-red/10 rounded-lg">
                      <TypeIcon className="w-5 h-5 text-roar-red" />
                    </div>
                    <Badge className={statusColors[lead.status]}>
                      {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold mb-1">{lead.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in {lead.carTitle}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      {lead.email}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      {lead.phone}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm">
                      View
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Lead Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-roar-red/10 rounded-xl">
                      <TypeIcon className="w-8 h-8 text-roar-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{lead.name}</h3>
                      <Badge className={statusColors[lead.status]}>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                      <Mail className="w-5 h-5 text-roar-red" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p>{lead.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                      <Phone className="w-5 h-5 text-roar-red" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p>{lead.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                      <Car className="w-5 h-5 text-roar-red" />
                      <div>
                        <p className="text-sm text-muted-foreground">Interested In</p>
                        <p>{lead.carTitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  {lead.message && (
                    <div className="p-4 bg-muted rounded-xl">
                      <p className="text-sm text-muted-foreground mb-2">Message</p>
                      <p>{lead.message}</p>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 btn-primary">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </motion.div>
    </div>
  );
}
