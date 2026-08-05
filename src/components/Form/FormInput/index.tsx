import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
} from 'react-hook-form';
import type { IFormInputConfig } from '../../../interface';
import CustomInput from '@/components/Base/CustomInput';

type IFormInputProps = {
  field: IFormInputConfig;
  control: Control<FieldValues>;
  error?: FieldError;
};

export default function FormInput({ field, control, error }: IFormInputProps) {
  return (
    <div className="mb-4">
      <Controller
        name={field.name}
        control={control}
        defaultValue=""
        rules={field.validation}
        render={({ field: controllerField }) => (
          <CustomInput
            label={field.label}
            type={field.type}
            value={controllerField.value || ''}
            onChange={controllerField.onChange}
            onBlur={controllerField.onBlur}
            placeholder={field.placeholder}
            error={error?.message}
          />
        )}
      />
    </div>
  );
}
