import React from 'react'
import {connect} from 'react-redux'
import add from '../actions/add'

const Counter = (props) =>{
    return(
        <>
        <p>number:{props.number} </p>
        <button onClick={()=>{props.add()}}>ADD</button>
        </>
    )
}


const mapStateToProps= (state) =>{
    return{
        number:state.number
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
   add: ()=>{dispatch(add())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)