
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Sample chat messages
const initialMessages = [
  { id: 1, user: "Jessica Chen", content: "Hi everyone! I'm new here. Anyone working on a tech blog?", timestamp: "10:45 AM", avatar: "J" },
  { id: 2, user: "David Thompson", content: "Welcome Jessica! I'm writing about nature and sustainability.", timestamp: "10:48 AM", avatar: "D" },
  { id: 3, user: "Michael Rodriguez", content: "I'd be interested in collaborating on a tech article if anyone's up for it!", timestamp: "10:52 AM", avatar: "M" },
  { id: 4, user: "Sarah Johnson", content: "Has anyone used the new rich text editor yet? The formatting options are amazing!", timestamp: "11:05 AM", avatar: "S" },
];

export default function Community() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add message locally for demo purposes
    const message = {
      id: messages.length + 1,
      user: "Guest User",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "G"
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
    
    // Show toast about Supabase integration
    toast({
      title: "Supabase Connection Required",
      description: "Real-time chat requires Supabase Realtime to be configured.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Community Chat</h1>
          <p className="text-muted-foreground mb-6">
            Connect with other bloggers, share ideas, and collaborate on articles
          </p>
          
          {/* Chat Container */}
          <div className="border border-border rounded-lg overflow-hidden bg-card hexagon-card">
            {/* Chat Messages */}
            <div className="p-4 h-[60vh] overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex items-start gap-3 ${
                    message.user === "Guest User" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div 
                    className={`h-8 w-8 rounded-full bg-amber-200 dark:bg-amber-900/50 flex items-center justify-center border-2 border-honey-500/40 buzz-on-hover ${
                      message.user === "Guest User" ? "bg-honey-200 dark:bg-honey-900/50" : ""
                    }`}
                  >
                    <span className="text-xs font-medium">{message.avatar}</span>
                  </div>
                  
                  <div 
                    className={`max-w-[80%] rounded-xl p-3 ${
                      message.user === "Guest User" 
                        ? "bg-honey-500 text-foreground ml-auto rounded-tr-none honey-glow-effect" 
                        : "bg-muted rounded-tl-none"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-sm">{message.user}</span>
                      <span className="text-xs opacity-70">{message.timestamp}</span>
                    </div>
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message Input */}
            <div className="border-t border-border p-4 bg-background">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 input-honey-glow"
                />
                <Button type="submit" className="bg-honey-500 hover:bg-honey-600 text-foreground honey-glow-hover">
                  Send
                </Button>
              </form>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Note: This is a demo chat. Connect to Supabase to enable real-time messaging.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
