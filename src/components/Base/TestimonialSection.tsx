import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTheme } from "@/context/ThemeContext";

import {
  Star
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import user1 from "@/assets/user-img.png";
import user2 from "@/assets/user-img2.png";
import user3 from "@/assets/user-img3.png";
import user4 from "@/assets/user-img4.png";
import user5 from "@/assets/user-img5.png";
import user6 from "@/assets/user-img6.png";

import bgPattern from "@/assets/testimonials-bg.webp";

const testimonials = [
  {
    image: user1,
    name: "Ashutosh Bhadoriya",
    role: "Prospective Co-owner",
    review:
      "From onboarding to payouts, everything is seamless. House of FRAC truly feels prospective co-owner-first. Every step was transparent and professionally managed.",
  },
  {
    image: user2,
    name: "Sarah Williams",
    role: "Asset Owner",
    review:
      "I liked the strong compliance and trustee validation. The documentation was clear and the team answered every question before participation.",
  },
  {
    image: user3,
    name: "Rahul Sharma",
    role: "Channel Partner",
    review:
      "Great platform for diversifying into commercial real estate without complexity. Clear, secure and professionally structured from beginning to end.",
  },
  {
    image: user4,
    name: "Jayesh Soni",
    role: "Investor",
    review:
      "House of FRAC combines technology with trust. It's a smart way to participate in commercial real estate opportunities across India.",
  },
  {
    image: user5,
    name: "Apeksha Pateriya",
    role: "Investor",
    review:
      "The legal structure is explained very clearly. Documentation, reporting and communication are excellent throughout the investment lifecycle.",
  },
  {
    image: user6,
    name: "Praful Patel",
    role: "Prospective Co-owner",
    review:
      "A transparent platform with excellent support. The experience has been smooth, informative and confidence-building from day one.",
  },
];

export default function TestimonialSection() {
  const {darkMode} = useTheme();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      className={`
        relative
        overflow-hidden

        py-4
        sm:py-4
        lg:py-6
        xl:py-8
        ${
      darkMode
        ? "bg-[#090909]"
        : "bg-[#F7F8FC]"
    }
  `}
    >
      {/* Background */}

      <div
        className="absolute inset-0  bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgPattern})`,
        }}
      />

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-[1750px]

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20
        "
      >
        {/* Heading */}

        <div className="mx-auto max-w-[900px] text-center">
          <h2
            className={`
              font-bold

              text-[32px]
              sm:text-[32px]
              md:text-[38px]
              lg:text-[44px]
            ${darkMode ? "text-white" : "text-black"}
`}
          >
            What our users says
          </h2>

          <p
            className={`
              mx-auto

              mt-4

              max-w-[820px]

              leading-relaxed

              text-[16px]
              sm:text-[18px]
              lg:text-[22px]
            ${darkMode ? "text-white/90" : "text-black"}
`}
          >
            Hear from prospective co-owner, asset owners, and
            channel partners who have experienced the
            House of Frac platform.
          </p>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          speed={800}
          loop={false}
         autoplay={{
  delay: 1500,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,
}}
onReachEnd={() => {
  setTimeout(() => {
    swiperRef.current?.slideTo(0, 800);
    swiperRef.current?.autoplay.start();
  }, 2500);
}}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          className="mt-12 testimonialSwiper"
        >
            {testimonials.map((item, index) => (
  <SwiperSlide key={index} className="h-auto">
    <div
      className="
        group

        flex
        h-full

        min-h-[380px]
        sm:min-h-[400px]
        lg:min-h-[420px]
        

        flex-col
        justify-between

        rounded-[28px]

        bg-[#E2E2E2]

        p-6
        sm:p-7
        lg:p-8

        transition-all
        duration-300

        
      "
    >
      {/* Top */}

      <div>
        {/* Rating */}

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-[#F7B500] text-[#F7B500]"
            />
          ))}
        </div>

        {/* Review */}

        <p
          className="
            mt-10

            text-[#333333]

            leading-8

            text-[15px]
            sm:text-[16px]
            lg:text-[17px]
          "
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 6,
            overflow: "hidden",
          }}
        >
          {item.review}
        </p>
      </div>

      {/* Bottom */}

      <div className="mt-10 flex items-center gap-4">
        {/* User Image */}

        <img
          src={item.image}
          alt={item.name}
          className="
            h-13
            w-13

            rounded-full

            object-cover

            border-2
            border-white

            shadow-md
          "
        />

        {/* User Info */}

        <div>
          <h4
            className="
              font-semibold

              text-[#1F2937]

              text-[16px]
              sm:text-[17px]
            "
          >
            {item.name}
          </h4>

        </div>
      </div>
    </div>
  </SwiperSlide>
))}
                </Swiper>

        {/* Custom Pagination Style */}

        <style>{`
          .testimonialSwiper{
            padding-bottom:70px;
          }

          .testimonialSwiper .swiper-pagination{
            bottom:0 !important;
          }

          .testimonialSwiper .swiper-pagination-bullet{
            width:12px;
            height:12px;
            background:#477cb5;
            opacity:1;
            transition:.3s;
           
}
            margin:0 4px !important;
          }

          .testimonialSwiper .swiper-pagination-bullet-active{
            width:12px;
            height:12px;

            border-radius:999px;
            background:#5B9CF4;
           
}
          }
        `}</style>
      </div>
    </section>
  );
}