import { motion, useInView, animate } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

import "swiper/css";
import "swiper/css/pagination";


function CountUp({
  end,
  suffix = "",
  decimals = 0,
}: {
  end: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration: 2,
      onUpdate(latest) {
        setValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

 const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.8,
      ease: "linear",
    },
  }),
};

const RealEstate = () => {
 const { darkMode } = useTheme();

    const cards = [
  {
    title: "Prospective Co-Owner",
    description:
      "Participation opportunities with professional asset presentation, documentation, and defined risk disclosures.",
  },
  {
    title: "Asset Owner",
    description:
      "Structure your property and present it to a verified prospective co-owner network. Access capital without selling outright.",
  },
  {
    title: "Channel Partner",
    description:
      "Collaborate with House of Frac as a broker, wealth advisor, or consultant. Connect prospective co-owners with quality assets.",
  },
];
  return ( <>
    <section className=" relative
    w-full
    min-h-screen
    overflow-hidden
    bg-black">

      {/* Background Video */}
      <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-center
    pointer-events-none
    select-none
  "
>
  <source
    src="https://staging-api.houseoffrac.com/storage/hof.mp4"
    type="video/mp4"
  />
</video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Hero */}
      <div
  className="
    relative
    z-10
    mx-auto
    flex
    w-full
    max-w-[1440px]
    min-h-screen
    flex-col
    items-center
    justify-center

    px-4
    sm:px-6
    md:px-10
    lg:px-16
    xl:px-20

    pt-24
    sm:pt-28
    md:pt-32
    lg:pt-36

    pb-16
    sm:pb-20
    md:pb-24
    lg:pb-32
  "
>

        {/* Heading */}
        <div
          className="
          mx-auto
          max-w-6xl
          text-center
          "
        >
          <h1
            className="
            font-black
            uppercase
            leading-tight
            tracking-tight
            text-white

            text-[36px]
            sm:text-[38px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[56px]
            "
          >
            OWN REAL ESTATE.
            <br />
            IN STRUCTURAL CO-OWNERSHIP
          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-5xl
            text-center
            leading-relaxed
            text-white/95

            text-[16px]
            sm:text-[18px]
            md:text-[20px]
            lg:text-[24px]
            "
          >
            Discover structured, professionally vetted real estate
            participation opportunities—accessible, transparent, and backed
            by clear legal documentation.
          </p>
        </div>


      <div
  className="
    relative
    z-20
    mt-16
    w-full
    max-w-[1320px]
    mx-auto

    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3

    gap-6
    xl:gap-8
  "
>
  {cards.map((card, index) => (
   <motion.div
  key={card.title}
  custom={index}
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.2,
  }}
      className="
        group
        relative

        flex
        flex-col

        rounded-[32px]
        bg-white

        p-6
        sm:p-7
        lg:p-8

        min-h-[300px]
        sm:min-h-[300px]
        lg:min-h-[350px]

        shadow-[0_20px_40px_rgba(0,0,0,0.18)]
        

        hover:-translate-y-2
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]
      "
    >
      {/* Circle */}
     <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FA]">
  <div
    className="
      h-3
      w-3
      rounded-full

      bg-[#C9D3DF]

      group-hover:bg-[#4178CB]

      transition-all
      duration-300
    "
  />
</div>

      {/* Title */}
      <h3
  className="
    pr-12
    font-bold
    leading-tight
    text-[26px]
    lg:text-[32px]

    text-[#13233D]
    group-hover:text-[#4178CB]

    transition-colors
    duration-300
  "
>
  {card.title}
</h3>

      {/* Description */}
      <p
        className="
          mt-6
          flex-1

          text-[#566274]

          text-base
          sm:text-lg

          leading-8
        "
      >
        {card.description}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          className="
            h-12
            lg:h-14

            sm:w-[120px]

            rounded-xl

            bg-[#0F1E36]

            text-white
            font-semibold

            transition
            hover:bg-[#4178CB]
          "
        >
          Sign In
        </button>

        <button
          className="
            flex-1

            h-12
            lg:h-14

            rounded-xl

            border
            border-[#BCD0EC]

            text-[#4178CB]
            font-semibold

            flex
            items-center
            justify-center
            gap-2

            transition
            hover:bg-[#4178CB]
            hover:text-white
          "
        >
          Know More
          <span>→</span>
        </button>
      </div>
    </motion.div>
  ))}
</div>

      </div>

    </section>
    {/* =========================
      Statistics Section
========================= */}
<motion.section
  className={`w-full  ${
      darkMode
        ? "bg-[#090909]"
        : "bg-[#F7F8FC]"
    }
  `}
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  viewport={{
    once: true,
  }}
>
    <div
    className="
      mx-auto
      max-w-[1440px]
      px-5
      sm:px-8
      lg:px-10
      xl:px-16
      py-10
      md:py-14

    "
  >
    <div
      className={`
        grid
        grid-cols-2
        lg:grid-cols-4
        divide-y
        lg:divide-y-0
        lg:divide-x
      ${darkMode ? "text-white" : "text-[#13233D]"}
`}
    >
      {/* Item 1 */}
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <h2
          className={`
            font-bold
            text-[24px]
            sm:text-[32px]
            lg:text-[38px]
            ${darkMode ? "text-white" : "text-[#060e1a]"}
`}
          
        >
          <CountUp end={5} suffix="Cr+" />
        </h2>

        <p
          className={`
            mt-3
            font-semibold
            text-base
            sm:text-lg
            lg:text-[20px]
          
${darkMode ? "text-white/90" : "text-[#060e1a]"}
`}
        >
          Assets Facilitated
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <h2
          className={`
            font-bold
            text-[24px]
            sm:text-[32px]
            lg:text-[38pxpx]
          
${darkMode ? "text-white" : "text-[#060e1a]"}
`}
        >
          <CountUp end={50000} suffix="+" />
        </h2>

        <p
          className={`
            mt-3
            font-semibold
            text-base
            sm:text-lg
            lg:text-[20px]
          
${darkMode ? "text-white/90" : "text-[#060e1a]"}
`}
        >
          Registered & Verified Users
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <h2
          className={`
            font-bold
            text-[24px]
            sm:text-[32px]
            lg:text-[38px]
          ${darkMode ? "text-white" : "text-[#060e1a]"}
`}
        >
          <CountUp end={11000} suffix="+" />
        </h2>

        <p
          className={`
            mt-3
            font-semibold
            text-base
            sm:text-lg
            lg:text-[20px]
          ${darkMode ? "text-white/90" : "text-[#060e1a]"}
`}
        >
          Listed Asset Opportunities
        </p>
      </div>

      {/* Item 4 */}
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <h2
          className={`
            font-bold
           text-[24px]
            sm:text-[32px]
            lg:text-[38px]
          
${darkMode ? "text-white" : "text-[#060e1a]"}
`}
        >
          <CountUp
  end={4.5}
  decimals={1}
/>
        </h2>

        <p
          className={`
            mt-3
            font-semibold
            text-base
            sm:text-lg
            lg:text-[20px]
          ${darkMode ? "text-white/90" : "text-[#060e1a]"}
`}
        >
          Platform Rating
        </p>
      </div>
    </div>
  </div>
</motion.section>




    </>
  );
};

export default RealEstate;