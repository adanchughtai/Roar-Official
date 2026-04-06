import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function BlogPostPage() {
  useParams<{ id: string }>();

  // Mock blog post data
  const post = {
    title: 'The Ultimate Guide to Buying a Used Car in 2024',
    excerpt: 'Everything you need to know before purchasing a pre-owned vehicle, from inspections to negotiations.',
    content: `
      <p>Buying a used car can be an excellent way to get a great vehicle at a fraction of the cost of a new one. However, it requires careful consideration and research to ensure you're making a wise investment.</p>
      
      <h2>Why Buy a Used Car?</h2>
      <p>There are several compelling reasons to consider a used car:</p>
      <ul>
        <li><strong>Cost Savings:</strong> Used cars are significantly cheaper than new ones, often 20-30% less expensive.</li>
        <li><strong>Depreciation:</strong> New cars lose value rapidly in the first few years. With a used car, someone else has already absorbed that initial depreciation.</li>
        <li><strong>More Car for Your Money:</strong> Your budget might stretch to a higher-spec model or a more prestigious brand.</li>
        <li><strong>Lower Insurance Costs:</strong> Insurance premiums are typically lower for used cars.</li>
      </ul>

      <h2>What to Look For</h2>
      <p>When inspecting a used car, pay attention to these key areas:</p>
      <ul>
        <li><strong>Exterior Condition:</strong> Check for rust, dents, and signs of previous accidents.</li>
        <li><strong>Interior Condition:</strong> Look for wear and tear, stains, and functionality of all features.</li>
        <li><strong>Engine and Mechanical:</strong> Listen for unusual noises and check fluid levels.</li>
        <li><strong>Service History:</strong> A complete service history is a strong indicator of a well-maintained car.</li>
        <li><strong>Mileage:</strong> Consider whether the mileage is appropriate for the car's age.</li>
      </ul>

      <h2>The Inspection Checklist</h2>
      <p>Before making a purchase, ensure you've checked the following:</p>
      <ul>
        <li>Vehicle identification number (VIN) matches all documents</li>
        <li>No outstanding finance on the vehicle</li>
        <li>Valid MOT certificate</li>
        <li>Service history is complete and verifiable</li>
        <li>All features and electronics work correctly</li>
        <li>Tires have adequate tread depth</li>
        <li>No warning lights on the dashboard</li>
      </ul>

      <h2>Negotiating the Price</h2>
      <p>Don't be afraid to negotiate. Research similar cars to understand the market value, and use any issues you've identified during inspection as leverage for a better price.</p>

      <h2>Final Thoughts</h2>
      <p>Buying a used car doesn't have to be stressful. With proper research, a thorough inspection, and careful negotiation, you can find a reliable vehicle that meets your needs and budget.</p>
    `,
    category: 'Buying Guide',
    author: {
      name: 'James Wilson',
      role: 'Automotive Expert',
      avatar: 'JW',
    },
    date: 'March 15, 2024',
    readTime: 8,
    tags: ['used cars', 'buying guide', 'car inspection', 'automotive'],
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 bg-roar-red/10 text-roar-red border-roar-red/20">
            {post.category}
          </Badge>
          <h1 className="font-sora text-3xl md:text-4xl font-bold mb-6">
            {post.title}
          </h1>
          
          {/* Author & Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-roar-red/10 text-roar-red">
                  {post.author.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
            <div className="w-full h-full bg-gradient-to-br from-roar-red/20 to-roar-red-hover/20 flex items-center justify-center">
              <Tag className="w-24 h-24 text-roar-red/30" />
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-sora prose-a:text-roar-red"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-sm text-muted-foreground">Share:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-sora text-xl font-semibold mb-6">
                Comments (3)
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: 'Alex Thompson',
                    comment: 'Great article! Very helpful for first-time buyers.',
                    date: '2 days ago',
                  },
                  {
                    name: 'Maria Garcia',
                    comment: 'Thanks for the detailed checklist. Saved me from a bad purchase!',
                    date: '1 week ago',
                  },
                  {
                    name: 'David Lee',
                    comment: 'Would love to see more articles on car maintenance.',
                    date: '2 weeks ago',
                  },
                ].map((comment, index) => (
                  <div key={index} className="flex gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-muted">
                        {comment.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{comment.name}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-muted-foreground">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Author Card */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-sora font-semibold mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-14 h-14">
                    <AvatarFallback className="bg-roar-red/10 text-roar-red text-lg">
                      {post.author.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automotive expert with over 15 years of experience in the industry.
                </p>
              </div>

              {/* Related Articles */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-sora font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {[
                    'How to Negotiate Car Prices',
                    'Car Maintenance Tips for New Owners',
                    'Understanding Car Finance Options',
                  ].map((title, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="block text-sm hover:text-roar-red transition-colors"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-sora font-semibold mb-2">Subscribe</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest car buying tips delivered to your inbox.
                </p>
                <Button className="w-full btn-primary">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
