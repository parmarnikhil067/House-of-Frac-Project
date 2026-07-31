import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
} from 'react-hook-form';
import type { IFormSelectConfig } from '@/interface';
import CustomSelect from '@/components/Base/CustomSelect';

interface IFormSelectProps {
  field: IFormSelectConfig;
  control: Control<FieldValues>;
  error?: FieldError;
}

export default function FormSelect({
  field,
  control,
  error,
}: IFormSelectProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{field.label}</label>

      <Controller
        name={field.name}
        control={control}
        rules={field.validation}
        render={({ field: controllerField }) => (
          <CustomSelect
            {...controllerField}
            options={field.options}
            placeholder={`Select ${field.label}`}
            isMulti={field.multiple}
            className={`w-full p-2 border rounded-lg bg-white focus:outline-none focus:ring-2 ${
              error
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-400'
            }`}
          />
        )}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
