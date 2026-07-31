import {
  Controller,
  type FieldError,
  type Control,
  type FieldValues,
} from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type { IFormDatepickerConfig } from '@/interface';

interface IFormDatepickerProps {
  field: IFormDatepickerConfig;
  control: Control<FieldValues>;
  error?: FieldError;
}

export default function FormDatepicker({
  field,
  control,
  error,
}: IFormDatepickerProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{field.label}</label>
      <Controller
        control={control}
        name={field.name}
        rules={field.validation}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            selected={value}
            onChange={onChange}
            className="w-full border rounded-md p-2 border-[#d1d5dc]"
            dateFormat="MM/dd/yyyy"
            placeholderText={field.placeholder}
            minDate={field.minDate}
            maxDate={field.maxDate}
          />
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
