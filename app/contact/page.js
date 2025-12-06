"use client";

import Footer from "../component/Footer";
import Navbar from "../component/NewNavbar";
import ContactPage from "../contact/component/ContactPage";
import { useRouter } from "next/navigation"; // 👈 Router for navigation

export default function Contact() {
  const router = useRouter();

  return (
    <>
        <Navbar/>
      <div className="mt-20 flex flex-col items-center justify-center">
        

        {/* Back to Home Button */}
        {/* <button
          onClick={() => router.push("/")}
          className=" bg-blue-600 text-white px-6 py-3 rounded-lg 
                     shadow-md hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] 
                     transition-all duration-300 ease-in-out transform hover:scale-105 "
        >
          ← Back to Home
        </button> */}

        {/* Contact Section */}
        <ContactPage />
        <Footer/>
      </div>
    </>
  );
}
