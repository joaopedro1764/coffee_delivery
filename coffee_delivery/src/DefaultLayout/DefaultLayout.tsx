import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function DefaultLayout() {
  return (
    <div className="w-full px-36 py-10">
      <Header />
      <Outlet />
    </div>
  );
}
