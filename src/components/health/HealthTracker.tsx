
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { Badge } from "@/components/ui/badge";

const weeklyData = [
  { day: "Mon", heartRate: 65, sleep: 7.2, recovery: 82 },
  { day: "Tue", heartRate: 68, sleep: 6.8, recovery: 78 },
  { day: "Wed", heartRate: 72, sleep: 7.5, recovery: 85 },
  { day: "Thu", heartRate: 69, sleep: 8.1, recovery: 90 },
  { day: "Fri", heartRate: 74, sleep: 6.5, recovery: 75 },
  { day: "Sat", heartRate: 71, sleep: 7.8, recovery: 88 },
  { day: "Sun", heartRate: 67, sleep: 8.5, recovery: 92 },
];

interface HealthReading {
  time: string;
  value: number;
}

const todaysHeartRate: HealthReading[] = [
  { time: "6 AM", value: 62 },
  { time: "8 AM", value: 68 },
  { time: "10 AM", value: 75 },
  { time: "12 PM", value: 72 },
  { time: "2 PM", value: 78 },
  { time: "4 PM", value: 73 },
  { time: "6 PM", value: 70 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 border border-border p-2 rounded-md shadow-sm">
        <p className="text-sm font-medium">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} className="text-xs" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}${entry.name === "Sleep" ? " hrs" : entry.name === "Recovery" ? "%" : " bpm"}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const HealthTracker: React.FC = () => {
  return (
    <Card className="health-card-gradient shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">Health Monitoring</CardTitle>
          <Badge variant="outline" className="bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800">
            Good condition
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">Weekly Overview</TabsTrigger>
            <TabsTrigger value="heart">Heart Rate</TabsTrigger>
            <TabsTrigger value="sleep">Sleep Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="mt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weeklyData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="heartRate"
                    name="Heart Rate"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="sleep"
                    name="Sleep"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="recovery"
                    name="Recovery"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="heart" className="mt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={todaysHeartRate}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis dataKey="time" />
                  <YAxis domain={[50, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    name="Heart Rate"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium">Today's Heart Rate Summary</h4>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="bg-background/50 p-2 rounded-md text-center">
                  <p className="text-xs text-muted-foreground">Average</p>
                  <p className="text-lg font-medium">71 bpm</p>
                </div>
                <div className="bg-background/50 p-2 rounded-md text-center">
                  <p className="text-xs text-muted-foreground">Resting</p>
                  <p className="text-lg font-medium">62 bpm</p>
                </div>
                <div className="bg-background/50 p-2 rounded-md text-center">
                  <p className="text-xs text-muted-foreground">Max</p>
                  <p className="text-lg font-medium">78 bpm</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sleep" className="mt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={weeklyData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis dataKey="day" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sleep" name="Sleep Hours" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium">Sleep Quality Analysis</h4>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="bg-background/50 p-2 rounded-md text-center">
                  <p className="text-xs text-muted-foreground">Deep Sleep</p>
                  <p className="text-lg font-medium">2.4 hrs</p>
                </div>
                <div className="bg-background/50 p-2 rounded-md text-center">
                  <p className="text-xs text-muted-foreground">REM</p>
                  <p className="text-lg font-medium">1.8 hrs</p>
                </div>
                <div className="bg-background/50 p-2 rounded-md text-center">
                  <p className="text-xs text-muted-foreground">Light Sleep</p>
                  <p className="text-lg font-medium">4.3 hrs</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HealthTracker;
