import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="bg-white px-6 md:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Infinity Classes</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Shop #13, Kavya Hill View, Opp. Pride Residency,
              Kavesar, Anand Nagar, Ghodbunder Road,
              Thane (West), Thane 400615
            </p>
            <p className="mt-4 text-sm">
              <span className="font-semibold">Phone:</span> +91 85-0753-0753
            </p>
            <p className="text-sm">
              <span className="font-semibold">Email:</span> infinityclassthane@gmail.com
            </p>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="cursor-pointer hover:text-blue-700">› Home</li>
              <li className="cursor-pointer hover:text-blue-700">› Contact Us</li>
              <li className="cursor-pointer hover:text-blue-700">› Blogs</li>
            </ul>
          </div>

          {/* STUDY MATERIAL */}
          <div>
            <h3 className="font-semibold mb-4">Study Material</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="cursor-pointer hover:text-blue-700">› Books</li>
              <li className="cursor-pointer hover:text-blue-700">› Videos</li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div>
            <h3 className="font-semibold mb-4">For latest Updates</h3>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 text-sm"
              />
              <button className="bg-[#143c8c] text-white px-6 py-3 rounded-full text-sm hover:bg-blue-900 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div className="bg-gray-100 px-6 md:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-center md:text-left">
          © Copyright <span className="font-semibold">Infinity Classes</span>. All Rights Reserved
          <br />
        </p>

        <div className="flex gap-4">
          <div className="bg-[#143c8c] p-3 rounded-full text-white cursor-pointer">
            <FaInstagram />
          </div>
          <div className="bg-[#143c8c] p-3 rounded-full text-white cursor-pointer">
            <FaLinkedinIn />
          </div>
          <div className="bg-[#143c8c] p-3 rounded-full text-white cursor-pointer">
            <FaFacebookF />
          </div>
        </div>
      </div>

      {/* FLOATING ICONS */}
      <div className="fixed right-5 top-[40%] flex flex-col gap-4 z-50">
        <a className="bg-green-500 p-4 rounded-full text-white shadow-lg cursor-pointer">
          <FaWhatsapp size={22} />
        </a>
        <a className="bg-green-600 p-4 rounded-full text-white shadow-lg cursor-pointer">
          <FaPhoneAlt size={20} />
        </a>
      </div>
    </>
  );
}
