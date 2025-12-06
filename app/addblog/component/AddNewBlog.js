"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LifeStyle01 from "./asset/LifeStyle_01.webp";
// import LifeStyle01 from "../addblog/component/asset/Lifestyle_01.webp";
import LifeStyle02 from "./asset/Lifestyle_02.webp";
// import LifeStyle03 from ".asset/Lifestyle_03.webp";
import Startup01 from "./asset/Startup_01.webp";
import Startup02 from "./asset/Startup_02.webp";
import Startup03 from "./asset/Startup_03.webp";
import Technology01 from "./asset/Technology_01.webp";
import Technology02 from "./asset/Technology_02.webp";
import Technology03 from "./asset/Technology_03.webp";
import Finance from "./asset/Finance.webp";
// import Footer from "../component/Footer";
// import Navbar from "../component/NewNavbar";
// import Body from "../component/Body";

export default function AddBlog() {
  const [blogPosts, setBlogPosts] = useState([
    {
          id: 1,
          title: "A detailed step by step guide to manage your lifestyle",
          category: "Lifestyle",
          author: "John Carter",
          description:
            "A simple step-by-step guide to managing your lifestyle effectively.",
          image: LifeStyle01,
          date: "Oct 15, 2025",
        },
        {
          id: 2,
          title: "How to create an effective startup roadmap idea",
          category: "Startup",
          author: "Elena Smith",
          description:
            "Creating an effective startup roadmap helps you plan an idea into architecture.",
          image: Startup01,
          date: "Oct 10, 2025",
        },
        {
          id: 3,
          title: "Learning new technology to boost your career in software",
          category: "Technology",
          author: "Michael Brown",
          description:
            "New skills = new opportunities. Learn how to grow as a software engineer.",
          image: Technology01,
          date: "Oct 5, 2025",
        },
        {
          id: 4,
          title: "Tips for getting the most out of apps and software",
          category: "Technology",
          author: "Sara Adams",
          description:
            "We use tons of apps daily — here’s how to make the most of them.",
          image: Technology02,
          date: "Sep 29, 2025",
        },
        {
          id: 5,
          title: "Enhancing your skills and capturing memorable moments",
          category: "Lifestyle",
          author: "Emily Clark",
          description:
            "In today’s fast world, balancing work and passion is the key.",
          image: LifeStyle02,
          date: "Sep 25, 2025",
        },
        {
          id: 6,
          title: "Maximizing returns by minimizing resources in your startup",
          category: "Startup",
          author: "Ryan Lewis",
          description:
            "Smart scaling: how startups achieve more with fewer resources.",
          image: Startup02,
          date: "Sep 20, 2025",
        },
        {
          id: 7,
          title: "Taxes on Luxury Houses",
          category: "Finance",
          author: "David Green",
          description:
            "Luxury home taxes — what they mean for the market and your wallet.",
          image: Finance,
          date: "Sep 12, 2025",
        },
        {
          id: 8,
          title: "The New Way of Study",
          category: "Startup",
          author: "Monica Lee",
          description:
            "Blending traditional study with new digital tools for better learning.",
          image: Startup03,
          date: "Sep 5, 2025",
        },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    description: "",
    date: "",
    image: null,
    preview: null,
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: file, preview: imageUrl }));
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.author ||
      !formData.description ||
      !formData.date ||
      !formData.image
    ) {
      alert("Please fill out all fields including an image!");
      return;
    }

    const newPost = {
      id: blogPosts.length + 1,
      title: formData.title,
      category: formData.category,
      author: formData.author,
      description: formData.description,
      date: formData.date,
      image: formData.preview, // we’re using preview as temporary image
    };

    setBlogPosts([newPost, ...blogPosts]);

    // reset form
    setFormData({
      title: "",
      category: "",
      author: "",
      description: "",
      date: "",
      image: null,
      preview: null,
    });
  };

  return (

    <> 

    {/* <Navbar/> */}
    {/* <Body blogPosts={blogPosts} /> */}
    <div className="  py-10 md:px-5 mt-15 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Blog</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-70 md:w-full bg-white shadow-md rounded-xl p-6 space-y-5 border border-gray-100 "
      >
        <div className="grid  gap-5">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="border border-gray-300 rounded-lg p-2 md:p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border border-gray-300 rounded-lg p-2 md:p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author Name"
            className="border border-gray-300 rounded-lg p-2 md:p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 md:p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Blog Description"
          rows="4"
          className="border border-gray-300 rounded-lg p-2 md:p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        ></textarea>

        {/* Image Upload */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-lg p-2 w-full md:w-auto"
          />
          {formData.preview && (
            <Image
              src={formData.preview}
              alt="Preview"
              width={120}
              height={80}
              className="rounded-lg object-cover border border-gray-200"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
        >
          Post Blog
        </button>
      </form>

      {/* Blog Preview Section */}
      <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-4">
        All Blog Posts ({blogPosts.length})
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold mt-2 text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{post.description}</p>
              <div className="text-gray-400 text-xs mt-3 flex justify-between items-center">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* <Footer /> */}
    </>
    
  );
}
