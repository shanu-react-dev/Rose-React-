import {useDispatch, useSelector} from  "react-redux"
import { checkBoxReducer, genderReducer } from "./features/cbReducer"

function App() {
  const skills = useSelector((state)=>state.checkSlicer.skills)
  const gender = useSelector(state=>state.checkSlicer.gender)
  console.log(skills)
  console.log(gender)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    let {name, value, checked} = e.target
    dispatch(checkBoxReducer({type: "cbHandler", name, value, checked}))
  }

  const handleGenderChange = (e) => {
    const {name, value, checked} = e.target
    dispatch(genderReducer({type: "genderChange", name, value, checked}))
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log({skills, gender})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="skills">Select your skills</label>
        <input type="checkbox" name="skills" id="JS" value={"JavaScript"} onChange={handleChange} />
        <label htmlFor="JS">JavaScript</label>
        <input type="checkbox" name="skills" id="angular" value={"Angular JS"} onChange={handleChange} />
        <label htmlFor="angular">Angular</label>
        <input type="checkbox" name="skills" id="vuejs" value={"Vue JS"} onChange={handleChange} />
        <label htmlFor="vuejs">Vue JS</label>
        <input type="checkbox" name="skills" id="nextjs" value={"Next JS"} onChange={handleChange} />
        <label htmlFor="nextjs">NEXT JS</label>
        <input type="checkbox" name="skills" id="redux" value={"Redux"} onChange={handleChange} />
        <label htmlFor="redux">Redux</label>

        <br /><br />

        <label htmlFor="gender">Select your Gender</label>
        <input type="radio" name="gender" value={"male"} id="male" onChange={handleGenderChange} />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value={"female"} onChange={handleGenderChange} />
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="others" value={"others"} onChange={handleGenderChange} />
        <label htmlFor="others">Rather not to say</label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
