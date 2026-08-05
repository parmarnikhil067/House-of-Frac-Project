import DynamicForm from "@/components/Form";
import { loginFormConfig } from "@/config";
import type { ILoginFormSubmitData } from "@/interface";
import {useTheme} from '@/context/ThemeContext';


import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {  useState } from "react";
import type {JSX} from "react"

import signupBg from "@/assets/auth-bg-light.png";
import benefitsImage from "@/assets/signup-hero-dark.png";



export default function Login(): JSX.Element {
  const [loginType, setLoginType] = useState<"email" | "phone">("email");
  const [formValues, setFormValues] = useState<any>({});
  const {darkMode} = useTheme();
  const navigate = useNavigate();

  const pageBg = darkMode ? "bg-[#0D1C2D]" : "bg-[#F4F7FB]";

const cardBg = darkMode ? "bg-[#101B29]" : "bg-white";




const headingColor = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const textColor = darkMode
  ? "text-white"
  : "text-[#1E293B]";


const toggleBg = darkMode
  ? "bg-[#1C2835]"
  : "bg-[#E8EEF7]";

const activeTab = darkMode
  ? "bg-[#0F1B28] text-white"
  : "bg-white text-[#2563EB] shadow";

const inactiveTab = darkMode
  ? "text-[#8C9198]"
  : "text-[#64748B]";


 const handleSubmit = (data: ILoginFormSubmitData) => {
  const savedUser = localStorage.getItem("user");

  if (!savedUser) {
    alert("No account found. Please create an account first.");
    return;
  }

  const user = JSON.parse(savedUser);

  if (loginType === "email") {
    if (
      data.email === user.email &&
      data.password === user.password
    ) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  } else {
    if (
      data.mobile === user.mobile &&
      data.password === user.password
    ) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Mobile Number or Password");
    }
  }
};

 const email = formValues.email || "";
const mobileNumber = formValues.mobile?.number || "";
const password = formValues.password || "";

const isEmailValid =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isPhoneValid =
  /^[6-9]\d{9}$/.test(mobileNumber);

const isValid =
  loginType === "email"
    ? isEmailValid && password.length >= 8
    : isPhoneValid && password.length >= 8;

const loginFields = loginFormConfig.filter((field) => {
  if (loginType === "email") {
    return field.name !== "mobile";
  }

  return field.name !== "email";
});

  return (
<section
  className={`relative min-h-screen overflow-visible m-8 rounded-4xl ${pageBg}`}
>
      {/* Background */}

     {darkMode && (
  <div
    className="absolute inset-0 "
    style={{
      backgroundImage: `url(${signupBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
)}

     

      {/* Content */}

      <div
        className="
          relative
          z-10

          max-w-[1520px]
          mx-auto

          min-h-screen

          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-20

          py-8
          lg:py-15
        "
      >

        <div
          className="
            grid

            grid-cols-1
            xl:grid-cols-2

            gap-12

            items-center
          "
        >

          {/* ================= LEFT ================= */}

          <div
            className="
              flex
              flex-col
              items-center
              xl:items-start
            "
          >

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className={`
                text-center
                xl:text-left

                ${headingColor}

                font-bold

                text-[20px]
                sm:text-[22px]
                md:text-[22px]
                lg:text-[25px]
                xl:text-[30px]

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
              initial={{ opacity: 0, scale: .96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8 }}

              src={benefitsImage}
              alt="Benefits"

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
            transition={{ duration: .7 }}
            className={`
              w-full

              max-w-[720px]

              mx-auto

              rounded-[36px]

              ${cardBg}

              border
              border-white/10

              px-6
              sm:px-8
              lg:px-25

              py-8
              lg:py-10
            `}
          >
            {/* ================= LOGIN TYPE ================= */}

<div
  className={`
    flex
    items-center

${toggleBg}
    rounded-full

    p-1

    w-full

    max-w-[540px]

    mx-auto
  `}
>
  {/* Email */}

  <button
    onClick={() => setLoginType("email")}
    className={`
      flex-1

      h-14

      rounded-full

      flex
      items-center
      justify-center
      gap-3

      font-semibold

      text-lg

      transition-all

     ${
loginType==="email"
? activeTab
: inactiveTab
}
    `}
  >
   <Mail size={20} />
    Email
  </button>

  {/* Phone */}

  <button
    onClick={() => setLoginType("phone")}
    className={`
      flex-1

      h-14

      rounded-full

      flex
      items-center
      justify-center
      gap-3

      font-semibold

      text-lg

      transition-all

     ${
loginType==="phone"
? activeTab
: inactiveTab
}
    `}
  >
   <Phone size={20} />
    Phone
  </button>
</div>

{/* ================= FORM ================= */}

<div className="mt-10">

 <DynamicForm
  formId="login-form"
  fields={loginFields}
  onSubmit={handleSubmit}
  onValuesChange={setFormValues}
/>

</div>

{/* ================= FORGOT PASSWORD ================= */}

<div className="mt-1 flex justify-end">

  <Link
    to="/forgot-password"
    className={`
      

      text-base
      lg:text-lg

      hover:text-[#79B5FF]

      transition-colors
      ${darkMode
? "text-[#5B9BF3] hover:text-[#79B5FF]"
: "text-[#2563EB] hover:text-[#1D4ED8]"
}
    `}
  >
    Forgot Password?
  </Link>

</div>
<button
  type="submit"
  form="login-form"
  disabled={!isValid}
  className={`
    group
    relative
    overflow-hidden

    w-full
    h-14
    sm:h-14
    md:h-16
    lg:h-[68px]

    mt-8

    rounded-2xl

    font-bold

    text-base
    sm:text-lg
    md:text-xl
    lg:text-2xl

    transition-all
    duration-300

    ${
      isValid
        ? "bg-[#5B9BF3] text-white hover:bg-[#4A8AE7]"
        : "bg-[#2C3846] text-[#8E939B] cursor-not-allowed"
    }
  `}
>
  Log In
</button>

{/* ================= CREATE ACCOUNT ================= */}

<div className="mt-8 text-center">
  <p
    className={`
      ${textColor}

      text-base
      sm:text-lg
      lg:text-xl
    `}
  >
    Don't have an account?{" "}

    <Link
      to="/signup"
      type="button"
      className={`
        font-semibold

        hover:text-[#7CB7FF]

        transition-colors
        ${darkMode
? "text-[#5B9BF3] hover:text-[#79B5FF]"
: "text-[#2563EB] hover:text-[#1D4ED8]"
}
      `}
    >
      Create Here!
    </Link>
  </p>
</div>

{/* ================= BACK BUTTON ================= */}

<div className="mt-8 flex justify-center">

  <Link
    to="/"
    type="button"
    className={`
      inline-flex
      items-center
      gap-3

      ${textColor}

      hover:text-[#5B9BF3]

      transition-all
      duration-300

      text-base
      sm:text-lg
      lg:text-xl

      font-medium
    `}
  >
    <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />

    Back
  </Link>

</div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}