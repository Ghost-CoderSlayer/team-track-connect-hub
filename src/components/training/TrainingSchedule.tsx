
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Clock, Dumbbell, Trophy, Flag } from "lucide-react";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  completed: boolean;
}

interface WorkoutSession {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: string;
  exercises: Exercise[];
  completedExercises: number;
}

const workouts: WorkoutSession[] = [
  {
    id: "1",
    title: "Morning Strength Training",
    time: "06:30 AM",
    duration: "60 min",
    type: "Strength",
    completedExercises: 3,
    exercises: [
      { id: "1-1", name: "Bench Press", sets: 4, reps: 10, completed: true },
      { id: "1-2", name: "Pull-ups", sets: 3, reps: 8, completed: true },
      { id: "1-3", name: "Shoulder Press", sets: 3, reps: 12, completed: true },
      { id: "1-4", name: "Bicep Curls", sets: 3, reps: 15, completed: false },
      { id: "1-5", name: "Tricep Extensions", sets: 3, reps: 15, completed: false },
    ],
  },
  {
    id: "2",
    title: "Team Practice",
    time: "10:00 AM",
    duration: "90 min",
    type: "Basketball",
    completedExercises: 0,
    exercises: [
      { id: "2-1", name: "Shooting Drills", sets: 5, reps: 10, completed: false },
      { id: "2-2", name: "Defensive Slides", sets: 3, reps: 20, completed: false },
      { id: "2-3", name: "Pick and Roll", sets: 4, reps: 12, completed: false },
      { id: "2-4", name: "Fast Break", sets: 5, reps: 8, completed: false },
    ],
  },
  {
    id: "3",
    title: "Recovery Session",
    time: "4:00 PM",
    duration: "45 min",
    type: "Recovery",
    completedExercises: 0,
    exercises: [
      { id: "3-1", name: "Foam Rolling", sets: 1, reps: 5, completed: false },
      { id: "3-2", name: "Static Stretching", sets: 1, reps: 8, completed: false },
      { id: "3-3", name: "Mobility Exercises", sets: 2, reps: 10, completed: false },
    ],
  },
];

const upcomingEvents = [
  { 
    id: "1", 
    title: "Team Meeting",
    date: "Tomorrow",
    time: "09:00 AM",
    type: "meeting"
  },
  { 
    id: "2", 
    title: "Strength & Conditioning",
    date: "Tomorrow",
    time: "11:00 AM",
    type: "training"
  },
  { 
    id: "3", 
    title: "Home Game vs. Lakers",
    date: "Friday",
    time: "07:30 PM",
    type: "game"
  },
];

const TrainingSchedule: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeWorkout, setActiveWorkout] = useState(workouts[0]);
  
  const handleToggleExercise = (exerciseId: string) => {
    setActiveWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex => 
        ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex
      ),
      completedExercises: prev.exercises.filter(ex => 
        ex.id === exerciseId ? !ex.completed : ex.completed
      ).length
    }));
  };
  
  return (
    <Card className="training-card-gradient shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Training Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="today">
          <TabsList className="mb-4">
            <TabsTrigger value="today">Today's Workouts</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="today" className="mt-0 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                {workouts.map((workout) => (
                  <div
                    key={workout.id}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      activeWorkout.id === workout.id
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-background/50 hover:bg-background/80"
                    }`}
                    onClick={() => setActiveWorkout(workout)}
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-sm">{workout.title}</h3>
                        <p className="text-xs text-muted-foreground">{workout.type} · {workout.duration}</p>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {workout.time}
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{workout.completedExercises}/{workout.exercises.length} exercises</span>
                      </div>
                      <Progress
                        value={(workout.completedExercises / workout.exercises.length) * 100}
                        className="h-1.5"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-background/50 p-4 rounded-md">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{activeWorkout.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {activeWorkout.type}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {activeWorkout.exercises.map((exercise) => (
                    <div
                      key={exercise.id}
                      className="flex items-center space-x-3 p-2 rounded hover:bg-background/80 transition-colors"
                    >
                      <Checkbox 
                        id={exercise.id} 
                        checked={exercise.completed}
                        onCheckedChange={() => handleToggleExercise(exercise.id)}
                      />
                      <div className="flex-1">
                        <label 
                          htmlFor={exercise.id}
                          className="flex justify-between cursor-pointer"
                        >
                          <span className={`text-sm ${exercise.completed ? "line-through text-muted-foreground" : ""}`}>
                            {exercise.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {exercise.sets} × {exercise.reps}
                          </span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />
                
                <div className="flex space-x-4 text-center text-xs">
                  <div className="flex-1">
                    <Dumbbell className="h-5 w-5 mx-auto text-primary" />
                    <p className="mt-1">{activeWorkout.exercises.length} Exercises</p>
                  </div>
                  <div className="flex-1">
                    <Clock className="h-5 w-5 mx-auto text-accent" />
                    <p className="mt-1">{activeWorkout.duration}</p>
                  </div>
                  <div className="flex-1">
                    <Trophy className="h-5 w-5 mx-auto text-team-yellow" />
                    <p className="mt-1">+120 Points</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-0">
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex space-x-4 p-3 bg-background/50 rounded-md hover:bg-background/80 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center ${
                    event.type === "training" 
                      ? "bg-team-green/10 text-team-green" 
                      : event.type === "game" 
                      ? "bg-team-red/10 text-team-red" 
                      : "bg-team-blue/10 text-team-blue"
                  }`}>
                    {event.type === "training" ? (
                      <Dumbbell className="h-6 w-6" />
                    ) : event.type === "game" ? (
                      <Trophy className="h-6 w-6" />
                    ) : (
                      <Flag className="h-6 w-6" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{event.title}</h3>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mx-auto"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TrainingSchedule;
