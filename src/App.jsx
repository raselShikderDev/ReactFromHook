import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => console.log(data);

  return (
    <>
      <h1 className="bg-yellow-600">From</h1>
      <div className="h-[400px] w-[400px] mx-auto flex justify-center items-center">
        <form className="space-y-4 w-full" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <input
              className="outline-none border-b-[0.5px] w-full "
              type="text"
              {...register("username", {
                required: true,
                maxLength: 20,
                minLength: 5,
              })}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              className="outline-none border-b-[0.5px] w-full "
              type="number"
              {...register("number", {
                required: true,
                maxLength: 14,
                minLength: 11,
              })}
              placeholder="Number"
            />
            {errors.number && <p className="bg-red-200 text-red-600 font-bold">Number will be more than 11 and maximum 12 </p>}
          </div>
          <div>
            <input
              className="outline-none border-b-[0.5px] w-full "
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />

          </div>
          <div>
            <input
              className="outline-none border-b-[0.5px] w-full "
              type="password"
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-1 px-4 rounded-full"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
