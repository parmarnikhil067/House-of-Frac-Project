import { useState, useRef, useEffect } from 'react';

interface ICustomSelectProps {
  value: string | string[];
  onChange: (value: string | string[]) => void;
  onBlur?: () => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  className?: string;
  isMulti?: boolean;
}

export default function CustomSelect({
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  isMulti,
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

  const selectedLabels = isMulti
    ? options
        .filter((opt) => Array.isArray(value) && value.includes(opt.value))
        .map((opt) => opt.label)
        .join(', ')
    : options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className="relative w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full p-2 border rounded-lg border-gray-300 bg-white text-left text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      >
        {selectedLabels || placeholder}
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`p-2 text-sm cursor-pointer hover:bg-blue-50 ${
                isSelected(opt.value) ? 'bg-blue-100 font-semibold' : ''
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
