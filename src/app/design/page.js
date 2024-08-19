// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// // import "../designanddevelopment/design.css";
// import Footer from "@/components/ui/footer";
// import DesignCarousel from "../designanddevelopment/designcarousel";
// import "./designsss.css";
// // import "../designanddevelopment/design.css"

// const Design = () => {
//   const [isReadMore, setIsReadMore] = useState(false);

//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };

//   const [hover, setHover] = useState(false);
//   const content = "Travel with Us";

//   const [hovered, setHovered] = useState(false);
//   const contents = "Make a call";

//   const [isHovered, setIsHovered] = useState(false);
//   const contentt = "Email Us";

//   useEffect(() => {
//     const scrollers = document.querySelectorAll(".scroller");

//     // If a user hasn't opted in for reduced motion, then we add the animation
//     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       addAnimation();
//     }

//     function addAnimation() {
//       scrollers.forEach((scroller) => {
//         scroller.setAttribute("data-animated", true);

//         const scrollerInner = scroller.querySelector(".scroller__inner");

//         if (scrollerInner) {
//           const scrollerContent = Array.from(scrollerInner.children);

//           scrollerContent.forEach((item) => {
//             const duplicatedItem = item.cloneNode(true);
//             duplicatedItem.setAttribute("aria-hidden", true);
//             scrollerInner.appendChild(duplicatedItem);
//           });

//           scrollerInner.addEventListener("mouseenter", () => {
//             scrollerInner.style.animationPlayState = "running";
//           });
//           scrollerInner.addEventListener("mouseleave", () => {
//             scrollerInner.style.animationPlayState = "running";
//           });
//         }
//       });
//     }
//   }, []);
//   return (
//     <>
//       <div
//         className="min-h-screen top-container"
//         style={{ width: "100%", textAlign: "center" }}
//       >
//         {/* Home-icon section */}
//         <div className="Home-icon-container" style={{ position: "absolute" }}>
//           <img
//             src="/images/Home-icons/Group.png"
//             alt="Home-icon-1"
//             className="Home-icon-1"
//           />
//           <img
//             src="/images/Home-icons/Group 687.png"
//             alt="Home-icon-2"
//             className="Home-icon-2"
//           />
//           <img
//             src="/images/Home-icons/Group 688.png"
//             alt="Home-icon-3"
//             className="Home-icon-3"
//           />
//           <img
//             src="/images/Home-icons/Group 690.png"
//             alt="Home-icon-4"
//             className="Home-icon-4"
//           />
//         </div>
//         {/* header container */}
//         <div
//           className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24 main-header-container"
//           style={{ backgroundColor: "white", width: "100%" }}
//         >
//           <div className="main-header" style={{ textAlign: "center" }}>
//             <h1 className="heading">Design and Branding</h1>
//             <p className="paragraph" style={{ width: "60%", margin: "auto" }}>
//               Creating seamless and engaging user experiences, along with
//               innovative and impactful design solutions, to enhance your brands
//               visual identity and digital engagement.
//             </p>
//             {/* headerButton */}
//             <div className="p-1 overflow-hidden flex justify-center md:justify-start">
//               <button
//                 className="mt-3 btn-btn  text-center relative  font-bold py-2 px-4 rounded"
//                 style={{
//                   border: " 2px solid",
//                   padding: "10px 20px",
//                   borderRadius: "15px",
//                   margin: "auto",
//                 }}
//               >
//                 <div className="w-8 h-6 btn "></div>
//                 <p className=" relative top-0 left-0 z-2 font-semibold text-base">
//                   See Portfolio
//                 </p>
//               </button>
//             </div>
//             </div>

//             {/* header Hover Cards */}
//             <div className="Hover-cards">
//               <div
//                 style={{
//                   marginTop:"100px",
//                   width:"100%",
//                 }}
//                 className="grid lg:flex justify-center grid-cols-1 gap-4 sm:grid-cols-2  xl:flex"
//               >

//                   <div className="Hover-img-1">
//                     <img
//                       src="/images/Hover-cards/Group707.jpg"
//                       alt="Hover-Card-3"
//                       className="Hover-card-1"
//                       style={{width:"320px"}}
//                     />
//                   </div>

//                 {/* Hover Card 2 */}

//                   <div
//                     className="Hover-img-2"
//                     style={{position:"relative",bottom:"50px"}}

//                   >
//                     <img
//                       src="/images/Hover-cards/Logo-Presentation2.jpg"
//                       alt="Hover-Card-1"
//                       className="Hover-card-2"
//                       style={{width:"320px"}}
//                     />
//                   </div>

//                 {/* Hover card 3 */}

