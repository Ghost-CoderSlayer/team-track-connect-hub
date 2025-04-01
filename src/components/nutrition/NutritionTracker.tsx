
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { cn } from "@/lib/utils";
import { Apple, Beef, Coffee, Droplet } from "lucide-react";

interface NutrientProgress {
  name: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

const nutrients: NutrientProgress[] = [
  { name: "Protein", current: 85, target: 120, unit: "g", color: "bg-red-500" },
  { name: "Carbs", current: 210, target: 250, unit: "g", color: "bg-amber-500" },
  { name: "Fat", current: 55, target: 70, unit: "g", color: "bg-blue-500" },
  { name: "Fiber", current: 18, target: 30, unit: "g", color: "bg-green-500" },
];

const macrosData = [
  { name: "Protein", value: 85, color: "#EF4444" },
  { name: "Carbs", value: 210, color: "#F59E0B" },
  { name: "Fat", value: 55, color: "#3B82F6" },
];

const hydrationData = [
  { time: "8 AM", amount: 300 },
  { time: "10 AM", amount: 250 },
  { time: "12 PM", amount: 350 },
  { time: "2 PM", amount: 200 },
  { time: "4 PM", amount: 300 },
  { time: "6 PM", amount: 200 },
  { time: "8 PM", amount: 150 },
];

const mealItems = [
  { id: 1, time: "8:00 AM", name: "Oatmeal with berries", calories: 320, protein: 12, icon: Apple },
  { id: 2, time: "10:30 AM", name: "Protein shake", calories: 180, protein: 25, icon: Coffee },
  { id: 3, time: "1:00 PM", name: "Grilled chicken salad", calories: 450, protein: 35, icon: Beef },
  { id: 4, time: "4:00 PM", name: "Greek yogurt & nuts", calories: 220, protein: 15, icon: Apple },
  { id: 5, time: "7:00 PM", name: "Salmon with vegetables", calories: 520, protein: 40, icon: Beef },
];

const NutritionTracker: React.FC = () => {
  const totalWater = hydrationData.reduce((sum, entry) => sum + entry.amount, 0);
  const waterProgress = (totalWater / 2500) * 100; // Target: 2.5L
  
  return (
    <Card className="nutrition-card-gradient shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Nutrition Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="macros">
          <TabsList className="mb-4">
            <TabsTrigger value="macros">Macros & Calories</TabsTrigger>
            <TabsTrigger value="meals">Meals Log</TabsTrigger>
            <TabsTrigger value="hydration">Hydration</TabsTrigger>
          </TabsList>
          
          <TabsContent value="macros" className="mt-0 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={macrosData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {macrosData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-2">
                  <p className="text-lg font-medium">1750 / 2200</p>
                  <p className="text-sm text-muted-foreground">Calories consumed</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {nutrients.map((nutrient) => (
                  <div key={nutrient.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{nutrient.name}</span>
                      <span>
                        {nutrient.current}/{nutrient.target} {nutrient.unit}
                      </span>
                    </div>
                    <Progress 
                      value={(nutrient.current / nutrient.target) * 100} 
                      className={cn("h-2", nutrient.color)} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="meals" className="mt-0">
            <div className="space-y-3">
              {mealItems.map((meal) => (
                <div 
                  key={meal.id}
                  className="flex items-center space-x-3 p-3 bg-background/50 rounded-md hover:bg-background/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <meal.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{meal.name}</p>
                      <p className="text-sm text-muted-foreground">{meal.time}</p>
                    </div>
                    <div className="flex space-x-3 text-xs text-muted-foreground">
                      <span>{meal.calories} kcal</span>
                      <span>{meal.protein}g protein</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hydration" className="mt-0">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={hydrationData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="amount" 
                      name="Water (ml)" 
                      fill="#38BDF8" 
                      radius={[4, 4, 0, 0]} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-muted stroke-current"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-blue-500 stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      strokeDasharray={`${waterProgress * 2.51} 251`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                    <Droplet className="absolute inset-0 m-auto h-10 w-10 text-blue-500" />
                  </svg>
                </div>
                <p className="text-lg font-medium mt-2">{(totalWater / 1000).toFixed(1)}L / 2.5L</p>
                <p className="text-sm text-muted-foreground">Daily water intake</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default NutritionTracker;
