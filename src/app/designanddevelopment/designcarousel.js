import React, { useState } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import BeforeAfterSlider from "../ui/ux/beforeafter";

const slides = [
  {
    label: "UI/UX Design Solutions",
    description:
      "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
  },
  {
    label: "Creative solution",
    description:
      "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
  },
];

const DesignCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative overflow-hidden ms-10"
      style={{ width: "50vw", height: "60vh" }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
            style={{ height: "50px" }}
          >
            <p>{slide.description}</p>
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-gray-800 via-transparent to-transparent text-white">
              <h5 className="text-xl font-bold mb-2">{slide.label}</h5>
              <p className="text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        aria-label="Previous slide"
      >
        &lt;
      </button> */}
      <button
        onClick={nextSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2text-white p-2 rounded-full "
        aria-label="Next slide"
        style={{ fontSize: "40px" }}
      >
        <FaCircleChevronRight />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignCarousel;

// "use client"
// import React, { useState } from 'react';
// import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

// const slides = [
//   {
//     label: "UI/UX Design Solutions",
//     description: "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
//     button:"Explore"
//   },
//   {
//     label: "Creative Solution",
//     description: "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
//     button:"Explore"
//   },
// ];

// const DesignCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <>
//     <div className="relative overflow-hidden" style={{ width: "40vw", height: "50vh",marginBottom:"100px"}}>
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (

//             <>
//                 <div key={index} className="w-full flex-shrink-0 relative flex items-center justify-center text-black" style={{ height: "40vh",width:"100%"}}>
//                 <div className="">
//                     <h5 className="text-xl font-bold" style={{fontSize:"30px",lineHeight:"1.5"}}>{slide.label}</h5>
//                     <p className="text-base" style={{lineHeight:"2"}}>{slide.description}</p>
//                     <button className='bg-black text-white py-2 px-4 mt-10' style={{width:"150px",borderRadius:"14px"}}>{slide.button}</button>
//             </div>
//           </div>
//             </>

//         ))}
//       </div>
//       {/* <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
//         aria-label="Previous slide"
//         style={{ fontSize: "40px" }}
//       >
//         <FaCircleChevronLeft />
//       </button> */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
//         aria-label="Next slide"
//         style={{ fontSize: "40px" }}
//       >
//         <FaCircleChevronRight className='text-black' style={{position:"relative",bottom:"50px",left:"5px"}}/>
//       </button>

//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-400'}`}
//             style={{position:"relative",right:"250px",top:"10px",fontSize:"60px"}}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default DesignCarousel;

// const slidess = [
//   {
//     imgSrc:"/images/uiux/image 52.png",
//     label: "Mobile UI/UX",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

//   },
//   {
//     imgSrc:"/images/uiux/image 52.png",
//     label: "Mobile UI/UX",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     imgSrc:"/images/uiux/image 52.png",
//     label: "Mobile UI/UX",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
// ];

// export const DesignCarousel2 = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <>
//     <div className="relative overflow-hidden container" style={{ width: "100%", height: "100%"}}>
//       <div
//         className="flex transition-transform duration-500 ease-in-out container"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slidess.map((slide, index) => (

//             <>
//                 <div key={index} className="w-full flex-shrink-0 relative flex items-center justify-center text-black container" style={{ height: "80vh" ,marginTop:"100px",position:"relative",bottom:"40px"}}>
//                 <div className="absolute inset-0 flex flex-col justify-end p-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
//                   <div className='mx-auto'>
//                     <img src={slides.imgSrc} />
//                     <img src="/images/uiux/image 52.png" alt="" />
//                   </div>
//                   <div>
//                     <h5 className="text-xl font-bold mb-2" style={{fontSize:"30px",lineHeight:"1.5"}}>{slide.label}</h5>
//                     <p className="text-base" style={{lineHeight:"2",paddingRight:"30px"}}>{slide.description}</p>
//                   </div>
//                 </div>
//           </div>
//             </>
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full ms-20"
//         aria-label="Previous slide"
//         style={{ fontSize: "40px" }}
//       >
//         <FaCircleChevronLeft className='text-black'/>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full me-20"
//         aria-label="Next slide"
//         style={{ fontSize: "40px" }}
//       >
//         <FaCircleChevronRight className='text-black' style={{position:"relative",bottom:"50px",left:"5px"}}/>
//       </button>

//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" style={{position:"absolute"}}>
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-400'}`}
//             style={{fontSize:"60px"}}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 2}`}
//           />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// const slidess = [
//   {
//     imgSrc: "/images/uiux/image 52.png",
//     label: "Mobile UI/UX",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     imgSrc: "/images/uiux/image 52.png",
//     label: "Mobile UI/UX",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     imgSrc: "/images/uiux/image 52.png",
//     label: "Mobile UI/UX",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
// ];

// export const DesignCarousel2 = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slidess.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slidess.length) % slidess.length);
//   };

//   return (
//     <div className="relative overflow-hidden w-full h-[80vh] bg-white">
//       <div className='container'>
//       <div
//         className="flex transition-transform duration-500 ease-in-out w-full h-full container"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slidess.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-full h-full flex items-center justify-center"
//           >
//             <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
//               <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
//                 <img
//                   src={slide.imgSrc}
//                   alt={slide.label}
//                   className=" h-auto object-cover max-w-md"
//                   style={{width:"250px"}}
//                 />
//               </div>
//               <div className="w-full md:w-1/2 text-center md:text-left p-4 md:p-8">
//                 <h5 className="text-2xl md:text-3xl font-bold mb-4">{slide.label}</h5>
//                 <p className="text-base md:text-lg">{slide.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
//         aria-label="Previous slide"
//         style={{ fontSize: "2rem" ,marginLeft:"3rem"}}
//       >
//         <FaCircleChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
//         aria-label="Next slide"
//         style={{ fontSize: "2rem",marginRight:"3rem"}}
//       >
//         <FaCircleChevronRight />
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slidess.map((_, index) => (
//           <button
//             key={index}
//             className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-400'}`}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// };

// const slidess = [
//   {
//     imgSrc: <BeforeAfterSlider />,
//     label: "Mobile UI/UX",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     imgSrc: "/images/uiux/image 52.png",
//     label: "Mobile UI/UX",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     imgSrc: "/images/uiux/image 52.png",
//     label: "Mobile UI/UX",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
// ];

// export const DesignCarousel2 = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slidess.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slidess.length) % slidess.length);
//   };

//   return (
//     <div className="relative overflow-hidden w-full h-[80vh] bg-white lg:mt-16">
//       <div className="container relative">
//         <div
//           className="flex transition-transform duration-500 ease-in-out w-full h-full"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slidess.map((slide, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full h-full flex items-center justify-center"
//             >
//               <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
//                 <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
//                   <img
//                     src={slide.imgSrc}
//                     alt={slide.label}
//                     className="w-75 h-auto object-cover max-w-full max-h-[50vh] md:max-h-[60vh]"
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 text-center md:text-left p-1 md:p-8">
//                   <h5 className="text-2xl md:text-3xl font-bold mb-4">
//                     {slide.label}
//                   </h5>
//                   <p className="text-base md:text-lg">{slide.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={prevSlide}
//           className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
//             currentSlide === 0
//               ? "opacity-50 cursor-not-allowed"
//               : "opacity-100 cursor-pointer"
//           }`}
//           aria-label="Previous slide"
//           style={{ fontSize: "2rem", marginLeft: "3rem" }}
//           disabled={currentSlide === 0}
//         >
//           <FaCircleChevronLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
//             currentSlide === slidess.length - 1
//               ? "opacity-50 cursor-not-allowed"
//               : "opacity-100 cursor-pointer"
//           }`}
//           aria-label="Next slide"
//           style={{ fontSize: "2rem", marginRight: "3rem" }}
//           disabled={currentSlide === slidess.length - 1}
//         >
//           <FaCircleChevronRight />
//         </button>
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {slidess.map((_, index) => (
//             <button
//               key={index}
//               className={`h-2 w-2 rounded-full ${
//                 currentSlide === index ? "bg-black" : "bg-gray-400"
//               }`}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const slidess = [
  {
    component: <BeforeAfterSlider />,
    label: "Mobile UI/UX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imgSrc: "/images/uiux/image 52.png",
    label: "Mobile UI/UX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imgSrc: "/images/uiux/image 52.png",
    label: "Mobile UI/UX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const DesignCarousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidess.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidess.length) % slidess.length);
  };

  return (
    <div className="relative overflow-hidden w-full lg:h-[100vh] bg-white lg:mt-16">
      <div className="container relative">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slidess.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
                <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
                  {/* Check if component or imgSrc exists */}
                  {slide.component ? (
                    slide.component
                  ) : (
                    <img
                      src={slide.imgSrc}
                      alt={slide.label}
                      className="w-75 h-full object-cover max-w-full lg:max-h-[100vh] md:max-h-[100vh]"
                    />
                  )}
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left p-1 md:p-8">
                  <h5 className="text-2xl md:text-3xl font-bold mb-4">
                    {slide.label}
                  </h5>
                  <p className="text-base md:text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
            currentSlide === 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          aria-label="Previous slide"
          style={{ fontSize: "2rem", marginLeft: "3rem" }}
          disabled={currentSlide === 0}
        >
          <FaCircleChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
            currentSlide === slidess.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          aria-label="Next slide"
          style={{ fontSize: "2rem", marginRight: "3rem" }}
          disabled={currentSlide === slidess.length - 1}
        >
          <FaCircleChevronRight />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slidess.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// const slidesss = [
//   {
//     backgroundtext: "UI/UX",
//     imgSrc: "/images/service-section/Group 686.png",
//     label: "UI/UX Design Solutions",
//     description:
//       "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
//   },
//   {
//     backgroundtext: "UI/UX",
//     imgSrc: "/images/service-section/Group 686.png",
//     label: "Creative Solution",
//     description:
//       "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
//   },
// ];

// export const DesignCarousel3 = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slidesss.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slidesss.length) % slidesss.length);
//   };

//   return (
//     <div className="relative overflow-hidden w-full h-[80vh] bg-white">
//       <div className="container relative">
//         <div
//           className="flex transition-transform duration-500 ease-in-out w-full h-full"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slidesss.map((slide, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full h-full flex items-center justify-center"
//             >
//               <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
//                 <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
//                   <img
//                     src={slide.imgSrc}
//                     alt={slide.label}
//                     className="w-75 h-auto object-cover max-w-full max-h-[50vh] md:max-h-[60vh]"
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 text-center md:text-left p-1 md:p-8">
//                   <h5 className="text-2xl md:text-3xl font-bold mb-4">
//                     {slide.label}
//                   </h5>
//                   <p className="text-base md:text-lg">{slide.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={prevSlide}
//           className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
//             currentSlide === 0
//               ? "opacity-50 cursor-not-allowed"
//               : "opacity-100 cursor-pointer"
//           }`}
//           aria-label="Previous slide"
//           style={{ fontSize: "2rem", marginLeft: "3rem" }}
//           disabled={currentSlide === 0}
//         >
//           <FaCircleChevronLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
//             currentSlide === slidesss.length - 1
//               ? "opacity-50 cursor-not-allowed"
//               : "opacity-100 cursor-pointer"
//           }`}
//           aria-label="Next slide"
//           style={{ fontSize: "2rem", marginRight: "3rem" }}
//           disabled={currentSlide === slidesss.length - 1}
//         >
//           <FaCircleChevronRight />
//         </button>
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {slidesss.map((_, index) => (
//             <button
//               key={index}
//               className={`h-2 w-2 rounded-full ${
//                 currentSlide === index ? "bg-black" : "bg-gray-400"
//               }`}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const slidesss = [
  {
    backgroundtext: "UI/UX",
    imgSrc: "/images/service-section/Group 686.png",
    label: "UI/UX Design Solutions",
    description:
      "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
  },
  {
    backgroundtext: "UI/UX",
    imgSrc: "/images/service-section/Group 686.png",
    label: "Creative Solution",
    description:
      "Our UI/UX Design Services focus on creating seamless, engaging, and user-friendly interfaces. We strive to ensure that your digital presence is both aesthetically pleasing and highly functional.",
  },
];

export const DesignCarousel3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesss.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesss.length) % slidesss.length);
  };

  return (
    <div className="relative overflow-hidden w-full h-[80vh] bg-white">
      <div className="container relative">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slidesss.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background text */}
                <h1 className="text-gray-200 text-6xl md:text-8xl lg:text-9xl font-bold z-0 select-none relative lg:right-80 lg:bottom-32 xl:right-80 xl:bottom-40 md:right-48 md:bottom-28 backgroundtext">
                  {slide.backgroundtext}
                </h1>
              </div>
              <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8 z-10">
                <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
                  <img
                    src={slide.imgSrc}
                    alt={slide.label}
                    className="w-75 h-auto object-cover max-w-full max-h-[50vh] md:max-h-[60vh]"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left p-1 md:p-8">
                  <h5 className="text-2xl md:text-3xl font-bold mb-4">
                    {slide.label}
                  </h5>
                  <p className="text-base md:text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
            currentSlide === 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          aria-label="Previous slide"
          style={{ fontSize: "2rem", marginLeft: "3rem" }}
          disabled={currentSlide === 0}
        >
          <FaCircleChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 rounded-full ${
            currentSlide === slidesss.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          aria-label="Next slide"
          style={{ fontSize: "2rem", marginRight: "3rem" }}
          disabled={currentSlide === slidesss.length - 1}
        >
          <FaCircleChevronRight />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slidesss.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