//                     <div className="Hover-img-3">
//                       <img
//                         src="/images/Hover-cards/image 46.png"
//                         alt="Hover-Card-2"
//                         className="Hover-card-3"
//                         style={{width:"320px"}}
//                       />
//                     </div>

//                 </div>

//                 </div>
//             </div>

//             {/* Service Section */}
//             <div className='service-container container' style={{height:"60vh",width:"100%"}}>
//                 {/* marquee section */}
//                 {/* marquee font */}
//                 <div className="marquee-containers">
//                 <div>
//                     <div>
//                         <p className="marquee-sections">UI/Ux</p>
//                     </div>
//                 </div>
//               </div>

//               <div className='service-header mb-10 mt-5 w-full'>
//                     <h6 className="service-h6">Service</h6>
//                 </div>

//                 {/* service content section */}
//                 <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
//                 <div className='' >
//                     <div className='service-content grid lg:flex grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 container'>
//                         <div className='service-image-container'>
//                             <img src="/images/Service-section/Group 686.png" alt="service-section-img" className='h-auto' style={{width:"450px"}}/>
//                         </div>
//                         <div className='service-content-container text-left' style={{height:"60vh"}}>

//                             <DesignCarousel />

//                         </div>
//                     </div>
//                    </div>
//                 </div>
//             </div>

//             {/* Technology and tools section */}
//             <div className='technology-container container my-10' style={{width:"100%"}}>
//                 <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
//                     <div className='technology-content-container container mt-20' style={{lineHeight:"2",position:"relative"}}>
//                         <h6 style={{textAlign:"left"}}>Technology & Tools</h6>
//                         <p style={{textAlign:"left",width:"600px"}}>Lorem Ipsum is simply dummy text Of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren-n Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                     </div>
//                     {/* technology image container  */}
//                     <div className='technology-image-container' style={{width:"400px",height:"450px",marginLeft:"100px"}}>
//                         <div>
//                         <div className='flex justify-center gap-10 mt-20'>
//                             <img src="/images/technology-section/Group 664.png" alt="technology-img-5"  />
//                             <img src="/images/technology-section/Group 660.png" alt="technology-img-2" style={{position:"relative",bottom:"50px"}}/>
//                             <img src="/images/technology-section/Group 666@3x.png" alt="technology-img-6" />
//                         </div>

//                         <div className='flex justify-center gap-10' style={{margin:"50px 0"}}>

//                             <img src="/images/technology-section/Group 665.png" alt="technology-img-6" />
//                             <img src="/images/technology-section/Group 667.png" alt="technology-img-7"  style={{position:"relative",bottom:"50px"}}/>
//                             <img src="/images/technology-section/Group 659@2x.png" alt="technology-img-1" />

//                         </div>

//                         <div className='flex justify-center gap-10' >

//                             <img src="/images/technology-section/Group 663.png" alt="technology-img-4" />
//                             <img src="/images/technology-section/Group 662.png" alt="technology-img-6"  style={{position:"relative",bottom:"50px"}}/>

//                             <img src="/images/technology-section/Group 661.png" alt="technology-img-3" />
//                         </div>
//                         </div>

//                     </div>
//                 </div>
//                  {/* Marquee section */}
//                 <div className='Scroller marquee-container' style={{width:"90%"}}>
//                             <div className="scroller" data-speed="fast">
//                                 <div className="scroller__inner">
//                                     <p className='marquee-section' style={{width:"100%"}}>Technology & Tools</p>
//                                 </div>
//                             </div>
//                         </div>
//             </div>

//             {/* Next Section */}
//             <section className="py-8">
//         <div className="md:text-4xl text-2xl text-center md:py-4 font-extrabold my-10" >
//           <p class="">Partner With Us</p>
//         </div>
//         <div className="w-full flex justify-center">
//           <p className="text-sm md:text-base text-center tracking-tight lg:w-8/12  w-11/12 md:mt-0 mt-3">
//             We understand how hard it is for you to find the perfect development partners. At Huge IT Solutions,
//             <span className="hidden lg:inline">
//               {' our experts will provide the consulting you need, analyze your requirements, and deliver the best solutions tailored to your industry and needs. Let us help you achieve your digital goals.Reach out to us now for a consultation and take the first step towards a powerful online presence.'}
//             </span>
//             <span className="inline lg:hidden">
//               {!isReadMore && (
//                 <>
//                   ...{' '}
//                   <button
//                     onClick={toggleReadMore}
//                     className="text-[#FF6C37] ">
//                     Read More
//                   </button>
//                 </>
//               )}
//               {isReadMore && (
//                 <>
//                   <span className="lg:w-full  flex justify-center text-center">
//                     our experts will provide the consulting you need, analyze your requirements, and deliver the best solutions tailored to your industry and needs. Let us help you achieve your digital goals.Reach out to us now for a consultation and take the first step towards a powerful online presence.
//                   </span>
//                   <button
//                     onClick={toggleReadMore}
//                     className="text-[#FF6C37]">
//                     Show Less
//                   </button>
//                 </>
//               )}
//             </span>
//           </p>
//         </div>

