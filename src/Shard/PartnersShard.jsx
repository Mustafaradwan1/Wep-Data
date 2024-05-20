/* eslint-disable react/style-prop-object */
import Heading from "../Shard/Heading/Heading"
import SecBtn from "../Shard/secBtn/SecBtn"
import Partner1 from "../assets/homeImg/Partners1.png"
import Partner2 from "../assets/homeImg/Partners2.png"
import Partner3 from "../assets/homeImg/Partners3.png"
import Partner4 from "../assets/homeImg/Partners4.png"
import Partner5 from "../assets/homeImg/Partners5.png"
import shap1 from "../assets/homeImg/shap1.svg"
import shap2 from "../assets/homeImg/shap2.svg"
const PartnersShard = () => {
    return (
        <div className="py-[100px] bg-[#0084FF]">
          <div className="container relative">
            <img src={shap1} alt="shap1" className="absolute top-0 left-0 " />
            <img src={shap2} alt="shap1" className="absolute top-[40%] -translate-y-[20%] -right-[12%] " />
            <div className="flex flex-col items-center relative text-center justify-center text-white">
                <SecBtn name={"Our Partners"} style={"w-[201px] border-white "} spanStyle={"text-white"} />
                <Heading style={"w-[850px] font-500 "} h2={`Building Success with Our Partners`} styleSpan={"text-sec"} span={""}  h3={""} p={"Whether you're a multinational corporation or a local startup, our commitment to excellence ensures your needs are met and your expectations exceeded."} />
            </div>
            <div className="grid grid-cols-5 gap-8 relative">
              <div className="bg-white w-[205px] h-[95px] rounded-[7.59px] flex justify-center items-center">
                <img src={Partner1} alt="" className="object-cover"/>
              </div>
              <div className="bg-white w-[205px] h-[95px] rounded-[7.59px] flex justify-center items-center">
                <img src={Partner5} alt="" className="object-cover"/>
              </div>
              <div className="bg-white w-[205px] h-[95px] rounded-[7.59px] flex justify-center items-center">
                <img src={Partner2} alt="" className="object-cover"/>
              </div>
              <div className="bg-white w-[205px] h-[95px] rounded-[7.59px] flex justify-center items-center">
                <img src={Partner4} alt="" className="object-cover"/>
              </div>
              <div className="bg-white w-[205px] h-[95px] rounded-[7.59px] flex justify-center items-center">
                <img src={Partner3} alt="" className="object-cover"/>
              </div>
            </div>
          </div>
        </div>
      )
}

export default PartnersShard