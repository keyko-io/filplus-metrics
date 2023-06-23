import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function Root() {
  return (
    <section className="flex">
      <SideBar />

      <main className="bg-[#E7E7E7] flex-1 px-8 py-6 ml-64 min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          <Outlet />
        </div>
      </main>
    </section>
  );
}

export default Root;
