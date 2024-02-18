import React from "react";
import DashboardTitle from "./DashboardTitle";
import DashboardTable from "./DashboardTable";

export default function Dashboard() {
  return (
    <div className="container py-4 ">
      <DashboardTitle></DashboardTitle>
      <DashboardTable></DashboardTable>
    </div>
  );
}
