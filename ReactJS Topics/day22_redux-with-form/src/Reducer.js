export const Reducer = (state, action) => {

    console.log(state)
    switch (action.type){
        case "update":
            return {...state, [action.name]: action.value}
    }
}