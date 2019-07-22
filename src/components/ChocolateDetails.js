import React,{useEffect} from 'react';
import {connect} from "react-redux"
import { getChocolateDetails } from '../actionCreators/ChocolateCreators';
import NavBar from './NavBar';

function ChocolateDetails(props) {
    useEffect(() => {
        props.dispatch(getChocolateDetails(props.match.params.id));
     },[])
    return (
        <>
        <NavBar />
        <h1>Choco Details </h1>
        {props.isLoading && <p>Please wait....</p>}
        <img src={props.chocoDetails.image}></img>
        <h3>{props.chocoDetails.name}</h3>
        <h4>{props.chocoDetails.desc}</h4>   
        </>
    )
}
function mapStateToProps(state){
    return{
        chocoDetails:state.chocoReducer.chocoDetails,
        isLoading : state.chocoReducer.isLoading
    }
}

export default connect (mapStateToProps)(ChocolateDetails)
