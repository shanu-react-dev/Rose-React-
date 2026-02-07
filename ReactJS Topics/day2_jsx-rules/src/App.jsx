import FirstComponent from "./components/FirstComponent";

function App() {
  let myName = "Shanu Singh";
  console.log(myName);
  //   let arrOfFruits = ["Orange", "Grapes", "Panipuri", "JackFruit", "Akchay"];
  return (
    <div>
      <h1>I am App Component</h1>
      <p>I am a paragraph</p>
      <h1>{myName}</h1>
      {/* {FirstComponent()} */}

      {/* <FirstComponent></FirstComponent> */}

      {FirstComponent(myName)}
    </div>
  );
}
export default App;
