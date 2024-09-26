import Input from "./index";
import { useArgs } from '@storybook/preview-api';

export default {
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    type: 'text'
  },

  tags: ["autodocs"],

  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    function onChange(e) {
        updateArgs({ value: e.target.value });
      }

    return <Input {...args} value={value} onChange={onChange}/>
  }
};

export const Primary = {
  args: {
    label: "username",
  },
};

export const Required = {
  args: {
    required: true,
    label: "username",
  },
};

export const Error = {
  args: {
    label: "username",
    value: "admin@example.com",
    error: "Invalid username",
  },
};
