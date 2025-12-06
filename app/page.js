import Image from "next/image";

import Footer from "./component/Footer";

import NewNavbar from "./component/NewNavbar";
import Body from "./component/Body";
import Apicall from "./component/Apicall";

export default function Home() {
  return (
    <>
      <div className="h-full w-full  ">
        <NewNavbar/>
        {/* <Body /> */}
        <Apicall />
       
        <Footer />
      </div>
    </>
  );
}
