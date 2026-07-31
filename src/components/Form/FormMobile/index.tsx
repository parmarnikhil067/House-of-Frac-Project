import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import CustomInput from '@/components/Base/CustomInput';
import CustomSelect from '@/components/Base/CustomSelect';
import { COUNTRIES } from '@/constants';

type IFormMobileProps = {
  field: {
    name: string;
    label: string;
    placeholder?: string;
    validation?: RegisterOptions;
  };
  control: Control<FieldValues>;
  error?: FieldError;
};

export default function FormMobile({
  field,
  control,
  error,
}: IFormMobileProps) {
  return (
    <div className="mb-4">
      {/* Single label for both fields */}
      <label className="block text-sm font-medium mb-1">{field.label}</label>

      <div className="flex items-baseline gap-0.5">
        <div className="w-1/6">
          {/* Country Code */}
          <Controller
            name={`${field.name}.code`}
            control={control}
            defaultValue="+91"
            rules={{ required: 'Country code is required' }}
            render={({ field: controllerField }) => (
              <CustomSelect
                {...controllerField}
                options={COUNTRIES.map((c) => ({
                  label: c.dial_code,
                  value: c.dial_code,
                }))}
                placeholder="Code"
              />
            )}
          />
        </div>
        <div className="w-5/6">
          {/* Mobile Number */}
          <Controller
            name={`${field.name}.number`}
            control={control}
            rules={field.validation}
            render={({ field: controllerField }) => (
              <CustomInput
                label="" // Label handled above
                type="text"
                value={controllerField.value || ''}
                onChange={controllerField.onChange}
                placeholder={field.placeholder}
                error={error?.message}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
