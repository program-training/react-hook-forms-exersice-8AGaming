import { useForm } from "react-hook-form";

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   alert(JSON.stringify(formData));
  // };

  return (
    <>
      <div id="background"></div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(
            `Username:${data.username}\nEmail:${data.email}\nPassword:${data.password}`
          );
        })}
      >
        <h1 id="wgh">With God's Help</h1>
        <h1>Change Me To React Hook Form</h1>
        <div>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "This is required",
              minLength: {
                value: 2,
                message: "Username must have at least 2 characters.",
              },
            })}
            placeholder="Enter UserName"
          />
          <span>{errors.username?.message}</span>
        </div>
        <div>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "This is required",
              minLength: {
                value: 5,
                message: "Email must have at least 5 characters.",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Your email is invalid",
              },
            })}
            placeholder="Enter Email"
          />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 8,
                message: "The password must have at least 8 characters.",
              },
              maxLength: {
                value: 20,
                message: "The password cannot have more than 20 characters.",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
              },
            })}
            placeholder="Enter Password"
          />
          <span>{errors.password?.message}</span>
        </div>
        <button
          type="submit"
          style={{
            display:
              Object.keys(errors).length === 0 && isValid ? "block" : "none",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default RegularForm;
