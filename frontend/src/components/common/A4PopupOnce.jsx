import { useState } from "react";
import resultImage from "../../assets/popimage.png";

export default function ResultPopup() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          
          {/* IMAGE POPUP */}
          <div className="relative w-[90vw] h-[90vh] flex items-center justify-center">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-3xl font-bold text-white z-10"
            >
              ✕
            </button>

            <img
              src={resultImage}
              alt="Results"
              className="max-w-full max-h-full object-contain"
            />
          </div>

        </div>
      )}
    </>
  );
}