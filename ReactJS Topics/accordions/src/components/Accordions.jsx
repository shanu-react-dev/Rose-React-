import { useState } from "react"

const Accordions = ({items}) => {
    let [view, setView] = useState(null)

    let handleView = (index) => {
        setView(view=== index? null: index)
        console.log(index)
    }

    return <div>
        {
            items.map((ele, index)=>{
                return <div key={index}>
                    <button onClick={() => handleView(index)}>{ele.title}</button>
                    <p>{view=== index? ele.description : null}</p>
                </div>
            })
        }
    </div>
}
export default Accordions