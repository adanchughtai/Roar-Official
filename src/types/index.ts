export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  carPurchased?: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  views: number;
}

export interface Lead {
  id: string;
  carId: string;
  carTitle: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  type: 'inquiry' | 'test_drive' | 'finance' | 'trade_in';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  message: string;
  timestamp: string;
}

export interface TestDriveBooking {
  id: string;
  carId: string;
  carTitle: string;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  discountType: 'percentage' | 'fixed';
  startDate: string;
  endDate: string;
  applicableCars: string[];
  active: boolean;
}

export interface Analytics {
  totalCars: number;
  totalLeads: number;
  carsSold: number;
  totalViews: number;
  leadsPerDay: { date: string; count: number }[];
  leadsPerWeek: { week: string; count: number }[];
  leadsPerMonth: { month: string; count: number }[];
  mostViewedCars: { carId: string; title: string; views: number }[];
  conversionRate: number;
  trafficSources: { source: string; count: number }[];
}
