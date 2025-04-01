
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { Heart, Dumbbell, Battery, Droplet, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar: string;
  stats: {
    performance: number;
    energy: number;
    hydration: number;
    recovery: number;
    sleep: number;
  };
  lastActivity: string;
  workoutCompliance: number;
  nutritionCompliance: number;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Michael Jordan",
    position: "Forward",
    avatar: "",
    stats: {
      performance: 92,
      energy: 88,
      hydration: 95,
      recovery: 90,
      sleep: 85,
    },
    lastActivity: "30 min ago",
    workoutCompliance: 95,
    nutritionCompliance: 90,
  },
  {
    id: "2",
    name: "LeBron James",
    position: "Center",
    avatar: "",
    stats: {
      performance: 90,
      energy: 85,
      hydration: 90,
      recovery: 88,
      sleep: 92,
    },
    lastActivity: "1 hour ago",
    workoutCompliance: 92,
    nutritionCompliance: 88,
  },
  {
    id: "3",
    name: "Stephen Curry",
    position: "Guard",
    avatar: "",
    stats: {
      performance: 88,
      energy: 90,
      hydration: 85,
      recovery: 82,
      sleep: 88,
    },
    lastActivity: "2 hours ago",
    workoutCompliance: 90,
    nutritionCompliance: 85,
  },
  {
    id: "4",
    name: "Kevin Durant",
    position: "Forward",
    avatar: "",
    stats: {
      performance: 75,
      energy: 65,
      hydration: 80,
      recovery: 60,
      sleep: 70,
    },
    lastActivity: "45 min ago",
    workoutCompliance: 60,
    nutritionCompliance: 75,
  },
  {
    id: "5",
    name: "Kobe Bryant",
    position: "Guard",
    avatar: "",
    stats: {
      performance: 86,
      energy: 82,
      hydration: 88,
      recovery: 85,
      sleep: 80,
    },
    lastActivity: "3 hours ago",
    workoutCompliance: 88,
    nutritionCompliance: 82,
  },
];

const performanceData = [
  { name: "Week 1", team: 82, league: 80 },
  { name: "Week 2", team: 85, league: 81 },
  { name: "Week 3", team: 83, league: 82 },
  { name: "Week 4", team: 87, league: 83 },
  { name: "Week 5", team: 88, league: 83 },
  { name: "Week 6", team: 90, league: 84 },
];

const complianceData = [
  { name: "Mon", workout: 85, nutrition: 80, hydration: 90 },
  { name: "Tue", workout: 92, nutrition: 85, hydration: 88 },
  { name: "Wed", workout: 86, nutrition: 82, hydration: 85 },
  { name: "Thu", workout: 90, nutrition: 88, hydration: 92 },
  { name: "Fri", workout: 88, nutrition: 90, hydration: 86 },
  { name: "Sat", workout: 82, nutrition: 78, hydration: 84 },
  { name: "Sun", workout: 85, nutrition: 82, hydration: 88 },
];

const playerData = [
  { subject: "Shooting", A: 92, B: 88, fullMark: 100 },
  { subject: "Defense", A: 85, B: 90, fullMark: 100 },
  { subject: "Speed", A: 90, B: 78, fullMark: 100 },
  { subject: "Strength", A: 88, B: 86, fullMark: 100 },
  { subject: "Stamina", A: 85, B: 90, fullMark: 100 },
  { subject: "Agility", A: 94, B: 85, fullMark: 100 },
];

const getStatIcon = (stat: string) => {
  switch (stat) {
    case "performance":
      return <Dumbbell className="h-4 w-4 text-team-purple" />;
    case "energy":
      return <Battery className="h-4 w-4 text-team-yellow" />;
    case "hydration":
      return <Droplet className="h-4 w-4 text-team-blue" />;
    case "recovery":
      return <Heart className="h-4 w-4 text-team-red" />;
    case "sleep":
      return <Brain className="h-4 w-4 text-team-green" />;
    default:
      return null;
  }
};

const getStatColor = (value: number) => {
  if (value >= 90) return "bg-green-500";
  if (value >= 80) return "bg-blue-500";
  if (value >= 70) return "bg-yellow-500";
  return "bg-red-500";
};

