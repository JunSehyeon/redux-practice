let initialState={
    count:0,
    id:"",
    password:"",
}


function reducer(state=initialState,action){
    switch (action.type){
        case "increment":
            return{...state, count: state.count+action.payload.num}
        case "LOGIN":
            return{...state,id:action.payload.id,password:action.payload.password}  
        case "decrease":
            return{...state, count: state.count-action.payload.num}      
        default:
            return {...state}
    }
}

export default reducer;