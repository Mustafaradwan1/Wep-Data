import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Shard/Navbar/Navbar"
import Footer from "./Shard/Footer/Footer"
import { ERP, Home } from "./Pages"
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import Mobile from "./Mobile";


function App() {

  return <>
  <div className="">
    <HashRouter>
    <div className=''>
      <div className="fixed right-0 top-[40%] rounded-md shadow-lg w-[50px] bg-white z-50">
        <div className="  flex py-[10px] px-4 bg-white w-[200px] justify-between rounded-md relative right-0 gap-6 items-center hover:right-[150px] duration-[0.5s]">
          <FaTwitter/>
          <span>800-we-care</span>
        </div>
        <div className=" hover:right-[150px] duration-500  flex py-[10px] px-4 bg-white w-[200px] justify-between rounded-md relative right-0 gap-6 items-center">
         <FaWhatsapp/>
          <span>whatsapp chat</span>
        </div>
        <div className=" hover:right-[150px] duration-[.5s] flex py-[10px] px-4 bg-white w-[200px] justify-between rounded-md relative right-0 gap-6 items-center">
          <FaHeadset/>
          <span>chat support</span>
        </div>
      </div>
        <div>
          <Navbar/>
        </div>
        <div className="min-h-screen ">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/ERP' element={<ERP />} />
            <Route path='/Mobile' element={<Mobile />} />
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
  </HashRouter>
  </div>

  </>
  
}

export default App
