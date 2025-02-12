import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";
import InsurancePopup from "./components/Insurance_popUp"; // Import your popup component
import Model_Handel from "./components/model_handel";
import FormComponent from "./components/formComponent";
import { FaSquarePhone } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="">
      {/* nabar */}
      <div><Navbar /></div>


      {/* Header */}
      <div><Header /></div>


      {/* Body */}
      <div><Body /></div>
      <div className="flex px-2  bg-gray-400 items-center md:hidden justify-center gap-3 text-[12px] text-[#150f96]">
        <span className="font-semibold text-[20px] mr-2">보험가입상담</span>
        <span className='text-[25px] rounded-full'>
          <FaSquarePhone />

        </span>
        <a href="tel:080-410-4100" className="flex items-center">

          <span className="text-[15px] font-extrabold">080-410-4100</span>
        </a>
      </div>
      {/* This is where your popup is rendered */}
      <div className="hidden md:block"><InsurancePopup /> </div>


      {/* <CardContainer/> */}
      <div className="hidden md:block">  <FormComponent />

      </div>



      {/* Footer */}
      <div><Footer /></div>
      {/* model */}
      <div className="mt-[97px] md:hidden "><Model_Handel /></div>

      {/* Insurance Popup */}
    </div>
  )
}
