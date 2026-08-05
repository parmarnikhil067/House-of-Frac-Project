import { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

import signupBg from "@/assets/auth-bg-light.png";
import benefitsImage from "@/assets/signup-hero-dark.png";

const VerifyDetails = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { darkMode } = useTheme();

  const pageBg = darkMode ? "bg-[#0C1725]" : "bg-[#F5F7FA]";

const cardBg = darkMode ? "bg-[#101B29]" : "bg-white";

const heading = darkMode ? "text-white" : "text-[#0F172A]";

const text = darkMode ? "text-[#A3B1C2]" : "text-[#64748B]";

const otpBg = darkMode ? "bg-[#172433]" : "bg-white";

const otpBorder = darkMode ? "border-[#334252]" : "border-[#CBD5E1]";

const inputText = darkMode ? "text-white" : "text-[#0F172A]";

const resendText = darkMode
  ? "text-[#69A6FF]"
  : "text-[#2563EB]";

const backText = darkMode
  ? "text-white hover:text-[#69A6FF]"
  : "text-[#0F172A] hover:text-[#2563EB]";


const modalCard = darkMode ? "bg-[#17161B]" : "bg-[#F8FAFC]";

const modalHeading = darkMode ? "text-white" : "text-[#0F172A]";

const modalText = darkMode ? "text-[#B4B7BD]" : "text-[#64748B]";

  // =========================
  // EMAIL OTP
  // =========================
const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""]);
  
  const emailRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [emailError, setEmailError] = useState("");

  // =========================
  // MOBILE OTP
  // =========================

