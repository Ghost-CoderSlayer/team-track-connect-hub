
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Heart, Image, Send, Smile, PlusCircle, Video, FileText, MicIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  liked: boolean;
}

interface Post {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  liked: boolean;
}

const messages: ChatMessage[] = [
  {
    id: "1",
    sender: {
      id: "2",
      name: "LeBron James",
      avatar: "",
    },
    content: "Just finished my morning workout. Anyone joining for extra shooting practice today?",
    timestamp: "9:15 AM",
    likes: 3,
    liked: false,
  },
  {
    id: "2",
    sender: {
      id: "3",
      name: "Stephen Curry",
      avatar: "",
    },
    content: "I'll be there! Want to work on some pick-and-roll plays too.",
    timestamp: "9:22 AM",
    likes: 2,
    liked: true,
  },
  {
    id: "3",
    sender: {
      id: "4",
      name: "Kevin Durant",
      avatar: "",
    },
    content: "Coach wants us to review last game's footage before practice. Don't forget.",
    timestamp: "9:30 AM",
    likes: 5,
    liked: false,
  },
  {
    id: "4",
    sender: {
      id: "5",
      name: "Kobe Bryant",
      avatar: "",
    },
    content: "Great game yesterday everyone. Let's keep that same energy for the next one!",
    timestamp: "9:45 AM",
    likes: 8,
    liked: true,
  },
  {
    id: "5",
    sender: {
      id: "1",
      name: "Michael Jordan",
      avatar: "",
    },
    content: "Team dinner at 7pm tonight. Don't be late!",
    timestamp: "10:15 AM",
    likes: 6,
    liked: false,
  },
];

const posts: Post[] = [
  {
    id: "1",
    user: {
      id: "2",
      name: "LeBron James",
      avatar: "",
    },
    content: "Just broke my personal record on bench press! 💪 #Grind #NeverSettle",
    image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Workout+Photo",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    liked: true,
  },
  {
    id: "2",
    user: {
      id: "3",
      name: "Stephen Curry",
      avatar: "",
    },
    content: "Recovery day. Ice bath and stretching. Taking care of the body is just as important as training hard!",
    timestamp: "5 hours ago",
    likes: 18,
    comments: 3,
    liked: false,
  },
];

const TeamChat: React.FC = () => {
  const [newMessage, setNewMessage] = useState("");
  const [newPost, setNewPost] = useState("");
  const [activeMessages, setActiveMessages] = useState(messages);
  const [activePosts, setActivePosts] = useState(posts);
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: {
        id: "me",
        name: "John Smith",
        avatar: "",
      },
      content: newMessage,
      timestamp: "Just now",
      likes: 0,
      liked: false,
    };
    
    setActiveMessages([...activeMessages, message]);
    setNewMessage("");
  };
  
  const handleCreatePost = () => {
    if (!newPost.trim()) return;
    
    const post: Post = {
      id: Date.now().toString(),
      user: {
        id: "me",
        name: "John Smith",
        avatar: "",
      },
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      liked: false,
    };
    
    setActivePosts([post, ...activePosts]);
    setNewPost("");
  };
  
  const handleLikeMessage = (id: string) => {
    setActiveMessages(
      activeMessages.map((message) =>
        message.id === id
          ? {
              ...message,
              likes: message.liked ? message.likes - 1 : message.likes + 1,
              liked: !message.liked,
            }
          : message
      )
    );
  };
  
  const handleLikePost = (id: string) => {
    setActivePosts(
      activePosts.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked,
            }
          : post
      )
    );
  };
  
  return (
    <Card className="shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Team Connect</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chat">
          <TabsList className="mb-4">
            <TabsTrigger value="chat">Team Chat</TabsTrigger>
            <TabsTrigger value="social">Social Feed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="mt-0 space-y-4">
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {activeMessages.map((message) => (
                  <div key={message.id} className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {message.sender.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">{message.sender.name}</p>
                        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg rounded-tl-none">
                        <p className="text-sm">{message.content}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => handleLikeMessage(message.id)}
                        >
                          <Heart
                            className={cn(
                              "h-3.5 w-3.5",
                              message.liked ? "fill-red-500 text-red-500" : "fill-none"
                            )}
                          />
                          {message.likes > 0 && message.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <Separator />
            
            <div className="flex items-center gap-2">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Image className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <FileText className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <MicIcon className="h-5 w-5" />
              </button>
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="mt-0 space-y-4">
            <div className="bg-muted/50 p-3 rounded-lg">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="" alt="John Smith" />
                  <AvatarFallback className="bg-primary/10 text-primary">JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Input
                    placeholder="Share something with the team..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="mb-2"
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <Image className="h-4 w-4" />
                        <span>Photo</span>
                      </button>
                      <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <Video className="h-4 w-4" />
                        <span>Video</span>
                      </button>
                    </div>
                    <Button size="sm" onClick={handleCreatePost}>Post</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <ScrollArea className="h-[350px] pr-4">
              <div className="space-y-4">
                {activePosts.map((post) => (
                  <div key={post.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar>
                          <AvatarImage src={post.user.avatar} alt={post.user.name} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {post.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{post.user.name}</p>
                          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm mb-3">{post.content}</p>
                      
                      {post.image && (
                        <div className="mb-3 rounded-md overflow-hidden">
                          <img src={post.image} alt="Post" className="w-full h-auto" />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart
                            className={cn(
                              "h-4 w-4 cursor-pointer",
                              post.liked ? "fill-red-500 text-red-500" : "fill-none"
                            )}
                            onClick={() => handleLikePost(post.id)}
                          />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{post.comments} comments</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-4 py-2 bg-muted/30 flex items-center gap-2 text-sm">
                      <button
                        className={cn(
                          "flex items-center gap-1 px-2 py-1 rounded-md transition-colors",
                          post.liked ? "text-red-500" : "text-muted-foreground hover:bg-muted/50"
                        )}
                        onClick={() => handleLikePost(post.id)}
                      >
                        <Heart className={cn("h-4 w-4", post.liked ? "fill-red-500" : "fill-none")} />
                        <span>Like</span>
                      </button>
                      <button className="flex items-center gap-1 px-2 py-1 text-muted-foreground hover:bg-muted/50 rounded-md transition-colors">
                        <Smile className="h-4 w-4" />
                        <span>Comment</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TeamChat;
