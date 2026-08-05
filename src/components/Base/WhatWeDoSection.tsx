import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import phoneLeft from "@/assets/phone-left.webp";
import phoneRight from "@/assets/phone-right.webp";


const fadeUp : Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "linear",
    },
  }),
};

export default function WhatWeDoSection() {
  const {darkMode} = useTheme();
  return (
    <section className={`w-full overflow-hidden px-5 py-2   ${
      darkMode
        ? "bg-[#090909]"
        : "bg-[#F7F8FC]"
    }
  `}
  >

      <div
        className="
          mx-auto
          max-w-[1700px]

          px-3
          sm:px-3
          md:px-4
          lg:px-6
          xl:px-8

          py-20
          lg:py-28
          xl:py-32
        "
      >
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mx-auto max-w-5xl text-center"
        >
          <h2
            className={`
              font-black

              text-[34px]
              md:text-[46px]
              lg:text-[60px]
            ${darkMode ? "text-white" : "text-black"}
`}
          >
            What we do
          </h2>

          <p
            className={`
              mt-8
              mx-auto
              max-w-5xl
              leading-[2]

              text-[16px]
              md:text-[20px]
            ${darkMode ? "text-white/90" : "text-[#4B5563]"}
`}
          >
            House of Frac is a technology-enabled platform designed to connect
            prospective co-owner with curated, professionally structured real
            estate and asset-backed participation opportunities across India.
            We bring transparency, discipline and accessibility to a space that
            has traditionally been complex, opaque and available only to
            large-ticket buyers.
          </p>
        </motion.div>

        {/* Main Layout */}
<div
  className="
    mt-24

    grid

    grid-cols-1
    lg:grid-cols-[1fr_480px_1fr]
    xl:grid-cols-[1fr_560px_1fr]

    gap-16
    lg:gap-10
    xl:gap-16

    items-center
  "
>
       
{/* =========================
        LEFT FEATURES
========================= */}

<div
  className="
    order-2
    lg:order-1

    flex
    flex-col

    gap-14
    md:gap-16
    xl:gap-24
  "
>

  {/* ================= Card 01 ================= */}

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: .3 }}
    transition={{
      duration: .8,
      ease: "easeOut",
    }}
    className="w-full"
  >

    {/* Number */}

    <h2
      className="
        text-[#4B8CF4]

        font-bold

        text-[28px]
        sm:text-[28px]
        lg:text-[34px]
        xl:text-[40px]
      "
    >
      01
    </h2>

    {/* Line */}

    <div className="mt-3 h-[1px] w-full bg-[#4B8CF4]" />

    {/* Title */}

    <h3
      className={`
        mt-4
        font-semibold

        leading-tight

        text-[26px]
        sm:text-[26px]
        lg:text-[32px]
      
${darkMode ? "text-white" : "text-black"}
`}
    >
      Structured Participation
    </h3>

    {/* Description */}

    <p
      className={`
        mt-4

        max-w-[560px]

        leading-[1.9]

        text-[16px]
        md:text-[16px]
        lg:text-[18px]
      ${darkMode ? "text-white/90" : "text-black"}
`}
    >
      Access real estate opportunities structured through legally
      defined frameworks—including SPV-based co-ownership models—
      with clear documentation, defined participation terms,
      and professional asset presentation from day one.
    </p>

  </motion.div>

  {/* ================= Card 02 ================= */}

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: .3 }}
    transition={{
      duration: .8,
      delay: .2,
      ease: "easeOut",
    }}
    className="w-full ml-5 sm:ml-5 md:ml-7 lg:ml-8 xl:ml-10"
  >

    {/* Number */}

    <h2
      className="
        text-[#4B8CF4]
        
        font-bold

        text-[28px]
        sm:text-[28px]
        lg:text-[34px]
        xl:text-[40px]
      "
    >
      02
    </h2>

    {/* Line */}

    <div className="mt-3 h-[1px] w-full bg-[#4B8CF4]" />

    {/* Title */}

    <h3
      className={`
        mt-4
        
        font-semibold

        leading-tight

        text-[26px]
        sm:text-[26px]
        lg:text-[32px]
      
${darkMode ? "text-white" : "text-black"}
`}
    >
      Verified Assets
    </h3>

    {/* Description */}

    <p
      className={`
        mt-4

        max-w-[560px]
        leading-[1.9]

       text-[16px]
        md:text-[16px]
        lg:text-[18px]
      ${darkMode ? "text-white/90" : "text-black"}
`}
    >
      Every asset listed on House of Frac undergoes documentation
      review, financial assessment, legal title verification,
      and structured preparation before being presented to our
      registered prospective co-owner base.
    </p>

  </motion.div>

</div>

{/* Center Image */}

<motion.div
  initial={{ opacity: 0, scale: .8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="
    order-1
    lg:order-2

    relative

    flex
    justify-center
    items-center

    py-10
    lg:py-0
  "
>
  {/* Blue Circle */}

  <div
    className={`
      absolute

      rounded-full

      w-[260px]
      h-[260px]

      sm:w-[340px]
      sm:h-[340px]

      md:w-[410px]
      md:h-[410px]

      lg:w-[450px]
      lg:h-[450px]

      xl:w-[550px]
      xl:h-[550px]
     ${
      darkMode
        ? "bg-[#31489C]"
        : "bg-[#4f51c070]"
    }
  `}
  />

  {/* Left Phone */}

  <motion.img
    src={phoneLeft}
    alt="phone"

    initial={{ x: 80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: .8,
      delay: .4,
    }}

    className="
      relative
      z-20

      w-[150px]
      sm:w-[190px]
      md:w-[220px]
      lg:w-[250px]
      xl:w-[300px]

      object-contain
      

      -rotate-1

      -translate-x-1
      -translate-y-5


    "
  />

  {/* Right Phone */}

  <motion.img
    src={phoneRight}
    alt="phone"

    initial={{ x: -80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: .8,
      delay: .4,
    }}

    className="
      relative
      z-30

      w-[150px]
      sm:w-[190px]
      md:w-[220px]
      lg:w-[250px]
      xl:w-[300px]

      object-contain

      -ml-12
      translate-y-10
      -rotate-1

     
    "
  />
</motion.div>
{/* =========================
        RIGHT FEATURES
========================= */}


<div
  className="
    order-3

    flex
    flex-col

    justify-between

    gap-14
    md:gap-16
    xl:gap-24

    items-start
  "
>

  {/* ================= Card 03 ================= */}

  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    className="w-full  translate-x-[-5px] lg:translate-x-[-40px]"
  >
    {/* Number */}

    <h2
      className="
        text-[#4B8CF4]
        font-bold

         text-[28px]
        sm:text-[28px]
        lg:text-[34px]
        xl:text-[40px]
      "
    >
      03
    </h2>

    {/* Line */}

    <div className="mt-3 h-[1px] w-full bg-[#4B8CF4]" />

    {/* Title */}

    <h3
      className={`
        mt-4
        font-bold
        leading-tight

        text-[26px]
        sm:text-[26px]
        lg:text-[32px]

      ${darkMode ? "text-white" : "text-black"}
`}
    >
      Transparent Records
    </h3>

    {/* Description */}

    <p
      className={`
        mt-4

        max-w-[560px]
        leading-[1.8]

         text-[16px]
        md:text-[16px]
        lg:text-[18px]
      ${darkMode ? "text-white/90" : "text-black"}
`}
    >
      Platform activity, asset documents, prospective co-owner
      participation details, and distribution records are maintained
      with full transparency and are accessible through your dedicated
      prospective co-owner dashboard at any time.
    </p>
  </motion.div>

  {/* ================= Card 04 ================= */}

  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    }}
    className="w-full ml-6"
  >
    {/* Number */}

    <h2
      className="
        text-[#4B8CF4]
        font-bold

       text-[28px]
        sm:text-[28px]
        lg:text-[34px]
        xl:text-[40px]
      "
    >
      04
    </h2>

    {/* Line */}

    <div className="mt-3 h-[1px] w-full bg-[#4B8CF4]" />

    {/* Title */}

    <h3
      className={`
        mt-4

        font-bold
        leading-tight

         text-[26px]
        sm:text-[26px]
        lg:text-[32px]
      ${darkMode ? "text-white" : "text-black"}
`}
    >
      Structured Exit Pathways
    </h3>

    {/* Description */}

    <p
      className={`
        mt-4

        max-w-[560px]
        leading-[1.8]

        text-[16px]
        md:text-[16px]
        lg:text-[18px]
      
${darkMode ? "text-white/90" : "text-black"}
`}
    >
      Where applicable, House of Frac facilitates structured exit
      mechanisms, resale opportunities, or buyback arrangements between
      members—clearly defined in each asset's legal documentation so you
      always know your options before you commit.
    </p>
  </motion.div>

</div>
</div>

</div>

</section>
  )
}