const [mobileOtp, setMobileOtp] = useState(["", "", "", "", "", ""]);
  

  const mobileRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [mobileError, setMobileError] = useState("");

  // =========================
  // TIMER
  // =========================

  const [timer, setTimer] = useState(78);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const minutes = Math.floor(timer / 60);

  const seconds = timer % 60;

  const formattedTime = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // =========================
  // EMAIL OTP CHANGE
  // =========================

  const handleEmailOtpChange = (
    value: string,
    index: number
  ) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...emailOtp];

    updated[index] = value;

    setEmailOtp(updated);

    if (value && index < 5) {
      emailRefs.current[index + 1]?.focus();
    }

    if (updated.every((item) => item !== "")) {
      setEmailError("");
    }
  };

  // =========================
  // MOBILE OTP CHANGE
  // =========================

  const handleMobileOtpChange = (
    value: string,
    index: number
  ) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...mobileOtp];

    updated[index] = value;

    setMobileOtp(updated);

    if (value && index < 5) {
      mobileRefs.current[index + 1]?.focus();
    }

    if (updated.every((item) => item !== "")) {
      setMobileError("");
    }
  };

  // =========================
  // BACKSPACE
  // =========================

  const handleEmailKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !emailOtp[index] &&
      index > 0
    ) {
      emailRefs.current[index - 1]?.focus();
    }
  };

  const handleMobileKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !mobileOtp[index] &&
      index > 0
    ) {
      mobileRefs.current[index - 1]?.focus();
    }
  };

  // =========================
  // RESEND OTP
  // =========================

  const handleResend = () => {
    setTimer(78);

    setEmailOtp(Array(6).fill(""));
    setMobileOtp(Array(6).fill(""));

    setEmailError("");
    setMobileError("");

    emailRefs.current[0]?.focus();
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = () => {
    let valid = true;

    if (emailOtp.join("").length !== 6) {
      setEmailError("Please enter Email OTP");
      valid = false;
    }

    if (mobileOtp.join("").length !== 6) {
      setMobileError("Please enter Mobile OTP");
      valid = false;
    }

    if (!valid) return;

     // change to your route
  };

  const disabled =
    emailOtp.join("").length !== 6 ||
    mobileOtp.join("").length !== 6;

    return (
  <section
  className={`
    relative
    min-h-screen
    overflow-hidden
    ${pageBg}
    lg:p-6
    xl:p-8
    lg:m-6
    xl:m-8
    lg:rounded-[32px]
  `}
>
    {/* Background */}
{darkMode && (
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${signupBg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
)}

    {/* Main */}

    <div
      className="
        relative
        z-10

        mx-auto

        max-w-[1850px]

        min-h-screen

        lg:min-h-[calc(100vh-48px)]

        flex
        items-center
      "
    >
      <div
        className="
          w-full

          grid

          grid-cols-1

          xl:grid-cols-[1.08fr_0.92fr]

          gap-10
          xl:gap-16

          items-center

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20

          py-10
        "
      >
        {/* ================= LEFT ================= */}

        <div
          className="
            order-2
            xl:order-1

            w-full

            flex
            flex-col

            items-center
            xl:items-start
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
              text-white

              text-center
              xl:text-left

              font-semibold
${heading}
              text-[26px]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[40px]

              leading-tight

              mb-8
              lg:mb-12
            `}
          >
            Smart Real Estate Investment Benefits
          </motion.h2>

          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src={benefitsImage}
            alt="Benefits"
            className="
              w-full

              max-w-[760px]

              h-auto

              object-contain

              pointer-events-none
              select-none
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

            flex
            justify-center
          "
        >
          <div
  className={`
    w-full
    max-w-[700px]
    rounded-[28px]
    ${cardBg}
    border
    border-white/10
    shadow-[0_25px_70px_rgba(0,0,0,.45)]
    px-6
    sm:px-8
    lg:px-10
    py-8
    lg:py-10
  `}
>
            {/* Heading */}

            <h1
              className={`${heading} text-center font-bold text-[34px] sm:text-[40px] lg:text-[48px]`}
            >
              Verify Details
            </h1>

            <p
              className={`
                mt-3

                text-center

${text}
                text-sm
                sm:text-base
                lg:text-lg
              `}
            >
              Please enter the 6-digit verification codes
              sent to your email and phone.
            </p>

{/* ===================================================== */}
{/* VERIFY EMAIL OTP */}
{/* ===================================================== */}

<div className="mt-10">

  <div className="flex items-center justify-between">

    <div>

      <h2
        className={`
${heading}
          font-semibold

          text-xl
          sm:text-2xl
          lg:text-[28px]
        `}
      >
        Verify Email
      </h2>

      <p
        className={`
          mt-2

${text}
          text-sm
          sm:text-base
          lg:text-lg
        `}
      >
        Enter the OTP sent to your email
      </p>

    </div>

    <span
      className={`
${text}
        font-semibold

        text-base
        sm:text-lg
      `}
    >
      {formattedTime}
    </span>

  </div>

  {/* OTP */}

  <div
    className="
      mt-6

      flex

      justify-between

      gap-2
      sm:gap-3
      md:gap-4
    "
  >
    {emailOtp.map((value, index) => (

      <input
        key={index}
        ref={(el) => {
          emailRefs.current[index] = el;
        }}

        type="text"

        inputMode="numeric"

        maxLength={1}

        value={value}

        onChange={(e) =>
          handleEmailOtpChange(e.target.value, index)
        }

        onKeyDown={(e) =>
          handleEmailKeyDown(e, index)
        }

        className={`
          w-10
          h-10

          sm:w-12
          sm:h-12

          md:w-14
          md:h-14

          lg:w-16
          lg:h-16

          xl:w-[68px]
          xl:h-[68px]

          rounded-2xl

${otpBg}
          border

          ${
            emailError
              ? "border-red-500"
              : value
              ? "border-[#69A6FF]"
               :otpBorder          }

          text-center

${inputText}
          text-base
          sm:text-lg
          lg:text-xl

          outline-none

          transition-all
          duration-300

          focus:border-[#69A6FF]
          focus:ring-2
          focus:ring-[#69A6FF]/20
        `}
      />

    ))}
  </div>

  {/* Validation */}

  {emailError && (

    <p
      className="
        mt-3

        text-red-500

        text-sm
        sm:text-base
      "
    >
      {emailError}
    </p>

  )}

  {/* Resend */}

  <div
    className="
      mt-5

      flex

      items-center

      justify-between
    "
  >
    <p
      className={`
${text}
        text-sm
        sm:text-base
      `}
    >
      Didn't receive the code?
    </p>

    <button
      type="button"
      onClick={handleResend}
      disabled={timer > 0}
      className={`
        font-semibold

        transition-all

        ${
          timer > 0
            ? "text-[#566579] cursor-not-allowed"
            : `${resendText} hover:opacity-80`
        }
      `}
    >
      Resend OTP
    </button>

  </div>

</div>

{/* ===================================================== */}
{/* VERIFY MOBILE */}
{/* ===================================================== */}

<div className="mt-10">

  <div className="flex items-center justify-between">

    <div>

      <h2
        className={`
${heading}
          font-semibold

          text-xl
          sm:text-2xl
          lg:text-[28px]
        `}
      >
        Verify Mobile
      </h2>

      <p
        className={`
          mt-2

${text}
          text-sm
          sm:text-base
          lg:text-lg
        `}
      >
        Enter the OTP sent to your mobile number.
      </p>

    </div>

    <span
      className={`
${text}
        font-semibold

        text-base
        sm:text-lg
      `}
    >
      {formattedTime}
    </span>

  </div>

  {/* OTP */}

  <div
    className="
      mt-6

      flex

      justify-between

      gap-2
      sm:gap-3
      md:gap-4
    "
  >
    {mobileOtp.map((value, index) => (

      <input
        key={index}
        ref={(el) => {
          mobileRefs.current[index] = el;
        }}
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={value}
        onChange={(e) =>
          handleMobileOtpChange(
            e.target.value,
            index
          )
        }
        onKeyDown={(e) =>
          handleMobileKeyDown(
            e,
            index
          )
        }
        className={`
          w-10
          h-10

          sm:w-12
          sm:h-12

          md:w-14
          md:h-14

          lg:w-16
          lg:h-16

          xl:w-[68px]
          xl:h-[68px]

          rounded-2xl

${otpBg}
          border

          ${
            mobileError
              ? "border-red-500"
              : value
              ? "border-[#69A6FF]"
              : otpBorder
          }

          text-center

${inputText}
          text-base
          sm:text-lg
          lg:text-xl

          outline-none

          transition-all
          duration-300

          focus:border-[#69A6FF]
          focus:ring-2
          focus:ring-[#69A6FF]/20
        `}
      />

    ))}
  </div>

  {mobileError && (

    <p
      className="
        mt-3

        text-red-500

        text-sm
        sm:text-base
      "
    >
      {mobileError}
    </p>

  )}

  
  {/* Resend */}

  <div
    className="
      mt-5

      flex

      items-center

      justify-between
    "
  >
    <p
      className={`
${text}
        text-sm
        sm:text-base
      `}
    >
      Didn't receive the code?
    </p>

    <button
      type="button"
      onClick={handleResend}
      disabled={timer > 0}
      className={`
        font-semibold

        transition-all

        ${
          timer > 0
            ? "text-[#566579] cursor-not-allowed"
            : `${resendText} hover:opacity-80`
        }
      `}
    >
      Resend OTP
    </button>
    </div>

</div>

{/* ========================= */}
{/* BUTTON */}
{/* ========================= */}
<button
  type="button"
  onClick={() => {
    if (!disabled) {
      handleSubmit();
      setShowSuccessModal(true);
    }
  }}
  className={`
    mt-10
    w-full
    h-14
    sm:h-16
    rounded-2xl
    font-semibold
    text-lg
    sm:text-xl
    lg:text-2xl
    transition-all
    duration-300
    ${
      disabled
        ? "bg-[#334155] text-[#94A3B8] cursor-not-allowed"
        : "bg-gradient-to-r from-[#3F77C7] to-[#69A6FF] text-white hover:opacity-90"
    }
  `}
>
  Let's Go
</button>

{showSuccessModal && (
  <div
    className={`
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      backdrop-blur-md
      p-4
    `}
  >
    <div
      className={`
        relative

        w-full
        max-w-[760px]

        rounded-[32px]

        border
        border-[#2A3950]

${modalCard}
        shadow-[0_30px_80px_rgba(0,0,0,0.6)]

        px-6
        sm:px-10
        lg:px-14

        py-8
        sm:py-10
      `}
    >
      {/* Close */}

      <button
        onClick={() => setShowSuccessModal(false)}
        className={`
          absolute
          right-6
          top-6
${modalHeading}
          hover:${modalHeading}
          transition
        `}
      >
        <X size={32} />
      </button>

      {/* Icon */}

      <div className="flex justify-center">
        <div
          className="
            h-24
            w-24

            rounded-full

            border-4
            border-[#22C55E]

            flex
            items-center
            justify-center
          "
        >
          <CheckCircle2
            size={56}
            className="text-[#22C55E]"
          />
        </div>
      </div>

      {/* Heading */}

      <h2
        className={`
          mt-8
          text-center
${modalHeading}
          font-bold

          text-3xl
          sm:text-5xl
        `}
      >
        Congratulations!
      </h2>

      <p
        className={`
          mt-5
          text-center

${modalText}
          text-base
          sm:text-xl

          leading-8
        `}
      >
        <span className={`${modalText} font-semibold`}>
          Your account has been created,
        </span>{" "}
        Let's continue with the next step...
      </p>

      <div className="my-8 border-t border-[#313646]" />

      {/* Card */}

      <div
        className={`
          rounded-3xl
          border
          border-[#313646]

          ${modalCard}

          p-6
          sm:p-8
        `}
      >
        <div className="flex items-center justify-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#10B981]" />

          <h3
            className={`
${modalHeading}
              font-bold

              text-xl
              sm:text-3xl
            `}
          >
            Next Step: Verify Your Identity
          </h3>
        </div>

        <p
          className={`
            mt-5
            text-center

${modalText}
            text-base
            sm:text-xl

            leading-8
          `}
        >
          To activate your account and access premium
          features, please complete the <b>KYC</b> form.
        </p>
      </div>

      {/* Button */}

      <Link
        to="/"
        className="
          mt-8

          flex
          items-center
          justify-center
          gap-3

          w-full

          h-14
          sm:h-16

          rounded-2xl

          bg-gradient-to-r
          from-[#3F77C7]
          to-[#69A6FF]

          text-black
          font-semibold

          text-lg
          sm:text-2xl

          hover:opacity-90
          transition
        "
      >
        Let's Get Started
        <ArrowRight size={24} />
      </Link>
    </div>
  </div>
)}

{/* ========================= */}
{/* BACK */}
{/* ========================= */}

<div className="flex justify-center mt-8">

  <Link
    to="/create-account"
    className={`
      flex
      items-center

      gap-2

     ${backText}

      transition-all

      text-base
      sm:text-lg
    `}
  >
    <ArrowLeft size={20} />
    Back
  </Link>

</div>

          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

};

export default VerifyDetails;