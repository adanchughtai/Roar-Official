import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (data: SignupData) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (token: string, password: string) => Promise<boolean>;
  updateProfile: (data: Partial<User>) => void;
}

export interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

// Mock users for demo
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'admin@roarmotors.com',
    firstName: 'Admin',
    lastName: 'User',
    phone: '+1234567890',
    role: 'admin',
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+0987654321',
    role: 'user',
    createdAt: '2024-01-15',
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const user = MOCK_USERS.find((u) => u.email === email);
        if (user && password === 'password') {
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },

      signup: async (data: SignupData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          role: 'user',
          createdAt: new Date().toISOString(),
        };
        
        set({ user: newUser, isAuthenticated: true });
        return true;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      forgotPassword: async (email: string) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return MOCK_USERS.some((u) => u.email === email);
      },

      resetPassword: async (_token: string, _password: string) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return true;
      },

      updateProfile: (data: Partial<User>) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },
    }),
    {
      name: 'roar-auth-storage',
    }
  )
);
