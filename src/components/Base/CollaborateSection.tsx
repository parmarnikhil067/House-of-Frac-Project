import { motion } from "framer-motion";

import logo from "@/assets/Logo.png";
import phoneOne from "@/assets/phone-left.webp";
import phoneTwo from "@/assets/phone-right.webp";



const CollaborateSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#071728] px-5 py-2">
      {/* Main Container */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1600px]

          px-1
          sm:px-1
          md:px-1
          lg:px-1
          xl:px-2
        "
      >
        {/* Grid */}

        <div
          className="
            grid
            items-center

            gap-14

            lg:grid-cols-2
            lg:gap-16

            xl:gap-24
          "
        >
          {/* ===========================
              LEFT SIDE
          ============================ */}

          <div
            className="flex flex-col items-start"
          >
            {/* Logo */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-xl

                bg-[#163150]

                shadow-xl
              "
            >
              <img
                src={logo}
                alt="House of Frac"
                className="h-8 w-8 object-contain"
              />
            </motion.div>

            {/* Heading */}

            <h1
              
              className="
                mt-10

                max-w-[760px]

                font-semibold

                leading-tight
                tracking-tight

                text-white/90

                text-[25px]
                sm:text-[25px]
                md:text-[34px]
                lg:text-[42px]
                xl:text-[47px]
              "
            >
              Strengthening Real Estate Professionals
            </h1>

            {/* Description */}

            <p
              className="
                mt-8

                max-w-[760px]

                leading-relaxed

                text-white/80

                text-[18px]
                sm:text-[20px]
                lg:text-[22px]
                xl:text-[22px]
              "
            >
              Partnering with House of FRAC to unlock new revenue streams
              through SM REITs while offering your clients secure,
              asset-backed commercial real estate opportunities.
            </p>

            {/* CTA Button */}

            <button
              className="
                group

                mt-10

                inline-flex
                items-center
                gap-3

                rounded-2xl

                bg-[#5B9CF3]

                px-8
                py-4

                sm:px-8
                sm:py-5

                lg:px-10

                text-base
                sm:text-lg
                lg:text-xl

                font-semibold

                text-white

                transition-all
                duration-300

                hover:bg-[#4A89DF]
              "
            >
              Collaborate With Us

            </button>
          </div>

          {/* ===========================
              RIGHT SIDE
          ============================ */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            
              className="
relative
flex
items-center
justify-center

w-full

h-[420px]
sm:h-[420px]
md:h-[520px]
lg:h-[620px]
xl:h-[720px]
2xl:h-[800px]
"
            
          >
                      

            {/* Bottom Dark Card */}
            <div
              className="
                absolute
                bottom-40

                w-[190px]
                h-[170px]

                sm:w-[190px]
                sm:h-[170px]

                md:w-[230px]
                md:h-[220px]

                lg:w-[280px]
                lg:h-[260px]

                xl:w-[390px]
                xl:h-[350px]

                rounded-[28px]

                bg-[#0B1728]
                shadow-2xl
              "
            />

            {/* Top Glow */}
            <div
              className="
                absolute
                right-12
                top-8

                h-36
                w-36

                rounded-full

                bg-[#4F81BD]/20

                blur-[110px]
              "
            />

            {/* Bottom Glow */}
            <div
              className="
                absolute
                left-10
                bottom-6

                h-44
                w-44

                rounded-full

                bg-[#2859C8]/20

                blur-[120px]
              "
            />

            {/* Floating Phones */}
            <div
  className="
    absolute
    inset-0

    flex
    items-center
    justify-center
  "
>
  {/* Left Phone */}

  <motion.img
    src={phoneOne}
    alt="Left Phone"

    initial={{
      opacity: 0,
      x: -100,
      rotate: -18,
    }}

    whileInView={{
      opacity: 1,
      x: 0,
      rotate: -14,
       scale: 1,
    }}
     whileHover={{
    y: -20,
    rotate: -16,
    scale: 1.03,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  }}

    transition={{
      duration: 1,
      delay: .2,
    }}

    className="
      absolute

      left-1/2
      top-1/2

      -translate-x-[75%]
      -translate-y-[55%]

      z-20

      w-[140px]
      sm:w-[140px]
      md:w-[170px]
      lg:w-[200px]
      xl:w-[240px]
      2xl:w-[270px]

      object-contain

    cursor-pointer
    drop-shadow-[0_35px_60px_rgba(0,0,0,.45)]
    "
  />

  {/* Right Phone */}

  <motion.img
    src={phoneTwo}
    alt="Right Phone"

    initial={{
      opacity: 0,
      x: 100,
      rotate: 15,
    }}

    whileInView={{
      opacity: 1,
      x: 0,
      rotate: 6,
      scale:1,
    }}
     whileHover={{
    y: -20,
    rotate: 12,
    scale: 1.03,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  }}

    transition={{
      duration: 1,
      delay: .4,
    }}

    className="
      absolute

      left-1/2
      top-1/2

      translate-x-[20%]
      -translate-y-[45%]    

      z-30

      w-[140px]
      sm:w-[140px]
      md:w-[170px]
      lg:w-[200px]
      xl:w-[240px]
      2xl:w-[270px]

      object-contain
      cursor-pointer
    drop-shadow-[0_35px_60px_rgba(0,0,0,.45)]
    "
  />
</div>
                      </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-24
          w-full
          bg-gradient-to-t
          from-[#06111E]
          via-[#06111E]/60
          to-transparent
        "
      />
    </section>
  );
};

export default CollaborateSection;
          