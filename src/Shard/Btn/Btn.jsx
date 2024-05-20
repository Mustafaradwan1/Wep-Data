/* eslint-disable react/prop-types */

const Btn = ({style,name}) => {
  return (
    <button className={style}>
        {name}
    </button>
  )
}

export default Btn