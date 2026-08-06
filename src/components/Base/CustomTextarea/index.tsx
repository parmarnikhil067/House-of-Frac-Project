interface CustomTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  rows?: number;
  error?: string;
  touched?: boolean;
}

export default function CustomTextarea({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  rows = 4,
  error,
  touched = false,
}: CustomTextareaProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea
  value={value}
  onChange={(e) => onChange(e.target.value)}
  onBlur={onBlur}
  rows={rows}
  placeholder={placeholder}
  className={`
    w-full
    rounded-2xl
    border
    p-4
    outline-none
    transition-all

    ${
      touched && error
        ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
        : "border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
    }
  `}
/>
      {touched && error && (<p className="text-red-500 text-sm mt-1">{error}</p>)}
    </div>
  );
}
