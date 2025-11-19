import Image from "next/image";

import Footer from "./component/Footer";

import NewNavbar from "./component/NewNavbar";
import Body from "./component/Body";

export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-[#0a0f1a] overflow-x-hidden">
        <NewNavbar/>
        <Body />
       
        <Footer />
      </div>
    </>
  );
}
