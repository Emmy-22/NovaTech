import { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Robert Victor",
    role: "Engineer",
    img: "/client-1.jpg",
    rating: 5,
    message:
      "Working with this team was seamless. They understood my ideas perfectly and delivered beyond expectation. I’ll definitely recommend them to anyone looking for quality gadgets.",
  },
  {
    name: "Sarah Johnson",
    role: "Designer",
    img: "/client-2.jpg",
    rating: 5,
    message:
      "Their attention to detail blew me away. Every section of my website looked exactly how I imagined it. Truly creative and professional in every sense.",
  },
  {
    name: "Michael Green",
    role: "Entrepreneur",
    img: "/client-3.jpg",
    rating: 5,
    message:
      "I had an amazing experience from start to finish. The communication was top-notch, and the project was completed right on time. Couldn't have asked for better service.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Expert",
    img: "/client-4.jpg",
    rating: 5,
    message:
      "Absolutely love the result! They took my rough idea and turned it into something stunning. The process was smooth, and the result speaks for itself.",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="Testimonial" className="bg-[#1a1a1a] min-h-[65vh]  py-20 px-3 md:px-15">
      <h2 className="text-white text-center text-2xl font-medium w-fit bg-[#2a2a2a] px-4 py-1 rounded-md border-b-2 mx-auto border-[#D79B63]">
        Testimonial
      </h2>
      <p className="text-center text-4xl md:text-5xl text-[#D79B63] mt-5 font-medium font-[Playfair_Display]">
        What Our Clients Say
      </p>

      {/* Testimonial Cards */}
      <div
        className="overflow-x-auto flex gap-5 scroll-smooth mt-6 pb-6"
        onScroll={(e) => {
          const scrollPos = e.target.scrollLeft;
          const cardWidth = e.target.firstChild.offsetWidth + 20; // width + gap
          const index = Math.round(scrollPos / cardWidth);
          setActiveIndex(index);
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl w-[350px] h-[250px] mt-5 shrink-0 md:mb-[30px]"
          >
            <div className="flex gap-4 pr-4">
              <div className="bg-[#D79B63] rounded-tl-xl rounded-tr-[50px] rounded-br-[50px] w-fit h-fit p-2">
                <img
                  src={t.img}
                  alt={t.name}
                  className="object-cover rounded-full w-[100px] h-[80px] border-white border-[2px]"
                />
              </div>
              <div className="flex flex-col justify-center mt-2 mr-8">
                <h2 className="font-semibold text-[17px]">{t.name}</h2>
                <p className="text-gray-800">{t.role}</p>
                <div className="flex gap-1 text-[#D79B63] mt-1 mb-3 items-center">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-black flex">5.0</span>
                </div>
              </div>
              <div className="bg-gray-100 text-[#D79B63] text-6xl h-10 w-10 flex items-center justify-center rounded-full mt-6 p-7 leading-none">
                <span className="relative top-[8px]">❝</span>
              </div>
            </div>
            <p className="px-3 mt-7 text-[15px] text-gray-800 leading-relaxed">{t.message}</p>
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-[10px] h-[4px] rounded-full ${
              i === activeIndex ? "bg-[#D79B63] w-[25px]" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;