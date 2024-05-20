/* eslint-disable react/prop-types */

const Heading = ({h2,h3,h4,p,span,span2,style,styleP,styleSpan}) => {
  return (
    <div className="">
        <h2 className={`mb-3 text-[54px] leading-[63.28px] font-500  m-auto ${style ? style : ""}`}>
          {h2} <span className={styleSpan ? styleSpan : "text-white"}>{span}</span> {h3 && h3 } 
            {span2 && <span className="text-sec"> {span2} </span>}
            {h4 ? h4  : ""} 
        </h2>
        <p className={`mb-12 text-[24px] font-400 ${styleP ? styleP : "w-[866px]" }`}>{p}</p>
    </div>
  )
}

export default Heading