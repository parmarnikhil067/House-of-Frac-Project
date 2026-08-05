import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import benefitsImage from "@/assets/signup-hero-dark.png";
import bgImage from "@/assets/auth-bg-light.png";
import { useTheme } from "@/context/ThemeContext";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const [method, setMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { darkMode } = useTheme();

const pageBg = darkMode ? "bg-[#122238]" : "bg-[#F4F7FB]";

const cardBg = darkMode ? "bg-[#0F1A28]" : "bg-white";

const headingColor = darkMode ? "text-white" : "text-[#0F172A]";

const textColor = darkMode ? "text-white" : "text-[#1E293B]";

const descriptionColor = darkMode
  ? "text-[#A8AFB8]"
  : "text-[#64748B]";

const inputBg = darkMode ? "bg-[#1B2735]" : "bg-white";

const inputBorder = darkMode
  ? "border-white/10"
  : "border-[#D8E1EC]";

const placeholderColor = darkMode
  ? "placeholder:text-[#6F7682]"
  : "placeholder:text-[#94A3B8]";

const toggleBg = darkMode
  ? "bg-[#1B2735]"
  : "bg-[#E8EEF7]";

const activeTab = darkMode
  ? "bg-[#101B28] text-white shadow-lg"
  : "bg-white text-[#2563EB] shadow";

const inactiveTab = darkMode
  ? "text-[#8F98A5]"
  : "text-[#64748B]";

const backColor = darkMode
  ? "text-white hover:text-[#5B9BF3]"
  : "text-[#0F172A] hover:text-[#2563EB]";

  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={`
relative
min-h-screen
m-10
rounded-4xl
overflow-hidden
${pageBg}
`}
    >
      {/* ================= Background Image================= */}

     {darkMode && (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  />
)}

      {/* ================= Main Container ================= */}

      <div
        className="
        relative
        z-10

        max-w-[1700px]
        mx-auto

        min-h-screen

        px-5
        sm:px-8
        md:px-10
        lg:px-14
        xl:px-20

        py-8
        lg:py-12

        flex
        items-center
        justify-center
        "
      >
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="
          w-full

          grid

          grid-cols-1

          lg:grid-cols-2

          gap-10
          xl:gap-16

          items-center
          "
        >
          {/* ====
                     LEFT SIDE
            ======= */}

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
      ${headingColor}

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


          {/* ======================================================
                     RIGHT SIDE
                 Forgot Password Card
          ====================================================== */}

          <section
            className="
            order-1
            lg:order-2

            flex
            justify-center
            "
          >
            <div
              className={`
              w-full

              max-w-[640px]

              rounded-[36px]

              ${cardBg}

              border
              border-white/5

              shadow-[0_30px_80px_rgba(0,0,0,0.35)]

              px-6
              sm:px-8
              md:px-10
              lg:px-12

              py-10
              lg:py-12
              `}
            >
              {/* Heading */}

              <h2
                className={`
                text-center

                ${headingColor}

                font-bold

                text-[24px]
                sm:text-[24px]
                md:text-[28px]
                lg:text-[32px]
                xl:text-[35px]

                leading-tight
                `}
              >
                Forgot Password
              </h2>

              <p
                className={`
                mt-3

                text-center

                ${descriptionColor}

                text-base
                sm:text-lg
                `}
              >
                Securely recover your account
              </p>

{/* =========================
        Email / Phone Toggle
========================= */}

<div
  className={`
    mt-10

    w-full

    rounded-full

${toggleBg}
    p-1.5

    flex
    items-center

    gap-2
  `}
>
  <button
    type="button"
    onClick={() => setMethod("email")}
    className={`
      flex-1

      h-14

      rounded-full

      flex
      items-center
      justify-center

      gap-3

      transition-all
      duration-300

      text-lg
      font-semibold

     ${
method==="email"
? activeTab
: inactiveTab
}
    `}
  >
    <Mail size={20} />
    Email
  </button>

  <button
    type="button"
    onClick={() => setMethod("phone")}
    className={`
      flex-1

      h-14

      rounded-full

      flex
      items-center
      justify-center

      gap-3

      transition-all
      duration-300

      text-lg
      font-semibold

      ${
method==="phone"
? activeTab
: inactiveTab
}
    `}
  >
    <Phone size={20} />
    Phone
  </button>
</div>

{/* =========================
            Form
========================= */}

<div className="mt-12">

  {method === "email" ? (
    <>
      <label
        className={`
          block

${textColor}
          text-xl

          font-semibold

          mb-4
        `}
      >
        Email Address
      </label>

      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       className={`
w-full
h-16
lg:h-[68px]
rounded-2xl
${inputBg}
border
${inputBorder}
px-6
${textColor}
${placeholderColor}
outline-none
transition-all
focus:border-[#5B9BF3]
focus:ring-2
focus:ring-[#5B9BF3]/20
`}
      />
      
{method === "email" && email.trim() === "" && (
  <p className="mt-3 text-sm text-red-400">
    Please enter your email address.
  </p>
)}
    </>
  ) : (
    <>
      <label
        className={`
          block

${textColor}

          text-xl

          font-semibold

          mb-4
        `}
      >
        Phone Number
      </label>

      <input
        type="tel"
        placeholder="Enter Your Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
            className={`
w-full
h-16
lg:h-[68px]
rounded-2xl
${inputBg}
border
${inputBorder}
px-6
${textColor}
${placeholderColor}
outline-none
transition-all
focus:border-[#5B9BF3]
focus:ring-2
focus:ring-[#5B9BF3]/20
`}  
      />
      
{method === "phone" && phone.trim() === "" && (
  <p className="mt-3 text-sm text-red-400">
    Please enter your phone number.
  </p>
)}
    </>
  )}

  {/* Generate OTP Button */}
<Link
  to="/create-password"
  className={`
    mt-8

    w-full

    h-16
    lg:h-[68px]

    rounded-2xl

    flex
    items-center
    justify-center

    bg-[#2D3A49]

    hover:bg-[#5B9BF3]

    transition-all
    duration-300

    text-white

    text-xl

    font-bold

    ${
      (method === "email" && !email.trim()) ||
      (method === "phone" && !phone.trim())
        ? "pointer-events-none opacity-60"
        : ""
    }

    ${darkMode
  ? "bg-[#2D3A49] hover:bg-[#5B9BF3]"
  : "bg-[#2563EB] hover:bg-[#1D4ED8]"
}
  `}
>
  Generate OTP
</Link>

</div>

{/* OTP Success */}

{loading && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="
      mt-6

      rounded-xl

      border
      border-[#5B9BF3]/40

      bg-[#5B9BF3]/10

      p-4

      text-center

      text-[#9CC3FF]
    "
  >
    Sending OTP...
  </motion.div>
)}




{/* ========== Back Button ========= */}

<Link
  type="button"
  to="/Login"
  className={`
    mt-2

    flex

    items-center
    justify-center

    gap-3

    w-full

    ${backColor}

    text-[20px]
    sm:text-[20px]
    lg:text-[22px]
    xl:text-[24px]

    hover:text-[#5B9BF3]

    transition-all
  `}
>
  <ArrowLeft size={26} />
  Back
</Link>


</div>

</section>
        </motion.div>
      </div>
         </div>
  );
};

export default ForgotPassword;