import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Lock,
  Shield,
  Camera,
  Save,
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';

export function AccountSettings() {
  const { user, updateProfile } = useAuthStore();
  
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    priceDrops: true,
    newListings: false,
    messages: true,
    marketing: false,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    updateProfile(profileData);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-sora text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="profile">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            {/* Profile Picture */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-sora text-lg font-semibold mb-4">Profile Picture</h3>
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-gradient-to-br from-roar-red to-roar-red-hover text-white text-2xl font-semibold">
                    {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Camera className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                  <Button variant="ghost" className="text-destructive">
                    Remove
                  </Button>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-sora text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="btn-primary" onClick={handleSaveProfile}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-sora text-lg font-semibold mb-4">Change Password</h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="Enter current password"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button className="btn-primary">
                  Update Password
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-roar-red/10 rounded-lg">
                    <Shield className="w-5 h-5 text-roar-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-sora text-lg font-semibold mb-4">Email Notifications</h3>
              <div className="space-y-4">
                {[
                  { key: 'emailAlerts', label: 'Account Alerts', description: 'Important updates about your account' },
                  { key: 'priceDrops', label: 'Price Drops', description: 'When cars in your favorites drop in price' },
                  { key: 'newListings', label: 'New Listings', description: 'New cars matching your preferences' },
                  { key: 'messages', label: 'Messages', description: 'When you receive new messages' },
                  { key: 'marketing', label: 'Marketing', description: 'Promotions and special offers' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, [item.key]: checked })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
