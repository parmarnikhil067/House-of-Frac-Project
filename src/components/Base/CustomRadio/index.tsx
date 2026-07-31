interface IRadioOption {
  label: string;
  value: string;
}

interface ICustomRadioProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: IRadioOption[];
}

export default function CustomRadio({
  label,
  value,
  onChange,
  options,
}: ICustomRadioProps) {
  return (
    <div>
      <span className="block text-sm font-medium mb-1">{label}</span>
      <div className="flex flex-col">
        {options.map((opt) => (
          <label key={opt.value} className="inline-flex items-center">
            <input
              type="radio"
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="mr-2"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
