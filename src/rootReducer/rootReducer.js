const rootReducer = (state = {number:0},action) =>{
    if(action.type=='ADD'){
        return state={number:state.number+1}
    }
    else return state
}

export default rootReducer