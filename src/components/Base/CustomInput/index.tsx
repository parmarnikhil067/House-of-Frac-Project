import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface CustomInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  noBorder?: boolean;
  hideError?: boolean; 
   touched?: boolean;
}

export default function CustomInput({
  label,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  noBorder = false,
  touched = false,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { darkMode } = useTheme();
  const showError = touched && !!error;

const labelColor = darkMode ? "text-white" : "text-[#0F172A]";

const inputBg = darkMode ? "bg-[#1C2835]" : "bg-white";

const inputText = darkMode ? "text-white" : "text-[#0F172A]";

const placeholderColor = darkMode
  ? "placeholder:text-[#727D8A]"
  : "placeholder:text-[#94A3B8]";

const borderColor = darkMode
  ? "border-[#334252]"
  : "border-[#D8E1EC]";

const focusBorder = darkMode
  ? "focus:border-[#5B9BF3] focus:ring-[#5B9BF3]/20"
  : "focus:border-[#2563EB] focus:ring-[#2563EB]/20";

const iconColor = darkMode
  ? "text-[#727D8A] hover:text-white"
  : "text-[#94A3B8] hover:text-[#0F172A]";

  const isPassword = type === "password";
  const isMobile = type === "tel";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (isMobile) {
      // Allow only numbers
      inputValue = inputValue.replace(/\D/g, "");

      // Maximum 10 digits
      inputValue = inputValue.slice(0, 10);
    }

    onChange(inputValue);
  };

  return (
    <div className={`${noBorder ? "w-full h-full" : "w-full mb-5"}`}>
      {label && (
        <label
          className={`
            block
            mb-3
            ${labelColor}
            font-semibold
            text-sm
            sm:text-base
            lg:text-lg
          `}
        >
          {label}
        </label>
      )}

      <div className="relative h-full">
        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : isMobile
              ? "tel"
              : type
          }
          value={value}
          onBlur={onBlur}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          inputMode={isMobile ? "numeric" : undefined}
          maxLength={isMobile ? 10 : undefined}
          className={`
            w-full

            ${
              noBorder
                ? "h-full"
                : "h-14 sm:h-[58px] lg:h-[60px]"
            }

            ${
              noBorder
                ? "bg-transparent"
                : inputBg
            }

       ${
  noBorder
    ? "border-0 rounded-none"
    : showError
    ? "border border-red-500 rounded-2xl focus:ring-2 focus:ring-red-500/20"
    : `border ${borderColor} rounded-2xl focus:ring-2 ${focusBorder}`
}

            outline-none

${inputText}
${placeholderColor}
            text-sm
            sm:text-base
            lg:text-lg

            pl-5
            ${isPassword ? "pr-14" : "pr-5"}

            transition-all
            duration-300
          `}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className={`
              absolute
              right-5
              top-1/2
              -translate-y-1/2

${iconColor}
              hover:text-white

              transition-colors
            `}
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>

{showError && (
  <p className="mt-2 text-sm text-red-500">
    {error}
  </p>
)}
    </div>
  );
}