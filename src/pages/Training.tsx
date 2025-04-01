
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import TrainingSchedule from "@/components/training/TrainingSchedule";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dumbbell, 
  CalendarDays, 
  Clock, 
  BarChart, 
  TrendingUp,
  Flame,
  Timer,
  Target
} from "lucide-react";

const workoutStats = [
  {
    title: "Weekly Workouts",
    value: "5/6",
    description: "Sessions completed",
    icon: Dumbbell,
    color: "text-team-purple",
    bgColor: "bg-team-purple/10",
  },
  {
    title: "Active Minutes",
    value: "420",
    description: "This week",
    icon: Clock,
    color: "text-team-blue",
    bgColor: "bg-team-blue/10",
  },
  {
    title: "Calories Burned",
    value: "3,240",
    description: "This week",
    icon: Flame,
    color: "text-team-red",
    bgColor: "bg-team-red/10",
  },
  {
    title: "Performance",
    value: "+8%",
    description: "From last week",
    icon: TrendingUp,
    color: "text-team-green",
    bgColor: "bg-team-green/10",
  },
];

const strengthExercises = [
  { name: "Bench Press", sets: 4, reps: "8-10", weight: "185 lbs", improvement: "+5 lbs" },
  { name: "Squats", sets: 4, reps: "6-8", weight: "225 lbs", improvement: "+10 lbs" },
  { name: "Deadlifts", sets: 3, reps: "6", weight: "275 lbs", improvement: "+15 lbs" },
  { name: "Pull-ups", sets: 3, reps: "8-10", weight: "Bodyweight", improvement: "+2 reps" },
  { name: "Shoulder Press", sets: 3, reps: "8-10", weight: "135 lbs", improvement: "+5 lbs" },
];

const basketballDrills = [
  { name: "Shooting Drills", duration: "20 min", focus: "Accuracy", goal: "85% conversion" },
  { name: "Defensive Slides", duration: "15 min", focus: "Lateral Speed", goal: "Improve reaction time" },
  { name: "Pick and Roll", duration: "20 min", focus: "Team Coordination", goal: "Fluid execution" },
  { name: "Fast Break", duration: "15 min", focus: "Transition Speed", goal: "Under 4 seconds" },
];

const Training: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Training Program</h1>
        <p className="text-muted-foreground mt-1">
          Manage your workouts and track your progress
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {workoutStats.map((stat) => (
          <Card key={stat.title} className="training-card-gradient shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`w-8 h-8 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <TrainingSchedule />
        
        <Card className="training-card-gradient shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold">Training Progression</CardTitle>
              <Badge variant="outline" className="bg-primary/10 text-primary">
                <CalendarDays className="mr-1 h-3 w-3" />
                This Month
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="strength">
              <TabsList className="mb-4">
                <TabsTrigger value="strength">Strength Training</TabsTrigger>
                <TabsTrigger value="basketball">Basketball Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="strength" className="mt-0">
                <div className="space-y-3">
                  {strengthExercises.map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-background/50 p-3 rounded-md hover:bg-background/80 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm">{exercise.name}</h3>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-0">
                          {exercise.improvement}
                        </Badge>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <BarChart className="h-3.5 w-3.5 mr-1" />
                          <span>{exercise.sets} sets × {exercise.reps}</span>
                        </div>
                        <div className="flex items-center">
                          <Dumbbell className="h-3.5 w-3.5 mr-1" />
                          <span>{exercise.weight}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="basketball" className="mt-0">
                <div className="space-y-3">
                  {basketballDrills.map((drill, index) => (
                    <div
                      key={index}
                      className="bg-background/50 p-3 rounded-md hover:bg-background/80 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm">{drill.name}</h3>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                        >
                          {drill.focus}
                        </Badge>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Timer className="h-3.5 w-3.5 mr-1" />
                          <span>{drill.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Target className="h-3.5 w-3.5 mr-1" />
                          <span>{drill.goal}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Training;