//         <div className="w-full flex justify-center mt-6 gap-4">
//           <button
//             className={`button  ${hovered ? 'hover' : ''} `}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             style={{ '--button-content': `"${contents}" ` }}

//           >
//             <img src="/images/phone.svg" className="  -ml-3 hidden lg:flex" />

//           </button>
//           <button
//             className={`button  ${isHovered ? 'hover' : ''} `}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             style={{ '--button-content': `"${contentt}" ` }}

//           >
//             <img src="/images/email.svg" className=" -ml-2 hidden lg:flex " />

//           </button>
//         </div>
//       </section>

//       <div className="relative">
//         <div className=" absolute md:bottom-[-18px]  bottom-[0px]">
//           <img src="/images/bg.svg" alt="bg" className="" />

//         </div>
//         <section className=" md:py-12 py-4 mt-16 w-full  flex justify-center">
//           <div className="bg-[#FFD100] lg:w-8/12  w-11/12  md:h-64 h-80 rounded-xl relative ">
//             <div className="absolute md:w-80 lg:w-96 w-7/12 bottom-[1px] lg:left-12 md:left-0 left-16">
//               <img src="/images/partner.svg" className=" bottom-[px] md:top-0 top-5 md:left-12 left-2 " />
//             </div>
//             <div className="absolute lg:right-20 md:right-16 right-12 md:top-4   ">
//               <p className="  lg:w-full  lg:text-5xl md:text-4xl text-2xl  font-bold tracking-wide leading-relaxed ">Struggling with <br /> CRM Challenges?</p>
//             </div>

//             <p className=" absolute lg:right-36  md:right-16 right-12 md:top-24 top-16 lg:py-4 mt-3 lg:ml-2 lg:text-lg md:text-base text-xs ">Let's solve your CRM challenges together.</p>
//             <button
//               className={button absolute lg:left-1/2 md:right-64 left-1/3 lg:top-36 md:top-32 top-20  mt-7 ${hover ? 'hover' : ''}}
//               onMouseEnter={() => setHover(true)}
//               onMouseLeave={() => setHover(false)}
//               style={{ '--button-content': "${content}" }}

//             >
//             </button>

//           </div>

//         </section>

//       </div>
//       <Footer />
//       <div className="fixed md:bottom-2 bottom-10 md:right-20 right-6">
//         <div className=" animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full absolute bottom-0 right-0 transform -translate-x-1/2">
//           <img src='/images/whats.svg' alt='image' className="absolute inset-0 m-auto w-3/4 h-3/4 whatsup-img" />
//         </div>
//       </div>
//         </div>
//     </>
//   );
// };

// export default Design;

"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/ui/footer";
import DesignCarousel, {
  DesignCarousel3,
} from "../designanddevelopment/designcarousel";
import "./designui.css";

