import {motion} from "framer-motion";
import type { Variants } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Home from '@/assets/Home-img.jpg'
import Mall from '@/assets/Mall-img.jpg'

const assets = [
  {
    id: 1,
    title: "Horizon Industrial Logistics Hub",
    location: "Ahmedabad, Gujarat",
    image:  Mall ,
    marketValue: "₹52,00,00,000",
    netIncome: "₹2,54,00,000",
    appreciation: "6%",
  },
  {
    id: 2,
    title: "Business park 2",
    location: "Bhopal, Madhya Pradesh",
    image:
      Home,
    marketValue: "₹1,80,00,000",
    netIncome: "₹11,40,000",
    appreciation: "6.5%",
  },
  {
    id: 3,
    title: "IronGate Industrial Business Park",
    location: "Asarganj, Bihar",
    image:
      Mall,
    marketValue: "₹69,00,00,000",
    netIncome: "₹5,52,00,000",
    appreciation: "10%",
  },
];

const CommunitySection = () => {
  const {darkMode}  = useTheme();

  const fadeUp : Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "linear",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "linear",
    },
  },
};
  return (
<section
  className="
    w-full
    bg-[#071727]

    py-12
    sm:py-12
    md:py-14
    lg:py-16
    xl:py-20
    2xl:py-24
  "
>      
<div
  className="
    mx-auto

    w-full
    max-w-[1600px]

    px-4
    sm:px-6
    md:px-8
    lg:px-10
    xl:px-14
    2xl:px-20
  "
>
        {/* Heading */}
<motion.div
  className="mx-auto max-w-4xl text-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>   
       <motion.h2
        variants={fadeUp}
            className="
               font-bold
    text-white
    tracking-tight

    text-[30px]
    sm:text-[30px]
    md:text-[35px]
    lg:text-[40px]
    xl:text-[45px]

    leading-tight
            "
          >
            House of Frac Community
          </motion.h2>

          <motion.p 
          variants={fadeUp}
          transition={{
          delay: 0.2,
          duration: 0.7,
  }}
            className="
              mx-auto

    mt-3

    max-w-[900px]

    text-[#B8C3D4]

    leading-relaxed

    text-[16px]
    sm:text-[16px]
    md:text-[18px]
    lg:text-[22px]
            "
          >
            Join exclusive groups to connect with asset owners, exchange
            market insights, and stay updated on curated real estate
            opportunities across India.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
        variants={staggerContainer}
initial="hidden"
whileInView="visible"
viewport={{
  once: true,
  amount: 0.2,
}}
          className="
            mt-16

    grid

    grid-cols-1
    sm:grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3

    gap-7
    xl:gap-8
    2xl:gap-10
          "
        >
          {assets.map((asset) => (
  <motion.div
    key={asset.id}
    variants={cardAnimation}
    className={`
      group
      flex
      flex-col
      h-full
      min-h-[520px]
      sm:min-h-[520px]
      lg:min-h-[580px]

      overflow-hidden
      rounded-[24px]
      xl:rounded-[28px]


      shadow-lg
      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-[#4F81BD]
      hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
    ${
darkMode
? "bg-black"
: "bg-[#2f3f4e] shadow-xl border border-[#2f3f4e]"
}
`}
  >
    {/* Image */}
    <div className="p-4">
      <img
        src={asset.image}
        alt={asset.title}
        className="
          w-full
          h-[100px]
          sm:h-[100px]
          md:h-[130px]
          lg:h-[150px]
          xl:h-[180px]

          rounded-2xl
          object-cover
        "
      />
    </div>

    {/* Content */}
    <div className="flex flex-1 flex-col px-5 pb-6">

      {/* Title */}
      <h3
        className="
          min-h-[72px]
          lg:min-h-[88px]

          text-white
          font-semibold

          text-[16px]
          sm:text-[16px]
          lg:text-[18px]
          xl:text-[22px]

          leading-tight
        "
      >
        {asset.title}
      </h3>

      {/* Location */}
      <div className="flex items-center justify-between gap-4 pb-2">

        <span
          className="
            text-[#9FB2C8]
            text-sm
            lg:text-base
          "
        >
          Location
        </span>

        <span
          className="
            text-right
            text-white

            text-sm
            sm:text-sm
            lg:text-base
          "
        >
          {asset.location}
        </span>

      </div>

      {/* Stats */}
      <div
        className={`
          mt-3

          rounded-2xl
          p-4
        
${
darkMode
? "bg-[#101010]"
: "bg-[#2f3f4e] shadow-xl border border-gray-600"
}
`}
      >
        <div className="grid grid-cols-3">

          {/* Market Value */}
          <div className="border-r border-[#2D2D2D]  text-center">

            <p className="text-[#9FB2C8] text-[11px] sm:text-xs lg:text-sm">
              Market Value
            </p>

            <h4
              className="
                mt-3

                break-words

                text-white
                font-semibold

                text-[13px]
                sm:text-[14px]
                lg:text-base
              "
            >
              {asset.marketValue}
            </h4>

          </div>

          {/* Net Income */}
          <div className="border-r border-[#2D2D2D] px-2 text-center">

            <p className="text-[#9FB2C8] text-[11px] sm:text-xs lg:text-sm">
              Net Income
            </p>

            <h4
              className="
                mt-3

                break-words

                text-white
                font-semibold

                text-[13px]
                sm:text-[14px]
                lg:text-base
              "
            >
              {asset.netIncome}
            </h4>

          </div>

          {/* Appreciation */}
          <div className="px-2 text-center">

            <p className="text-[#9FB2C8] text-[11px] sm:text-xs lg:text-sm">
              Appreciation
            </p>

            <h4
              className="
                mt-3

                font-bold

                text-[#00E676]

                text-[14px]
                sm:text-[17px]
                lg:text-[22px]
              "
            >
              {asset.appreciation}
            </h4>

          </div>

        </div>
      </div>

      {/* Button */}
      <div className="mt-auto">

        <button
          className="
            w-full

            h-12
            sm:h-14
            lg:h-16

            rounded-xl

            bg-[#5B9CF3]

            text-white

            font-semibold

            text-base
            sm:text-lg
            lg:text-xl

            transition-all
            duration-300

            hover:bg-[#4A89DF]
          "
        >
          Interested
        </button>

      </div>

    </div>
  </motion.div>
))}
 
        </motion.div>
        {/* See More Assets Button */}
<motion.div
initial={{
  opacity: 0,
  y: 50,
}}
whileInView={{
  opacity: 1,
  y: 0,
}}
transition={{
  duration: 0.8,
  delay: 0.4,
}}
viewport={{
  once: true,
}}
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

      bg-[#5B9CF3]

      px-8
      py-4

      sm:px-6
      sm:py-4

      lg:px-10
      lg:py-5

      text-[16px]
      sm:text-[16px]
      lg:text-[18px]

      font-semibold
      text-white

      transition-all
      duration-300

      hover:bg-[#4A89DF]
      hover:scale-105
    "
  >
    See More Assets

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="
        h-5
        w-5

        lg:h-7
        lg:w-7

        transition-transform
        duration-300

        group-hover:translate-x-1
      "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  </button>
</motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;