import Heading from "../../Shard/Heading/Heading"
import SecBtn from "../../Shard/secBtn/SecBtn"
import { TransformData } from "../../dummy/ErpData"
import { IoIosArrowForward } from "react-icons/io";

const Transform = () => {

  return (
    <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <SecBtn name={"Our ERP Modules"}  />
            <Heading h2={`Transform your Business with `} styleSpan={"text-sec"} span={"WEDATA"} p={"WEDATA ERP Products offers a transformative solution that empowers enterprises to optimize operations and enhance decision-making."} />
          </div>
          <div className="grid grid-cols-3 gap-6">
                {TransformData.map((ele,ind)=>(
                    <div key={ind} className="p-4 text-center shadow">
                        <div className="text-main "><img className="m-auto" src={ele.icon} alt="" /></div>
                        <h2 className="mt-3 mb-2 text-[24px] leading-[33.6px] font-500">{ele.h2}</h2>
                        <p className="text-p leading-[27px] text-[18px] font-400 mb-3">{ele.p}</p>
                        <button className="flex m-auto justify-center items-center gap-1 text-main ">
                            Learn More <IoIosArrowForward/>
                        </button>
                    </div>
                ))}
          </div>
        </div>
    </div>
  )
}

export default Transform