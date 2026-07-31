import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const { darkMode, toggleTheme } = useTheme();
const navigate = useNavigate();

  const navItems = [
    { name: "How it works", href: "#" },
    { name: "Assets", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
<header
  className={`
    sticky
    top-0
    left-0
    z-50
    w-full
    backdrop-blur-md
    transition-all
    duration-500

    ${
      darkMode
        ? "bg-[#090909]/95 border-white/10"
        : "bg-white/95 border-gray-200 shadow-md"
    }

    border-b
  `}
>
  <div className="mx-auto max-w-[1440px] h-[72px] lg:h-[90px] flex items-center justify-between px-2 sm:px-2 lg:px-3 xl:px-2">

        {/* Left */}
        <div className="flex items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
  <img
    src={logo}
    alt="logo"
    className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
  />

<h1
  className={`
    font-bold
    uppercase
    tracking-wide
    whitespace-nowrap

    text-lg
    sm:text-xl
    md:text-2xl
    lg:text-[28px]

    transition-colors
    duration-300

    ${darkMode ? "text-white" : "text-[#111827]"}
  `}
>
      ouse Of Frac
  </h1>
</Link>

          {/* Navigation */}
         <nav className="hidden lg:flex items-center ml-16 xl:ml-20 gap-10 xl:gap-14">
  {navItems.map((item) => (
    <a
  key={item.name}
  href={item.href}
  className={`
    relative
    inline-block
    font-semibold
    text-lg
    transition-colors
    duration-300

    after:absolute
    after:left-0
    after:-bottom-2
    after:h-[2px]
    after:w-0
    after:transition-all
    after:duration-300

    hover:after:w-full

    ${
      darkMode
        ? "text-white after:bg-white"
        : "text-[#111827] after:bg-black"
    }
  `}
>
  {item.name}
</a>
  ))}
</nav>

        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Theme */}
        <button
  onClick={toggleTheme}
  className="
    relative
    w-14
    h-14
    rounded-2xl
    border

    flex
    items-center
    justify-center

    overflow-hidden

    transition-all
    duration-500
  "
>
  {darkMode ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="#ffffff"
    >
      <path d="M21.75 15.5A9.75 9.75 0 0110.5 2.25a8 8 0 1011.25 13.25z"/>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="#FDB813"
    >
      <circle cx="12" cy="12" r="5"/>
      <g stroke="#FDB813" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="23"/>
        <line x1="1" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="23" y2="12"/>
        <line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/>
        <line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/>
        <line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/>
        <line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/>
      </g>
    </svg>
  )}
</button>
          {/* Login */}
          <button
           className={`
  h-14
  px-10
  rounded-2xl
  border
  font-semibold
  text-lg
  transition-all
  duration-300

  ${
    darkMode
      ? "border-white/20 text-white hover:border-[#5B9CF3]"
      : "border-gray-300 text-[#111827] hover:border-[#4178CB]"
  }
`}
          >
            Login
          </button>

          {/* Get Started */}
          <button
  onClick={() => navigate("/signup")}
  className="
    h-14
    px-10
    rounded-2xl
    bg-[#5B9BF3]
    hover:bg-[#4b8ae2]
    text-white
    font-bold
    text-lg
    transition
    duration-300
  "
>
  Get Started
</button>

        </div>

        {/* Mobile Menu */}
        <button
  onClick={() => setIsOpen(!isOpen)}
  className="lg:hidden flex items-center justify-center w-11 h-11 rounded-md hover:bg-white/5 transition-colors duration-300"
  aria-label="Toggle Menu"
>
  {isOpen ? (
    <X
      size={28}
      strokeWidth={2}
className={darkMode ? "text-white" : "text-[#111827]"}    />
  ) : (
    <Menu
      size={30}
      strokeWidth={1.5}
      className={darkMode ? "text-white" : "text-[#111827]"}
    />
  )}
</button>

      </div>

      {/* Mobile Drawer */}
     {isOpen && (
  <div
    className={`lg:hidden border-t transition-all duration-300 ${
      darkMode
        ? "bg-[#090909] border-white/10"
        : "bg-white border-gray-200"
    }`}
  >

          <div className="px-6 py-6 space-y-5">

            {navItems.map((item) => (
             <a
  key={item.name}
  href={item.href}
  className={`block text-lg font-medium transition-colors duration-300 ${
    darkMode
      ? "text-white"
      : "text-black"
  }`}
  onClick={() => setIsOpen(false)}
>
  {item.name}
</a>
            ))}
<button
  onClick={toggleTheme}
  className={`w-full h-12 rounded-xl border flex items-center justify-center gap-3 transition-all duration-300 ${
    darkMode
      ? "border-white/20 text-white hover:border-[#5B9BF3]"
      : "border-gray-300 text-[#111827] hover:border-[#5B9BF3]"
  }`}
>
  {darkMode ? (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#ffffff"
      >
        <path d="M21.75 15.5A9.75 9.75 0 0110.5 2.25a8 8 0 1011.25 13.25z" />
      </svg>
      <span>Light Mode</span>
    </>
  ) : (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#FDB813"
      >
        <circle cx="12" cy="12" r="5" />
        <g stroke="#FDB813" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="23" />
          <line x1="1" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="23" y2="12" />
          <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
          <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
          <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
          <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
        </g>
      </svg>
      <span>Dark Mode</span>
    </>
  )}
</button>
           <button
  className={`w-full h-12 rounded-xl border font-semibold transition-all duration-300 ${
    darkMode
      ? "border-white/20 text-white hover:border-[#5B9BF3]"
      : "border-gray-300 text-[#111827] hover:border-[#5B9BF3]"
  }`}
>
  Login
</button>
            <button
  onClick={() => {
    navigate("/signup");
    setIsOpen(false);
  }}
  className="
    w-full
    h-12
    rounded-xl
    bg-[#5B9BF3]
    text-white
    font-semibold
    transition
    duration-300
    hover:bg-[#4b8ae2]
  "
>
  Get Started
</button>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;