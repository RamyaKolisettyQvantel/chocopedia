import React, {useEffect} from 'react'
import { getChocolates } from '../actionCreators/ChocolateCreators';
import {connect} from "react-redux";
import ChocolateListItem from './ChocolateListItem';
import NavBar from './NavBar';

function ChocolateList(props) {
    console.log(props.chocolates);
    useEffect(() => {
       props.dispatch(getChocolates());
    },[])
    return (
        <>
        <NavBar />
        <h1>Chocolatess </h1>
        {props.isLoading && <p>Please wait....</p>}
        {props.chocolates.map(prop => (
            <ChocolateListItem
            key={prop.id}
            id={prop.id}
            name={prop.name} image = {prop.image} />
        ))}
        </>
    )
}

function mapStateToProps(state){
    return{
        chocolates:state.chocoReducer.chocolates,
        isLoading : state.chocoReducer.isLoading
    }
}

export default connect (mapStateToProps)(ChocolateList)
