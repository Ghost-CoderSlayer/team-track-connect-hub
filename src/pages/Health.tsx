
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import HealthTracker from "@/components/health/HealthTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, BarChart3, BedDouble, Activity, Trophy } from "lucide-react";

const healthMetrics = [
  {
    title: "Resting Heart Rate",
    value: "62",
    unit: "bpm",
    change: "-3 from last week",
    trend: "down",
    icon: Heart,
    color: "text-red-500",
  },
  {
    title: "Energy Level",
    value: "86",
    unit: "%",
    change: "+5% from yesterday",
    trend: "up",
    icon: Zap,
    color: "text-amber-500",
  },
  {
    title: "Recovery Score",
    value: "92",
    unit: "/100",
    change: "+4 from last week",
    trend: "up",
    icon: BarChart3,
    color: "text-green-500",
  },
  {
    title: "Sleep Quality",
    value: "8.2",
    unit: "hrs",
    change: "+0.4 from average",
    trend: "up",
    icon: BedDouble,
    color: "text-blue-500",
  },
];

const Health: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Health Monitoring</h1>
        <p className="text-muted-foreground mt-1">
          Track your vital health metrics and recovery status
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {healthMetrics.map((metric) => (
          <Card key={metric.title} className="health-card-gradient shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {metric.value}
                <span className="text-sm ml-1 font-normal text-muted-foreground">
                  {metric.unit}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <span
                  className={`inline-block mr-1 ${
                    metric.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {metric.trend === "up" ? "↑" : "↓"}
                </span>
                {metric.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <HealthTracker />
        
        <Card className="health-card-gradient shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold">Wellness Insights</CardTitle>
              <Badge variant="outline" className="bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800">
                Updated Today
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="recommendations">
              <TabsList className="mb-4">
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recommendations" className="mt-0 space-y-4">
                <div className="bg-background/50 p-4 rounded-md">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Increase Recovery Focus</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your intense training pattern requires additional recovery time. Consider adding 20 min of light stretching before bed.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background/50 p-4 rounded-md">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Energy Management</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your afternoon energy dips could be improved by adding a small protein-rich snack around 3 PM.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background/50 p-4 rounded-md">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <BedDouble className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Optimize Sleep</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your sleep efficiency would benefit from a more consistent bedtime routine. Aim to be in bed by 10:30 PM.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="achievements" className="mt-0 space-y-4">
                <div className="bg-background/50 p-4 rounded-md">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Trophy className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Recovery Champion</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        You've maintained an excellent recovery score for 7 consecutive days!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background/50 p-4 rounded-md">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Trophy className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Sleep Quality Master</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your deep sleep percentage has improved by 15% over the past month.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background/50 p-4 rounded-md">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Trophy className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Consistency King</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        You've logged your health metrics for 30 days straight!
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Health;
