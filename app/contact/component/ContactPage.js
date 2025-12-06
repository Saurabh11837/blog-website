"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon 😊");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4 scroll-smooth"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-3xl border border-gray-200"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us 📩</h1>
          <p className="text-gray-500 mt-2">
            Have a question, feedback, or issue? We’d love to hear from you.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FiMail className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">support@myblog.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">
                123 Blog Avenue, Mumbai, India 🇮🇳
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(37,99,235,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
