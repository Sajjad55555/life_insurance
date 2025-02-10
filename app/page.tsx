import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";
import InsurancePopup from "./components/Insurance_popUp"; // Import your popup component
import Model_Handel from "./components/model_handel";
import FormComponent from "./components/formComponent";


export default function Home() {
  return (
    <div className="">
      {/* nabar */}
      <div><Navbar/></div>

      
      {/* Header */}
      <div><Header /></div>

      
      {/* Body */}
      <div><Body /></div>
      {/* This is where your popup is rendered */}
      <div className="hidden md:block"><InsurancePopup /> </div>
      
         
      {/* <CardContainer/> */}
      <div className="hidden md:block">  <FormComponent/>
        
        </div>
     
    
      
      {/* Footer */}
      <div><Footer /></div>
      {/* model */}
      <div className="mt-[110px] md:hidden "><Model_Handel/></div>

      {/* Insurance Popup */}
    </div>
  )
}
