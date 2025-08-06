// import React from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// import ContactImg from "../assets/images/contact.png";

// const Contact = () => {
//     return (
//         <section className="flex flex-col md:flex-row items-center justify-around gap-8 p-6 md:p-16 bg-[#f3f3f3]">

//             <div className="w-full md:w-1/2 flex justify-center">
//                 <img
//                     src={ContactImg}
//                     alt="contact"
//                     className="w-3/4 h-auto rounded-2xl shadow-lg object-cover"
//                 />
//             </div>

//             <div className="w-full md:w-1/2 flex justify-center md:justify-around">
//                 <form className="w-full max-w-xl space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="space-y-1">
//                             <label className="text-black font-semibold text-sm">First Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full border-b-2 border-cyan-400 focus:outline-none py-2"
//                             />
//                         </div>
//                         <div className="space-y-1">
//                             <label className="text-black font-semibold text-sm">Last Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full border-b-2 border-cyan-400 focus:outline-none py-2"
//                             />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="space-y-1">
//                             <label className="text-black font-semibold text-sm">Email</label>
//                             <input
//                                 type="email"
//                                 className="w-full border-b-2 border-cyan-400 focus:outline-none py-2"
//                             />
//                         </div>
//                         <div className="space-y-1">
//                             <label className="text-black font-semibold text-sm">Phone Number</label>
//                             <input
//                                 type="text"
//                                 className="w-full border-b-2 border-cyan-400 focus:outline-none py-2"
//                             />
//                         </div>
//                     </div>

//                     <div className="space-y-2">
//                         <label className="text-black text-sm  font-bold">Select Subject?</label>
//                         <div className="flex flex-wrap gap-4">
//                             <label className="flex items-center space-x-2">
//                                 <input type="radio" name="subject" className="accent-cyan-400" />
//                                 <span>General Inquiry</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input type="radio" name="subject" className="accent-cyan-400" />
//                                 <span>Call Request</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input type="radio" name="subject" className="accent-cyan-400" />
//                                 <span>Complaint</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input type="radio" name="subject" className="accent-cyan-400" />
//                                 <span>Information</span>
//                             </label>
//                         </div>
//                     </div>

//                     <div className="flex flex-col space-y-2" >
//                         <label className="text-black font-semibold text-sm">Message</label>
//                         <textarea
//                             placeholder="Write your message.."
//                             className="w-full border-b-2 border-cyan-400 focus:outline-none  resize-none"
//                             rows={2}
//                         ></textarea>
//                     </div>

//                     <div className="flex justify-end">
//                         <button
//                             type="submit"
//                             className="bg-cyan-400 hover:bg-cyan-500 cursor-pointer text-black font-semibold rounded-md px-8 py-3 transition-colors"
//                         >
//                             Send Message
//                         </button>
//                     </div>
//                 </form>
//             </div>

//         </section>

//     );
// };

// export default Contact;


import React from "react";
import ContactImg from "../assets/images/contact.png";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around gap-10 px-6 py-12 md:px-16 bg-[#f3f3f3]">
      
      {/* Left: Contact Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={ContactImg}
          alt="Contact Us"
          className="w-3/4 h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 flex justify-center">
        <form className="w-full max-w-xl space-y-6">
          
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="firstName" className="text-sm font-semibold text-black">First Name</label>
              <input
                id="firstName"
                type="text"
                className="w-full border-b-2 border-cyan-400 py-2 focus:outline-none focus:border-cyan-600"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="lastName" className="text-sm font-semibold text-black">Last Name</label>
              <input
                id="lastName"
                type="text"
                className="w-full border-b-2 border-cyan-400 py-2 focus:outline-none focus:border-cyan-600"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-black">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border-b-2 border-cyan-400 py-2 focus:outline-none focus:border-cyan-600"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="phone" className="text-sm font-semibold text-black">Phone Number</label>
              <input
                id="phone"
                type="text"
                className="w-full border-b-2 border-cyan-400 py-2 focus:outline-none focus:border-cyan-600"
              />
            </div>
          </div>

          {/* Subject Options */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">Select Subject</label>
            <div className="flex flex-wrap gap-4">
              {["General Inquiry", "Call Request", "Complaint", "Information"].map((subject, index) => (
                <label key={index} className="flex items-center space-x-2 text-sm">
                  <input type="radio" name="subject" value={subject} className="accent-cyan-400" />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-black">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message..."
              className="w-full border-b-2 border-cyan-400 focus:outline-none focus:border-cyan-600 resize-none px-2 py-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 transition-colors px-8 py-3 rounded-md text-black font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
