
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  status: "available" | "training" | "injured" | "resting";
  avatar: string;
}

interface TeamOverviewProps {
  className?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Michael Jordan",
    position: "Forward",
    status: "available",
    avatar: "",
  },
  {
    id: "2",
    name: "LeBron James",
    position: "Center",
    status: "training",
    avatar: "",
  },
  {
    id: "3",
    name: "Stephen Curry",
    position: "Guard",
    status: "available",
    avatar: "",
  },
  {
    id: "4",
    name: "Kevin Durant",
    position: "Forward",
    status: "injured",
    avatar: "",
  },
  {
    id: "5",
    name: "Kobe Bryant",
    position: "Guard",
    status: "resting",
    avatar: "",
  },
];

const getStatusColor = (status: TeamMember["status"]) => {
  switch (status) {
    case "available":
      return "bg-green-500";
    case "training":
      return "bg-blue-500";
    case "injured":
      return "bg-red-500";
    case "resting":
      return "bg-amber-500";
    default:
      return "bg-gray-500";
  }
};

const getStatusText = (status: TeamMember["status"]) => {
  switch (status) {
    case "available":
      return "Available";
    case "training":
      return "Training";
    case "injured":
      return "Injured";
    case "resting":
      return "Resting";
    default:
      return "Unknown";
  }
};

const TeamOverview: React.FC<TeamOverviewProps> = ({ className }) => {
  return (
    <Card className={cn("team-card-gradient shadow-sm", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Team Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-2 rounded-md bg-background/50 hover:bg-background/80 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.position}</p>
                </div>
              </div>
              <Badge
                className="text-xs"
                variant="outline"
              >
                <span className={cn("w-2 h-2 rounded-full mr-1.5", getStatusColor(member.status))}></span>
                {getStatusText(member.status)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamOverview;
