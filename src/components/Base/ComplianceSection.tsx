import buildingImg from "@/assets/building-img.webp";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import type { Variants } from "framer-motion";

import {
  Building2,
  SearchCheck,
  FileText,
  BadgeCheck,
  Users,

} from "lucide-react";

const cards = [
  {
    icon: Building2,
    title: "SPV-Based Participation Structure",
    description:
      "Prospective co-owner participation is facilitated through Special Purpose Vehicles (SPVs), ensuring legal clarity, asset segregation, and well-defined participation rights for every prospective co-owner.",
  },
  {
    icon: SearchCheck,
    title: "KYC & AML Compliant Onboarding",
    description:
      "Every prospective co-owner, asset owner, and channel partner completes mandatory KYC verification and AML screening before accessing the platform.",
  },
  {
    icon: FileText,
    title: "Document-First Approach",
    description:
      "No participation is processed without fully executed legal agreements. Every opportunity includes subscription agreements, disclosures, and transaction documents.",
  },
  {
    icon: BadgeCheck,
    title: "Independent Asset Verification",
    description:
      "Asset valuations, legal title searches, financial projections and compliance checks are independently reviewed before approval.",
  },
  {
    icon: Users,
    title: "Trustee-Monitored Framework",
    description:
      "Where applicable, assets are monitored under independent trustee oversight to protect every prospective co-owner.",
  }
];
  const fadeUp: Variants= {
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

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

export default function ComplianceSection() {
  const {darkMode} = useTheme();


const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const x = useSpring(mouseX, {
  stiffness: 120,
  damping: 18,
});

const y = useSpring(mouseY, {
  stiffness: 120,
  damping: 18,
});

const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const xPos = e.clientX - rect.left;
  const yPos = e.clientY - rect.top;

  const xPercent = xPos / rect.width;
  const yPercent = yPos / rect.height;

  // Horizontal movement
  mouseX.set((xPercent - 0.5) * 30);

  // Vertical movement
  mouseY.set((yPercent - 0.5) * 40);
};

const handleMouseLeave = () => {
  mouseX.set(0);
  mouseY.set(0);
};
  
  return (
    <section className={`w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 ${
      darkMode
        ? "bg-[#090909]"
        : "bg-[#F7F8FC]"
    }
  `}>
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Heading */}

<motion.div
  className="mx-auto max-w-6xl text-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
          <motion.h2
           variants={fadeUp}
            className={`
              font-black
              leading-[1.05]
              tracking-tight

              text-[22px]
              sm:text-[22px]
              md:text-[26px]
              lg:text-[34px]
              xl:text-[40px]
              2xl:text-[44px]
            ${darkMode ? "text-white" : "text-[#13233D]"}
`}
          >
            Built on Structure.
            
            Grounded in Compliance.
          </motion.h2>

          <motion.p
           variants={fadeUp}
            transition={{
            delay: 0.2,
            duration: 0.7,
           }}
            className={`
              mx-auto
              mt-8
              max-w-[700px]

              leading-relaxed

              text-[16px]
              sm:text-[16x]
              md:text-[16px]
              lg:text-[18px]
              
            ${darkMode ? "text-white/90" : "text-[#4B5563]"}
`}
          >
            At House of Frac, prospective co-owner protection is not a feature—
            it is the foundation. Every aspect of the platform, from onboarding
            to asset listing to distributions, is designed around structured
            processes, verified documentation and regulatory awareness.
          </motion.p>

        </motion.div>

        {/* Main Layout */}

        <div
          className="
            mt-16

            grid

            grid-cols-1

            lg:grid-cols-2

            gap-8
            lg:gap-10
            xl:gap-14
            2xl:gap-16

            items-start
          "
        >

          {/* Left Side */}

          <div className="space-y-7">
            {cards.map((card, index) => {
  const Icon = card.icon;

  return (
   <motion.div
  key={index}
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.6,
    delay: index * 0.15,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
      className="
        group
        relative
        overflow-hidden

        rounded-[24px]
        sm:rounded-[28px]
        xl:rounded-[32px]

         bg-[#F7F7F7]

        p-1
        sm:p-1
        md:p-2
        lg:p-3
        xl:p-4

        border
        border-transparent

        transition-all
        duration-500
        ease-out

        hover:bg-[#3d71d8]
        hover:border-[#4B8DFF]
        hover:shadow-[0_25px_70px_rgba(0,87,255,.25)]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          items-center
          justify-center

          w-14
          h-14

          sm:w-16
          sm:h-16

          md:w-[72px]
          md:h-[72px]

          rounded-2xl

          bg-white

          transition-all
          duration-500

          group-hover:bg-[#EAF2FF]
         "
      >
        <Icon
          className="
            w-7
            h-7

            sm:w-8
            sm:h-8

            md:w-9
            md:h-9

            text-[#111827]

            transition-all
            duration-500

            group-hover:text-[#0057FF]
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          

          font-bold

          leading-tight

          text-[#111827]

          transition-colors
          duration-500

          group-hover:text-white

          text-[16px]
          sm:text-[16px]
          md:text-[19px]
          lg:text-[22px]
          xl:text-[25px]
        "
      >
        {card.title}
      </h3>

      {/* Description */}

      <p
        className="
         

          text-[#667085]

          leading-7
          sm:leading-8

          transition-colors
          duration-500

          group-hover:text-[#EEF4FF]

          text-[12px]
          sm:text-[13px]
          md:text-[15px]
          lg:text-[17px]
        "
      >
        {card.description}
      </p>
    </motion.div>
  );
})}
 </div>

           {/* Right Side */}

<motion.div
  className="w-full flex justify-center lg:justify-end"
  variants={imageAnimation}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
>
  <div
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="
      relative
      w-full
      mt-24
      max-w-[720px]
      overflow-hidden

      rounded-[24px]
      sm:rounded-[28px]
      lg:rounded-[32px]
      xl:rounded-[36px]

      bg-[#151515]
      shadow-[0_20px_60px_rgba(0,0,0,.25)]
    "
  >
    <motion.img
      src={buildingImg}
      alt="Building"
      style={{
        x,
        y,
      }}
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        w-full
        object-cover

        h-[320px]
        sm:h-[420px]
        md:h-[560px]
        lg:h-[760px]
        xl:h-[900px]
        2xl:h-[950px]

        will-change-transform
      "
    />
  </div>
</motion.div>

        </div>

      </div>

    </section>

  );
}