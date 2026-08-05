import {
  Controller,
   useController,
  type Control,
  type FieldErrors,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form';
import CustomInput from '@/components/Base/CustomInput';
import CustomSelect from '@/components/Base/CustomSelect';
import { COUNTRIES } from '@/constants';
import { useTheme } from "@/context/ThemeContext";

type IFormMobileProps = {
  field: {
    name: string;
    label: string;
    placeholder?: string;
    validation?: RegisterOptions;
  };
  control: Control<FieldValues>;
    error?: FieldErrors;
};



export default function FormMobile({
  field,
  control,
}: IFormMobileProps) {

  const {
  fieldState: { error: mobileError },
} = useController({
  name: `${field.name}.number`,
  control,
  rules: field.validation,
});

const { darkMode } = useTheme();

const wrapperBg = darkMode ? "bg-[#1C2835]" : "bg-white";

const wrapperBorder = darkMode
  ? "border-[#334252]"
  : "border-[#D8E1EC]";

const dividerColor = darkMode
  ? "bg-[#3A4755]"
  : "bg-[#D8E1EC]";

const labelColor = darkMode
  ? "text-white"
  : "text-[#0F172A]";

  return (
    <div className="mb-4">
      {/* Single label for both fields */}
<label
  className={`
    block
    text-sm
    lg:text-lg
    font-medium
    mb-3
    ${labelColor}
  `}
>
  {field.label}
</label>

<div
 className={`
  flex
  items-center
  w-full
  h-14
  rounded-2xl
  border
  ${wrapperBorder}
  ${wrapperBg}
  focus-within:border-[#5B9BF3]
  focus-within:ring-2
  focus-within:ring-[#5B9BF3]/20
  transition-all
 ${
    mobileError
      ? "border border-red-500"
      : "border border-[#334252] focus-within:border-[#5B9BF3]"
  }
`}
>        <div className="w-[110px] shrink-0">
  <Controller
    name={`${field.name}.code`}
    control={control}
    defaultValue="+91"
    rules={{ required: "Country code is required" }}
    render={({ field: controllerField }) => (
      <CustomSelect
        {...controllerField}
        options={COUNTRIES.map((c) => ({
          label: c.code,
    value: c.code,
        }))}
        placeholder="Code"
      />
    )}
  />
</div>
<div className={`w-px h-6 ${dividerColor}`} />
        <div className="flex-1">
  <Controller
    name={`${field.name}.number`}
    control={control}
    rules={field.validation}
    render={({ field: controllerField ,fieldState  }) => (
      
      <CustomInput
        label=""
        type="tel"
        value={controllerField.value || ""}
        onChange={controllerField.onChange}
        onBlur={controllerField.onBlur}
        placeholder={field.placeholder}
         error={fieldState.error?.message}
        noBorder
          hideError 
      />
     
    )}
  />
</div>

      </div>

       {/*  Validation */}
  {mobileError && (
  <p className="mt-2 text-sm text-red-500">
    {mobileError.message}
  </p>
)}
      
    </div>
  );
}
