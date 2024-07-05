import { useForm,useFieldArray } from "react-hook-form";

const ReactHookForm = () => {
    const {fields,append,remove} =useFieldArray()
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    trigger,
    setValue,
    formState: { errors,touchedFields,dirtyFields,isDirty,isValid,isSubmitting,isSubmitSuccessful,isSubmitted,submitCount },
    watch
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
    },
    mode:"onBlur"
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (errors) => {
    console.log(errors);
  };
  setValue('email', "salim@gmail.com")
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit,onError)}>
        <label htmlFor="">adasdas</label>
        <input
          type="text"
          {...register("email", {
            required: {
              value: true,
              message: "email is required please enter",
            },valueAsNumber: true
          })}
        />
        <p>{errors?.email.message}</p>
        <label htmlFor="" {...register("social.instagram")}>adasdas</label>
        <input type="text" />
        <label htmlFor="" {...register("phoneNumber.0",{disabled: watch("email") == ""})}>adasdas</label>
        <input type="text" />
        <button type="submit" disabled={!isDirty || !isValid}>sdjkds</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
