import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

import signupBg from "@/assets/auth-bg-light.png";
import benefitsImage from "@/assets/signup-hero-dark.png";

const CreatePassword = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { darkMode } = useTheme();

  
const modalCard = darkMode ? "bg-[#17161B]" : "bg-[#F8FAFC]";

const modalHeading = darkMode ? "text-white" : "text-[#0F172A]";

const modalText = darkMode ? "text-[#B4B7BD]" : "text-[#64748B]";
  // ---------------- OTP ----------------

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // ---------------- Password ----------------

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ---------------- Error States ----------------

  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [otpError, setOtpError] = useState("");

  // ---------------- Strong Password ----------------

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;

  // ---------------- OTP Change ----------------

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }

    setOtpError("");
  };

  // ---------------- OTP Backspace ----------------

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  // ---------------- Password Validation ----------------

  const validatePassword = (value: string) => {
    setPassword(value);

    if (!value) {
      setPasswordError("Password is required");
      return false;
    }

    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must contain uppercase, lowercase, number, special character and minimum 8 characters."
      );
      return false;
    }

    setPasswordError("");
    return true;
  };

  // ---------------- Confirm Password ----------------

  const validateConfirmPassword = (value: string) => {
    setConfirmPassword(value);

    if (!value) {
      setConfirmError("Confirm Password is required");
      return false;
    }

    if (value !== password) {
      setConfirmError("Passwords do not match");
      return false;
    }

    setConfirmError("");
    return true;
  };

  // ---------------- Submit ----------------

    const bgColor = darkMode ? "bg-[#0F172A]" : "bg-[#F8FAFC]";

const cardBg = darkMode ? "bg-[#101B29]" : "bg-white";

const textColor = darkMode ? "text-white" : "text-[#0F172A]";

const subText = darkMode ? "text-[#94A3B8]" : "text-[#64748B]";

const inputBg = darkMode ? "bg-[#1B2735]" : "bg-white";

const inputBorder = darkMode
  ? "border-[#334252]"
  : "border-[#D6DCE5]";

