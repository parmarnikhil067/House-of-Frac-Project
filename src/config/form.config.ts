import { COUNTRIES } from '@/constants';
import type { IFieldConfig } from '@/interface';
import {
  createCheckboxField,
  createDatepickerField,
  createEmailField,
  createMobileField,
  createPasswordField,
  createRadioField,
  createSelectField,
  createTextareaField,
  createTextField,
} from '@/utils';

/////////////////////////////////////////////////////////
/*
  Signup Form Config
*/

export const signupFormConfig: IFieldConfig[] = [
  createTextField({
    name: 'firstname',
    label: 'First Name',
    placeholder: 'Enter your first name',
  }),
  createTextField({
    name: 'lastname',
    label: 'Last Name',
    placeholder: 'Enter your last name',
  }),
  createEmailField({
    name: 'email',
    label: 'Email',
    placeholder: 'Enter Email',
  }),
  createMobileField({
    name: 'mobile',
    label: 'Mobile Number',
  }),
  createSelectField({
    name: 'country',
    label: 'Country',
    options: COUNTRIES.map((country) => ({
      label: country.name,
      value: country.code,
    })),
  }),
  createTextareaField({
    name: 'about',
    label: 'About',
  }),
  createRadioField({
    name: 'gender',
    label: 'Gender',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
  }),
  createDatepickerField({
    name: 'dob',
    label: 'Date of Birth',
  }),
  createPasswordField({
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
  }),
  createPasswordField({
    name: 'confirm-password',
    label: 'Confirm Password',
    placeholder: 'Enter password',
  }),
  createCheckboxField({
    name: 'terms',
    label: 'I accept the Terms & Conditions',
  }),
];

/////////////////////////////////////////////////////////
/*
  Login Form Config
*/

export const loginFormConfig: IFieldConfig[] = [
  createEmailField({
    name: 'email',
    label: 'Email',
    placeholder: 'Enter Email',
  }),
  createPasswordField({
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
  }),
];
