import { Star, Quote, CheckCircle } from 'lucide-react';

export function TestimonialCard() {
  return (
    <div className="bg-card p-6 rounded-2xl border border-border hover:border-roar-red/30 transition-all duration-300">
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-roar-red/20 mb-4" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-4 h-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-foreground mb-6">
        "Amazing experience buying my car through Roar Motors. The process was smooth, 
        transparent, and I got a great deal. Highly recommend to anyone looking for a premium vehicle!"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-roar-red to-roar-red-hover flex items-center justify-center text-white font-semibold">
          JD
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">John Doe</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-sm text-muted-foreground">Purchased BMW 3 Series</p>
        </div>
      </div>
    </div>
  );
}
