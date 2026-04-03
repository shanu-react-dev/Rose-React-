import Accordions from "./components/Accordions"

function App() {
  const item = [
    {
      title: "JavaScript Basic",
      description: "Datatypes, Loops, Functions, Methods "
    },
    {
      title: "React Basics",
      description: "Reconciliation, Props, JSX and Hooks"
    },
    {
      title: "Java Basic",
      description: "Core java, OOPS, HIbernate and Spring "
    },
    {
      title: "Node Basic",
      description: "Event Loop, LibUV, Modules, zlib"
    },
    {
      title: "Python Basic",
      description: "Datatypes, Loops, Functions, Methods "
    }
  ]
  return (
    <div>
      <Accordions items = {item}/>
    </div>
  )
}

export default App
