/* eslint-disable react/style-prop-object */
import { Link } from "react-router-dom"
import logo from "../../assets/homeImg/logo.png"
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import Btn from "../Btn/Btn";
import { NavbarData } from "../../dummy/HomeData";

const Navbar = () => {
  return (
    <div className="w-full h-[75px]">
      <div className="container w-full h-full">
        <div className="w-full flex justify-between items-center h-full">
          <div>
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="gap-[40px] flex ml-[81px]  items-center">
            {NavbarData.map((ele,ind)=>(
            <Link key={ind} to={ele.hash} className="text-[16px]">{ele.nav}</Link>
            ))}
          </div>
          <div className="flex items-center gap-[9px]">
            <div className="flex gap-[3px]">
              <TbWorld/>
              <IoIosArrowDown/>
            </div>
            <div className="flex gap-[16px]">
              <Btn style={"bg-white text-main border border-main rounded h-[42px] w-[134px]"} name={"Login"} /> 
              <Btn style={"bg-main text-white border border-main rounded h-[42px] w-[134px]"} name={"Get Started"} /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar