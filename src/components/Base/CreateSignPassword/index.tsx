import {  useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useTheme } from "@/context/ThemeContext";

import signupBg from "@/assets/auth-bg-light.png";
import benefitsImage from "@/assets/signup-hero-dark.png";

type FormData = {
  password: string;
  confirmPassword: string;
};

const CreateSignPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { darkMode } = useTheme();

  const sectionBg = darkMode ? "bg-[#0B1624]" : "bg-[#F5F7FA]";

const cardBg = darkMode ? "bg-[#0F1A29]" : "bg-white";

const headingColor = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const descriptionColor = darkMode
  ? "text-[#8E9EB1]"
  : "text-[#64748B]";

const labelColor = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const inputBg = darkMode
  ? "bg-[#243247]"
  : "bg-white";

const inputBorder = darkMode
  ? "border-[#334252]"
  : "border-[#D1D5DB]";

const inputText = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const placeholderColor = darkMode
  ? "placeholder:text-[#8E9EB1]"
  : "placeholder:text-[#94A3B8]";

const iconColor = darkMode
  ? "text-[#8E9EB1]"
  : "text-[#64748B]";

const requirementColor = darkMode
  ? "text-[#8E9EB1]"
  : "text-[#475569]";

const backColor = requirementColor;

  

  // ================= React Hook Form =================

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const password = watch("password", "");
  const confirmPassword = watch(
    "confirmPassword",
    ""
  );

  // ================= Password Rules =================

  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial =
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const isPasswordStrong =
    hasLength &&
    hasUpper &&
    hasLower &&
    hasNumber &&
    hasSpecial;

  // ================= Submit =================


    return (
    <section
      className={`
relative
min-h-screen
overflow-hidden
${sectionBg}

lg:m-6
xl:m-8
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
      {/* Main Wrapper */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1850px]

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20

          py-8
          lg:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1.05fr_0.95fr]

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

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              w-full

              max-w-[720px]

              mx-auto
            "
          >
            <div
              className={`
                rounded-[28px]

                border
                border-white/10

${cardBg}
                shadow-[0_30px_80px_rgba(0,0,0,0.45)]

                px-6
                sm:px-8
                md:px-10
                lg:px-12

                py-8
                lg:py-10
              `}
            >
              {/* Heading */}

              <h1
                className={`
                  text-center

${headingColor}
                  font-bold

                  text-[32px]
                  sm:text-[38px]
                  lg:text-[48px]
                `}
              >
                Create Password
              </h1>

              <p
                className={`
                  mt-3

                  text-center

${descriptionColor}

                  text-sm
                  sm:text-base
                  lg:text-lg
                `}
              >
                Create a strong password that meets all security
                requirements.
              </p>

              {/* Form */}

              <form
                className="mt-10"
              >


{/* ================= Password ================= */}

<div className="mb-6">

  <label
    className={`
      block
      mb-3

${labelColor}
      font-semibold

      text-lg
    `}
  >
    Create Password
  </label>

  <div className="relative">

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter a strong password"
      {...register("password", {
        required: "Password is required",
        validate: () =>
          isPasswordStrong ||
          "Password is not strong enough",
      })}
      className={`
        w-full

        h-14
        md:h-16

        rounded-2xl

${inputBg}
${inputBorder}
        ${
          errors.password
            ? "border-red-500"
            : "border-[#334252]"
        }

        px-5
        pr-14

${inputText}
${placeholderColor}
        outline-none

        transition-all

        focus:border-[#5B9BF3]
        focus:ring-2
        focus:ring-[#5B9BF3]/20
      `}
    />

    <button
      type="button"
      onClick={() =>
        setShowPassword(!showPassword)
      }
      className={`
absolute
right-5
top-1/2
-translate-y-1/2

${iconColor}

hover:text-[#5B9BF3]
transition-all
`}
    >
      {showPassword ? (
        <EyeOff size={22} />
      ) : (
        <Eye size={22} />
      )}
    </button>

  </div>

  {errors.password && (
    <p className="mt-2 text-sm text-red-500">
      {errors.password.message}
    </p>
  )}

</div>

{/* ================= Confirm Password ================= */}

<div className="mb-8">

  <label
    className={`
      block
      mb-3

${labelColor}
      font-semibold

      text-lg
    `}
  >
    Confirm Password
  </label>

  

  <div className="relative">
   
    <input
      type={showConfirm ? "text" : "password"}
      placeholder="Re-enter your password"
      {...register("confirmPassword", {
        required: "Confirm password is required",
        validate: (value) =>
          value === password ||
          "Passwords do not match",
      })}
      className={`
        w-full

        h-14
        md:h-16

        rounded-2xl

${inputBg}
${inputBorder}
        ${
          errors.confirmPassword
            ? "border-red-500"
            : "border-[#334252]"
        }

        px-5
        pr-14

${inputText}
${placeholderColor}
        outline-none

        transition-all

        focus:border-[#5B9BF3]
        focus:ring-2
        focus:ring-[#5B9BF3]/20
      `}
    />

    <button
      type="button"
      onClick={() =>
        setShowConfirm(!showConfirm)
      }
      className={`
absolute
right-5
top-1/2
-translate-y-1/2

${iconColor}

hover:text-[#5B9BF3]
transition-all
`}
    >
      {showConfirm ? (
        <EyeOff size={22} />
      ) : (
        <Eye size={22} />
      )}
    </button>

  </div>

  {errors.confirmPassword && (
    <p className="mt-2 text-sm text-red-500">
      {errors.confirmPassword.message}
    </p>
  )}

</div>


{/* ================= Confirm Button ================= */}

<Link
  to="/verify-details" // Apna route yahan likhiye
  className={`
    mt-10

    w-full

    h-14
    sm:h-16

    flex
    items-center
    justify-center

    rounded-2xl

    text-lg
    sm:text-xl
    lg:text-2xl

    font-semibold

    transition-all
    duration-300

    ${
      isPasswordStrong &&
      password === confirmPassword
        ? "bg-gradient-to-r from-[#3F77C7] to-[#69A6FF] hover:opacity-90 text-white"
        : "bg-[#334155] text-[#94A3B8] pointer-events-none opacity-60"
    }
  `}
>
  Confirm
</Link>
{/* ================= Password Requirements ================= */}

<div className="mt-8">

  <h3
    className={`
${headingColor}  
    font-semibold

      text-lg
      lg:text-xl

      mb-4
    `}
  >
    Passwords should have:
  </h3>

  <ul className="space-y-3">

    <li
      className={`flex items-center gap-3 text-sm sm:text-base lg:text-lg ${
        hasLength ? "text-[#4ADE80]" : requirementColor
      }`}
    >
      <span className="text-xl">
        {hasLength ? "✓" : "•"}
      </span>
      Minimum length at 8 characters
    </li>

    <li
      className={`flex items-center gap-3 text-sm sm:text-base lg:text-lg ${
        hasUpper ? "text-[#4ADE80]" :requirementColor
      }`}
    >
      <span className="text-xl">
        {hasUpper ? "✓" : "•"}
      </span>
      At least one uppercase character is required
    </li>

    <li
      className={`flex items-center gap-3 text-sm sm:text-base lg:text-lg ${
        hasLower ? "text-[#4ADE80]" :requirementColor
      }`}
    >
      <span className="text-xl">
        {hasLower ? "✓" : "•"}
      </span>
      At least one lowercase character is required
    </li>

    <li
      className={`flex items-center gap-3 text-sm sm:text-base lg:text-lg ${
        hasNumber ? "text-[#4ADE80]" :requirementColor
      }`}
    >
      <span className="text-xl">
        {hasNumber ? "✓" : "•"}
      </span>
      Number character(s) is required
    </li>

    <li
      className={`flex items-center gap-3 text-sm sm:text-base lg:text-lg ${
        hasSpecial ? "text-[#4ADE80]" :requirementColor
      }`}
    >
      <span className="text-xl">
        {hasSpecial ? "✓" : "•"}
      </span>
      At least one special character is required
    </li>

  </ul>

</div>


{/* ================= Back Button ================= */}

<div className="flex justify-center mt-10">

  <Link
    to="/create-account"
    className={`
inline-flex
items-center
gap-3

${backColor}

hover:text-[#69A6FF]

transition-all

text-base
sm:text-lg
lg:text-xl
`}
  >
    <ArrowLeft size={22} />
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

export default CreateSignPassword;
              