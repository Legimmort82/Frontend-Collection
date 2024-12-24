import Form from "./Form";
import { useForm } from "react-hook-form";
import { InputField, SelectField } from "./fields";
import { useState } from "react";

export default {
  parameters: {
    layout: "centered",
  },

    tags: ["autodocs"],

  render: () => {
    const [data, setData] = useState({});

    const methods = useForm({
      defaultValues: {
        email: "",
        username: "",
        country: "",
        role_id: "",
      },
    });

    const handleSubmit = (newData) => {
      console.log(newData);
      setData(newData);
    };

    return (
      <div className="min-w-96 bg-slate-100 px-4 py-6">
        <Form
          methods={methods}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <InputField name="username" label="username" required />
          <InputField name="email" label="email" required />
          <SelectField
            placeholder="Country"
            name="country"
            z={true}
            getValue={(value) => {
              methods.setValue("country", value);
            }}
            required
            options={[
              { name: "Iran" },
              { name: "Germany" },
              { name: "Italy" },
              { name: "England" },
            ]}
          />
          <SelectField
            placeholder="Country"
            name="country"
            getValue={(value) => {
              methods.setValue("role_id", value);
            }}
            required
            options={[
              { name: "Iran" },
              { name: "Germany" },
              { name: "Italy" },
              { name: "England" },
            ]}
          />
          <button type="submit">Submit</button>
        </Form>

        <div className="mt-8">
          <div>submitted data:</div>
          <pre className="bg-gray-200 px-4 py-2 font-mono">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

export const From = {
  args: {},
};
