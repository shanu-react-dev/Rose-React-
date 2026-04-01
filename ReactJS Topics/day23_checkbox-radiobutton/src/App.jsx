import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { cbSlicer } from "./redux/features/inputFeature";

function App() {
  let skills = useSelector((state) => state.checkBoxSlicer.skills)
  let dispatch = useDispatch()
  // const [skills, setSkills] = useState([]);
  // const [gender, setGender] = useState("");

  // const handleChange = (e) => {
  //   console.log(e.target.checked);
  //   let {name, value, checked} = e.target
  //   if(e.target.checked){
  //     setSkills([...skills, value])
  //   }else{
  //     setSkills(skills.filter((ele)=>ele!=value))
  //   }
  // };
  // const handleGenderChange = (e) => {
  //   setGender(e.target.value);
  // };

  const handleChange = (e) => {
    let {name, value, checked} = e.target
    dispatch(cbSlicer({type: "skillsSelect", value, checked}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(skills);
    // console.log({gender, skills})
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="skills">Select your Skills: </label>
        <input
          type="checkbox"
          name="skills"
          id="javaScript"
          value={"javaScript"}
          onChange={handleChange}
        />
        <label htmlFor="javaScript">JavaScript</label>
        <br />
        <br />
        <input
          type="checkbox"
          name="skills"
          id="java"
          value={"java"}
          onChange={handleChange}
        />
        <label htmlFor="java">Java</label>
        <br />
        <br />
        <input
          type="checkbox"
          name="skills"
          id="react"
          value={"react"}
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <br />
        <br />
        <input
          type="checkbox"
          name="skills"
          id="nodejs"
          value={"nodejs"}
          onChange={handleChange}
        />
        <label htmlFor="nodejs">Node JS</label>
        <br />
        <br />
        <input
          type="checkbox"
          name="skills"
          id="express"
          value={"express"}
          onChange={handleChange}
        />
        <label htmlFor="express">Express JS</label>
        <br />
        <br />

        {/* <label htmlFor="gender">Select Gender: </label>
        <input
          type="radio"
          name="gender"
          id="male"
          value={"male"}
          onChange={handleGenderChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value={"female"}
          onChange={handleGenderChange}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="others"
          value={"others"}
          onChange={handleGenderChange}
        />
        <label htmlFor="others">Others</label> */}
        <button type="submit">Submit</button>

        {/* <h1>{skills.toString()}</h1> */}
      </form>
    </>
  );
}

export default App;
