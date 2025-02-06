import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";
import InsurancePopup from "./components/Insurance_popUp"; // Import your popup component

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <div><Navbar /></div>
      
      {/* Header */}
      <div><Header /></div>
      
      {/* Body */}
      <div><Body /></div>
      <InsurancePopup /> {/* This is where your popup is rendered */}

      
      {/* Footer */}
      <div><Footer /></div>

      {/* Insurance Popup */}
    </div>
  );
}
