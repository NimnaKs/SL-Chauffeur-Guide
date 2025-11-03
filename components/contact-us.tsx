"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

export default function ContactUs() {
  const { content } = useLanguage();
  const formContent = content.contactForm;
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {formContent.heading}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            {formContent.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="group">
                <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  {formContent.fields.name.label}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-slate-200 focus:border-emerald-600 outline-none transition-all bg-transparent placeholder-slate-300"
                  placeholder={formContent.fields.name.placeholder}
                />
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  {formContent.fields.email.label}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-slate-200 focus:border-emerald-600 outline-none transition-all bg-transparent placeholder-slate-300"
                  placeholder={formContent.fields.email.placeholder}
                />
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  {formContent.fields.message.label}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-slate-200 focus:border-emerald-600 outline-none transition-all bg-transparent resize-none placeholder-slate-300"
                  placeholder={formContent.fields.message.placeholder}
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center rounded-lg border border-emerald-600 px-8 py-3.5 text-sm font-medium text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  {formContent.submitLabel}
                </button>
              </div>

              {submitted && (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl animate-fade-in">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-700 font-medium">
                    {formContent.successMessage}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">
                {formContent.infoHeading}
              </h3>

              <a
                href={`tel:${formContent.contactDetails.phoneValue.replace(/\s+/g, "")}`}
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                    {formContent.contactDetails.phoneLabel}
                  </p>
                  <p className="text-slate-900 group-hover:text-blue-600 transition-colors">
                    {formContent.contactDetails.phoneValue}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${formContent.contactDetails.emailValue}`}
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Mail className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                    {formContent.contactDetails.emailLabel}
                  </p>
                  <p className="text-slate-900 group-hover:text-purple-600 transition-colors break-all">
                    {formContent.contactDetails.emailValue}
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
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                    {formContent.contactDetails.whatsappLabel}
                  </p>
                  <p className="text-slate-900 group-hover:text-green-600 transition-colors">
                    {formContent.contactDetails.whatsappValue}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                    {formContent.contactDetails.locationLabel}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {formContent.contactDetails.locationValue}
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
