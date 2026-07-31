import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
} from 'react-hook-form';
import type { IFormTextareaConfig } from '@/interface';
import CustomTextarea from '@/components/Base/CustomTextarea';

interface IFormTextareaProps {
  field: IFormTextareaConfig;
  control: Control<FieldValues>;
  error?: FieldError;
}

export default function FormTextarea({
  field,
  control,
  error,
}: IFormTextareaProps) {
  return (
    <div className="mb-4">
      <Controller
        name={field.name}
        control={control}
        rules={field.validation}
        render={({ field: controllerField }) => (
          <CustomTextarea
            label={field.label}
            value={controllerField.value || ''}
            onChange={controllerField.onChange}
            placeholder={field.placeholder}
            rows={field.rows}
            error={error?.message}
          />
        )}
      />
    </div>
  );
}
