import { create } from 'zustand';
import type { Lead, Testimonial, BlogPost, Promotion, Analytics } from '@/types';

interface AdminState {
  // Dashboard stats
  stats: {
    totalCars: number;
    totalLeads: number;
    carsSold: number;
    totalUsers: number;
    monthlyRevenue: number;
  };
  
  // Leads
  leads: Lead[];
  
  // Testimonials
  testimonials: Testimonial[];
  
  // Blog posts
  blogPosts: BlogPost[];
  
  // Promotions
  promotions: Promotion[];
  
  // Analytics
  analytics: Analytics;
  
  // Actions
  setStats: (stats: AdminState['stats']) => void;
  addLead: (lead: Lead) => void;
  updateLead: (id: string, updates: Partial<Lead>) => void;
  deleteLead: (id: string) => void;
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (id: string, updates: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (id: string, updates: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  addPromotion: (promotion: Promotion) => void;
  updatePromotion: (id: string, updates: Partial<Promotion>) => void;
  deletePromotion: (id: string) => void;
  updateAnalytics: (analytics: Partial<Analytics>) => void;
}

// Generate mock data
const generateMockLeads = (): Lead[] => {
  const leads: Lead[] = [];
  const types: Lead['type'][] = ['inquiry', 'test_drive', 'finance', 'trade_in'];
  const statuses: Lead['status'][] = ['new', 'contacted', 'qualified', 'converted', 'lost'];
  
  for (let i = 0; i < 30; i++) {
    leads.push({
      id: `lead-${i + 1}`,
      carId: `car-${Math.floor(Math.random() * 50) + 1}`,
      carTitle: 'Premium Vehicle',
      name: `Customer ${i + 1}`,
      email: `customer${i + 1}@example.com`,
      phone: `+44 ${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
      message: 'Interested in this vehicle. Please contact me.',
      type: types[Math.floor(Math.random() * types.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
  return leads;
};

const generateMockTestimonials = (): Testimonial[] => {
  const testimonials: Testimonial[] = [];
  
  for (let i = 0; i < 10; i++) {
    testimonials.push({
      id: `testimonial-${i + 1}`,
      name: `Happy Customer ${i + 1}`,
      rating: 4 + Math.random(),
      comment: 'Amazing service and great selection of cars. Highly recommend!',
      carPurchased: 'BMW 3 Series',
      date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      verified: Math.random() > 0.2,
    });
  }
  return testimonials;
};

const generateMockBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  const categories = ['Buying Guide', 'Car Reviews', 'Maintenance', 'Industry News', 'Tips & Tricks'];
  
  for (let i = 0; i < 8; i++) {
    posts.push({
      id: `blog-${i + 1}`,
      title: `Essential Guide to ${['Buying', 'Maintaining', 'Selling', 'Financing'][Math.floor(Math.random() * 4)]} Your Car`,
      excerpt: 'Learn everything you need to know about making the best decision for your next vehicle purchase.',
      content: 'Full article content goes here...',
      image: `/blog/blog-${(i % 4) + 1}.jpg`,
      author: {
        name: 'Auto Expert',
      },
      category: categories[Math.floor(Math.random() * categories.length)],
      tags: ['cars', 'automotive', 'guide'],
      publishedAt: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: 5 + Math.floor(Math.random() * 10),
      views: Math.floor(Math.random() * 1000),
    });
  }
  return posts;
};

const generateMockPromotions = (): Promotion[] => {
  return [
    {
      id: 'promo-1',
      title: 'Spring Sale',
      description: 'Get up to 15% off on selected vehicles',
      discount: 15,
      discountType: 'percentage',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      applicableCars: ['car-1', 'car-2', 'car-3'],
      active: true,
    },
    {
      id: 'promo-2',
      title: 'New Customer Bonus',
      description: '£500 off your first purchase',
      discount: 500,
      discountType: 'fixed',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
      applicableCars: [],
      active: true,
    },
  ];
};

const generateMockAnalytics = (): Analytics => {
  const leadsPerDay = [];
  for (let i = 29; i >= 0; i--) {
    leadsPerDay.push({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      count: Math.floor(Math.random() * 10),
    });
  }
  
  return {
    totalCars: 150,
    totalLeads: 450,
    carsSold: 89,
    totalViews: 25000,
    leadsPerDay,
    leadsPerWeek: [
      { week: 'Week 1', count: 45 },
      { week: 'Week 2', count: 52 },
      { week: 'Week 3', count: 38 },
      { week: 'Week 4', count: 61 },
    ],
    leadsPerMonth: [
      { month: 'Jan', count: 180 },
      { month: 'Feb', count: 220 },
      { month: 'Mar', count: 195 },
      { month: 'Apr', count: 250 },
    ],
    mostViewedCars: [
      { carId: 'car-1', title: 'BMW 3 Series', views: 1250 },
      { carId: 'car-2', title: 'Mercedes C-Class', views: 980 },
      { carId: 'car-3', title: 'Audi A4', views: 850 },
    ],
    conversionRate: 18.5,
    trafficSources: [
      { source: 'Organic Search', count: 180 },
      { source: 'Social Media', count: 95 },
      { source: 'Direct', count: 75 },
      { source: 'Referral', count: 45 },
      { source: 'Paid Ads', count: 55 },
    ],
  };
};

export const useAdminStore = create<AdminState>((set) => ({
  stats: {
    totalCars: 150,
    totalLeads: 450,
    carsSold: 89,
    totalUsers: 1200,
    monthlyRevenue: 2850000,
  },
  
  leads: generateMockLeads(),
  testimonials: generateMockTestimonials(),
  blogPosts: generateMockBlogPosts(),
  promotions: generateMockPromotions(),
  analytics: generateMockAnalytics(),
  
  setStats: (stats) => set({ stats }),
  
  addLead: (lead) => set((state) => ({ leads: [lead, ...state.leads] })),
  
  updateLead: (id, updates) => set((state) => ({
    leads: state.leads.map((l) => l.id === id ? { ...l, ...updates } : l),
  })),
  
  deleteLead: (id) => set((state) => ({
    leads: state.leads.filter((l) => l.id !== id),
  })),
  
  addTestimonial: (testimonial) => set((state) => ({
    testimonials: [testimonial, ...state.testimonials],
  })),
  
  updateTestimonial: (id, updates) => set((state) => ({
    testimonials: state.testimonials.map((t) => t.id === id ? { ...t, ...updates } : t),
  })),
  
  deleteTestimonial: (id) => set((state) => ({
    testimonials: state.testimonials.filter((t) => t.id !== id),
  })),
  
  addBlogPost: (post) => set((state) => ({
    blogPosts: [post, ...state.blogPosts],
  })),
  
  updateBlogPost: (id, updates) => set((state) => ({
    blogPosts: state.blogPosts.map((p) => p.id === id ? { ...p, ...updates } : p),
  })),
  
  deleteBlogPost: (id) => set((state) => ({
    blogPosts: state.blogPosts.filter((p) => p.id !== id),
  })),
  
  addPromotion: (promotion) => set((state) => ({
    promotions: [promotion, ...state.promotions],
  })),
  
  updatePromotion: (id, updates) => set((state) => ({
    promotions: state.promotions.map((p) => p.id === id ? { ...p, ...updates } : p),
  })),
  
  deletePromotion: (id) => set((state) => ({
    promotions: state.promotions.filter((p) => p.id !== id),
  })),
  
  updateAnalytics: (analytics) => set((state) => ({
    analytics: { ...state.analytics, ...analytics },
  })),
}));
