import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Heart,
  MessageSquare,
  Car,
  Calendar,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const navItems = [
  { name: 'Dashboard', href: '/account', icon: LayoutDashboard },
  { name: 'Favorites', href: '/account/favorites', icon: Heart },
  { name: 'My Listings', href: '/account/listings', icon: Car },
  { name: 'Messages', href: '/account/messages', icon: MessageSquare },
  { name: 'Test Drives', href: '/account/test-drives', icon: Calendar },
  { name: 'Settings', href: '/account/settings', icon: Settings },
];

export function AccountLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-72 flex-shrink-0"
          >
            <div className="sticky top-24 space-y-4">
              {/* User Card */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-gradient-to-br from-roar-red to-roar-red-hover text-white text-xl font-semibold">
                      {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-sora font-semibold text-lg">
                      {user?.firstName} {user?.lastName}
                    </h3>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                    <Badge className="mt-2 bg-roar-red/10 text-roar-red border-roar-red/20">
                      {user?.role === 'admin' ? 'Admin' : 'Member'}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="bg-card rounded-2xl border border-border p-4">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        end={item.href === '/account'}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActive
                              ? 'bg-roar-red text-white'
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`
                        }
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0" />
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </Button>
                </div>
              </nav>
            </div>
          </motion.aside>

          {/* Main Content */}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
