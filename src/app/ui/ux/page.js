"use client";
import React from "react";
import { useState, useRef } from "react";
import Navbar from "@/components/ui/navbar";
import { DesignCarousel2 } from "@/app/designanddevelopment/designcarousel";
import postcss from "postcss";
import MapWrapper from "./mapwrapper";
import { ResponsiveSection } from "./carouselui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/custom/customTab";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Footer from "@/components/ui/footer";
import { FaCircleChevronLeft } from "react-icons/fa";
import "./uiux.css";
import RotatingText from "./Text";
import BeforeAfterSlider from "./beforeafter";

export default function UiUxDesign() {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const images = [
    {
      logoSrc: "/images/response.svg",
      title: "Responsiveness",
      content:
        "Quick, efficient responses enhance user satisfaction and streamline communication.",
    },
    {
      logoSrc: "/images/social.svg",
      title: "Social Media Integration",
      content:
        "Enhance your online presence with a modern, user-friendly website.",
    },
    {
      logoSrc: "/images/whatsapp.svg",
      title: "Whatsapp Integration",
      content:
        "Boost customer engagement with seamless WhatsApp integration for real-time communication",
    },
    {
      logoSrc: "/images/domain.svg",
      title: "Domain",
      content: "Lorem Ipsum is simply dummy text  typesetting industry.",
    },
    {
      logoSrc: "/images/server.svg",
      title: "Server",
      content: "Lorem Ipsum is simply dummy text  typesetting industry.",
    },
    {
      logoSrc: "/images/ssl.svg",
      title: "SSL",
      content: "Lorem Ipsum is simply dummy text  typesetting industry.",
    },
    {
      logoSrc: "/images/securities.svg",
      title: "Security",
      content: "Cookies , captcha, JWT",
    },
    {
      logoSrc: "/images/chatbot.svg",
      title: "Chatbot",
      content: "",
    },
    {
      logoSrc: "/images/perform.svg",
      title: "Performance",
      content: "CDN",
    },
    {
      logoSrc: "/images/speed.svg",
      title: "Speed",
      content: "",
    },
    {
      logoSrc: "",
      title: "Google Analytics",
      content: "",
    },
    {
      logoSrc: "",
      title: "Google Map",
      content: "",
    },
    {
      logoSrc: "",
      title: "Contact Form",
      content: "",
    },
    {
      logoSrc: "",
      title: "SEO",
      content: "",
    },
  ];
  const [hover, setHover] = useState(false);
  const content = "Travel with Us";

  const [hovered, setHovered] = useState(false);
  const contents = "Make a call";

  const [isHovered, setIsHovered] = useState(false);
  const contentt = "Email Us";

  const itemsPerSlide = 2;

  const groupItems = (items, itemsPerSlide) => {
    const groups = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      groups.push(items.slice(i, i + itemsPerSlide));
    }
    return groups;
  };

  const groupedItems = groupItems(images, itemsPerSlide);

  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="bg-white">
        {/* Navbar Section */}
        <Navbar style={{ height: "10%" }} />

        {/* Home section */}
        <div className="relative ">
          <img
            src="/images/Home-icons/Group 690.png"
            alt="Home-icon-5"
            className="absolute lg:top-3 lg:left-40 md:top-0 md:left-16  sm:top-1 sm:left-7  w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-5"
          />

          {/* Top-right corner */}
          <img
            src="/images/Home-icons/Group 688.png"
            alt="Home-icon-6"
            className="absolute lg:top-3 lg:right-40  md:top-2 md:right-20  sm:top-1 sm:right-7 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-6"
          />

          {/* Bottom-left corner */}
          <img
            src="/images/Home-icons/Group 687.png"
            alt="Home-icon-7"
            className="absolute lg:bottom-44  lg:left-72 md:bottom-80 md:top:20 md:left-56 sm:bottom-80 sm:top:20 sm:left-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-7"
          />

          {/* Bottom-right corner */}
          <img
            src="/images/Home-icons/Group.png"
            alt="Home-icon-8"
            className="absolute lg:bottom-44 lg:right-72 md:bottom-80 md:right-56 sm:bottom-80 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-8"
          />

          <section
            style={{ width: "100%", height: "50%", backgroundColor: "white" }}
          >
            <div
              className="flex flex-col items-center uiuxhome-container"
              style={{ backgroundColor: "#fff", width: "100%" }}
            >
              {/* Home content container */}
              <div className="uiux-header relative z-10 text-center">
                <h1 className="headings">UI/UX Design Solution</h1>
                <p className="paragraphs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="p-1 overflow-hidden flex justify-center md:justify-start">
                  <button
                    className="mt-3 btn-btn text-center relative font-bold py-2 px-4 rounded mb-16"
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
                {/* Home image container */}
                <div className="Home-image-container h-full lg:mt-10 md:mt-36 relative z-20 sm:mt-40">
                  <div className="w-full flex flex-col items-center relative">
                    {/* Image */}
                    <div className="flex justify-center relative z-10 lg:top-16 lg:right-8 md:right-8 md:bottom-8 sm:right-8 sm:bottom-8 Kindimgpos">
                      <img
                        src="/images/uiux/kind1.png"
                        alt="Kind-img"
                        className="w-full max-w-[400px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[400px] object-contain Kindimg"
                      />
                    </div>
                    {/* Text Rotate Container */}
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <section className="overflow-visible">
                        <div className="relative lg:top-24">
                          <div className="circle-text flex items-center justify-center text-rotate-container">
                            <svg
                              className="overflow-visible w-full sm:w-8 md:w-1/2 lg:w-3/4 xl:w-48"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="transparent"
                              viewBox="0 0 250.5 250.5"
                              // height={324.4}
                            >
                              <defs>
                                <path
                                  d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                                  id="wgl-path-7e10935"
                                ></path>
                              </defs>
                              <text fill="#CACACA">
                                <textPath
                                  className="text-uppercase"
                                  id="wgl-text-path-7e10935"
                                  href="#wgl-path-7e10935"
                                  startOffset="0"
                                >
                                  Innovative Interfaces Exceptional Experience
                                  &nbsp;&nbsp;Innovative Interfaces Exceptional
                                  Experience
                                </textPath>
                              </text>
                            </svg>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Service Section */}
        <DesignCarousel2 />

        {/* <RotatingText /> */}
        {/* <BeforeAfterSlider /> */}

        {/* WorkFlow section */}

        {/* <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-4 bg-white container">
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/images/workflow/Group 600.png"
              alt="Workflow-4"
              className="w-20 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
            />
            <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl">
              Requirement Gathering
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/images/workflow/Group 598.png"
              alt="Workflow-3"
              className="w-20 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
            />
            <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl">
              Research Markets and Competitors
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/images/workflow/Group 595.png"
              alt="Workflow-2"
              className="w-20 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
            />
            <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl">
              Sketch, Analyse, and Revise
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/images/workflow/Group 700.png"
              alt="Workflow-5"
              className="w-20 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
            />
            <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl">
              Design and Test Wireframes and Prototypes
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/images/workflow/Group 594.png"
              alt="Workflow-1"
              className="w-20 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
            />
            <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl">
              Develop and Implement the UI
            </p>
          </div>
        </section> */}

        <section className="lg:mb-20 mb-5">
          <div className="md:text-4xl text-2xl text-center md:py-4 font-extrabold">
            <p class="">Workflow</p>
          </div>
          <div class="w-full flex justify-center lg:mt-6  mt-4 ">
            <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-12 gap-6 lg:p-0 p-3">
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/requirement.png"
                  class="lg:w-48 lg:h-48 w-48 h-48 object-contain"
                />
                <span class="lg:mt-6 mt-3 font-semibold text-md block md:text-lg lg:text-base ">
                  Requirement Gathering
                </span>
              </div>
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/wireframe.png"
                  class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
                />
                <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                  Wireframe
                </span>
              </div>
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/develop.png"
                  class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
                />
                <span class="lg:mt-6 mt-3   font-semibold lg:text-base text-md block">
                  Development
                </span>
              </div>
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/testing.png"
                  class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
                />
                <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                  Testing
                </span>
              </div>
              <div class="flex flex-col items-center text-center">
                <img
                  src="/images/deliver.png"
                  class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
                />
                <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                  Delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Some of our work */}
        <section className="w-full py-8 px-4 md:px-8 lg:px-16">
          <div className="mb-6 text-center">
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Some of our work
            </h5>
          </div>
        </section>
        <ResponsiveSection />

        {/* Carousel section */}

        <section className="lg:py-4 py-4 bg-[#F9F9F9] mt-10 container">
          <div className="text-4xl text-center md:py-4  font-extrabold md:mb-0 mb-4">
            <p class="">Features</p>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-sm md:text-base text-center lg:w-7/12 md:w-11/12 md:mt-0 mt-2">
              Discover the essential features that make modern websites shine.
              <span className="hidden md:inline">
                {
                  " Add these to make your site look great, work smooth, and keep visitors happy."
                }
              </span>
              <span className="inline md:hidden">
                {!isReadMore && (
                  <>
                    ...{" "}
                    <button
                      onClick={toggleReadMore}
                      className="text-[#FF6C37] "
                    >
                      Read More
                    </button>
                  </>
                )}
                {isReadMore && (
                  <>
                    <span className="lg:w-full flex justify-center">
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </span>
                    <button onClick={toggleReadMore} className="text-[#FF6C37]">
                      Show Less
                    </button>
                  </>
                )}
              </span>
            </p>
          </div>

          {/* <div className="w-full flex justify-center py-10 relative">
          <Carousel
            autoPlay             
            interval={2000}     
            infiniteLoop        
            stopOnHover={false}  
            showStatus={false}   
            showThumbs={false}   
            showArrows         
            className="w-11/12 lg:max-w-5xl rounded-xl"
          >
            {groupedItems.map((group, index) => (
              <div key={index} className="flex justify-center ">
                {group.map((item, subIndex) => (
                  <div key={subIndex} className="p-1 w-full sm:w-full md:w-1/3 lg:w-1/3">
                    <div className="bg-[#FFFFFF] rounded-2xl shadow-md h-80 md:h-80 lg:h-96 xl:h-80">
                      <div className="flex flex-col items-center justify-center h-full">
                        <img src={item.logoSrc} alt={Logo ${subIndex}} className="h-32 md:h-24 lg:h-32 xl:h-24 w-auto object-contain -mt-10" />
                        <span className="lg:text-xl md:text-lg text-md font-semibold mt-2">{item.title}</span>
                        <span className="lg:text-base text-sm mt-3 text-center lg:w-11/12 w-full">{item.content}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
           <button
        onClick={handlePrevClick}
        className=" lg:flex hidden absolute left-48 top-1/2 z-10 focus:outline-none bg-[#EAEAEA] rounded-full"
      >
        <svg className="w-8 h-8 text-[#FFFFFF] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        className=" lg:flex hidden absolute right-48 top-1/2  z-10 focus:outline-none bg-[#EAEAEA] rounded-full"
      >
        <svg className="w-8 h-8 text-[#FFFFFF] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9.59 16.59L11 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
        </div> */}

          <div className="w-full flex justify-center py-10 ">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="w-11/12 lg:max-w-5xl rounded-xl "
            >
              <CarouselContent className="flex  ">
                {images.map((item, index) => (
                  <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 rounded-xl drop-shadow-sm ">
                    <div className="p-1" key={index}>
                      <Card className="bg-gray-50 rounded-2xl shadow-md">
                        <CardContent className="flex flex-col aspect-square items-center justify-center  ">
                          <img
                            src={item.logoSrc}
                            alt={`Logo ${index}`}
                            className=""
                          />
                          <span className="lg:text-xl md:text-lg text-md font-semibold mt-2">
                            {item.title}
                          </span>
                          <span className="text-sm mt-3 text-center">
                            {item.content}{" "}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="" />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section className="py-8">
          <div className="text-center font-extrabold my-10">
            <p className="text-2xl md:text-4xl">Partner With Us</p>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-sm md:text-base text-center tracking-tight lg:w-8/12 w-11/12 mt-3">
              We understand how hard it is for you to find the perfect
              development partners. At Huge IT Solutions,
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

        {/* <div className="relative ">
          <div className="md:absolute bottom-0 left-0 w-full">
            <img src="/images/bg.svg" alt="bg" className="w-full" />
          </div>
          <section className="py-4 mt-16 w-full flex justify-center ">
            <div className="bg-[#FFD100] lg:w-8/12 w-11/12 h-auto md:h-64 rounded-xl relative max-w-7xl flex flex-col-reverse gap-5 items-center justify-center">
              <div className="md:absolute bottom-0 lg:left-12 md:left-0 left-16 w-7/12 lg:w-96 md:w-80 sm:w-80">
                <img
                  src="/images/partner.svg"
                  className="w-full lg:w-1/3 md:w-1/2 sm:w-full"
                />
              </div>
              <div className="md:absolute top-5 lg:right-20 md:right-16 right-12 text-center flex md:block flex-col justify-center">
                <p className="text-l md:text-xl lg:text-3xl font-bold tracking-wide leading-relaxed">
                  Struggling with <br /> CRM Challenges?
                </p>

                <p className=" top-10 lg:top-24 right-12 lg:right-36 md:right-16 text-xs md:text-xs lg:text-xs text-center">
                  Let's solve your CRM challenges together.
                </p>
                <button
                  className={`button mt-3 inset-x-0${
                    hover ? "hover" : ""
                  } flex flex-column jsutify-center text-center`}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  style={{ "--button-content": "${content}" }}
                ></button>
              </div>
            </div>
          </section>
        </div> */}

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
      </div>
    </>
  );
}
