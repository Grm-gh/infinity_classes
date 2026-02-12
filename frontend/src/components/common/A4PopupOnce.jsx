import { useState } from "react";
import resultImage from "../../assets/popupimage.jpg";

export default function ResultPopup() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          ></div>

          {/* POPUP BOX */}
          <div className="relative bg-white p-4 max-w-5xl w-[95%] rounded-lg z-50">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ✕
            </button>

            <img
              src={resultImage}
              alt="Results"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
}
