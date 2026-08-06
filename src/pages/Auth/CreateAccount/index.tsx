import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import signupBg from "@/assets/auth-bg-light.png";
import benefitsImage from "@/assets/signup-hero-dark.png";
import { useTheme } from "@/context/ThemeContext";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

const pageBg = darkMode ? "bg-[#0C1725]" : "bg-[#F5F7FA]";
const cardBg = darkMode ? "bg-[#101B29]/95" : "bg-white";
const heading = darkMode ? "text-white" : "text-[#0F172A]";
const text = darkMode ? "text-[#93A4B8]" : "text-[#64748B]";
const label = darkMode ? "text-white" : "text-[#0F172A]";
const inputBg = darkMode ? "bg-[#1B2838]" : "bg-white";
const inputBorder = darkMode ? "border-[#334155]" : "border-[#D1D5DB]";
const inputText = darkMode ? "text-white" : "text-[#0F172A]";
const helperText = darkMode ? "text-[#8E9EB1]" : "text-[#64748B]";
const backText = darkMode
  ? "text-white hover:text-[#68A6FF]"
  : "text-[#0F172A] hover:text-[#3F77C7]";


  // Read country code from localStorage
  const [countryCode, setCountryCode] = useState("");
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");

useEffect(() => {
  validate();
}, [firstName, lastName, email, mobile]);

const [touched, setTouched] = useState({
  firstName: false,
  lastName: false,
  email: false,
  mobile: false,
});

const isFormValid =
  firstName.trim() !== "" &&
  lastName.trim() !== "" &&
  email.trim() !== "" &&
  mobile.trim() !== "" &&
  /^[A-Za-z ]+$/.test(firstName) &&
  /^[A-Za-z ]+$/.test(lastName) &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
  /^[0-9]{10}$/.test(mobile);

const [errors, setErrors] = useState({
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
});

const validate = () => {
  const newErrors = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  };

  let valid = true;

  // First Name
 if (touched.firstName) {
  if (!firstName.trim()) {
    newErrors.firstName = "First name is required";
    valid = false;
  } else if (!/^[A-Za-z ]+$/.test(firstName)) {
    newErrors.firstName = "Only letters are allowed";
    valid = false;
  }
}

  // Last Name
  if (!lastName.trim()) {
    newErrors.lastName = "Last name is required";
    valid = false;
  } else if (!/^[A-Za-z ]+$/.test(lastName)) {
    newErrors.lastName = "Only letters are allowed";
    valid = false;
  }

  // Email
  if (!email.trim()) {
    newErrors.email = "Email is required";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Enter a valid email address";
    valid = false;
  }

  // Mobile
  if (!mobile.trim()) {
    newErrors.mobile = "Mobile number is required";
    valid = false;
  } else if (!/^[0-9]{10}$/.test(mobile)) {
    newErrors.mobile = "Enter a valid 10-digit mobile number";
    valid = false;
  }

  setErrors(newErrors);

  return valid;
};


