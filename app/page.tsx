import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";


export default function Home() {
  return (
    <div className="">
      {/* nabar */}
      <div><Navbar/></div>
      <div><Header/></div>
      <div><Body/></div>
      <div><Footer/></div>
      
    </div>

  )
}
