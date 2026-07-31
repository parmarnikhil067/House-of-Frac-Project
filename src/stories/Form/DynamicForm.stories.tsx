import { type Meta, type StoryObj } from '@storybook/react-vite';
import DynamicForm from '@/components/Form';
import { type FieldValues } from 'react-hook-form';
import type { IFieldConfig } from '@/interface';

const meta: Meta<typeof DynamicForm> = {
  title: 'Forms/DynamicForm',
  component: DynamicForm,
};

export default meta;
type Story = StoryObj<typeof DynamicForm>;

// Example form 1: Basic input + select
export const BasicForm: Story = {
  render: () => {
    const fields: IFieldConfig[] = [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name',
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
      },
    ];

    const handleSubmit = (data: FieldValues) => {
      alert(JSON.stringify(data, null, 2));
    };

    return <DynamicForm fields={fields} onSubmit={handleSubmit} />;
  },
};

// Example form 2: Radio + Checkbox + Textarea
export const AdvancedForm: Story = {
  render: () => {
    const fields: IFieldConfig[] = [
      {
        name: 'subscription',
        label: 'Subscription Type',
        type: 'radio',
        options: [
          { label: 'Free', value: 'free' },
          { label: 'Premium', value: 'premium' },
        ],
      },
      {
        name: 'terms',
        label: 'Accept Terms',
        type: 'checkbox',
      },
      {
        name: 'comments',
        label: 'Comments',
        type: 'textarea',
        placeholder: 'Your comments here...',
      },
    ];

    const handleSubmit = (data: FieldValues) => {
      alert(JSON.stringify(data, null, 2));
    };

    return <DynamicForm fields={fields} onSubmit={handleSubmit} />;
  },
};

// Example form 3: Input + Datepicker + Select (mixed)
export const FullForm: Story = {
  render: () => {
    const fields: IFieldConfig[] = [
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        name: 'birthday',
        label: 'Birthday',
        type: 'datepicker',
      },
      {
        name: 'country',
        label: 'Country',
        type: 'select',
        options: [
          { label: 'USA', value: 'usa' },
          { label: 'Canada', value: 'canada' },
          { label: 'UK', value: 'uk' },
        ],
      },
    ];

    const handleSubmit = (data: FieldValues) => {
      alert(JSON.stringify(data, null, 2));
    };

    return <DynamicForm fields={fields} onSubmit={handleSubmit} />;
  },
};