const CoachDashboard: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(teamMembers[0]);

  return (
    <Card className="shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Coach Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Team Overview</TabsTrigger>
            <TabsTrigger value="individual">Individual Analysis</TabsTrigger>
            <TabsTrigger value="performance">Performance Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-0">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-3">Team Health Status</h3>
                <div className="space-y-3">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="bg-background/50 p-3 rounded-md hover:bg-background/80 transition-colors"
                    >
                      <div className="flex items-center justify-between">
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
                        <div className="flex items-center space-x-1">
                          {(Object.keys(member.stats) as Array<keyof typeof member.stats>).map((stat) => (
                            <div
                              key={stat}
                              className="relative group"
                              data-tip={`${stat}: ${member.stats[stat]}`}
                            >
                              <div
                                className={cn(
                                  "w-2 h-8 rounded-full",
                                  getStatColor(member.stats[stat as keyof typeof member.stats])
                                )}
                              ></div>
                              <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                {stat.charAt(0).toUpperCase() + stat.slice(1)}: {member.stats[stat as keyof typeof member.stats]}%
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Weekly Team Compliance</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={complianceData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="workout"
                        name="Workout"
                        fill="#8B5CF6"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="nutrition"
                        name="Nutrition"
                        fill="#10B981"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="hydration"
                        name="Hydration"
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="individual" className="mt-0">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-2 space-y-3">
                <h3 className="text-sm font-medium mb-3">Select Player</h3>
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={cn(
                      "p-3 rounded-md cursor-pointer transition-colors",
                      selectedPlayer.id === member.id
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-background/50 hover:bg-background/80"
                    )}
                    onClick={() => setSelectedPlayer(member)}
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
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.lastActivity}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{member.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="md:col-span-3 bg-background/50 p-4 rounded-md">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium">{selectedPlayer.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedPlayer.position}</p>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Performance Score: {selectedPlayer.stats.performance}%
                  </Badge>
                </div>
                
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={playerData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name={selectedPlayer.name}
                        dataKey="A"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.6}
                      />
                      <Radar
                        name="Team Average"
                        dataKey="B"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.6}
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                
                <Separator className="my-4" />
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Health Metrics</h4>
                    {(Object.keys(selectedPlayer.stats) as Array<keyof typeof selectedPlayer.stats>).map((stat) => (
                      <div key={stat} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            {getStatIcon(stat)}
                            <span className="ml-1.5 capitalize">{stat}</span>
                          </div>
                          <span className="text-sm">{selectedPlayer.stats[stat]}%</span>
                        </div>
                        <Progress
                          value={selectedPlayer.stats[stat]}
                          className={cn("h-1.5", selectedPlayer.stats[stat] >= 90 ? "bg-green-500" : 
                                                   selectedPlayer.stats[stat] >= 80 ? "bg-blue-500" : 
                                                   selectedPlayer.stats[stat] >= 70 ? "bg-yellow-500" : 
                                                   "bg-red-500")}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Compliance</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Workout Completion</span>
                        <span>{selectedPlayer.workoutCompliance}%</span>
                      </div>
                      <Progress
                        value={selectedPlayer.workoutCompliance}
                        className={cn("h-1.5", 
                          selectedPlayer.workoutCompliance >= 90 ? "bg-green-500" : 
                          selectedPlayer.workoutCompliance >= 80 ? "bg-blue-500" : 
                          selectedPlayer.workoutCompliance >= 70 ? "bg-yellow-500" : 
                          "bg-red-500"
                        )}
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Nutrition Plan</span>
                        <span>{selectedPlayer.nutritionCompliance}%</span>
                      </div>
                      <Progress
                        value={selectedPlayer.nutritionCompliance}
                        className={cn("h-1.5", 
                          selectedPlayer.nutritionCompliance >= 90 ? "bg-green-500" : 
                          selectedPlayer.nutritionCompliance >= 80 ? "bg-blue-500" : 
                          selectedPlayer.nutritionCompliance >= 70 ? "bg-yellow-500" : 
                          "bg-red-500"
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-0">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={performanceData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[70, 95]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="team"
                    name="Our Team"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="league"
                    name="League Average"
                    stroke="#9CA3AF"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CoachDashboard;
