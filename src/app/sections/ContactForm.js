"use client";
import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Paperclip, X, Check } from "lucide-react";

export default function ContactForm() {
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const fileRef = useRef();

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (file && file.size > 10 * 1024 * 1024) {
      newErrors.file = "File size must be less than 10MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) {
      if (f.size > 10 * 1024 * 1024) {
        setErrors({ file: "File size must be less than 10MB" });
      } else {
        setFile(f);
        setErrors((prev) => ({ ...prev, file: null }));
      }
    }
  };

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (f) {
      if (f.size > 10 * 1024 * 1024) {
        setErrors({ file: "File size must be less than 10MB" });
        setFile(null);
      } else {
        setFile(f);
        setErrors((prev) => ({ ...prev, file: null }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSending(true);
    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });
      if (file) {
        formPayload.append("file", file);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formPayload,
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFile(null);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  return (
    <section
      id="contact"
      className="relative p-4 py-16 md:p-10 lg:p-20 overflow-hidden"
    >
      <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Let's bring your vision to life
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Share details and photos , we give clear estimates and actionable
            design guidance tailored to your unique space.
          </p>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative p-5 rounded-xl border border-gray-100 bg-white group-hover:border-cyan-100 transition-colors duration-300">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center text-cyan-500 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Free on-site estimate
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      Personalized assessment of your space
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative p-5 rounded-xl border border-gray-100 bg-white group-hover:border-amber-100 transition-colors duration-300">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-amber-500 mr-4">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Licensed installers
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      Certified professionals with insurance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[rgb(var(--color-primary-rgb)/1)] text-white shadow"
          >
            View our process
          </a>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-7 relative">
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-600/10 z-0" />
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25" />
            <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className={`pl-10 w-full p-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer`}
                    />
                    <label className="absolute left-10 -top-2.5 bg-white px-1 text-xs font-medium text-cyan-600 transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base">
                      Full Name
                    </label>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className={`pl-10 w-full p-3 rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      } focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer`}
                    />
                    <label className="absolute left-10 -top-2.5 bg-white px-1 text-xs font-medium text-cyan-600 transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base">
                      Phone
                    </label>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative mb-5">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className={`pl-10 w-full p-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer`}
                  />
                  <label className="absolute left-10 -top-2.5 bg-white px-1 text-xs font-medium text-cyan-600 transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base">
                    Email Address
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="relative mb-5">
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className={`w-full p-4 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer pt-4`}
                  ></textarea>
                  <label className="absolute left-3 top-3.5 text-gray-500 peer-placeholder-shown:opacity-100 peer-focus:opacity-0 transition-opacity">
                    How can we help you?
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* File Upload */}
                <div className="mb-6">
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className={`relative rounded-xl border-2 border-dashed p-5 ${
                      file
                        ? "border-cyan-200 bg-cyan-50"
                        : "border-gray-200 hover:border-cyan-300 hover:bg-gray-50"
                    }`}
                  >
                    {file ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Paperclip className="w-5 h-5 text-cyan-500 mr-2" />
                          <span className="text-sm text-gray-700 truncate max-w-xs">
                            {file.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFile(null)}
                          className="p-1 rounded-full hover:bg-gray-200"
                        >
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center py-2">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mb-3">
                            <Paperclip className="w-5 h-5 text-cyan-600" />
                          </div>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium text-cyan-600">
                              Click to upload
                            </span>
                            or drag and drop
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            SVG, PNG, JPG , PDF up to 10MB
                          </p>
                        </div>
                      </div>
                    )}
                    <input
                      ref={fileRef}
                      type="file"
                      onChange={handleFile}
                      className="hidden"
                      accept="image/*,application/pdf"
                    />
                  </div>
                  {errors.file && (
                    <p className="text-red-500 text-xs mt-2">{errors.file}</p>
                  )}
                </div>

                {errors.submit && (
                  <p className="text-red-500 text-sm mb-3">{errors.submit}</p>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={sending}
                    className={`group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 ${
                      sending
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                  >
                    <span className="relative z-10 flex items-center">
                      {submitted ? (
                        <>
                          <Check className="mr-2 w-5 h-5" /> Sent!
                        </>
                      ) : sending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
