
import MiddleNav from "./MiddleNav";
import RightNav from "./RigthNav"

const Header = () => {
  return (

    <header>
        <nav className = "h-[60px] w-full  flex-between px-[15px]">
            <img className = "h[80px] w-[80px]" src ="../logo-anime.png " alt="logo"></img>

            <MiddleNav/>

            <RightNav/>


        </nav>
    </header>



  )
}

export default Header