import moon1 from "../assets/moon1.jpg";
import { MdOutlineAccessTime, MdStarBorderPurple500 } from "react-icons/md";
import { BsFillCcSquareFill } from "react-icons/bs";
import { GoInfo } from "react-icons/go";
import { IoPlayCircleOutline, IoPlayCircleSharp } from "react-icons/io5";

const Slide = () => {
  return (
    <>
      <img
        className="absolute -z-10 w-full h-full object-cover object-center"
        src={moon1}
        alt="image"
      />

      <div className="slide flex flex-row  w-full h-[400px] n rounded-sm pb-5 ">
        <div className="left w-[55%]  flex flex-col justify-end gap-3 pl-6 pb-2">
          <ul className="flex flex-row gap-4 justify-start items-center w-max bg-gray-900 rounded-xl px-1 py-1 ">
            <li className="list_styling">
              <span>TV</span>
            </li>
            <li className="list_styling">
              <BsFillCcSquareFill className="icons_style" />
              <p>12</p>
            </li>
            <li className="list_styling">
              <MdStarBorderPurple500 className="icons_style" />
              <p>70</p>
            </li>
            <li className="list_styling">
              <MdOutlineAccessTime className="icons_style" />
              <p>70 mins</p>
            </li>
          </ul>

          <h1 className="text-4xl font-bold">
            The Brilliant Healer's New Life
          </h1>

          <h1 className="text-3xl text-blue-300 w-full "> </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            reprehenderit ipsa, ullam ipsum quas optio excepturi numquam eaque
            doloribus delectus sit suscipit quo accusamus illum laboriosam ad
            quis quae amet molestiae
          </p>
        </div>

        <div className="right  w-[45%] flex gap-4 justify-end items-end pb-5 pr-9">
          <button className=" slide_btn flex flex-row justify-center items-center gap-1.5">
            <GoInfo className="icons_style" />
            <span className="text-1.5xl uppercase font-bold">Details</span>
          </button>
          <button className=" slide_btn flex flex-row justify-center items-center gap-1.5">
            <IoPlayCircleSharp className="icons_style" />
            <span className="text-1.5xl uppercase font-bold">Watch Now</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slide;
