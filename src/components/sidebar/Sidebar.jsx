import { RiHomeSmileFill } from "react-icons/ri";
import { SiFireship } from "react-icons/si";
import { AiFillSchedule } from "react-icons/ai";
import {  PiVideoFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircleSharp, IoSettings } from "react-icons/io5";



const Sidebar = () => {
  return (

    <section className = "sidebar-icons">

    

        <div className = "icon util-styling group">
  
            <RiHomeSmileFill className = "styling-icon "/>

            <span className = "icon-name"> Home</span>

        </div>
        
        <div className = "icon util-styling group">
  
            <SiFireship className = "styling-icon " />
             <span className = "icon-name"> Trending</span>
        </div>

        <div className = "icon util-styling group">
  
            <AiFillSchedule className = "styling-icon "/>

            <span className = "icon-name"> Schedule</span>

        </div>

        <div className = "icon util-styling group">
  
            <PiVideoFill className = "styling-icon " />
             <span className = "icon-name"> History</span>
        </div>

        <div className = "icon util-styling group">
  
            <IoPersonCircleSharp className = "styling-icon "/>

            <span className = "icon-name"> Profile</span>

        </div>

        <div className = "icon util-styling group">
  
            <IoSettings className = "styling-icon " />
             <span className = "icon-name"> Settings</span>
        </div>

 



    </section>



  
  )
}

export default Sidebar