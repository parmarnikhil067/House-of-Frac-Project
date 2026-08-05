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
    name: "email",
    label: "Email",
    placeholder: "Enter Email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },
  }),

   createMobileField({
  name: "mobile",
  label: "Mobile",
  placeholder: "Enter Your Mobile Number",
  validation: {
    required: "Mobile number is required",
    pattern: {
      value: /^[6-9]\d{9}$/,
      message: "Please enter a valid 10-digit phone number",
    },
  },
}),

  createPasswordField({
    name: "password",
    label: "Password",
    placeholder: "Enter Password",
    validation: {
      required: "Password is required",
      pattern: {
        value:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/,
        message:
          "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.",
      },
    },
  }),
];

/*
  Login Form Config
*/

export const forgotPasswordConfig = [
  createEmailField({
    name: "email",
    label: "Email Address",
    placeholder: "Enter Your Email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email",
      },
    },
  }),

  createMobileField({
    name: "mobile",
    label: "Mobile Number",
    placeholder: "Enter Mobile Number",
    validation: {
      required: "Phone number is required",
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: "Please enter a valid phone number",
      },
    },
  }),
];
