import React from 'react'
import {NavLink, Link,withRouter, Redirect} from 'react-router-dom'
import './Header.css'
import SearchData from './SearchData';
import './Search.css';
import { changeInput } from '../actionCreators/LoginCreator';
import {connect} from "react-redux";

function NavBar(props) {

    const handleChange = name => e=> {
        e.preventDefault();
        props.dispatch(changeInput(name, e.target.value));
    }

    const getSearchDetails = e => {
        e.preventDefault();
        props.history.push("/search");
    }
    const logOutFromChocopedia = e => {
        console.log(props);
        //props.loginReducer.isLoginSuccess = false;
        props.history.push("/login");
    }
    return (
        <div class="topnav">
            <nav title="Choclate Collection">
                <ul class="ul">
                    <li class="li">
                        <h1 style={{color:"yellow"}}>Choclate Collection</h1>
                    </li>
                    <span></span>
                    <li class="li">
                        <NavLink to="/home" activeStyle={{color:"red", backgroundColor:"yellow"}} exact>HOME</NavLink>
                    </li>
                    <li class="li">
                        <NavLink to="/brands" activeStyle={{color:"red", backgroundColor:"yellow"}} exact>Brands</NavLink>
                    </li>
                    <li class="li">
                        <NavLink to="/chocolates" activeStyle={{color:"red", backgroundColor:"yellow"}} exact>Chocolates</NavLink>
                    </li>
                    <li class="search-container">
                        < form >
                            <input style={{height:"20px" ,width:"150px"}}
                            type="text" value={props.searchText} onChange={handleChange("searchText")} placeholder="Search.." />
                            <span />
                            <button style={{height:"27px"}} type="submit" onClick={getSearchDetails}>Search</button>
                        </form>
                    </li>
                    <li class="search-container">
                        
                    < form >
                           
                            <button style={{height:"27px"}} type="submit" onClick={()=>logOutFromChocopedia()}>Logout</button>
                        </form>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

function mapStateToProps(state){
    return(
        {
            searchText : state.loginReducer.searchText,
            isLoginSuccess: state.loginReducer.isLoginSuccess
            
        }
    )
}

export default withRouter(connect(mapStateToProps)(NavBar))
