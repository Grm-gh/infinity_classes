export default function PopupOnce({ onClose, children }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center">
      
      {/* POPUP BOX */}
      <div
        className="relative bg-white w-[90%] max-w-4xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // ⬅ important
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-2 right-2 border border-black px-2 text-sm cursor-pointer"
        >
          ✕
        </button>

        {children}

      </div>
    </div>
  );
}
