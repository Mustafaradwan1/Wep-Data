/* eslint-disable react/prop-types */
import { BsArrowReturnRight } from "react-icons/bs";

const SecBtn = ({style,name,spanStyle}) => {
  return (
    <button className={`mb-5 border w-[220px] text-[18px] h-[46px] rounded-full flex justify-center items-center gap-[6px] font-500 ${style ? style : " border-p"}`}>
         <span className={spanStyle ? spanStyle : "text-sec"}><BsArrowReturnRight/></span> {name}
    </button>
  )
}

export default SecBtn