import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Shop #13, Kavya Hill View, Opp. Pride Residency, Kavesar, Anand Nagar, Ghodbunder Road, Thane (West), Thane 400615",
      link: "https://maps.google.com"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "infinityclassthane@gmail.com",
      link: "mailto:infinityclassthane@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call",
      details: "+91 85075 30753",
      link: "tel:+918507530753"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-[#1e3a8a] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Contact us to enroll in our courses and make your learning experience better than ever.
          </p>
        </motion.div>
      </section>

      {/* MAP SECTION - Full Width with Shadow */}
      <section className="px-6 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.533282433144!2d72.9646453149038!3d19.25916328698188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93800000001%3A0x6d11f7c1e6e6e6e6!2sInfinity%20Classes!5e0!3m2!1sen!2sin!4v1625000000000"
            className="w-full h-112.5"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-16">
        
        {/* Contact Details */}
        <div className="space-y-12">
          {contactInfo.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="shrink-0 w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}:</h3>
                <p className="text-slate-600 leading-relaxed max-w-70">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm"
        >
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Your Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-700">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+91 00000 00000"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can we help you?"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full md:w-auto px-10 py-4 bg-[#1e3a8a] text-white font-bold rounded-xl hover:bg-blue-800 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </section>


    </div>
  );
}