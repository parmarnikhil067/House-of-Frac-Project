import { Outlet } from "react-router-dom";
import type { JSX } from "react";
import Navbar from "@/components/Base/Navbar";
import Footer from '@/components/Base/Footer';

export default function MainLayout(): JSX.Element {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
}
