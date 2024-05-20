import SecBtn from "../../Shard/secBtn/SecBtn"
import Heading from "../../Shard/Heading/Heading"
import Btn from "../../Shard/Btn/Btn"

import botLeft from "../../assets/homeImg/botLeft.png"
import topRight from "../../assets/homeImg/topRight.png"
import { TemplatesData } from "../../dummy/HomeData"
const Templates = () => {
  return (
    <div className="bg-[#F6F6F6] py-[100px]">
      <div className="container relative">
        <img src={botLeft} alt="" className="absolute bottom-0 -left-16" />   
        <img src={topRight} alt="" className="absolute top-0 right-0" />   
        <div className="flex flex-col items-center text-center justify-center">
          <SecBtn name={"Explore Our Templates"} style={"w-[289px] "} />
          <Heading styleSpan={"text-sec"} style={"w-[755px]"} h2={`Level up Your`} span={"Online Store"} h3={"with"} span2={"WEDATA"} h4={"Custom Templates"} p={"Our templates are designed to reflect your brand identity in the best possible way"} />
        </div>
        <div className="grid grid-cols-2 gap-[24px] mb-10">
          {TemplatesData.map((ele,ind)=>(
            <div key={ind} className="flex items-center bg-white pl-2 shadow rounded">
              <div className="w-[45%]">
                <img src={ele.img} alt="tem"/>
              </div>
              <div className="w-[55%] p-4">
                <h2>{ele.h2}</h2>
                <p className="mt-3 mb-8">{ele.p}</p>
                <div className="text-end">
                  <Btn name={"Explore Demo"} style={"w-[160px] h-[40px] bg-main text-white rounded-[4px]"} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center ">
          <Btn name={"View More"}  style={"w-[160px] h-[40px] border border-2 border-main text-main rounded-[4px]"} />
        </div>
      </div>
    </div>
  )
}

export default Templates