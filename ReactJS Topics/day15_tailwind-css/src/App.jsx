import Login from "./Login";

const App = () => {
  return (
    <div className="flex-col">
      <nav className="h-16 bg-blue-500 flex items-center justify-around">
        {/* <h1 className="text-red-500 text-2xl">Hello I am Tailwind CSS</h1> */}
        <div className="logo w-32 h-full flex items-center justify-center text-2xl font-bold">
          MyLogo
        </div>
        <ul className="navlist flex items-center justify-around font-semibold h-full w-[40%]">
          <li className="hover:text-blue-50 cursor-pointer ease-in duration-300">
            Home
          </li>
          <li className="hover:text-blue-50 cursor-pointer ease-in duration-300">
            About
          </li>
          <li className="hover:text-blue-50 cursor-pointer ease-in duration-300">
            Portfolio
          </li>
          <li className="hover:text-blue-50 cursor-pointer ease-in duration-300">
            Help
          </li>
        </ul>
      </nav>

      <div className="h-screen flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
};

export default App;
