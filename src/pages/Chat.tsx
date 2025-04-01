
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import TeamChat from "@/components/chat/TeamChat";

const Chat: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Team Chat</h1>
        <p className="text-muted-foreground mt-1">
          Connect with your teammates and share your progress
        </p>
      </div>
      
      <TeamChat />
    </DashboardLayout>
  );
};

export default Chat;
