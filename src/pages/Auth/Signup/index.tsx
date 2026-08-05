import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import { useTheme } from "@/context/ThemeContext";

import signupBg from "@/assets/auth-bg-light.png";
import ownerIcon from "@/assets/asset-owner.svg";
import coOwnerIcon from "@/assets/investor.svg";
import partnerIcon from "@/assets/broker.svg";
import benefitsImage from "@/assets/signup-hero-dark.png"



const roles = [
  {
    title: "Asset Owner",
    desc: "I want to split and list my property investments",
    icon: ownerIcon,
  },
  {
    title: "Prospective Co-owner",
    desc: "I want to browse and buy property Structural Co-ownership",
    icon: coOwnerIcon,
  },
  {
    title: "Partners",
    desc: "I want to earn and grow income from referrals",
    icon: partnerIcon,
  },
];

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState(0);

  const { darkMode } = useTheme();

const sectionBg = darkMode ? "bg-[#0D1C2D]" : "bg-[#F5F7FB]";

const cardBg = darkMode ? "bg-[#0E1B2B]" : "bg-white";

const headingColor = darkMode ? "text-white" : "text-[#0F172A]";

const descColor = darkMode
  ? "text-white/60"
  : "text-[#64748B]";

const inactiveCard = darkMode
  ? "bg-transparent border-white/10 hover:border-[#5B9BF3]"
  : "bg-white border-[#D7E0EA] hover:border-[#5B9BF3] shadow-sm";

const inactiveIcon = darkMode
  ? "bg-[#182738]"
  : "bg-[#EEF4FC]";

const inactiveTitle = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const inactiveDescription = darkMode
  ? "text-[#7B828C]"
  : "text-[#64748B]";



const backText = darkMode
  ? "text-white hover:text-[#5B9BF3]"
  : "text-[#0F172A] hover:text-[#2563EB]";

  return (
    <section
      className={`
      relative
      overflow-hidden
      min-h-screen
${sectionBg}
      m-10
      rounded-4xl
      `}
    >
     {/* Background Pattern */}
{darkMode && (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url(${signupBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
)}

      <div
        className="
        relative
        z-10

        max-w-[1920px]
        mx-auto

        px-4
        sm:px-6
        md:px-8
        lg:px-12
        xl:px-16

        py-8
        md:py-10
        lg:py-12
        "
      >
        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-2

          gap-10
          xl:gap-12

          items-start
          "
        >
          {/* ==== LEFT SIDE ==== */}

<div className="w-full flex flex-col items-center xl:items-start">

  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`
text-center
font-semibold
${headingColor}

text-[24px]
sm:text-[24px]
md:text-[26px]
lg:text-[30px]
xl:text-[35px]

leading-tight
mb-8
lg:mb-12
mt-12
lg:mt-22
pl-15
`}
  >
    Smart Real Estate Investment Benefits
  </motion.h2>

  <motion.img
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}

    src={benefitsImage}
    alt="Investment Benefits"

    className="
      w-full
      max-w-[760px]

      h-auto

      object-contain

      select-none
      pointer-events-none
    "
  />

</div>

{/* ================= RIGHT SIDE ================= */}

<div>
    <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className={`
    w-full
    max-w-[820px]
    mx-auto

    rounded-[32px]

${cardBg}

    border
    border-white/10

    px-5
    sm:px-8
    lg:px-10

    py-14
    lg:py-20
  `}
>
  {/* Heading */}

  <h2
    className={`
      text-center

${headingColor}

      font-semibold

      text-[30px]
      sm:text-[30px]
      lg:text-[40px]

      leading-tight
    `}
  >
    Create Your Account
  </h2>

  <p
    className={`
      mt-4

      text-center

${descColor}

      text-base
      lg:text-[20px]
    `}
  >
    Enter your details to get started.
    It only takes a few minutes...
  </p>

  {/* Role Cards */}

  <div
    className="
      mt-10

      grid

      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3

      gap-5
    "
  >
    {roles.map((role, index) => {

      const active = selectedRole === index;

      return (

        <button
          key={index}
          onClick={() => setSelectedRole(index)}
          className={`
            relative

            rounded-[22px]

            border

            transition-all
            duration-300

            p-6

            min-h-[300px]

            flex
            flex-col
            items-center
            justify-start

            ${
              active
                ? "bg-gradient-to-b from-[#4D86D9] to-[#69A7F5] border-[#6AA8F5] shadow-xl"
                : inactiveCard
            }
          `}
        >

          {/* Icon */}

          <div
            className={`
              w-24
              h-24

              rounded-3xl

              flex
              items-center
              justify-center

              ${
               active
  ? "bg-[#75A8EA]"
  : inactiveIcon
              }
            `}
          >
            <img
              src={role.icon}
              alt={role.title}
              className="
                w-14
                h-14
                object-contain
              "
            />
          </div>

          {/* Title */}

          <h3
            className={`
              mt-8

              font-bold

              text-xl

              text-center

              ${
                active
  ? "text-white"
  : inactiveTitle
              }
            `}
          >
            {role.title}
          </h3>

          {/* Description */}

          <p
            className={`
              mt-5

              text-center

              leading-8

              text-base

              ${
                active
  ? "text-white/90"
  : inactiveDescription
              }
            `}
          >
            {role.desc}
          </p>

          {/* Bottom Dot */}

          {active && (

            <div
              className={`
                absolute

                bottom-3

                w-3
                h-3

                rounded-full

${
  darkMode
    ? "bg-white"
    : "bg-black"
}              
`}
            />

          )}

        </button>

      );

    })}
  </div>

  {/* Create Button */}

  <Link
  to="/create"
  className={`
mt-10
w-full
h-16
lg:h-20
rounded-2xl
text-white
font-bold
text-xl
lg:text-2xl
flex
items-center
justify-center
transition-all

${
  darkMode
    ? "bg-[#5B9BF3] hover:bg-[#4A8AE6]"
    : "bg-[#2563EB] hover:bg-[#1D4ED8]"
}
`}
>
  Create!
</Link>

        {/* Login */}

      <div className="mt-8 text-center">
        <p
          className={`
${headingColor}
            text-lg
            md:text-xl
            lg:text-2xl
          `}
        >
          Already a member?{" "}
          <Link
  to="/login"
  className="
    text-[#3888f9]
    hover:text-[#76B2FF]
    transition-colors
    duration-300333333333333
    font-semibold
      text-lg
      md:text-xl
      lg:text-2xl
  "
>
  Login Here
</Link>
        </p>
      </div>

      {/* Back */}

      <div className="mt-8 flex justify-center">
        <Link
        to="/"
          className={`
            flex
            items-center
            gap-3

            ${backText}

            transition-all
            duration-300

            text-lg
            lg:text-2xl
          `}
        >
          <ArrowLeft size={24} />
          Back
        </Link>
      </div>
    </motion.div>
</div>

        </div>
      </div>
    </section>
  );
}