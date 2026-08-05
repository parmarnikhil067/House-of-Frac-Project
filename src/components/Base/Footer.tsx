import logo from "@/assets/Logo.png";
import {Link} from "react-router-dom"

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03111f] text-white">

      {/* Main Container */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1600px]

          px-4
          sm:px-2
          md:px-4
          lg:px-5
          xl:px-0

          pt-10
          sm:pt-10
          md:pt-10
          lg:pt-12

          pb-50
          sm:pb-50
          lg:pb-60
        "
      >

        {/* Grid */}

        <div
          className="
            grid
            gap-12

            sm:grid-cols-2

            lg:grid-cols-[1.3fr_.7fr_.7fr_.7fr]
          "
        >

          {/* ================= LEFT ================= */}

          <div>

            {/* Logo */}

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="logo"
                className="
                  h-10
                  w-10

                  md:h-12
                  md:w-12
                  lg:h-14
                  lg:w-14
                  xl:h-14
                  xl:w-14
                  "
              />

              <h2
                className="
                  font-bold

                  text-[24px]
                  sm:text-[24px]
                  md:text-[24px]
                  lg:text-[30px]
                  xl:text-[40px]
                "
              >
                OUSE OF FRAC
              </h2>

            </div>

            {/* Text */}

            <p
              className="
                mt-4

                max-w-[520px]

                leading-relaxed

                text-[#8D939D]

                text-[18px]
                sm:text-[20px]
                lg:text-[22px]
              "
            >
              Structured real estate participation —
              accessible, transparent, and documented.
            </p>

            {/* Social */}

            <div className="mt-8 flex flex-wrap gap-8">

              {[
                <FaXTwitter />,
                <FaInstagram />,
                <FaYoutube />,
                <FaFacebookF />,
              ].map((icon, index) => (

                <Link
                  key={index}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    bg-white

                    text-black

                    text-[24px]

                    transition-all
                    duration-300

                    hover:bg-[black]
                    hover:text-white
                  "
                >
                  {icon}
                </Link>

              ))}

            </div>

          </div>

          {/* ================= PLATFORM ================= */}

          <div>

            <h3
              className="
                font-semibold

                text-[24px]
                lg:text-[30px]
              "
            >
              Platform
            </h3>

            <ul
              className="
                mt-8
                space-y-2

                text-[#8D939D]

                text-[20px]
              "
            >
              <li className="hover:text-white cursor-pointer transition">
                What we do
              </li>

              <li className="hover:text-white cursor-pointer transition">
                FAQs
              </li>
            </ul>

          </div>

          {/* ================= COMPANY ================= */}

          <div>

            <h3
              className="
                font-semibold

                text-[24px]
                lg:text-[30px]
              "
            >
              Company
            </h3>

            <ul
              className="
                mt-8
                space-y-2

                text-[#8D939D]

                text-[20px]
              "
            >
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Blog
              </li>

              <li className="hover:text-white cursor-pointer transition">
                T&C
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h3
              className="
                font-semibold

                text-[24px]
                lg:text-[30px]
              "
            >
              Contact
            </h3>

            <ul
              className="
                mt-8
                space-y-2

                text-[#8D939D]

                text-[20px]
              "
            >
              <li className="hover:text-white transition cursor-pointer">
                Contact Us
              </li>

              <li className="break-all hover:text-white transition cursor-pointer">
                support@houseoffrac.com
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* BIG BACKGROUND TEXT */}

      <div
        className="
          pointer-events-none

          absolute
          
          bottom-[1%]
          left-1/2

          -translate-x-1/2

          whitespace-nowrap

          font-black

          uppercase

          leading-none

          text-white/10

          text-[40px]

          sm:text-[100px]

          md:text-[90px]

          lg:text-[120px]

          xl:text-[175px]

          2xl:text-[200px]

          select-none
        "
      >
        HOUSE OF FRAC
      </div>

    </footer>
  );
}