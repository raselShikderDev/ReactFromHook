import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onsubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:3000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok === false) {
        throw new Error("Post Request Faild");
      }
      const result = await res.text();
      
      console.log(data, result);
      reset();
    } catch (error) {
      throw new Error("Post Request Faild ", error);
    }
  };

  return (
    <>
      <h1 className="bg-yellow-600 text-white font-semibold text-center py-1">
        React From Hook
      </h1>
      <div className="h-[400px] w-[400px] mx-auto flex justify-center items-center">
        <form
          className="space-y-4 w-full"
          autoComplete="on"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div>
            <input
              className="outline-none border-b-[0.5px] w-full "
              type="text"
              autoComplete="true"
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
            {errors.number && (
              <p className="bg-red-200 text-red-600 font-bold">
                Number will be more than 11 and maximum 14{" "}
              </p>
            )}
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
              disabled={isSubmitting}
              className="bg-blue-600 text-white py-1 px-4 rounded-full"
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
