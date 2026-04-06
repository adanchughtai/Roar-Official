import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useThemeStore } from '@/store/themeStore';
import { Layout } from '@/components/layout/Layout';
import { AdminLayout } from '@/components/layout/AdminLayout';

// Public Pages
import { HomePage } from '@/pages/HomePage';
import { CarsPage } from '@/pages/CarsPage';
import { CarDetailPage } from '@/pages/CarDetailPage';
import { SellCarPage } from '@/pages/SellCarPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';
import { ComparisonPage } from '@/pages/ComparisonPage';

// Auth Pages
import { LoginPage } from '@/pages/auth/LoginPage';
import { SignupPage } from '@/pages/auth/SignupPage';
import { ForgotPasswordPage } from '@/pages/auth/ForgotPasswordPage';
import { ResetPasswordPage } from '@/pages/auth/ResetPasswordPage';

// Account Pages
import { AccountLayout } from '@/components/layout/AccountLayout';
import { AccountDashboard } from '@/pages/account/AccountDashboard';
import { AccountFavorites } from '@/pages/account/AccountFavorites';
import { AccountMessages } from '@/pages/account/AccountMessages';
import { AccountListings } from '@/pages/account/AccountListings';
import { AccountSettings } from '@/pages/account/AccountSettings';
import { TestDriveBookings } from '@/pages/account/TestDriveBookings';

// Admin Pages
import { AdminDashboard } from '@/pages/admin/AdminDashboard';
import { AdminCars } from '@/pages/admin/AdminCars';
import { AdminLeads } from '@/pages/admin/AdminLeads';
import { AdminTestimonials } from '@/pages/admin/AdminTestimonials';
import { AdminBlog } from '@/pages/admin/AdminBlog';
import { AdminPromotions } from '@/pages/admin/AdminPromotions';
import { AdminUsers } from '@/pages/admin/AdminUsers';
import { AdminAnalytics } from '@/pages/admin/AdminAnalytics';

// Legal Pages
import { PrivacyPolicyPage } from '@/pages/legal/PrivacyPolicyPage';
import { TermsPage } from '@/pages/legal/TermsPage';
import { CookiesPage } from '@/pages/legal/CookiesPage';

// 404 Page
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="cars/:id" element={<CarDetailPage />} />
          <Route path="sell" element={<SellCarPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="compare" element={<ComparisonPage />} />
          
          {/* Auth Routes */}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          
          {/* Account Routes */}
          <Route path="account" element={<AccountLayout />}>
            <Route index element={<AccountDashboard />} />
            <Route path="favorites" element={<AccountFavorites />} />
            <Route path="messages" element={<AccountMessages />} />
            <Route path="listings" element={<AccountListings />} />
            <Route path="test-drives" element={<TestDriveBookings />} />
            <Route path="settings" element={<AccountSettings />} />
          </Route>
          
          {/* Legal Routes */}
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="cars" element={<AdminCars />} />
          <Route path="leads" element={<AdminLeads />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="promotions" element={<AdminPromotions />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
