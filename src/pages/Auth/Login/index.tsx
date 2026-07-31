import DynamicForm from '@/components/Form';
import { loginFormConfig } from '@/config';
import type { ILoginFormSubmitData } from '@/interface';
import { type JSX } from 'react';

export default function Login(): JSX.Element {
  const handleSubmit = (data: ILoginFormSubmitData) => {
    console.log(data);
  };
  return (
    <div>
      Login Form
      <DynamicForm fields={loginFormConfig} onSubmit={handleSubmit} />
    </div>
  );
}
