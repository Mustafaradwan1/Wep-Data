import Btn from "../../Shard/Btn/Btn"
import Heading from "../../Shard/Heading/Heading"
import SecBtn from "../../Shard/secBtn/SecBtn"
import { IoIosArrowForward } from "react-icons/io";
import { ErpData } from "../../dummy/HomeData"

const Erp = () => {
  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <SecBtn name={"ERP Solutions"}  />
          <Heading h2={`Unlock`}span={"Your Enterprise "} styleSpan={"text-sec"} h3={"with ERP"} p={"Unlock the full potential of your enterprise with our cutting-edge ERP (Enterprise Resource Planning) solutions. In today's fast-paced business environment"} />
        </div>
        <div className="grid grid-cols-3 gap-[24px]">
          {ErpData.map((ele,ind)=>(
            <div key={ind} className="p-2 border rounded-md">
              <div>
                <img src={ele.img} alt="erp1"/>
              </div>
              <div className="p-2">
                <h3 className="my-4">{ele.h2}</h3>
                <p className="mb-4">{ele.p}</p>
                <div className="flex gap-3 items-center">
                  <div  className="w-8 h-8 rounded-[4px] bg-main text-white flex items-center justify-center">
                    <IoIosArrowForward/>
                  </div>
                  <span className="text-main text-[20px]">Learn More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Btn style={"text-[20px] font-400 w-[159px] h-[48px] border border-2 border-main rounded-[4px] text-main "} name={"View More"} />
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Erp