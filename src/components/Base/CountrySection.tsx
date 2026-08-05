import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {useTheme} from "@/context/ThemeContext"

import signupBg from "@/assets/auth-bg-light.png";
import benefitsImage from "@/assets/signup-hero-dark.png";
import { useState } from "react";
import { COUNTRIES } from "@/constants/countries.constant";

const CountrySection = () => {
    const [countryCode, setCountryCode] = useState("");
const isDisabled = !countryCode;
const { darkMode } = useTheme();

const sectionBg = darkMode ? "bg-[#0B1624]" : "bg-[#F5F7FA]";

const cardBg = darkMode ? "bg-[#0E1826]" : "bg-white";

const headingText = darkMode ? "text-white" : "text-[#0F172A]";

const descriptionText = darkMode
  ? "text-[#8895A7]"
  : "text-[#64748B]";

const labelText = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const inputBg = darkMode
  ? "bg-[#162230]"
  : "bg-[#FFFFFF]";

const inputBorder = darkMode
  ? "border-[#243343]"
  : "border-[#D1D5DB]";

const inputText = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const placeholderText = darkMode
  ? "placeholder:text-[#728094]"
  : "placeholder:text-[#94A3B8]";

const backText = darkMode
  ? "text-white"
  : "text-[#0F172A]";
  return (
    <section
  className={`
    relative
    min-h-screen
    overflow-hidden
    ${sectionBg}

    lg:m-8
    xl:m-10

    lg:rounded-[32px]
  `}
>

      {/* Background */}

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


      {/* Main Container */}

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-[1800px]

          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-16

          py-8
          lg:py-12
        "
      >
        <div
          className="
            grid

            grid-cols-1

            xl:grid-cols-[1.15fr_0.85fr]

            gap-12
            xl:gap-16

            items-center

            min-h-[90vh]
          "
        >
          {/* ================= LEFT ================= */}

         
<div className="w-full flex flex-col items-center xl:items-start">

  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`
      text-center
      font-semibold

      text-[24px]
      sm:text-[24px]
      md:text-[26px]
      lg:text-[30px]
      xl:text-[35px]
${headingText}
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


          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              order-1
              xl:order-2

              w-full

              max-w-[760px]

              mx-auto
            "
          >
           <div
  className={`
    rounded-[28px]
    lg:rounded-[34px]

    border
    border-white/10

    ${cardBg}

    shadow-[0_30px_90px_rgba(0,0,0,0.45)]

    px-6
    sm:px-8
    md:px-10
    lg:px-12

    py-8
    sm:py-10
    lg:py-12
  `}
>
              {/* ================================= */}
              {/* Header */}
              {/* ================================= */}

              <h1
  className={`
    text-center
    font-bold
    ${headingText}

    text-[32px]
    sm:text-[34px]
    lg:text-[40px]
  `}
>
                Create Your Account
              </h1>

              <p
                className={`
                  mt-3

                  text-center

${descriptionText}
                  text-sm
                  sm:text-base
                  lg:text-[18px]
                `}
              >
                Enter your details to get started.
                It only takes a few minutes...
              </p>

              {/* ================================= */}
              {/* FORM START */}
              {/* ================================= */}

              <form className="mt-10 space-y-8">

{/* ========================================= */}
{/* Country */}
{/* ========================================= */}

<div className="space-y-3">
  <label
    htmlFor="country"
    className={`
      block

${labelText}
      font-semibold

      text-[16px]
      sm:text-[17px]
      md:text-[18px]
      lg:text-[20px]
    `}
  >
    Country <span className="text-red-500">*</span>
  </label>

  <div className="relative">

    <select
      id="country"
 value={countryCode}
  onChange={(e) => setCountryCode(e.target.value)}
      className={`
w-full

h-[54px]
sm:h-[58px]
md:h-[60px]
lg:h-[64px]

rounded-2xl

border
${inputBorder}

${inputBg}

px-5
lg:px-6

pr-14

${inputText}

${placeholderText}

text-[15px]
sm:text-[16px]
lg:text-[17px]

appearance-none

outline-none

transition-all
duration-300

focus:border-[#5B9BF3]
focus:ring-2
focus:ring-[#5B9BF3]/20
`}
    >
      <option value="" disabled>
  Select Country
</option>

{COUNTRIES.map((country) => (
  <option
    key={country.code}
    value={country.name}
  >
    {country.name}
  </option>
))}
    </select>

    {/* Arrow */}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="
        absolute

        right-5
        top-1/2

        h-5
        w-5

        -translate-y-1/2

        text-[#8B98A8]

        pointer-events-none
      "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>

  </div>

</div>

{/* ========================================= */}
{/* Referral Code */}
{/* ========================================= */}

<div className="space-y-3">

  <label
    htmlFor="referral"
    className={`
      block

${labelText}
      font-semibold

      text-[16px]
      sm:text-[17px]
      md:text-[18px]
      lg:text-[20px]
    `}
  >
    Referral Code
  </label>

  <input
    id="referral"
    type="text"
    placeholder="Enter referral code"

    className={`
w-full

h-[54px]
sm:h-[58px]
md:h-[60px]
lg:h-[64px]

rounded-2xl

border
${inputBorder}

${inputBg}

px-5
lg:px-6

${inputText}

${placeholderText}

text-[15px]
sm:text-[16px]
lg:text-[17px]

outline-none

transition-all
duration-300

focus:border-[#5B9BF3]
focus:ring-2
focus:ring-[#5B9BF3]/20
`}
  />

</div>

{/* ========================================= */}
{/* Submit Button */}
{/* ========================================= */}
<Link
  to={isDisabled ? "#" : "/create-account"}
  onClick={(e) => {
  if (isDisabled) {
    e.preventDefault();
    return;
  }

  const selected = COUNTRIES.find(
    (item) => item.name === countryCode
  );

  if (selected) {
    localStorage.setItem("selectedCountry", selected.code);
  }
}}
  className={`
    w-full

    h-[56px]
    sm:h-[60px]
    lg:h-[64px]

    rounded-2xl

    flex
    items-center
    justify-center

    font-semibold

    text-[17px]
    sm:text-[18px]
    lg:text-[20px]

    transition-all
    duration-300

    ${
      isDisabled
        ? "bg-[#374250] text-[#98A2B3] cursor-not-allowed"
        : "bg-[#5B9BF3] hover:bg-[#4A8AE6] text-white cursor-pointer"
    }
  `}
>
  Submit
</Link>
{/* ========================================= */}
{/* Back */}
{/* ========================================= */}

<div className="flex justify-center pt-2">

  <Link
    to="/signup"
    className={`
inline-flex
items-center
gap-3
pb-15

${backText}

hover:text-[#5B9BF3]

transition-all
duration-300

text-[16px]
sm:text-[18px]
lg:text-[20px]
`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>

    Back
  </Link>

</div>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CountrySection;