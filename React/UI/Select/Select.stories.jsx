import Select from "./index";
import { useArgs } from '@storybook/preview-api';

export default {
    component: Select,
    parameters: {
      layout: "centered",
    },
    args: {
    //   type: 'text'
    },
  
    tags: ["autodocs"],
  
    render: (args) => {
      const [{ value }, updateArgs] = useArgs();
  
      function onChange(e) {
          updateArgs({ value: e.target.value });
        }
  
      return <Select {...args} value={value} onChange={onChange}/>
    }
  };
  
  export const CountrySelect = {
    args: {
      placeholder: "Country",
      options: [{name: "Iran"}, {name:"Germany"}, {name:"Italy"}, {name:"England"}]
    },
  };
  export const RoleSelect = {
    args: {
      placeholder: "Your role",
      options: [{role: "Buyer"}, {role:"Seller"}, {role:"Merchant"}, {role:"BusinessMan"}],
      required: true,
    },
  };
  