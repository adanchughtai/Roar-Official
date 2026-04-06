import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const categories = ['All', 'Buying Guide', 'Car Reviews', 'Maintenance', 'Industry News', 'Tips & Tricks'];

const blogPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to Buying a Used Car in 2024',
    excerpt: 'Everything you need to know before purchasing a pre-owned vehicle, from inspections to negotiations.',
    image: '/blog/blog-1.jpg',
    category: 'Buying Guide',
    author: 'James Wilson',
    date: 'Mar 15, 2024',
    readTime: 8,
    featured: true,
  },
  {
    id: '2',
    title: 'BMW 3 Series vs Mercedes C-Class: Which One Should You Buy?',
    excerpt: 'A detailed comparison of two of the most popular luxury sedans on the market.',
    image: '/blog/blog-2.jpg',
    category: 'Car Reviews',
    author: 'Sarah Chen',
    date: 'Mar 12, 2024',
    readTime: 6,
    featured: false,
  },
  {
    id: '3',
    title: '10 Essential Car Maintenance Tips Every Driver Should Know',
    excerpt: 'Keep your vehicle running smoothly with these simple maintenance practices.',
    image: '/blog/blog-3.jpg',
    category: 'Maintenance',
    author: 'Michael Brown',
    date: 'Mar 10, 2024',
    readTime: 5,
    featured: false,
  },
  {
    id: '4',
    title: 'Electric Vehicles: The Future of Automotive Industry',
    excerpt: 'Exploring the rise of EVs and what it means for car buyers and the environment.',
    image: '/blog/blog-4.jpg',
    category: 'Industry News',
    author: 'Emily Davis',
    date: 'Mar 8, 2024',
    readTime: 7,
    featured: false,
  },
  {
    id: '5',
    title: 'How to Get the Best Price When Selling Your Car',
    excerpt: 'Expert tips on maximizing your car\'s resale value and closing the deal faster.',
    image: '/blog/blog-5.jpg',
    category: 'Tips & Tricks',
    author: 'James Wilson',
    date: 'Mar 5, 2024',
    readTime: 6,
    featured: false,
  },
  {
    id: '6',
    title: 'Top 5 Luxury SUVs for Families in 2024',
    excerpt: 'Discover the best luxury SUVs that combine comfort, safety, and performance for family adventures.',
    image: '/blog/blog-6.jpg',
    category: 'Car Reviews',
    author: 'Sarah Chen',
    date: 'Mar 1, 2024',
    readTime: 8,
    featured: false,
  },
];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured || selectedCategory !== 'All');

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
            Car Guide
          </Badge>
          <h1 className="font-sora text-4xl font-bold mb-4">
            Latest from Our Blog
          </h1>
          <p className="text-muted-foreground">
            Expert advice, reviews, and insights to help you make informed decisions
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-12 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-roar-red text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Link to={`/blog/${featuredPost.id}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl border border-border overflow-hidden hover:border-roar-red/30 transition-colors">
                <div className="aspect-video lg:aspect-auto bg-muted">
                  <div className="w-full h-full bg-gradient-to-br from-roar-red/20 to-roar-red-hover/20 flex items-center justify-center">
                    <TrendingUp className="w-20 h-20 text-roar-red/50" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
                    Featured
                  </Badge>
                  <h2 className="font-sora text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} min read
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regularPosts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-roar-red/30 transition-all duration-300"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <Tag className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-roar-red/10 text-roar-red border-roar-red/20">
                    {post.category}
                  </Badge>
                  <h3 className="font-sora text-lg font-semibold mb-2 group-hover:text-roar-red transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="btn-secondary">
            Load More Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
