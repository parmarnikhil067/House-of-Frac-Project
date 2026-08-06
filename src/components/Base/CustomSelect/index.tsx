import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import {useTheme} from "@/context/ThemeContext";

interface ICustomSelectProps {
  value: string | string[];
  onChange: (value: string | string[]) => void;
  onBlur?: () => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  className?: string;
  isMulti?: boolean;
  touched?: boolean;
error?: string;
}

export default function CustomSelect({
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  isMulti,
  touched = false,
error,
}: ICustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        onBlur?.();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onBlur]);

  console.log("Value:", value);
console.log("Options:", options);

  const isSelected = (val: string) =>
    isMulti ? Array.isArray(value) && value.includes(val) : value === val;

  const handleSelect = (val: string) => {
    if (isMulti) {
      const current = Array.isArray(value) ? value : [];
      if (current.includes(val)) {
        onChange(current.filter((v) => v !== val));
      } else {
        onChange([...current, val]);
      }
    } else {
      onChange(val);
      setOpen(false);
    }
  };

const { darkMode } = useTheme();

const selectBg = darkMode ? "bg-[#1C2835]" : "bg-white";

const selectText = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const borderColor = darkMode
  ? "border-[#334252]"
  : "border-[#D8E1EC]";

const hoverBg = darkMode
  ? "hover:bg-[#2B3C52]"
  : "hover:bg-[#F1F5F9]";

const selectedBg = darkMode
  ? "bg-[#2B3C52]"
  : "bg-[#E0F2FE]";

const selectedText = darkMode
  ? "text-white"
  : "text-[#0F172A]";

const optionText = darkMode
  ? "text-[#D5D9E0]"
  : "text-[#475569]";

const iconColor = darkMode
  ? "text-white"
  : "text-[#0F172A]";

  const selectedLabels = isMulti
    ? options
        .filter((opt) => Array.isArray(value) && value.includes(opt.value))
        .map((opt) => opt.label)
        .join(', ')
    : options.find((opt) => opt.value === value)?.label || placeholder;


    console.log("OPTIONS:", options);
  return (
<div
  className="relative w-full overflow-visible"
  ref={ref}
>     <button
  type="button"
  onClick={() => setOpen(!open)}
  className={`
    w-full
    h-full
    px-4
    flex
    items-center
    justify-between
    ${selectBg}
    ${selectText}
    border-0
    rounded-none
    text-base
    lg:text-lg
    transition-all
    focus:outline-none
  `}
>
  <span className={`${selectText} truncate`}>
    {selectedLabels || "+91"}
  </span>

  <ChevronDown
    className={`
      w-5
      h-5
      ${iconColor}
      transition-transform
      ${open ? "rotate-180" : ""}
    `}
  />
</button>

      {open && (
<div
  className={`
  w-full
  h-full
  px-4
  flex
  items-center
  justify-between
  ${selectBg}
  ${selectText}

  ${
    touched && error
      ? "border border-red-500 rounded-2xl"
      : `border ${borderColor} rounded-2xl`
  }

  text-base
  lg:text-lg
  transition-all
  focus:outline-none

  ${
    touched && error
      ? "ring-2 ring-red-500/20"
      : "focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
  }
`}

>          {options.map((opt) => (
  <button
              key={opt.value}
              type="button"
              onClick={() => handleSelect(opt.value)}
              className={`
  w-full
  px-4
  py-3

  text-left

  text-sm
  sm:text-base

  transition-colors

  ${
    isSelected(opt.value)
      ? `${selectedBg} ${selectedText}`
      : `${optionText} ${hoverBg}`
  }
`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {touched && error && (
  <p className="mt-2 text-sm text-red-500">
    {error}
  </p>
)}
    </div>
  );
}
