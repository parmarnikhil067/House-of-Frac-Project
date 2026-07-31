import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ICustomDatepickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
}

export default function CustomDatepicker({
  value,
  onChange,
  placeholder,
  className,
  minDate,
  maxDate,
}: ICustomDatepickerProps) {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      className={className || 'w-full border rounded-md p-2'}
      dateFormat="MM/dd/yyyy"
      placeholderText={placeholder}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
}
