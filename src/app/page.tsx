import Image from "next/image";
import Navbar from "./components/navbar";
import Text from "./components/Text";
import Footer from "./components/footer";
import Contect from "./components/contect";
import Applay from "./components/applay";

export default function Home() {
  return (
    <div>
     {/* <Navbar/> */}
     <Text />
      <Applay />
     <Contect />
     {/* <Footer /> */}
    </div>
  
  );
}
