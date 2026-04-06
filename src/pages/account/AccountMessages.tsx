import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Send,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Smile,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const conversations = [
  {
    id: '1',
    name: 'Premium Motors',
    avatar: 'PM',
    lastMessage: 'Yes, the car is still available. When would you like to view it?',
    time: '2 min ago',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Auto Gallery',
    avatar: 'AG',
    lastMessage: 'Thank you for your interest. The price is negotiable.',
    time: '1 hour ago',
    unread: 0,
    online: false,
  },
  {
    id: '3',
    name: 'City Cars',
    avatar: 'CC',
    lastMessage: 'I have sent you the documents. Please review them.',
    time: '3 hours ago',
    unread: 1,
    online: true,
  },
  {
    id: '4',
    name: 'Luxury Auto',
    avatar: 'LA',
    lastMessage: 'The test drive is scheduled for tomorrow at 2 PM.',
    time: '1 day ago',
    unread: 0,
    online: false,
  },
];

const messages = [
  { id: '1', sender: 'them', text: 'Hello! I saw your listing for the BMW 3 Series.', time: '10:00 AM' },
  { id: '2', sender: 'me', text: 'Hi there! Yes, it\'s still available.', time: '10:05 AM' },
  { id: '3', sender: 'them', text: 'Great! Is the price negotiable?', time: '10:10 AM' },
  { id: '4', sender: 'me', text: 'We can discuss that. When would you like to view the car?', time: '10:15 AM' },
  { id: '5', sender: 'them', text: 'Yes, the car is still available. When would you like to view it?', time: '2 min ago' },
];

export function AccountMessages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-sora text-3xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground">
          Chat with sellers and buyers
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl border border-border overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
          {/* Conversations List */}
          <div className="border-r border-border">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                />
              </div>
            </div>

            <div className="overflow-y-auto h-[calc(600px-73px)]">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full p-4 flex items-center gap-3 hover:bg-muted transition-colors ${
                    selectedConversation.id === conversation.id ? 'bg-muted' : ''
                  }`}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback className="bg-roar-red/10 text-roar-red">
                        {conversation.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{conversation.name}</span>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge className="bg-roar-red">{conversation.unread}</Badge>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-roar-red/10 text-roar-red">
                    {selectedConversation.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{selectedConversation.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {selectedConversation.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl ${
                      message.sender === 'me'
                        ? 'bg-roar-red text-white rounded-br-none'
                        : 'bg-muted rounded-bl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Smile className="w-5 h-5" />
                </Button>
                <Button className="btn-primary">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
