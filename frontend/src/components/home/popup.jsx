import { useState } from "react";

export default function A4Popup({ children }) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex justify-center items-center">
      
      {/* A4 PAGE */}
      <div className="relative bg-white w-[794px] h-[1123px] 
                      rounded-xl shadow-2xl overflow-y-auto">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="sticky top-4 float-right mr-4 z-50
                     w-10 h-10 rounded-full bg-white shadow-lg
                     flex items-center justify-center
                     text-xl font-bold text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* PAGE CONTENT */}
        <div className="pt-6">
          {children}
        </div>

      </div>
    </div>
  );
}
