import Button from ".";

export default {
  title: "Button",
  parameters: {
    layout: "centered",
  },
  component: Button,
  args: {},

  tags: ["autodocs"],
  render: (args) => {
    return <Button {...args}></Button>;
  },
};

export const Primary = {
  args: {
    children: "true",
  },
};
