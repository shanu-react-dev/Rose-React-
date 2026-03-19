import { useContext, useState } from "react";
import { userContext } from "../utilities/UserContext";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Home = () => {
  let [isPlaying, setIsPlaying] = useState(false);
  let data = useContext(userContext);
  let navigate = useNavigate();
  console.log(data);

  const handleclick = () => {
    if (data != null) {
      navigate("/");
      setIsPlaying((prev) => !prev);
    } else {
      navigate("/login");
    }
    toast("Song is Playing", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div>
      <h1>Hii THis is Home Component</h1>

      <button onClick={handleclick}>{isPlaying ? "Pause" : "Play"}</button>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Home;
