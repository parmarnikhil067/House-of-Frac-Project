import {
  Controller,
  type Control,
  type FieldValues,
} from "react-hook-form";

import type { IFormSelectConfig } from "@/interface";
import CustomSelect from "@/components/Base/CustomSelect";

interface IFormSelectProps {
  field: IFormSelectConfig;
  control: Control<FieldValues>;
}

export default function FormSelect({
  field,
  control,
}: IFormSelectProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">
        {field.label}
      </label>

      <Controller
        name={field.name}
        control={control}
        defaultValue={field.multiple ? [] : ""}
        rules={field.validation}
        render={({ field: controllerField, fieldState }) => (
          <>
            <CustomSelect
              {...controllerField}
              options={field.options}
              placeholder={`Select ${field.label}`}
              isMulti={field.multiple}
              touched={fieldState.isTouched}
              error={fieldState.error?.message}
            />

            {fieldState.isTouched && fieldState.error && (
              <p className="mt-2 text-sm text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}