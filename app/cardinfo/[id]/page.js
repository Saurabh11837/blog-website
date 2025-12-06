// import React from "react";

// export default function Page({ params }) {
//   const { id } = React.use(params);

//   return (
//     <div>
//       Card ID: {id}
//     </div>
//   );
// }

//-----------------------------------------------------------

"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
const dummyData = {
  1: {
    title: "Beautiful Sunset",
    description: "A breathtaking view of the orange sunset behind the mountains.",
    image: "https://picsum.photos/600/300?random=1",
    tag: "Nature",
  },
  2: {
    title: "Modern House",
    description: "A modern styled luxury house with amazing interiors.",
    image: "https://picsum.photos/600/300?random=2",
    tag: "Architecture",
  },
  5: {
    title: "Coding Setup",
    description: "Minimal clean desk setup for productive coding days.",
    image: "https://picsum.photos/600/300?random=5",
    tag: "Tech",
  },
};

const Page = () => {
  const { id } = useParams();
  const data = dummyData[id];

  if (!data) {
    return <h1 className="text-white text-center mt-20 text-3xl">No Data Found</h1>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-gray-900 text-white w-[500px] rounded-2xl shadow-xl overflow-hidden">
        
        {/* Image */}
        <Image src={data.image} alt="img" className="w-full h-60 object-cover" />

        <div className="p-6">
          {/* Tag */}
          <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">
            {data.tag}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold mt-4">{data.title}</h1>

          {/* Description */}
          <p className="text-gray-300 mt-2 leading-6">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Edit
            </button>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg">
              Delete
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
