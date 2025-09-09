"use client";
import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Paperclip, X, Check, User } from "lucide-react";

export default function ContactForm() {
  const [files, setFiles] = useState([]); // changed from single file to multiple
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

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

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

    // check all files
    for (const f of files) {
      if (f && f.size > MAX_FILE_SIZE) {
        newErrors.file = "Each file must be less than 10MB";
        break;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files || []);
    if (!dropped.length) return;

    // validate and add
    for (const f of dropped) {
      if (f.size > MAX_FILE_SIZE) {
        setErrors((prev) => ({ ...prev, file: "File size must be less than 10MB" }));
        return;
      }
    }

    setFiles((prev) => [...prev, ...dropped]);
    setErrors((prev) => ({ ...prev, file: null }));
  };

  const handleFile = (e) => {
    const picked = Array.from(e.target.files || []);
    if (!picked.length) return;

    for (const f of picked) {
      if (f.size > MAX_FILE_SIZE) {
        setErrors((prev) => ({ ...prev, file: "File size must be less than 10MB" }));
        return;
      }
    }

    setFiles((prev) => [...prev, ...picked]);
    setErrors((prev) => ({ ...prev, file: null }));
    // reset input so same file can be selected again if needed
    if (fileRef.current) fileRef.current.value = "";
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => ({ ...prev, file: null }));
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

      // append all selected files (two keys for compatibility)
      files.forEach((f) => {
        formPayload.append("file", f); // original key used in your submission
        formPayload.append("attachments", f); // also add plural key
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formPayload,
      });

      // try parse json body for errors or messages
      const contentType = res.headers.get("content-type") || "";
      let body = null;
      if (contentType.includes("application/json")) {
        try {
          body = await res.json();
        } catch (err) {
          body = null;
        }
      } else {
        // non-json response
        body = null;
      }

      if (!res.ok) {
        // if server returned field errors object, merge into errors state
        if (body && typeof body === "object") {
          if (body.errors && typeof body.errors === "object") {
            setErrors((prev) => ({ ...prev, ...body.errors }));
          } else if (body.error) {
            setErrors((prev) => ({ ...prev, submit: body.error }));
          } else {
            setErrors((prev) => ({ ...prev, submit: "Failed to send message" }));
          }
        } else {
          setErrors((prev) => ({ ...prev, submit: "Failed to send message" }));
        }
        setSending(false);
        return;
      }

      // success
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFiles([]);
      setErrors({});
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
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className={`pl-10 w-full p-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer`}
                    />

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
                      placeholder="Phone"
                      className={`pl-10 w-full p-3 rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      } focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer`}
                    />

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
                    placeholder="Email"
                    className={`pl-10 w-full p-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer`}
                  />

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
                    placeholder="Message"
                    className={`w-full p-4 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer pt-4`}
                  ></textarea>

                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* File Upload */}
                <div className="mb-6">
                  <div
                    onClick={() => fileRef.current && fileRef.current.click()}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className={`relative rounded-xl border-2 border-dashed p-5 cursor-pointer ${
                      files.length
                        ? "border-cyan-200 bg-cyan-50"
                        : "border-gray-200 hover:border-cyan-300 hover:bg-gray-50"
                    }`}
                  >
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
                    <input
                      ref={fileRef}
                      type="file"
                      onChange={handleFile}
                      className="hidden"
                      accept="image/*,application/pdf"
                      multiple
                    />
                  </div>
                  {errors.file && (
                    <p className="text-red-500 text-xs mt-2">{errors.file}</p>
                  )}
                </div>

                {/* Show selected files BELOW the file input */}
                {files.length > 0 && (
                  <div className="mb-6 space-y-2">
                    {files.map((f, idx) => (
                      <div
                        key={`${f.name}-${f.size}-${idx}`}
                        className="flex items-center justify-between bg-white/5 rounded-md p-3 border border-white/6"
                      >
                        <div className="flex items-center gap-3">
                          {f.type.startsWith("image/") ? (
                            <img
                              src={URL.createObjectURL(f)}
                              alt={f.name}
                              className="w-12 h-12 object-cover rounded-md"
                            />
                          ) : (
                            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white/6 text-xs">
                              {f.name.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="text-sm truncate max-w-xs">{f.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {(f.size / 1024 / 1024).toFixed(2)} MB
                            </div>
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation(); // prevent opening file picker
                              removeFile(idx);
                            }}
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <X className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

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
