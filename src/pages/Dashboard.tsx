
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AthleteStatsCard from "@/components/dashboard/AthleteStatsCard";
import TeamOverview from "@/components/dashboard/TeamOverview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";

const performanceData = [
  { day: "Mon", performance: 82 },
  { day: "Tue", performance: 85 },
  { day: "Wed", performance: 89 },
  { day: "Thu", performance: 86 },
  { day: "Fri", performance: 92 },
  { day: "Sat", performance: 88 },
  { day: "Sun", performance: 91 },
];

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back, John! Check out your performance and team updates.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AthleteStatsCard className="lg:col-span-1" />
        
        <Card className="lg:col-span-2 shadow-sm team-card-gradient">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Weekly Performance</CardTitle>
            <Badge variant="outline" className="bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800">
              +4% from last week
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={performanceData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis dataKey="day" />
                  <YAxis domain={[75, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    name="Performance Score"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <TeamOverview className="md:col-span-2 lg:col-span-3" />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
