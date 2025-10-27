"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Plan your Sri Lanka adventure with us. Get in touch today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="group">
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-all bg-transparent placeholder-gray-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-all bg-transparent placeholder-gray-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-all bg-transparent resize-none placeholder-gray-300"
                  placeholder="Tell us about your dream Sri Lankan adventure..."
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-8 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Send Message
                </button>
              </div>

              {submitted && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl animate-fade-in">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-700 font-medium">
                    Message sent successfully! We'll be in touch soon.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                Contact Information
              </h3>

              <a
                href="tel:+94768539902"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-gray-900 group-hover:text-blue-600 transition-colors">
                    +94 76 853 9902
                  </p>
                </div>
              </a>

              <a
                href="mailto:slchauffeurguide@gmail.com"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Mail className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-gray-900 group-hover:text-purple-600 transition-colors break-all">
                    slchauffeurguide@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/94768539902"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                    WhatsApp
                  </p>
                  <p className="text-gray-900 group-hover:text-green-600 transition-colors">
                    Chat with us
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    151/2/1, Weniwelkatiyagama, Nagoda, Dodangoda, Kalutara
                    North, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234!2d80.0234!3d6.5789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzQnNDQuMCJOIDgwwrAwMScyNC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}
