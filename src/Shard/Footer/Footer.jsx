import logoFooter from "../../assets/homeImg/logoWhite.png"
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#001B34] text-white">
      <div className="container pt-[181px]">
        <div className="flex mb-[78px]">
          <div>
            <img src={logoFooter} alt="logoFooter" />
            <div className="mt-[94px]">
              <div className="flex justify-start items-center gap-2 mb-6">
              <FaPhone className=" text-[18px]"/>
              (+20)1119509079
              </div>
              <div className="flex justify-start items-center gap-2 mb-6">
              <MdEmail className="text-[18px]"/>
              wedata@company.com
              </div>
              <div className="flex gap-6">
                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                  <RiInstagramFill className="text-[#001B34]"/>
                </div>
                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                  <FaFacebookF className="text-[#001B34]"/>
                </div>
                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                  <FaFacebookF className="text-[#001B34]"/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-3 ml-[134px]">
            <div className="">
              <h2 className="mb-8 text-[20px] font-500">Products</h2>
              <div className="flex flex-col gap-6">
                <a href="" className="font-400">ERP</a>
                <a href="" className="font-400">E-Store</a>
                <a href="" className="font-400">eZee Travel SAAS</a>
                <a href="" className="font-400">Schools Reseller</a>
                <a href="" className="font-400">Hospitals Reseller</a>
              </div>
            </div>
            <div className="">
            <h2 className="mb-8 text-[20px] font-500">Solutions</h2>
              <div className="flex flex-col gap-6">
                <a href="" className="font-400">Reseller Service</a>
                <a href="" className="font-400">Cloud infrastructure</a>
                <a href="" className="font-400">Data-Analytics</a>
                <a href="" className="font-400">Outsourcing</a>
              </div>
            </div>
            <div className="">
              <h2 className="mb-8 text-[20px] font-500">Contact Info</h2>
              <div className="flex flex-col gap-6">
                <a href="" className="font-400">About US</a>
                <a href="" className="font-400">Contact US</a>
                <a href="" className="font-400">Privacy Policy</a>
                <a href="" className="font-400">Terms Condition</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-10 w-full flex justify-center items-center">
        <p className="text-p">© 2024 Wedata Solutions. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer