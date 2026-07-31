import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
} from 'react-hook-form';
import type { IFormRadioConfig } from '@/interface';
import CustomRadio from '@/components/Base/CustomRadio';

interface IFormRadioProps {
  field: IFormRadioConfig;
  control: Control<FieldValues>;
  error?: FieldError;
}

export default function FormRadio({ field, control, error }: IFormRadioProps) {
  return (
    <div className="mb-4">
      <Controller
        name={field.name}
        control={control}
        rules={field.validation}
        render={({ field: controllerField }) => (
          <CustomRadio
            label={field.label}
            value={controllerField.value}
            onChange={controllerField.onChange}
            options={field.options || []}
          />
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
