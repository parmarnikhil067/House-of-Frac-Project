import {
  useForm,
  type FieldError,
  type FieldValues,
  type SubmitHandler,
} from 'react-hook-form';
import { useEffect } from "react";
import type { IFieldConfig, IFormDatepickerConfig } from '@/interface';
import FormSelect from '@/components/Form/FormSelect';
import FormInput from '@/components/Form/FormInput';
import FormTextarea from '@/components/Form/FormTextarea';
import FormCheckbox from '@/components/Form/FormCheckbox';
import FormRadio from '@/components/Form/FormRadio';
import FormDatepicker from './FormDatePicker';
import FormMobile from './FormMobile';

interface IFormProps {
  fields: IFieldConfig[];
  onSubmit: SubmitHandler<FieldValues>;
  width?: "max-w-md";
  onValuesChange?: (values: FieldValues) => void;
  formId?: string;
}

export default function Form({
  fields,
  onSubmit,
  width = 'max-w-md',
   onValuesChange,
     formId,
}: IFormProps) {
 const {
  control,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm({
  mode: "onChange",
  reValidateMode: "onChange",
});

 const values = watch();

useEffect(() => {
  onValuesChange?.({ ...values });
}, [JSON.stringify(values)]);

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
            error={errors}            
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
  id={formId}
  onSubmit={handleSubmit(onSubmit)}
  className={`${width} mx-auto`}
>
  {fields.map(renderField)}
</form>
  );
}
