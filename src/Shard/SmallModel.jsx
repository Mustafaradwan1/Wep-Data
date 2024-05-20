import { IoIosArrowForward } from "react-icons/io";

const SmallModel = () => {
  return (
   
    <div className="absolute left-1/2 -bottom-[100px] -translate-x-1/2 w-[845px] bg-white rounded-md px-[64px] py-6 shadow-lg">
      <div className="text-center">
        <div className="mb-8px">
          <h2 className="text-[32px] font-600">Start With <span className="text-sec">WeData</span> Now!</h2>
        </div>
        <p className="text-[20px] mb-6 leading-[28px]">Enjoy with Wedata’s and discover the comprehensive suite of tools and services.</p>
        <button className="m-auto w-[196px] bg-main text-white rounded-[4px] h-[52px] flex justify-center items-center gap-1">
        Be Our Partner <IoIosArrowForward/>
        </button>
      </div>
    </div>
  
  )
}

export default SmallModel