import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  User,
  Heart,
  MessageSquare,
  Car,
  Search,
  ChevronDown,
  LogOut,
  Settings,
  LayoutDashboard,
  Home,
  PoundSterling,
  LogIn,
} from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Buy a Car', href: '/cars' },
  { name: 'Sell Your Car', href: '/sell' },
  { name: 'Car Guide', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkLogoAvailable, setIsDarkLogoAvailable] = useState(true);
  const [isLightLogoAvailable, setIsLightLogoAvailable] = useState(true);
  const { theme, toggleTheme } = useThemeStore();
  const { user, isAuthenticated, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  // Preload both logo variants so theme toggling doesn't wait on image loads
  useEffect(() => {
    const darkLogo = new Image();
    darkLogo.src = '/roar-logo-dark.png';
    const lightLogo = new Image();
    lightLogo.src = '/roar-logo-light.png';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      setIsDarkLogoAvailable(true);
    } else {
      setIsLightLogoAvailable(true);
    }
  }, [theme]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              {isDarkLogoAvailable || isLightLogoAvailable ? (
                <>
                  {isLightLogoAvailable && (
                    <img
                      src="/roar-logo-light.png"
                      alt="Roar Motors"
                      className="h-32 md:h-40 w-auto object-contain block dark:hidden"
                      onError={() => setIsLightLogoAvailable(false)}
                    />
                  )}
                  {isDarkLogoAvailable && (
                    <img
                      src="/roar-logo-dark.png"
                      alt="Roar Motors"
                      className="h-32 md:h-40 w-auto object-contain hidden dark:block"
                      onError={() => setIsDarkLogoAvailable(false)}
                    />
                  )}
                </>
              ) : (
                <>
                  <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-roar-red to-roar-red-hover rounded-xl">
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
                </>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(link.href)
                      ? 'text-roar-red'
                      : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-roar-red rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex"
                onClick={() => navigate('/cars')}
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Theme Toggle - Mobile */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="flex md:hidden"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden md:flex"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>

              {/* User Menu */}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-roar-red to-roar-red-hover flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="hidden md:inline text-sm font-medium">
                        {user?.firstName}
                      </span>
                      <ChevronDown className="w-4 h-4 hidden md:inline" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-3 py-2">
                      <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/account')}>
                      <User className="w-4 h-4 mr-2" />
                      My Account
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/account/favorites')}>
                      <Heart className="w-4 h-4 mr-2" />
                      Favorites
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/account/messages')}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Messages
                    </DropdownMenuItem>
                    {user?.role === 'admin' && (
                      <DropdownMenuItem onClick={() => navigate('/admin')}>
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Admin Panel
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={() => navigate('/account/settings')}>
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-destructive">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="ghost" onClick={() => navigate('/login')}>
                    Sign In
                  </Button>
                  <Button
                    className="btn-primary"
                    onClick={() => navigate('/signup')}
                  >
                    Get Started
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button (hidden as per requirement) */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur lg:hidden">
        <div className="container-premium px-2">
          <div className="flex items-center justify-between h-16 gap-1">
            {/* Home */}
            <button
              type="button"
              onClick={() => navigate('/')}
              className={`flex-1 flex flex-col items-center justify-center gap-1 text-[11px] py-1.5 rounded-xl transition-colors ${
                isActive('/')
                  ? 'text-roar-red bg-roar-red/10'
                  : 'text-foreground/70 hover:bg-muted/60'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>

            {/* Buy Car */}
            <button
              type="button"
              onClick={() => navigate('/cars')}
              className={`flex-1 flex flex-col items-center justify-center gap-1 text-[11px] py-1.5 rounded-xl transition-colors ${
                isActive('/cars')
                  ? 'text-roar-red bg-roar-red/10'
                  : 'text-foreground/70 hover:bg-muted/60'
              }`}
            >
              <Car className="w-5 h-5" />
              <span>Buy Car</span>
            </button>

            {/* Sell Your Car */}
            <button
              type="button"
              onClick={() => navigate('/sell')}
              className={`flex-1 flex flex-col items-center justify-center gap-1 text-[11px] py-1.5 rounded-xl transition-colors ${
                isActive('/sell')
                  ? 'text-roar-red bg-roar-red/10'
                  : 'text-foreground/70 hover:bg-muted/60'
              }`}
            >
              <PoundSterling className="w-5 h-5" />
              <span>Sell</span>
            </button>

            {/* Sign In / Account */}
            <button
              type="button"
              onClick={() => navigate(isAuthenticated ? '/account' : '/login')}
              className={`flex-1 flex flex-col items-center justify-center gap-1 text-[11px] py-1.5 rounded-xl transition-colors ${
                location.pathname.startsWith('/account') || location.pathname === '/login'
                  ? 'text-roar-red bg-roar-red/10'
                  : 'text-foreground/70 hover:bg-muted/60'
              }`}
            >
              {isAuthenticated ? (
                <User className="w-5 h-5" />
              ) : (
                <LogIn className="w-5 h-5" />
              )}
              <span>{isAuthenticated ? 'Account' : 'Sign in'}</span>
            </button>

            {/* Menu */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex-1 flex flex-col items-center justify-center gap-1 text-[11px] py-1.5 rounded-xl text-foreground/70 hover:bg-muted/60 transition-colors"
            >
              <Menu className="w-5 h-5" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-background shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                        isActive(link.href)
                          ? 'bg-roar-red/10 text-roar-red'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto space-y-4">
                  {!isAuthenticated ? (
                    <>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          navigate('/login');
                        }}
                      >
                        Sign In
                      </Button>
                      <Button
                        className="w-full btn-primary"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          navigate('/signup');
                        }}
                      >
                        Get Started
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  )}

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
