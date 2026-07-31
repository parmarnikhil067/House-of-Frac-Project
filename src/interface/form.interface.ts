import type { loginFormConfig, signupFormConfig } from '@/config/form.config';
import type { RegisterOptions } from 'react-hook-form';

type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'mobile'
  | 'number'
  | 'date'
  | 'file'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'datepicker';

interface IBaseField<T> {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  defaultValue?: T;
  validation?: RegisterOptions;
  disabled?: boolean;
  required?: boolean;
}

export interface IFormInputConfig extends IBaseField<string | number | File> {
  type: 'text' | 'email' | 'password' | 'number' | 'date' | 'file';
}

export interface IFormTextareaConfig extends IBaseField<string> {
  type: 'textarea';
  rows?: number;
}

export interface IFormSelectConfig extends IBaseField<string> {
  type: 'select';
  options: { label: string; value: string }[];
  multiple?: boolean;
}

export interface IFormCheckboxConfig extends IBaseField<boolean> {
  type: 'checkbox';
}

export interface IFormRadioConfig extends IBaseField<string> {
  type: 'radio';
  options: { label: string; value: string }[];
}

export interface IFormDatepickerConfig extends IBaseField<string> {
  type: 'datepicker';
  minDate?: Date;
  maxDate?: Date;
}

export interface IFormMobileConfig
  extends IBaseField<{ code: string; number: string }> {
  type: 'mobile';
  placeholder?: string;
}

export type IFieldConfig =
  | IFormInputConfig
  | IFormTextareaConfig
  | IFormSelectConfig
  | IFormCheckboxConfig
  | IFormRadioConfig
  | IFormDatepickerConfig
  | IFormMobileConfig;

type FormDataFromConfig<T extends { name: string; type: FieldType }[]> = {
  [K in T[number] as K['type'] extends 'mobile'
    ? K['name']
    : K['name']]: K['type'] extends 'mobile'
    ? { code: string; number: string }
    : string;
};

export type ISignupFormSubmitData = FormDataFromConfig<typeof signupFormConfig>;
export type ILoginFormSubmitData = FormDataFromConfig<typeof loginFormConfig>;
