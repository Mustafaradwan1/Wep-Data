/* eslint-disable react/prop-types */
import Heading from "./Heading/Heading"
import SecBtn from "./secBtn/SecBtn"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Btn from "./Btn/Btn";
import SmallModel from "./SmallModel";
const ContactShard = ({bg,styleE,styleHome}) => {
    return (
        <div className={`pt-[100px] pb-[230px]  relative ${bg ? bg : "bg-[#0084FF]" }`}>
          <div className="container">
            <div className={`flex flex-col items-center text-center justify-center ${styleE ? "text-black" : "text-white"}`}>
              <SecBtn name={"Contact Us"} style={styleE ? "border-p " : "border-white"} spanStyle={styleE ? "text-sec " : "text-white"} />
              <Heading style={"w-[765px] font-500 m-auto"} h2={`Do You Have a `} span={"Question"} styleSpan={styleHome} h3={"for Us?"} p={""} />
            </div>
            <div className="bg-white shadow py-9 rounded-[20px] px-8 relative">
              <div className="w-[564px] bg-white rounded-[20px] p-8 shadow absolute right-0 top-1/2 -translate-y-1/2">
                <form>
                  <input type="text" placeholder="Full Name" className="mb-[24px] h-[40px] rounded-[5px] w-full border border-[#B6B9C1] px-4 py-[10px]"/>
                  <input type="number" placeholder="Phone Number" className="mb-[24px] h-[40px] rounded-[5px] w-full border border-[#B6B9C1]  px-4 py-[10px]"/>
                  <input type="email" placeholder="Email" className="mb-[24px] h-[40px] rounded-[5px] w-full border border-[#B6B9C1]  px-4 py-[10px]"/>
                  <textarea placeholder="Message" className="mb-[24px] h-[85px] rounded-[5px] w-full border border-[#B6B9C1]  px-4 py-[10px]"/>
                  <Btn name={"Sent"} style={"bg-main w-[155px] h-[48px] text-[white] rounded-[4px]"} />
                </form>
              </div>
              <div className=" w-[458px]">
                <h2 className="font-600 mb-4 text-[36px]">Get In Touch</h2>
                <p className="mb-[42px]">Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
                <div className="flex justify-start items-center gap-2 mb-8">
                  <FaLocationDot className="text-main text-[18px]"/>
                4 Th Industrial Area, Block 14, Plots 4, New Borg El
                 Iskandariya, Alexandria 21511.
                </div>
                <div className="flex justify-start items-center gap-2 mb-6">
                <FaPhone className="text-main text-[18px]"/>
                (+20)1119509079
                </div>
                <div className="flex justify-start items-center gap-2">
                <MdEmail className="text-main text-[18px]"/>
                wedata@company.com
                </div>
              </div>
        
            </div>
          </div>
          <SmallModel/>
        </div>
      )
}

export default ContactShard