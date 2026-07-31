import {
  useForm,
  type FieldError,
  type FieldValues,
  type SubmitHandler,
} from 'react-hook-form';
import type { IFieldConfig, IFormDatepickerConfig } from '@/interface';
import FormSelect from '@/components/Form/FormSelect';
import FormInput from '@/components/Form/FormInput';
import FormTextarea from '@/components/Form/FormTextarea';
import FormCheckbox from '@/components/Form/FormCheckbox';
import FormRadio from '@/components/Form/FormRadio';
import CustomButton, {
  type ICustomButtonProps,
} from '@/components/Base/CustomButton';
import FormDatepicker from '@/components/Form/FormDatepicker';
import FormMobile from './FormMobile';

interface IFormProps {
  fields: IFieldConfig[];
  onSubmit: SubmitHandler<FieldValues>;
  width?: 'max-w-md';
  button?: {
    variant?: ICustomButtonProps['variant'];
    label?: string;
  };
}

export default function Form({
  fields,
  onSubmit,
  width = 'max-w-md',
  button = {
    variant: 'primary',
    label: 'Submit',
  },
}: IFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderField = (field: IFieldConfig) => {
    switch (field.type) {
      case 'select':
        return (
          <FormSelect
            key={field.name}
            field={field}
            control={control}
            error={errors[field.name] as FieldError}
          />
        );
      case 'textarea':
        return (
          <FormTextarea
            key={field.name}
            field={field}
            control={control}
            error={errors[field.name] as FieldError}
          />
        );
      case 'checkbox':
        return (
          <FormCheckbox
            key={field.name}
            field={field}
            control={control}
            error={errors[field.name] as FieldError}
          />
        );
      case 'radio':
        return (
          <FormRadio
            key={field.name}
            field={field}
            control={control}
            error={errors[field.name] as FieldError}
          />
        );
      case 'datepicker': {
        const datepickerField = field as IFormDatepickerConfig;
        return (
          <FormDatepicker
            key={datepickerField.name}
            field={datepickerField}
            control={control}
            error={errors[datepickerField.name] as FieldError}
          />
        );
      }
      case 'mobile':
        return (
          <FormMobile
            key={field.name}
            field={field}
            control={control}
            error={errors[field.name] as FieldError}
          />
        );
      default:
        return (
          <FormInput
            key={field.name}
            field={field}
            control={control}
            error={errors[field.name] as FieldError}
          />
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${width} mx-auto bg-white shadow-md rounded-xl p-6`}
    >
      {fields.map(renderField)}

      <CustomButton
        type="submit"
        variant={button['variant']}
        className="w-full"
      >
        {button['label']}
      </CustomButton>
    </form>
  );
}
