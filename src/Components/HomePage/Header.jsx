/* eslint-disable react/no-unescaped-entities */

import { IoIosArrowForward } from "react-icons/io";
import head from "../../assets/homeImg/head.png"
import botLeft from "../../assets/homeImg/botLeft.png"
import botRight from "../../assets/homeImg/botRight.png"
import totLeft from "../../assets/homeImg/topLeft.png"
import topRight from "../../assets/homeImg/topRight.png"
const Header = () => {
  return (
    <div className="header h-[600px] flex justify-center items-center rounded-b-3xl">
      <div className="container relative">
        <div className="w-full grid grid-cols-2  gap-[54px]">
          <div className="">
            <h1 className=" text-[56px] font-[600] leading-[67.2px] w-[534px] mb-4">
            Plan Your Future <br/>
            for Business with<br/>
             <span className="text-sec">WEDATA</span> ERP SaaS
            </h1>
            <p className="w-[472px] text-[22px] leading-[33px] mb-8">Our ERP products are meticulously crafted to help you envision the future of your business. Whether you're looking to streamline operations.</p>
            <button className="bg-main  rounded-[4px] w-[248px] h-[60px] text-white flex items-center  justify-center gap-2 text-[24px]">Be Our Partner <IoIosArrowForward/></button>
          </div>
          <div className="">
            <img src={head} alt="header img" className="h-[367px] w-full"/>
          </div>
        </div>
        <div>
          <img src={totLeft} alt="" className="absolute top-0 -left-[67px]  w-[40px] h-[38px]" />
          <img src={topRight} alt="" className="absolute top-0 -right-[67px]  w-[40px] h-[38px]" />
          <img src={botRight} alt="" className="absolute bot-0 -right-[67px]  w-[40px] h-[38px]" />
          <img src={botLeft} alt="" className="absolute bot-0 -left-[67px]  w-[40px] h-[38px]" />
        </div>
      </div>
    </div>
  )
}

export default Header