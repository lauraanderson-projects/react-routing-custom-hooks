import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmitForm(formData) {
    console.log("Form Data", formData);
    // Simulate a form submission
    //you can replace this with an actual API call
    reset();
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red" }}>Email is required</p>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", { required: true, minLength: 7 })}
            type="password"
            name="password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p style={{ color: "red" }}>Password is required</p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p style={{ color: "red" }}>
              Password must be at least 5 characters
            </p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookForm;