const placeholder = darkMode
  ? "placeholder:text-[#727D8A]"
  : "placeholder:text-[#94A3B8]";

  return (
    <section
      className={`
        relative
        min-h-screen
        overflow-hidden
        ${bgColor}
        lg:m-8
        rounded-[32px]
      `}
    >
      {/* Background */}
{darkMode &&
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${signupBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
}


      {/* Main */}

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-[1700px]

          px-5
          sm:px-8
          lg:px-12

          py-10
        "
      >
        <div
          className="
            grid

            grid-cols-1
            xl:grid-cols-[1.15fr_0.85fr]

            items-center

            gap-12

            min-h-[90vh]
          "
        >
          {/* ========================= LEFT SECTION ========================= */}

<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="
    order-2
    xl:order-1

    flex
    flex-col

    items-center
    xl:items-start
  "
>
  <h1
    className={`

      font-bold
${textColor}
      text-center
      xl:text-left

      text-[24px]
      sm:text-[30px]
      md:text-[36px]
      lg:text-[42px]
      xl:text-[50px]

      leading-tight

      max-w-[760px]

      mb-8
      lg:mb-12
    `}
  >
    Smart Real Estate Investment Benefits
  </h1>

  <motion.img
    src={benefitsImage}
    alt="Benefits"

    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}

    className="
      w-full

      max-w-[760px]

      h-auto

      object-contain

      select-none
      pointer-events-none
    "
  />
</motion.div>

{/* ========================= RIGHT CARD ========================= */}

<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="
    order-1
    xl:order-2

    w-full

    max-w-[650px]

    mx-auto
  "
>
  <div
    className={`
      rounded-[28px]
      lg:rounded-[36px]

      border
      border-white/10

${cardBg}
      shadow-[0_25px_80px_rgba(0,0,0,0.45)]

      px-6
      sm:px-8
      md:px-10
      lg:px-12

      py-8
      lg:py-10
    `}
  >
    {/* Heading */}

    <h2
      className={`
${textColor}
        font-bold

        text-center

        text-[28px]
        sm:text-[34px]
        lg:text-[42px]
      `}
    >
      Reset Your Password
    </h2>

    {/* Subtitle */}

    <p
      className={`
        mt-3

        text-center

${subText}
        text-sm
        sm:text-base

        leading-7
      `}
    >
      We've sent a verification code to
      <br />

      <span className={`font-semibold ${subText}`}>
        nikhil810parmar@gmail.com
      </span>
    </p>
{/* ================= OTP LABEL ================= */}

<div className="mt-8">
  <label
    className={`
      block
      mb-4

${textColor}
      font-semibold

      text-base
      sm:text-lg
      lg:text-xl
    `}
  >
  Enter OTP
  </label>

  {/* OTP BOXES */}
<div
  className="
    mt-8

    flex
    justify-center
    items-center

    gap-2
    sm:gap-3
    md:gap-4

    w-full
  
  "
>
  {otp.map((value, index) => (
    <input
      key={index}
      ref={(el) => {
        otpRefs.current[index] = el;
      }}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      onChange={(e) => handleOtpChange(e.target.value, index)}
      onKeyDown={(e) => handleOtpKeyDown(e, index)}
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

        rounded-xl
        sm:rounded-2xl

        ${darkMode ? "bg-[#172433]" : "bg-white"}

        border

        ${
          otpError
            ? "border-red-500"
            : value
            ? "border-[#5B9BF3]"
            : darkMode
            ? "border-[#334252]"
            : "border-[#CBD5E1]"
        }

        ${darkMode ? "text-white" : "text-[#0F172A]"}

        text-center

        text-base
        sm:text-lg
        md:text-xl
        lg:text-2xl

        font-semibold

        outline-none

        transition-all
        duration-300

        focus:border-[#5B9BF3]
        focus:ring-2
        focus:ring-[#5B9BF3]/20
      `}  
    />
  ))}
</div>

  {/* OTP ERROR */}

  {otpError && (
    <p className="mt-3 text-sm text-red-500">
      {otpError}
    </p>
  )}

  {/* RESEND */}

  <div className="mt-6 text-center">
    <p className={`${textColor} text-sm`}>
      Didn't receive the code?
    </p>

    <button
      type="button"
      className={`
        mt-2

${textColor}
        font-semibold

        hover:text-[#78B1FF]

        transition-all
      `}
    >
      Resend OTP
    </button>
  </div>
</div>
{/* ========================= CREATE PASSWORD ========================= */}

<div className="mt-8">
  <label
    className={`
      block
      mb-3

      ${textColor}

      font-semibold

      text-sm
      sm:text-base
      lg:text-lg
    `}
  >
    Create Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => validatePassword(e.target.value)}
      placeholder="Enter your password"
      autoComplete="new-password"
      className={`
        w-full

        h-14
        sm:h-[58px]
        lg:h-[64px]

        rounded-2xl

  ${inputBg}
        px-5
        pr-14

${textColor}
        text-sm
        sm:text-base
        lg:text-lg

${placeholder}
        outline-none

        transition-all

        ${
          passwordError
            ? "border border-red-500 focus:ring-2 focus:ring-red-500/20"
            : password.length > 0
            ? "border border-green-500 focus:ring-2 focus:ring-green-500/20"
            : "border border-[#334252] focus:border-[#5B9BF3] focus:ring-2 focus:ring-[#5B9BF3]/20"
        }
      `}
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className={`
        absolute
        right-5
        top-1/2
        -translate-y-1/2

${textColor}

        transition-colors
      `}
    >
      {showPassword ? (
        <EyeOff size={22} />
      ) : (
        <Eye size={22} />
      )}
    </button>
  </div>

  {passwordError && (
    <p className="mt-2 text-sm text-red-500">
      {passwordError}
    </p>
  )}

  {!passwordError && password && (
    <p className="mt-2 text-sm text-green-500">
      Strong password ✓
    </p>
  )}
</div>

{/* ========================= CONFIRM PASSWORD ========================= */}

<div className="mt-6">
  <label
    className={`
      block
      mb-3

${textColor}
      font-semibold

      text-sm
      sm:text-base
      lg:text-lg
    `}
  >
    Confirm Password
  </label>

  <div className="relative">
    <input
      type={showConfirm ? "text" : "password"}
      value={confirmPassword}
      onChange={(e) =>
        validateConfirmPassword(e.target.value)
      }
      placeholder="Confirm your password"
      autoComplete="new-password"
      className={`
        w-full

        h-14
        sm:h-[58px]
        lg:h-[64px]

        rounded-2xl

 ${inputBg}
        px-5
        pr-14

  ${textColor}
        text-sm
        sm:text-base
        lg:text-lg

  ${placeholder}
        outline-none

        transition-all

        ${
          confirmError
            ? "border border-red-500 focus:ring-2 focus:ring-red-500/20"
            : confirmPassword.length > 0
            ? "border border-green-500 focus:ring-2 focus:ring-green-500/20"
            : "border border-[#334252] focus:border-[#5B9BF3] focus:ring-2 focus:ring-[#5B9BF3]/20"
        }
      `}
    />

    <button
      type="button"
      onClick={() => setShowConfirm(!showConfirm)}
      className={`
        absolute
        right-5
        top-1/2
        -translate-y-1/2

${textColor}
        hover:${textColor}

        transition-colors
      `}
    >
      {showConfirm ? (
        <EyeOff size={22} />
      ) : (
        <Eye size={22} />
      )}
    </button>
  </div>

  {confirmError && (
    <p className="mt-2 text-sm text-red-500">
      {confirmError}
    </p>
  )}

  {!confirmError &&
    confirmPassword &&
    confirmPassword === password && (
      <p className="mt-2 text-sm text-green-500">
        Password matched ✓
      </p>
    )}
</div>

{/* ========================= PASSWORD REQUIREMENTS ========================= */}

<div
  className={`
    mt-6

    rounded-xl

${inputBorder}
${bgColor}
    p-4
  `}
>
  <p className={` ${subText} font-semibold mb-3`}>
    Password must contain:
  </p>

  <ul
    className={`
      space-y-2

      text-sm

${subText}
    `}
  >
    <li>• Minimum 8 characters</li>
    <li>• One uppercase letter</li>
    <li>• One lowercase letter</li>
    <li>• One number</li>
    <li>• One special character (@$!%*?&)</li>
  </ul>
</div>
{/* ========================= RESET PASSWORD BUTTON ========================= */}

<button
  type="button"
  disabled={
    otp.join("").length !== 6 ||
    !!otpError ||
    !!passwordError ||
    !!confirmError ||
    password === "" ||
    confirmPassword === ""
  }
   onClick={() => setShowSuccessModal(true)}
  className={`
    mt-8

    w-full

    h-14
    sm:h-[58px]
    lg:h-[64px]

    rounded-2xl

    font-semibold

    text-base
    sm:text-lg
    lg:text-xl

    transition-all
    duration-300

    ${
      otp.join("").length === 6 &&
      !otpError &&
      !passwordError &&
      !confirmError &&
      password &&
      confirmPassword
        ? `
          bg-[#5B9BF3]
          text-white
          hover:bg-[#4A8AE6]
          hover:scale-[1.02]
          cursor-pointer
        `
        : `
          bg-[#2C3846]
          text-[#8E939B]
          cursor-not-allowed
        `
    }
  `}
>
  Reset Password
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

      <button
        className="
          mt-8
          w-full
          h-14
          sm:h-16
          rounded-2xl
          bg-gradient-to-r
          from-[#3D73B9]
          to-[#5F9EF5]
          text-black
          font-semibold
          text-lg
          transition-all
          hover:scale-[1.02]
        "
      >
        <div className="flex items-center justify-center gap-3">
          Let's Get Started
          <span className="text-2xl">→</span>
        </div>
      </button>
    </div>
  </div>
)}

{/* ========================= BACK BUTTON ========================= */}

<div className="mt-8 flex justify-center">
  <Link
    to="/forgot-password"
    className={`
      inline-flex
      items-center
      gap-2

     

      transition-colors

      text-sm
      sm:text-base
      lg:text-lg

      font-medium
       ${
      darkMode
        ? "text-white hover:text-[#5B9BF3]"
        : "text-[#0F172A] hover:text-[#2563EB]"
    }
    `}
  >
    <ArrowLeft className="w-5 h-5" />
    Back to Request
  </Link>
</div>

{/* ========================= SUCCESS MESSAGE ========================= */}

<p
  className="
    mt-6

    text-center

    text-[#94A3B8]

    text-xs
    sm:text-sm
  "
>
  Your password will be updated after successful verification.
</p>

                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

export default CreatePassword;