useEffect(() => {
  const code = localStorage.getItem("selectedCountry");

  if (code) {
    setCountryCode(code);
  }
}, []);

  return (
    <section
  className={`
    relative
    min-h-screen
    overflow-hidden
    ${pageBg}
    lg:p-6
    xl:p-8
    m-10
    rounded-3xl
  `}
>
      {/* Background Image */}

     {darkMode && (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url(${signupBg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
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

        min-h-screen

        lg:min-h-[calc(100vh-48px)]

        rounded-none
        lg:rounded-[34px]

        flex
        items-center
      "
      >
        <div
          className="
          w-full

          grid

          grid-cols-1

          xl:grid-cols-[1.05fr_0.95fr]

          gap-14

          items-center

          px-5

          sm:px-8

          md:px-10

          lg:px-14

          xl:px-20

          py-10
        "
        >
          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

        
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
${heading}
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

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
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
  border
  border-white/10
  ${cardBg}
  backdrop-blur-xl
  shadow-[0_25px_70px_rgba(0,0,0,0.45)]
  px-6
  sm:px-8
  lg:px-10
  py-8
  lg:py-10
`}
            >
              {/* ===================================== */}
              {/* Heading */}
              {/* ===================================== */}

              <h2
                className={`
                text-center

${heading}
                font-semibold

                text-[34px]

                sm:text-[38px]

                lg:text-[44px]

                leading-tight
              `}
              >
                Create Your Account
              </h2>

              <p
                className={`
                mt-3

                text-center

${text}
                text-sm

                sm:text-base
                lg:text-lg

                leading-7
              `}
              >
                Enter your details to get started.
                It only takes a few minutes...
              </p>


{/* FORM */}
{/* ===================================== */}

<form className="mt-10 space-y-6">

  {/* First Name */}

  <div>
<label
  className={`mb-2 block text-[20px] font-semibold ${label}`}
>      First Name <span className="text-[#FF4D4F]">*</span>
    </label>
<input
  type="text"
  value={firstName}
  onChange={(e) => {
    setFirstName(e.target.value);
  }}
  onBlur={() => {
    setTouched((prev) => ({
      ...prev,
      firstName: true,
    }));
    validate();
  }}
  className={`
    w-full
    h-[54px]
    rounded-[14px]
    ${inputBg}
    ${inputText}
    px-5
    outline-none
    border
    transition-all
    ${
  touched.firstName && errors.firstName
    ? "border-red-500"
    : `${inputBorder} focus:border-[#5B9BF3]`
}
`}
/>


{touched.firstName && errors.firstName && (
<p className="mt-2 text-sm text-red-500">
  {errors.firstName}
</p>
)}
  </div>

  {/* Last Name */}

  <div>
<label
  className={`mb-2 block text-[20px] font-semibold ${label}`}
>      Last Name <span className="text-[#FF4D4F]">*</span>
    </label>
<input
  type="text"
  value={lastName}
  onChange={(e) => {
    setLastName(e.target.value);
  }}
  onBlur={() => {
    setTouched((prev) => ({
      ...prev,
      lastName: true,
    }));
    validate();
  }}
  className={`
    w-full
    h-[54px]
    rounded-[14px]
    ${inputBg}
    ${inputText}
    px-5
    outline-none
    border
    transition-all
    ${
touched.lastName && errors.lastName
        ? "border-red-500"
        : `${inputBorder} focus:border-[#5B9BF3]`
    }
  `}
/>

{touched.lastName && errors.lastName && (
  <p className="mt-2 text-sm text-red-500">
    {errors.lastName}
  </p>
)}
  </div>

  {/* Email */}

  <div>
<label
  className={`mb-2 block text-[20px] font-semibold ${label}`}
>      Email Address <span className="text-[#FF4D4F]">*</span>
    </label>
<input
  type="email"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
  }}
  onBlur={() => {
    setTouched((prev) => ({
      ...prev,
      email: true,
    }));
    validate();
  }}
  className={`
    w-full
    h-[54px]
    rounded-[14px]
    ${inputBg}
    ${inputText}
    px-5
    outline-none
    border
    transition-all
    ${
touched.email && errors.email
        ? "border-red-500"
        : `${inputBorder} focus:border-[#5B9BF3]`
    }
  `}
/>

{touched.email && errors.email && (
  <p className="mt-2 text-sm text-red-500">
    {errors.email}
  </p>
)}

    <p className={`mt-2 text-[16px] ${text}`}>
      We will never share your email
    </p>
  </div>

  {/* Mobile Number */}
<div>
  <label
    className={`mb-2 block text-[20px] font-semibold ${label}`}
  >
    Mobile Number <span className="text-[#FF4D4F]">*</span>
  </label>

  <div
    className={`
      flex
      items-center
      h-[54px]
      rounded-[14px]
      overflow-hidden
      ${inputBg}
      border
      ${
touched.mobile && errors.mobile
          ? "border-red-500"
          : `${inputBorder} focus-within:border-[#5B9BF3]`
      }
    `}
  >
    <div
      className={`
        flex
        items-center
        justify-center
        min-w-[90px]
        h-full
        border-r
        ${inputBorder}
        ${inputBg}
        ${inputText}
      `}
    >
      {countryCode}
    </div>

    <input
  type="tel"
  value={mobile}
  maxLength={10}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobile(value);
  }}
  onBlur={() => {
    setTouched((prev) => ({
      ...prev,
      mobile: true,
    }));
    validate();
  }}
  className={`flex-1 h-full bg-transparent px-5 ${inputText} outline-none`}
/>
  </div>

  {touched.mobile && errors.mobile && (
    <p className="mt-2 text-sm text-red-500">
      {errors.mobile}
    </p>
  )}

  <p className={`mt-2 text-[16px] ${helperText}`}>
    We will never share your mobile number
  </p>
</div>

  {/* Continue Button */}
  <button
  type="button"
  disabled={!isFormValid}
 onClick={() => {
  navigate("/create-sign-password");
}}
  className={`
    mt-2
    w-full
    h-[56px]
    rounded-[14px]
    font-semibold
    text-[20px]
    transition-all
    ${
      isFormValid
        ? "bg-gradient-to-r from-[#3F77C7] to-[#69A6FF] text-white"
        : "bg-[#374250] text-[#98A2B3] cursor-not-allowed"
    }
  `}
>
  Continue
</button>

  {/* Login */}

  {/* Back */}

  <div className="flex justify-center pt-2">
    <Link
  to="/create"
  className={`
    inline-flex
    items-center
    gap-2
    ${backText}
    transition-all
    text-[18px]
    sm:text-[18px]
    lg:text-[20px]
  `}
>
      <ArrowLeft size={18} />
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

export default CreateAccountPage;   