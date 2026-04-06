import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  Car,
  CheckCircle,
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ForgotPasswordPage() {
  const { forgotPassword } = useAuthStore();
  
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await forgotPassword(email);
      if (success) {
        setIsSubmitted(true);
      } else {
        setError('Email not found. Please check and try again.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-card rounded-3xl border border-border p-8 md:p-10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-8 justify-center">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-roar-red to-roar-red-hover rounded-xl">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-sora font-bold text-xl tracking-tight">
                  ROAR
                </span>
                <span className="text-[10px] -mt-1 text-muted-foreground tracking-widest">
                  MOTORS
                </span>
              </div>
            </Link>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="font-sora text-2xl font-bold mb-2">
                    Forgot Password?
                  </h1>
                  <p className="text-muted-foreground">
                    Enter your email address and we'll send you a link to reset your password
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-12 h-12"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary h-12"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Reset Link
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-500/10 rounded-full">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="font-sora text-2xl font-bold mb-2">
                  Check Your Email
                </h2>
                <p className="text-muted-foreground mb-6">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Please check your inbox and follow the instructions.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsSubmitted(false)}
                >
                  Didn't receive it? Try again
                </Button>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-border">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Sign In
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
