import {
  Controller,
  type Control,
  type FieldValues,
} from "react-hook-form";

import type { IFormTextareaConfig } from "@/interface";
import CustomTextarea from "@/components/Base/CustomTextarea";

interface IFormTextareaProps {
  field: IFormTextareaConfig;
  control: Control<FieldValues>;
}

export default function FormTextarea({
  field,
  control,
}: IFormTextareaProps) {
  return (
    <div className="mb-4">
      <Controller
        name={field.name}
        control={control}
        defaultValue=""
        rules={field.validation}
        render={({ field: controllerField, fieldState }) => (
          <CustomTextarea
            label={field.label}
            value={controllerField.value || ""}
            onChange={controllerField.onChange}
            onBlur={controllerField.onBlur}
            placeholder={field.placeholder}
            rows={field.rows}
            touched={fieldState.isTouched}
            error={fieldState.error?.message}
          />
        )}
      />
    </div>
  );
}