const Design = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const [hover, setHover] = useState(false);
  const content = "Travel with Us";

  const [hovered, setHovered] = useState(false);
  const contents = "Make a call";

  const [isHovered, setIsHovered] = useState(false);
  const contentt = "Email Us";

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");

        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });

          scrollerInner.addEventListener("mouseenter", () => {
            scrollerInner.style.animationPlayState = "running";
          });
          scrollerInner.addEventListener("mouseleave", () => {
            scrollerInner.style.animationPlayState = "running";
          });
        }
      });
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Home-icon section */}
        <div className="main-header-container">
          <div className="relative main-header-container">
            {/* Top-left corner */}
            <img
              src="/images/Home-icons/Group 690.png"
              alt="Home-icon-1"
              className="absolute lg:top-16 lg:left-56 md:top-5 md:left-36  sm:top-3 sm:left-28  w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-1"
            />

            {/* Top-right corner */}
            <img
              src="/images/Home-icons/Group 688.png"
              alt="Home-icon-2"
              className="absolute lg:top-16 lg:right-56  md:top-5 md:right-36  sm:top-3 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-2"
            />

            {/* Bottom-left corner */}
            <img
              src="/images/Home-icons/Group 687.png"
              alt="Home-icon-3"
              className="absolute lg:bottom-20 lg:top:20 lg:left-80 md:bottom-10 md:top:20 md:left-56 sm:bottom-3 sm:top:20 sm:left-44 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-3"
            />

            {/* Bottom-right corner */}
            <img
              src="/images/Home-icons/Group.png"
              alt="Home-icon-4"
              className="absolute lg:bottom-20 lg:right-80 md:bottom-10 md:right-56 sm:bottom-3 sm:right-44 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-4"
            />

            {/* header container */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-24 text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Design and Branding
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 mx-4 md:mx-12 lg:mx-24">
                Creating seamless and engaging user experiences, along with
                innovative and impactful design solutions, to enhance your
                brand's visual identity and digital engagement.
              </p>
              {/* headerButton */}
              <div className="p-1 overflow-hidden flex justify-center md:justify-start">
                <button
                  className="mt-3 btn-btn text-center relative font-bold py-2 px-4 rounded"
                  style={{
                    border: "2px solid",
                    padding: "10px 20px",
                    borderRadius: "15px",
                    margin: "auto",
                  }}
                >
                  <div className="w-8 h-6 btn"></div>
                  <p className="relative top-0 left-0 z-2 font-semibold text-base">
                    See Portfolio
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* header Hover Cards */}
          <div className="flex flex-col items-center mt-12 px-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="w-full flex justify-center">
                <img
                  src="/images/Hover-cards/Group707.jpg"
                  alt="Hover-Card-1"
                  className="w-full max-w-xs object-cover Hover-img-1"
                />
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="/images/Hover-cards/Logo-Presentation2.jpg"
                  alt="Hover-Card-2"
                  className="w-full max-w-xs object-cover Hover-img-2 relative lg:bottom-14"
                />
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="/images/Hover-cards/image 46.png"
                  alt="Hover-Card-3"
                  className="w-full max-w-xs object-cover Hover-img-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Section */}
        <div className="service-container container mx-auto px-4 py-8 h-50 w-full">
          {/* marquee section */}
          {/* <div className="marquee-container overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">UI/UX</p>
        </div>
      </div> */}

          {/* Service header */}
          <div className="service-header mb-10 mt-5 text-center w-full">
            <h6 className="text-lg sm:text-5xl md:text-4xl lg:text-5xl font-semibold">
              Service
            </h6>
          </div>

          {/* Carousel Component */}
          <DesignCarousel3 />
        </div>

        {/* Technology and tools section */}
        <section className="w-full relative">
          {/* Technology container */}
          <div className="container my-10 flex justify-center items-center technology-container">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-8 technology-top technology-top">
              <div className="technology-content-container mt-20">
                <h6 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide leading-relaxed text-left">
                  Technology & Tools
                </h6>
                <p className="mt-2 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Loren Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </p>
              </div>

              {/* Technology image container */}
              <div className="flex flex-col items-center mx-auto max-w-xs lg:max-w-sm">
                <div className="flex justify-center gap-4 mt-20">
                  <img
                    src="/images/technology-section/Group 664.png"
                    alt="technology-img-5"
                    className="w-20 h-20 lg:w-24 lg:h-24"
                  />
                  <img
                    src="/images/technology-section/Group 660.png"
                    alt="technology-img-2"
                    className="w-20 h-20 lg:w-24 lg:h-24 relative -bottom-8"
                  />
                  <img
                    src="/images/technology-section/Group 666@3x.png"
                    alt="technology-img-6"
                    className="w-20 h-20 lg:w-24 lg:h-24"
                  />
                </div>
                <div className="flex justify-center gap-4 my-12">
                  <img
                    src="/images/technology-section/Group 665.png"
                    alt="technology-img-6"
                    className="w-20 h-20 lg:w-24 lg:h-24"
                  />
                  <img
                    src="/images/technology-section/Group 667.png"
                    alt="technology-img-7"
                    className="w-20 h-20 lg:w-24 lg:h-24 relative -bottom-8"
                  />
                  <img
                    src="/images/technology-section/Group 659@2x.png"
                    alt="technology-img-1"
                    className="w-20 h-20 lg:w-24 lg:h-24"
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <img
                    src="/images/technology-section/Group 663.png"
                    alt="technology-img-4"
                    className="w-20 h-20 lg:w-24 lg:h-24"
                  />
                  <img
                    src="/images/technology-section/Group 662.png"
                    alt="technology-img-6"
                    className="w-20 h-20 lg:w-24 lg:h-24 relative -bottom-8"
                  />
                  <img
                    src="/images/technology-section/Group 661.png"
                    alt="technology-img-3"
                    className="w-20 h-20 lg:w-24 lg:h-24"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Marquee section */}
          {/* <div className="absolute top-0 left-0 w-full z-0">
            <div className="flex justify-center items-center h-16 md:h-20 lg:h-24 overflow-hidden">
              <p className="marquee-text text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest text-gray-200 whitespace-nowrap">
                Technology & Tools
              </p>
            </div>
          </div> */}
          <div
            className="Scroller marquee-container container"
            style={{ width: "100%" }}
          >
            <div
              className="scroller lex justify-center items-center h-16 md:h-20 lg:h-24 overflow-visible"
              data-speed="fast"
            >
              <div className="scroller__inner">
                <p className="marquee-section marquee-text text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest text-gray-200 whitespace-nowrap relative bottom-24 ">
                  Technology & Tools
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Partner with us section */}
      <section className="py-8">
        <div className="text-center font-extrabold my-10">
          <p className="text-2xl md:text-4xl">Partner With Us</p>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-sm md:text-base text-center tracking-tight lg:w-8/12 w-11/12 mt-3">
            We understand how hard it is for you to find the perfect development
            partners. At Huge IT Solutions,
            <span className="hidden lg:inline">
              {
                " our experts will provide the consulting you need, analyze your requirements, and deliver the best solutions tailored to your industry and needs. Let us help you achieve your digital goals. Reach out to us now for a consultation and take the first step towards a powerful online presence."
              }
            </span>
            <span className="inline lg:hidden">
              {!isReadMore ? (
                <>
                  ...{" "}
                  <button onClick={toggleReadMore} className="text-[#FF6C37]">
                    Read More
                  </button>
                </>
              ) : (
                <>
                  <span className="block lg:w-full text-center">
                    our experts will provide the consulting you need, analyze
                    your requirements, and deliver the best solutions tailored
                    to your industry and needs. Let us help you achieve your
                    digital goals. Reach out to us now for a consultation and
                    take the first step towards a powerful online presence.
                  </span>
                  <button onClick={toggleReadMore} className="text-[#FF6C37]">
                    Show Less
                  </button>
                </>
              )}
            </span>
          </p>
        </div>

        <div className="w-full flex justify-center mt-6 gap-4">
          <button
            className={`button ${hovered ? "hover" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ "--button-content": `"${contents}" ` }}
          >
            <img src="/images/phone.svg" className="hidden lg:flex -ml-3" />
          </button>
          <button
            className={`button ${isHovered ? "hover" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ "--button-content": `"${contentt}" ` }}
          >
            <img src="/images/email.svg" className="hidden lg:flex -ml-2" />
          </button>
        </div>
      </section>

      <div className="relative ">
        <div className="md:absolute bottom-0 left-0 w-full">
          <img src="/images/bg.svg" alt="bg" className="w-full" />
        </div>
        <section className="py-4 mt-16 w-full flex justify-center ">
          <div className="bg-[#FFD100] lg:w-8/12 md:w-8/12 w-11/12 h-auto md:h-48 lg:h-64 rounded-xl relative max-w-7xl flex flex-col-reverse gap-5 items-center justify-center">
            <div className="md:absolute bottom-0 lg:left-12 md:left-8 left-16 w-7/12 lg:w-96 md:w-96 sm:w-80">
              <img
                src="/images/partner.svg"
                className="w-full lg:w-full md:w-3/4 sm:w-full crm-img"
              />
            </div>
            <div className="md:absolute top-5 lg:right-22 md:right-16 right-12 text-center flex md:block flex-col justify-center">
              <p className="text-l md:text-2xl lg:text-3xl sm:text-9xl lg:ms-2 font-bold tracking-wide leading-relaxed relative lg:left-5 crm-1">
                Struggling with <br /> CRM Challenges?
              </p>

              <p className="right-12 lg:right-36 md:right-16 text-xs md:text-base lg:text-base sm:text-base sm:mt-1 text-center relative lg:left-8 md:left-1 crm-2">
                Let's solve your CRM challenges together.
              </p>
              {/* <button
                className={`button mt-3 inset-x-0${
                  hover ? "hover" : ""
                } flex flex-column justify-center text-center text-white relative lg:left-8`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ "--button-content": "${content}" ,color:"white"}}
              ></button> */}
              <button
                className={`button   relative lg:left-8 md:left-3 mt-3 ${
                  hover ? "hover" : ""
                } crm-3`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ "--button-content": `"${content}"` }}
              ></button>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <div className="fixed bottom-10 right-6">
        <div className="animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center">
          <img src="/images/whats.svg" alt="image" className="w-3/4 h-3/4" />
        </div>
      </div>
    </>
  );
};

export default Design;
