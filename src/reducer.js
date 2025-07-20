
export const initialState = {name:"John Doe"};
export const reducer = (state,action) =>{
    switch (action.type) {
        case "changeName":
            return {...state, name:action.payload};

        default:
            return state;
    }
}
