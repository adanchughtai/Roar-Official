import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AIChatbot } from '../chatbot/AIChatbot';
import { WhatsAppButton } from '../WhatsAppButton';

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <AIChatbot />
      <WhatsAppButton />
    </div>
  );
}
