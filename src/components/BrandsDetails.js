import React,{useEffect} from 'react';
import {connect} from "react-redux"
import { getChocolateDetails } from '../actionCreators/ChocolateCreators';
import { getBrandDetails } from '../actionCreators/BrandCreators';
import NavBar from './NavBar';

function BrandDetails(props) {
    console.log(props)
    useEffect(() => {
        props.dispatch(getBrandDetails(props.match.params.id));
     },[])
    return (
        <>
        <NavBar />
        <h1>Brand Details....</h1>
        {props.isLoading && <p>Please wait....</p>}
        {props.brandDetails.map(prop => (
            <div>
                <img src={prop.image}></img>
                <h3>{prop.name}</h3>
            </div>
        ))}
        </>
    )
}
function mapStateToProps(state){
    return{
        brandDetails:state.brandsReducer.brandDetails,
        isLoading : state.brandsReducer.isLoading
    }
}

export default connect (mapStateToProps)(BrandDetails)
