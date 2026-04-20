import { ReactNode } from "react";
import NavBar from "../organisms/NavBar";
import SideBar from "../organisms/SideBar";

interface Props {
  children: ReactNode;
}

export default function DashbordLayout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <main className="flex-1 p-8 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
