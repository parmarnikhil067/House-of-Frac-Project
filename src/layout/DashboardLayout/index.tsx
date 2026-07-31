import { Outlet } from "react-router-dom";
import type { JSX } from "react";

export default function DashboardLayout(): JSX.Element {
  return (
    <div>
      <div>Dashboard Layout</div>
      <Outlet />
    </div>
  );
}
