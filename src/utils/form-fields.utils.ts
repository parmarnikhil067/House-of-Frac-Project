import type { IFieldConfig } from '@/interface';
import type { RegisterOptions } from 'react-hook-form';

// ✅ Text field
export const createTextField = (options: {
  name: string;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'text',
  placeholder: options.placeholder ?? `Enter ${options.label.toLowerCase()}`,
  validation: options.validation ?? {
    required: `${options.name} is required`,
    minLength: { value: 3, message: 'At least 3 chars' },
  },
});

// ✅ Email field
export const createEmailField = (options: {
  name: string;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'email',
  placeholder: options.placeholder ?? 'Enter your email',
  validation: options.validation ?? {
    required: `${options.label} is required`,
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: 'Please enter a valid email address',
    },
  },
});

// ✅ Password field
export const createPasswordField = (options: {
  name: string;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'password',
  placeholder: options.placeholder ?? 'Enter password',
  validation: options.validation ?? {
    required: `${options.label} is required`,
    minLength: { value: 6, message: 'Min 6 chars' },
  },
});

// ✅ Select field
export const createSelectField = (options: {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  multiple?: boolean;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'select',
  options: options.options,
  multiple: options.multiple ?? false,
  validation: options.validation ?? {
    required: `${options.label} is required`,
  },
});

// ✅ Textarea field
export const createTextareaField = (options: {
  name: string;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'textarea',
  placeholder: options.placeholder ?? `Enter ${options.label.toLowerCase()}`,
  validation: options.validation ?? {
    maxLength: { value: 200, message: 'Max 200 characters allowed' },
    required: `${options.label} is required`,
  },
});

// ✅ Checkbox field
export const createCheckboxField = (options: {
  name: string;
  label: string;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'checkbox',
  validation: options.validation ?? {
    required: `${options.label} is required`,
  },
});

// ✅ Radio field
export const createRadioField = (options: {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'radio',
  options: options.options,
  validation: options.validation ?? {
    required: `${options.label} is required`,
  },
});

// ✅ Datepicker field
export const createDatepickerField = (options: {
  name: string;
  label: string;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'datepicker',
  validation: options.validation ?? {
    required: `${options.label} is required`,
  },
});

// ✅ File field
export const createFileField = (options: {
  name: string;
  label: string;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'file',
  validation: options.validation ?? {
    required: `${options.label} is required`,
  },
});

// ✅ Mobile field
export const createMobileField = (options: {
  name: string;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions;
}): IFieldConfig => ({
  name: options.name,
  label: options.label,
  type: 'mobile',
  placeholder: options.placeholder ?? 'Enter mobile number',
  validation: options.validation ?? {
    required: `${options.label} is required`,
    pattern: {
      value: /^[0-9]{6,14}$/, // simple regex for mobile number
      message: 'Please enter a valid mobile number',
    },
  },
});
