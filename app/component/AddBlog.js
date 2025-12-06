"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AddBlog() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "A detailed step by step guide to manage your lifestyle",
      category: "Lifestyle",
      author: "John Carter",
      description:
        "A simple step-by-step guide to managing your lifestyle effectively.",
      image: "/lifestyle01.jpg",
      date: "Oct 15, 2025",
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
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Blog</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 space-y-5 border border-gray-100"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author Name"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Blog Description"
          rows="4"
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none resize-none"
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
  );
}
