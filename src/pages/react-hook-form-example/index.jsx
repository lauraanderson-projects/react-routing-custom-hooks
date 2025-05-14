import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {} = useForm();

  return (
    <div>
      <h1>React Hook Form</h1>
      <form>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookForm;
