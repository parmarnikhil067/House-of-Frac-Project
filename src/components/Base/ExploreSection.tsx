import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Explorebg from '@/assets/cta-bg.webp'
import { useTheme } from "@/context/ThemeContext";

import buildingImg from "@/assets/cta-building.webp"; // Replace with your building image

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const imageVariant = {
  hidden: {
    opacity: 0,
    x: 140,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const chips = [
  "Invest",
  "List Your Property",
  "Become A Channel Partner",
];

export default function ExploreSection() {
  const {darkMode} = useTheme();
  return (
    <section className={`relative overflow-hidden ${
      darkMode
        ? "bg-[#090909]"
        : "bg-[#F7F8FC]"
    }
  `}>

      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
         style={{
    backgroundImage: `url(${Explorebg})`,
  }}
      />

      
      {/* Main Container */}

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-[1700px]

          px-5
          sm:px-5
          md:px-6
          lg:px-8
          xl:px-10

        "
      >
        <div
          className="
            grid

            items-center

            gap-14

            lg:grid-cols-2

            lg:gap-10

            xl:gap-20
          "
        >

          {/* LEFT SIDE */}

         <div
  className="order-1 lg:order-1"
>

            {/* Chips */}

            <div
              className="
                mb-4

                flex

                flex-wrap

                gap-3
              "
            >
              {chips.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full

                    bg-[#785d21]

                    px-5
                    py-3

                    text-sm
                    sm:text-base

                    font-semibold

                    text-white

                    transition-all
                    duration-300

                    hover:bg-[#C18B18]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
                        {/* Heading */}

            <h1
              className={`
                max-w-[760px]

                font-bold

                leading-[1.1]

                tracking-[-0.02em]

                text-[24px]
                sm:text-[24px]
                md:text-[27px]
                lg:text-[32px]
                xl:text-[37px]
                2xl:text-[39px]

              ${darkMode ? "text-white" : "text-black"}
`}
            >
              Start Building Real Estate Ownership Today
            </h1>

            {/* Description */}

            <p
              className={`
                mt-8

                max-w-[700px]

                leading-relaxed

                text-[16px]
                sm:text-[16px]
                md:text-[18px]
                lg:text-[20px]
                xl:text-[22px]
              
               ${darkMode ? "text-[#f2f2f2]" : "text-[#4B5563]"}
               `}
            >
              Step into a smarter way of owning commercial real estate in India
              through SM REITs—where real, income-generating assets meet
              transparency and regulatory discipline. Invest with confidence,
              earn predictable returns, and be part of India's next-generation
              real estate growth story.
            </p>

            {/*Button */}

            <div
              className="mt-10"
            >
              <button
                className="
                  group

                  inline-flex

                  items-center

                  justify-center

                  gap-4

                  rounded-2xl

                  bg-[#4582d8]

                  px-8
                  py-4

                  sm:px-8

                  lg:px-10

                  text-[18px]
                  sm:text-[20px]

                  font-semibold

                  text-white

                  shadow-[0_15px_35px_rgba(91,156,244,.35)]

                  transition-all
                  duration-300

                  hover:-translate-y-1

                  hover:bg-[#6BA6F5]
                "
              >
                Explore Assets

                <ArrowRight
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-2
                  "
                  size={24}
                />
              </button>
            </div>

          </div>

          {/* ===========================
              RIGHT SIDE
          =========================== */}

          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

            className="
              order-2
              lg:order-2

              relative

              flex

              items-end
              justify-center
              lg:justify-end

                mt-10
                lg:mt-0

              min-h-[420px]
              sm:min-h-[520px]
              md:min-h-[620px]
              lg:min-h-[760px]
              xl:min-h-[860px]
            "
          >
                        {/* Decorative Glow */}

            <div
              className="
                absolute

                right-[5%]
                top-[8%]

                h-[220px]
                w-[220px]

                rounded-full

                bg-[#2F67E5]

                opacity-20

                blur-[120px]
              "
            />

            {/* Building Image */}

           <motion.img
  src={buildingImg}
  alt="Commercial Building"
  initial={{
    opacity: 0,
    y: 120,        // Start below
    scale: 0.95,
  }}
  whileInView={{
    opacity: 1,
    y: 0,          // Move to original position
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 1,
    delay: 0.3,
    ease: "easeOut",
  }}
  whileHover={{
    y: -15,        // Lift on hover
    scale: 1.04,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  }}
  className="
    relative
    z-20

    w-full
    max-w-[260px]
    sm:max-w-[340px]
    md:max-w-[450px]
    lg:max-w-[560px]
    xl:max-w-[680px]
    2xl:max-w-[760px]

    h-auto
    object-contain

    cursor-pointer
    
    drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]
  "
/>
            {/* Bottom Shadow */}

            <div
              className="
                absolute

                bottom-0
                left-1/2

                -translate-x-1/2

                h-12
                w-[70%]

                rounded-full

                bg-black/40

                blur-2xl
              "
            />

          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient */}

      <div
        className="
          absolute
          bottom-0
          left-0

          h-28
          w-full

          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />
          </section>
  );
}
        