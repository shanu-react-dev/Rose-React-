import { useState } from "react";

const Login = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="h-[350px] w-[400px] bg-blue-300 flex flex-col items-center justify-around rounded-bl-4xl rounded-tr-4xl">
      <h1 className="text-2xl font-bold">Login Here</h1>
      <form className="h-[70%] w-[80%] flex flex-col">
        <label htmlFor="username" className="pt-1.5 pb-1.5">
          Enter Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          id="username"
          className="p-1.5 text-blue-800 border-b-blue-900 border-2 rounded-[10px]"
        />
        <label htmlFor="password" className="pt-1.5 pb-1.5">
          Enter Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id="password"
          className="p-1.5 text-blue-800 border-b-blue-900 border-2 rounded-[10px]"
        />

        <button className="w-full bg-blue-900 p-2 rounded-[10px] border-2 border-blue-900 font-bold transition-all ease-linear duration-200 text-white mt-1.5 hover:bg-transparent hover:text-blue-900">
          Login Here
        </button>
      </form>
    </div>
  );
};

export default Login;
