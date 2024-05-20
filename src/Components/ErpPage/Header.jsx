import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-[url('assets/Erp/erpHead.png')] w-full h-[600px] bg-cover relative">
        <div className="ErpOverlay absolute top-0 left-0 w-full h-full "></div>
        <div className="container h-full z-50 relative flex items-center">
            <div className="w-[580px] text-white">
                <h2 className="text-[54px] font-600 leading-[63.28px] ">
                    <span className="text-sec">WEDATA ERP </span> Solutions for Modern Enterprises
                </h2>
                <p className="text-[22px] leading-[33px] mt-4 mb-10">comprehensive suite of software tools designed to optimize business processes</p>
                <button className="flex text-[24px]  justify-center items-center gap-2 w-[248px] h-[60px] bg-main text-white rounded-[4px]">
                Be Our Partner <IoIosArrowForward/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header