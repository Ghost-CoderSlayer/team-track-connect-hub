
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import NutritionTracker from "@/components/nutrition/NutritionTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Apple, Beef, Coffee, Fish, Egg, Banana, Utensils } from "lucide-react";

const nutritionSummary = [
  {
    title: "Calories",
    current: 1750,
    target: 2200,
    unit: "kcal",
    color: "bg-blue-500",
  },
  {
    title: "Protein",
    current: 85,
    target: 120,
    unit: "g",
    color: "bg-red-500",
  },
  {
    title: "Carbohydrates",
    current: 210,
    target: 250,
    unit: "g",
    color: "bg-amber-500",
  },
  {
    title: "Fats",
    current: 55,
    target: 70,
    unit: "g",
    color: "bg-green-500",
  },
];

const mealSuggestions = [
  {
    title: "Breakfast",
    description: "Protein oatmeal with berries and nuts",
    icon: Apple,
    nutrients: { calories: 420, protein: 25, carbs: 45, fat: 15 },
  },
  {
    title: "Mid-Morning Snack",
    description: "Greek yogurt with honey and banana",
    icon: Banana,
    nutrients: { calories: 220, protein: 18, carbs: 25, fat: 5 },
  },
  {
    title: "Lunch",
    description: "Grilled chicken salad with avocado and quinoa",
    icon: Beef,
    nutrients: { calories: 550, protein: 40, carbs: 35, fat: 22 },
  },
  {
    title: "Pre-Workout",
    description: "Protein shake with almond milk",
    icon: Coffee,
    nutrients: { calories: 180, protein: 25, carbs: 10, fat: 5 },
  },
  {
    title: "Dinner",
    description: "Baked salmon with sweet potatoes and broccoli",
    icon: Fish,
    nutrients: { calories: 520, protein: 35, carbs: 40, fat: 20 },
  },
  {
    title: "Evening Snack",
    description: "Cottage cheese with a handful of mixed nuts",
    icon: Egg,
    nutrients: { calories: 180, protein: 15, carbs: 5, fat: 10 },
  },
];

const Nutrition: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Nutrition Planner</h1>
        <p className="text-muted-foreground mt-1">
          Track your food intake and optimize your nutrition for peak performance
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {nutritionSummary.map((item) => (
          <Card key={item.title} className="nutrition-card-gradient shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span className="text-2xl font-bold">{item.current}</span>
                <span className="text-muted-foreground">
                  of {item.target} {item.unit}
                </span>
              </div>
              <Progress
                value={(item.current / item.target) * 100}
                className={`h-2 ${item.color}`}
              />
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <NutritionTracker />
        
        <Card className="nutrition-card-gradient shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Meal Planner</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="suggestions">
              <TabsList className="mb-4">
                <TabsTrigger value="suggestions">Meal Suggestions</TabsTrigger>
                <TabsTrigger value="plan">Weekly Plan</TabsTrigger>
              </TabsList>
              
              <TabsContent value="suggestions" className="mt-0 space-y-3">
                {mealSuggestions.map((meal, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-background/50 rounded-md hover:bg-background/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <meal.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{meal.title}</h3>
                        <span className="text-xs text-muted-foreground">{meal.nutrients.calories} kcal</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{meal.description}</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400 px-2 py-0.5 rounded">
                          P: {meal.nutrients.protein}g
                        </span>
                        <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded">
                          C: {meal.nutrients.carbs}g
                        </span>
                        <span className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 px-2 py-0.5 rounded">
                          F: {meal.nutrients.fat}g
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="plan" className="mt-0">
                <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-medium">
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 7 }).map((_, dayIndex) => (
                    <div key={dayIndex} className="space-y-2">
                      {["Breakfast", "Snack", "Lunch", "Snack", "Dinner"].map((meal, mealIndex) => (
                        <div
                          key={mealIndex}
                          className="bg-background/50 p-2 rounded text-xs flex flex-col items-center hover:bg-background/80 transition-colors cursor-pointer"
                        >
                          <Utensils className="h-3 w-3 mb-1" />
                          {meal}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Click on any meal slot to edit or customize your weekly plan
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Nutrition;
