
import MiddleNav from "./MiddleNav";
import RightNav from "./RigthNav"
import ResponsiveSearch from "./ResponsiveSearch";

const Header = () => {
  return (

    <header>
        <nav className = "h-[60px] w-full  flex-between px-[15px] max-md:w-full ">
            <img className = "h[80px] w-[80px]" src ="../logo-anime.png " alt="logo"></img>

            <MiddleNav/>

            <RightNav/>

         

            


        </nav>
           <ResponsiveSearch/>
    </header>



  )
}

export default Header