import { Outlet } from "react-router-dom";
import type { JSX } from "react";

export default function SettingLayout(): JSX.Element {
  return (
    <div>
      <div>Setting Layout</div>
      <Outlet />
    </div>
  );
}
