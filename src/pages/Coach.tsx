
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import CoachDashboard from "@/components/coach/CoachDashboard";

const Coach: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Coach Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Monitor team performance and individual athlete wellness
        </p>
      </div>
      
      <CoachDashboard />
    </DashboardLayout>
  );
};

export default Coach;
