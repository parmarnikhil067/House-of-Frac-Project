import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const faqs = [
  {
    question: "What is House of Frac?",
    answer:
      "House of Frac is a technology-enabled platform that connects prospective co-owner with structured, professionally verified real estate participation opportunities in India. We make high-quality real estate accessible — with complete documentation, KYC compliance, and digital dashboards — starting at participation amounts that do not require large-ticket capital deployment.",
  },
  {
    question: "How is participation structured legally?",
    answer:
      "Each asset opportunity is structured through a Special Purpose Vehicle — a dedicated legal entity (private limited company or LLP) that holds the underlying property. Prospective co-owner hold equity shares or in any other form in the SPV, as defined in the participation documents. This structure is governed by the Companies Act, 2013 or LLP Act, 2008.",
  },
  {
    question: "What is the minimum participation amount?",
    answer:
      "The minimum participation amount varies by asset opportunity and is disclosed clearly in each asset listing. All minimums are specified in the asset documentation before any commitment is required.",
  },
  {
    question: "Are the returns guaranteed?",
    answer:
      "No. Projected returns shown in asset listings are indicative estimates based on available data at the time of listing. Actual returns may vary depending on asset performance, market conditions, and other factors. We encourage all prospective co-owner to read the risk disclosures for each opportunity carefully before participating.",
  },
  {
    question: "What happens to my participation if House of Frac shuts down?",
    answer:
      "Your participation is in the SPV that holds the underlying asset — not in House of Frac directly. The SPV is an independent legal entity that continues to exist irrespective of the platform's operational status. In such a scenario, the SPV, trustee arrangements, and applicable law govern the continued management and exit of the asset.",
  },
  {
    question: "How do I exit my participation?",
    answer:
      "Exit options are defined in the individual transaction documentation for each asset which may include share transfer to other members, resale through the platform’s member bulletin board, or asset sale by SPV shareholder vote. Your exit path is clearly specified before you commit.",
  },
  {
    question: "Is my personal data safe?",
    answer:
      "House of Frac collects and processes personal data in compliance with applicable Indian data protection laws, as described in our Privacy Policy. KYC documents and financial details are stored securely and shared only with authorised parties for transaction processing, regulatory compliance, or legal obligations.",
  },
  {
    question: "How do I get support?",
    answer:
      "You can write to us at support@houseoffrac.com or use the Contact Us form on the website. We aim to respond to all queries within two business days.",
  },
];

const containerVariant = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.7,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const FAQSection = () => {
  const {darkMode} = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={`
        w-full
        overflow-hidden

        py-16
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      ${
      darkMode
        ? "bg-[#090909]"
        : "bg-[#F7F8FC]"
    }
  `}
    >
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          mx-auto
          w-full
          max-w-[1700px]

          px-5
          sm:px-5
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* Heading */}

        <motion.div
          variants={itemVariant}
          className="text-center"
        >
          <h2
            className={`
              font-bold

              text-[30px]
              sm:text-[30px]
              md:text-[35px]
              lg:text-[42px]
              xl:text-[48px]

              leading-tight
            ${darkMode ? "text-white" : "text-black"}
`}
          >
            Frequently Asked Questions
          </h2>

         
        </motion.div>

        {/* FAQ List */}

        <div
          className="
            mt-14
            sm:mt-14
            lg:mt-18

            space-y-2
          "
        >
            {faqs.map((faq, index) => {
  const isOpen = activeIndex === index;

  return (
    <motion.div
      key={index}
      variants={itemVariant}
      className="
        group
        relative

        overflow-hidden

        py-2
        sm:py-2
        md:py-3
        lg:py-5
      "
    >
      {/* Hover Blue Line */}

      <span
        className="
          absolute
          bottom-0
          left-0

          h-[1px]
          w-full

          bg-[#4D97F7]

          origin-left

          transition-transform
          duration-2000
          ease-in-out

          group-hover:scale-x-0
        "
      />

      {/* Question */}

      <button
        onClick={() => toggleFAQ(index)}
        className="
          flex
          w-full
          items-center
          justify-between

          gap-5

          text-left

          transition-all
          duration-300
        "
      >
        <h3
          className={`
            flex-1

            transition-colors
            duration-300


            text-[18px]
            sm:text-[18px]
            md:text-[20px]
            lg:text-[24px]
            xl:text-[27px]

            leading-snug
          ${darkMode ? "text-white/80" : "text-black"}
`}
        >
          {faq.question}
        </h3>

        {/* Plus / Minus */}

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: .35,
          }}
          className="
            flex

            h-5
            w-5

            sm:h-5
            sm:w-5

            lg:h-7
            lg:w-7

            items-center
            justify-center

            rounded-full

            border
            border-[#4D97F7]

            text-[#4D97F7]

            shrink-0
          "
        >
          {isOpen ? (
            <Minus
              className="
                h-5
                w-5

                lg:h-6
                lg:w-6
              "
            />
          ) : (
            <Plus
              className="
                h-5
                w-5

                lg:h-6
                lg:w-6
              "
            />
          )}
        </motion.div>
      </button>

      {/* Answer */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: .4,
            }}
            className="overflow-hidden"
          >
            <p
              className={`
                max-w-[1200px]

                pt-4

                font-semibold

                leading-relaxed

                text-[15px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[18px]
              
${darkMode ? "text-white/90" : "text-black"}
`}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
})}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
        