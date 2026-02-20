import React from "react";
// Imports remain the same
import deepika from "../assets/facultyimage/deepika.jpg";
import eibad from "../assets/facultyimage/eibad.jpg";
import heena from "../assets/facultyimage/heena.jpg";
import jyoti from "../assets/facultyimage/jyoti.jpg";
import nikhil from "../assets/facultyimage/nikhil.jpg";
import shilpa from "../assets/facultyimage/shilpa.jpg";
import sneha from "../assets/facultyimage/sneha.jpg";
import snehal from "../assets/facultyimage/snehal.jpg";
import tarun from "../assets/facultyimage/tarun.jpg";
import yash from "../assets/facultyimage/yash.jpg";

export default function FacultyPage() {
  const facultyMembers = [
    { name: "Dr. Nikhil Arora", role: "Department Head", image: nikhil },
    { name: "Dr. Snehal Bhangale", role: "Associate Professor", image: snehal },
    { name: "Yash Vaidya", role: "Senior Lecturer", image: yash },
    { name: "Tarun Kumar", role: "Assistant Professor", image: tarun },
    { name: "Eibad Shaikh", role: "Faculty Member", image: eibad },
    { name: "Deepika", role: "Faculty Member", image: deepika },
    { name: "Shilpa", role: "Faculty Member", image: shilpa },
    { name: "Jyoti", role: "Faculty Member", image: jyoti },
    { name: "Heena", role: "Faculty Member", image: heena },
    { name: "Sneha", role: "Faculty Member", image: sneha },
  ];

  return (
    <section className="relative min-h-screen bg-[#1a4380] py-24 px-8 overflow-hidden">
      
      {/* Decorative background typography for aesthetics */}
      <div className="absolute top-10 left-10 text-[15rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter">
        FACULTY
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">
              Our <span className="font-semibold text-blue-300">Mentors</span>
            </h1>
            <p className="mt-6 text-blue-100/60 text-lg max-w-md border-l-2 border-blue-400/30 pl-6 italic">
              Empowering students through knowledge, integrity, and industry-leading expertise.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-blue-300 font-mono text-sm tracking-[0.3em] uppercase">
              Academic Session 2025-26
            </span>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Main Card Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                
                {/* Image Section */}
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Border Gradient on Image */}
                  <div className="absolute inset-0 border-b-4 border-[#1a4380]"></div>
                </div>

                {/* Info Section - Solid White */}
                <div className="p-6 text-center bg-white">
                  <h3 className="text-xl font-bold text-[#1a4380] tracking-tight">
                    {member.name}
                  </h3>
                  <div className="w-8 h-[2px] bg-blue-400 mx-auto my-3 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="h-1.5 w-full bg-[#1a4380] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}