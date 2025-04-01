
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StatProps {
  title: string;
  value: number;
  max: number;
  unit: string;
  colorClass?: string;
}

interface AthleteStatsCardProps {
  className?: string;
}

const stats: StatProps[] = [
  { title: "Heart Rate", value: 68, max: 200, unit: "bpm", colorClass: "text-red-500" },
  { title: "Sleep", value: 7.5, max: 10, unit: "hrs", colorClass: "text-blue-500" },
  { title: "Hydration", value: 2.1, max: 3, unit: "L", colorClass: "text-cyan-500" },
  { title: "Calories", value: 1850, max: 2500, unit: "kcal", colorClass: "text-green-500" },
];

const Stat: React.FC<StatProps> = ({ title, value, max, unit, colorClass }) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center">
      <span className="text-sm text-muted-foreground">{title}</span>
      <span className={cn("text-sm font-medium", colorClass)}>
        {value} {unit}
      </span>
    </div>
    <Progress value={(value / max) * 100} className="h-2" />
  </div>
);

const AthleteStatsCard: React.FC<AthleteStatsCardProps> = ({ className }) => {
  return (
    <Card className={cn("team-card-gradient shadow-sm", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Daily Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </CardContent>
    </Card>
  );
};

export default AthleteStatsCard;
