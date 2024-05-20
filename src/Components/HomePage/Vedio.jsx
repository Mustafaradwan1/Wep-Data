import Heading from "../../Shard/Heading/Heading"
import SecBtn from "../../Shard/secBtn/SecBtn"
import step from "../../assets/homeImg/step.png"
import vedioImg from "../../assets/homeImg/vedio.png"
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const Vedio = () => {
  return (
    <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <SecBtn name={"Get Started"} style={"w-[198px]"} />
            <Heading styleSpan={"text-sec"} h2={`Your Journey to `}span={"WEDATA"} h3={"Begins Now"} p={"Start your journey to Cloud ERP with our informative and engaging video. In today's fast-paced business environment"} styleP={"w-[753px]"} style={"font-500 w-"} />
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex gap-3">
                <img src={step} alt="step" className="w-20px h-[142px] translate-y-1" />
                <div>
                  <p className="w-[311px] text-[18px] mb-[25px]">Step 1: Assess Your Business Needs.</p>
                  <p className="w-[311px] text-[18px] mb-[14px]">Step 2: Research and Discover ERP Solutions.</p>
                  <p className="w-[311px] text-[18px] mb-[14px]">Step 3: Schedule Demos and Consultations.</p>
                </div>
              </div>
              <div className="flex gap-[15px] mt-[48px] justify-start items-end">
                <button className="bg-main text-white font-600 text-[18px] border border-main rounded-[4px] w-[196px] h-[52px] flex justify-center items-center gap-1">Be Our Partner <IoIosArrowForward/> </button>
                <button className=" text-main font-600 text-[18px] border border-main rounded-[4px] w-[196px] h-[52px] flex justify-center items-center gap-1">Watch Video <IoMdArrowDropright className="text-[28px]"/> </button>
              </div>
            </div>
            <div>
                <img src={vedioImg} alt="vedio_img" />
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Vedio