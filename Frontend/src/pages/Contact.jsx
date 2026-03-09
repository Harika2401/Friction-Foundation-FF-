import Footer from "../Components/home/Footer";
import Navbar from "../Components/home/Navbar";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      

      <section className="bg-white pt-40 pb-24 px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-semibold tracking-widest text-[#1f2d3d]">
            CONTACT US
          </h2>

          <div className="w-16 h-[3px] bg-orange-400 mx-auto mt-2 mb-5"></div>

          <p className="text-gray-500 text-lg md:text-xl leading-8 w-full max-w-4xl mx-auto">
  We'd love to hear from you — whether you're a student, institution,
  partner, or supporter.
</p>
</div>
            


        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT CONTACT CARD */}

          <div className="bg-[#0f2e3a] text-white p-12 rounded-xl relative overflow-hidden">

            <h3 className="text-xl font-semibold mb-3">
              Contact Information
            </h3>

            {/* Bigger text in 2 lines */}
            <p className="text-gray-200 text-lg leading-7 mb-12">
              Say something to start <br />
              a live chat!
            </p>


            <div className="space-y-7">

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-orange-400" />
                <span className="text-lg">+91-9032707013</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-400" />
                <span className="text-lg">
                  frictionfoundationff@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-orange-400" />
                <span className="text-lg">
                  Hyderabad, Telangana, 500070
                </span>
              </div>

            </div>


            {/* SOCIAL ICONS */}

            <div className="flex gap-4 mt-14">

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white cursor-pointer hover:scale-110 transition">
                <FaTwitter />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white cursor-pointer hover:scale-110 transition">
                <FaFacebookF />
              </div>

            </div>


            {/* Decorative circles */}

            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full"></div>

          </div>


          {/* RIGHT CONTACT FORM */}

          <div className="bg-white p-12 rounded-xl">

            <form className="space-y-10">

              <div className="grid md:grid-cols-2 gap-10">

                <div>
                  <label className="text-sm text-gray-600">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="w-full border-b border-gray-300 pt-2 pb-3 outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full border-b border-gray-300 pt-2 pb-3 outline-none focus:border-orange-500"
                  />
                </div>

              </div>


              <div className="grid md:grid-cols-2 gap-10">

                <div>
                  <label className="text-sm text-gray-600">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full border-b border-gray-300 pt-2 pb-3 outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+1 012 3456 789"
                    className="w-full border-b border-gray-300 pt-2 pb-3 outline-none focus:border-orange-500"
                  />
                </div>

              </div>


              <div className="mt-6">
  <label className="text-sm text-gray-600 block mb-1">
    Message
  </label>

  <textarea
    rows="1"
    placeholder="Write your message..."
    className="w-full border-b border-gray-300 pt-2 pb-3 outline-none resize-none focus:border-orange-500"
  ></textarea>
</div>


              <div className="flex justify-end">

                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-lg transition"
                >
                  Send Message
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

      
    </>
  );
}