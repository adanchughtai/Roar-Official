import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Lock,
  ArrowRight,
  Car,
  CheckCircle,
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { resetPassword } = useAuthStore();
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const token = searchParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);

    try {
      const success = await resetPassword(token || '', password);
      if (success) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError('Invalid or expired reset token. Please request a new one.');
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

            {!isSuccess ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="font-sora text-2xl font-bold mb-2">
                    Reset Password
                  </h1>
                  <p className="text-muted-foreground">
                    Create a new password for your account
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
                      New Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter new password"
                        className="pl-12 pr-12 h-12"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Must be at least 8 characters
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm new password"
                        className="pl-12 h-12"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                        Reset Password
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
                  Password Reset Successful
                </h2>
                <p className="text-muted-foreground mb-6">
                  Your password has been reset successfully. You will be redirected 
                  to the login page shortly.
                </p>
                <Button asChild className="w-full btn-primary">
                  <Link to="/login">Go to Login</Link>
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
