import Heading from "../../Shard/Heading/Heading"
import SecBtn from "../../Shard/secBtn/SecBtn"
import StoriesImg from "../../assets/homeImg/stories.png"
import botLeft from "../../assets/homeImg/botLeft.png"
import botRight from "../../assets/homeImg/botRight.png"
import topLeft from "../../assets/homeImg/topLeft.png"
import topRight from "../../assets/homeImg/topRight.png"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Stories = () => {
  return (
    <div className="py-[100px]">
      <div className="container relative">
        <img src={botLeft} alt="" className="absolute left-0 bottom-0" />
        <img src={botRight} alt="" className="absolute right-0 bottom-0" />
        <img src={topLeft} alt="" className="absolute left-0 top-0" />
        <img src={topRight} alt="" className="absolute right-0 top-0" />
        <div className="flex flex-col items-center text-center">
            <SecBtn name={"Get Started"} style={"w-[198px]"} />
            <Heading h2={`Real`} span={"Stories"} h3={"Real"} styleSpan={"text-sec"} span2={"Results"} p={"These testimonials provide valuable insights into the challenges faced by organizations and how our Cloud ERP has helped them"} styleP={"w-[753px]"} style={"font-500 w-"} />
        </div>
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[564px]">
            <div className="py-6 px-8  shadow rounded relative bg-white">
              <div className="w-10 h-10 shadow rotate-45 absolute -bottom-6 left-1/2 -translate-x-1/2  -z-10"></div>
             <div className=" relative">
             <p className="text-center mb-4 font-sans italic font-400 leading-[24px]">
              Credibly actualize interoperable technology without prospective processes. Conveniently mesh team driven materials after ubiquitous schemas. Synergistically parallel task cross-media.
              </p>
              <img src={StoriesImg} alt="StoriesImg" className="m-auto"/>
              <div className="flex mt-4 justify-between items-center">
                <button className="text-main border-2 border-main w-8 h-8 flex justify-center items-center rounded-[4px] ">
                  <IoIosArrowBack/>
                </button>
                <div className="text-center">
                  <h2 className="font-sans  text-lg font-500 leading-[32px]">Ahmed Mohamed</h2>
                  <p className="font-sans  text-sm font-400 ">Founder of getoffer Technology</p>
                </div>
                <button className="bg-main text-white w-8 h-8 flex justify-center items-center rounded-[4px]  ">
                  <IoIosArrowForward/>
                </button>
              </div>
             </div>
            </div>
            <div className="grid grid-cols-5 gap-[64px] mt-[42px]">
              <img src={StoriesImg} alt="" />
              <img src={StoriesImg} alt="" />
              <img src={StoriesImg} alt="" className="scale-[1.3] translate-y-4" />
              <img src={StoriesImg} alt="" />
              <img src={StoriesImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories