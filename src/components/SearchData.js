import React , {useEffect}from 'react'
import { connect } from 'react-redux';
import { getSearchText, changeInput } from '../actionCreators/LoginCreator';
import './Search.css';
import NavBar from './NavBar';

function SearchData(props) {
    console.log(props)
    useEffect(() => {
        props.dispatch(getSearchText(props.searchText));
     },[])

    return (
        <>
        <NavBar />
             {!props.searchData.length  && <h3 style={{textAlign:"center"}}>No data found</h3>}
            <div>
                {props.searchData.map(prop => (
                    <div key={prop.id}>
                        <img src={prop.image}></img>
                        <h3>{prop.name}</h3>
                        <h4>{prop.desc}</h4>

                    </div>
                ))}
            </div>
            
        </> 
    )
}

function mapStateToProps(state){
    return(
        {
            searchText : state.loginReducer.searchText,
            searchData : state.loginReducer.searchData,
            error: state.loginReducer.error
            
        }
    )
}

export default connect(mapStateToProps)(SearchData)
