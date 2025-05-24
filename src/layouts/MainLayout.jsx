import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <>

    <Header/>
      <div className="grid grid-cols-[70px_1fr] h-screen ">
    <Sidebar />
    <main className = "w-full h-full relative">
    <Outlet/>
    </main>

    </div>
    

    



    
    </>

    








)
}

export default MainLayout