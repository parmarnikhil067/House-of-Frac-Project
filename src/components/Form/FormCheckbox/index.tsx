import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
} from 'react-hook-form';
import type { IFormCheckboxConfig } from '@/interface';
import CustomCheckbox from '@/components/Base/CustomCheckbox';

interface IFormCheckboxProps {
  field: IFormCheckboxConfig;
  control: Control<FieldValues>;
  error?: FieldError;
}

export default function FormCheckbox({
  field,
  control,
  error,
}: IFormCheckboxProps) {
  return (
    <div className="mb-4">
      <Controller
        name={field.name}
        control={control}
        rules={field.validation}
        render={({ field: controllerField }) => (
          <CustomCheckbox
            label={field.label}
            checked={controllerField.value || false}
            onChange={controllerField.onChange}
          />
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
