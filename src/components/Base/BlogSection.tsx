import { ArrowRight} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useTheme } from "@/context/ThemeContext";

import "swiper/css";

import { useRef } from "react";

import blog1 from "@/assets/blog-img1.png";
import blog2 from "@/assets/blog-img2.png";
import blog3 from "@/assets/blog-img3.png";
import blog4 from "@/assets/blog-img1.png";
import blog5 from "@/assets/blog-img2.png";
import blog6 from "@/assets/blog-img3.png";


const blogs = [
  {
    image: blog1,
    date: "19/09/2025",
     time: "4:30 min",
    title:
      "What Is Structural Co-ownership Real Estate Participation and How Does It Work in India?",
    description:
      "A beginner-friendly overview of how structured real estate participation works, what SPVs are, and why this model is gaining traction among Indian prospective co-owners. If you are new to the concept, this is the right place to start.",
  },
  {
    image: blog2,
    date: "02/10/2025",
     time: "5:39 min",
    title:
      "How SPV-Based Co-Ownership Works: A Plain-Language Guide",
    description:
      "Break down the mechanics of a Special Purpose Vehicle, what it holds, how rights are defined, and what it means for your participation in practical terms. No legal jargon, just a clear explanation.",
  },
  {
    image: blog3,
    date: "04/04/2026",
     time: "12:30 min",
    title:
      "What to Check Before Participating in a Structured Real Estate Opportunity",
    description:
      "A practical checklist of the documents, disclosures and due diligence steps every prospective co-owner should review before making a participation decision.",
  },
  {
    image: blog4,
    date: "03/12/2025",
     time: "5:34 min",
    title:
      "How House of Frac Verifies Assets Before They Are Listed",
    description:
      "An inside look at the documentation, review and verification process that every asset goes through before it becomes available to prospective co-owners.",
  },
  {
    image: blog5,
    date: "19/01/2026",
     time: "2:35 min",
    title:
      "KYC, AML, and Why They Matter for Structured Real Estate Platforms",
    description:
      "Understand why identity verification and anti-money laundering compliance are foundational to a trustworthy structured participation ecosystem.",
  },
  {
    image: blog6,
    date: "22/02/2026",
     time: "5:30 min",
    title:
      "What Are the Exit Options in Structured Real Estate Participation?",
    description:
      "A clear explanation of the exit mechanisms typically available to SPV participants including share transfers and shareholder-approved exits.",
  },
];

export default function BlogSection() {
  const {darkMode} = useTheme();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      className={`
        w-full
        overflow-hidden

        py-16
        sm:py-20
        lg:py-24
        xl:py-28
       ${
      darkMode
        ? "bg-[#090909]"
        : "bg-[#F7F8FC]"
    }
  `}
    >
      <div
        className="
          mx-auto

          w-full
          max-w-[1700px]

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20
        "
      >
                <div className="mx-auto max-w-[900px] text-center">

          <h2
            className={`
              font-bold

              leading-tight

              text-[30px]
              sm:text-[34px]
              md:text-[40px]
              lg:text-[48px]
              xl:text-[54px]
            ${darkMode ? "text-white" : "text-[#13233D]"}
`}
          >
            Our Blogs
          </h2>

          <p
            className={`
              mx-auto

              mt-5

              max-w-[850px]

              leading-relaxed

              text-[16px]
              sm:text-[18px]
              lg:text-[21px]
            ${darkMode ? "text-white/90" : "text-[#4B5563]"}
`}
          >
            Insights, education and updates from the House of Frac team —
            helping you participate in commercial real estate with clarity
            and confidence.
          </p>

        </div>
                <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
          speed={900}
          loop={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onReachEnd={() => {
            setTimeout(() => {
              swiperRef.current?.slideTo(0, 800);
              swiperRef.current?.autoplay.start();
            }, 3500);
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
              slidesPerView: 3,
            },
          }}
          className="mt-16"
        >
            {blogs.map((blog, index) => (
  <SwiperSlide key={index} className="h-auto flex">
    <div
  className="
    group

    flex
    h-full
     min-h-[420px]
  sm:min-h-[420px]
  lg:min-h-[480px]

    flex-col

    overflow-hidden

    rounded-tr-[28px] rounded-bl-[28px]


    bg-white/90

    transition-all
    duration-300

    hover:-translate-y-2
    hover:shadow-[0_18px_40px_rgba(0,0,0,.12)]
  "
>
      {/* Image */}

      <div
        className="
          overflow-hidden

          rounded-t-[28px]

          h-[210px]
          sm:h-[240px]
          md:h-[230px]
          lg:h-[250px]
          xl:h-[270px]
        "
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="
            h-full
            w-full

            object-cover

            
          "
        />
      </div>

      {/* Content */}

      <div
        className="
          flex
          flex-1
          flex-col

          p-5
          sm:p-6
          lg:p-7
        "
      >

        {/* Date */}

        <div
          className="
            flex
            items-center
            gap-3

            text-[#070708]

            text-[13px]
            sm:text-[14px]
            lg:text-[15px]
          "
        >
          <span>{blog.date}</span>
    <span>{blog.time}</span>
  </div>
       

        {/* Title */}

        <h3
          className="
            mt-3

            min-h-[40px]
            lg:min-h-[50px]

            
            font-bold 
            
            leading-tight

            text-black/90

            text-[20px]
            sm:text-[20px]
            lg:text-[24px]
             overflow-hidden
          "
            
        >
          {blog.title.length > 20
    ? blog.title.slice(0, 20) + "..."
    : blog.title}
        </h3>

        {/* Description */}

        <p
  className="
    flex-1
    text-[#070708]
    leading-7
    text-[15px]
    sm:text-[17px]
  "
  
>
  {blog.description.length > 120
    ? blog.description.slice(0, 120) + "..."
    : blog.description}
</p>
      </div>
    </div>
  </SwiperSlide>
))}
                </Swiper>

        {/* See More Button */}

        <div
          className="
            mt-12
            sm:mt-14
            lg:mt-16

            flex
            justify-center
          "
        >
          <button
            className="
              group

              inline-flex
              items-center
              justify-center

              gap-3

              rounded-2xl

              bg-[#5B9CF4]

              px-8
              py-4

              sm:px-10
              sm:py-4

              lg:px-12
              lg:py-5

              text-[16px]
              sm:text-[18px]
              lg:text-[20px]

              font-semibold

              text-white

              transition-all
              duration-300

              hover:bg-[#4B8CF0]
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_rgba(91,156,244,.35)]
            "
          >
            See More Blogs

            <ArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
              size={22}
            />
          </button>
        </div>

      </div>
    </section>
  );
}