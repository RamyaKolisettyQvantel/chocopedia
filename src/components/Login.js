import React from 'react';
import {changeInput, getLogin} from "../actionCreators/LoginCreator";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom"


function Login(props) {
    const { isLoginSuccess } = props;
    const loginUser = e => {
        e.preventDefault();
        props.dispatch(getLogin(props.email, props.pwd))
    }
    const handleChange = name => e => {
        props.dispatch(changeInput(name, e.target.value))
    }
    return (
        <div>
            {props.error && alert(props.error)}
            {isLoginSuccess && <div><Redirect to='/home' /></div>}
            
            <div>
                <form name="login" >
                    <label>Email</label>
                    <input type="text" value={props.email} onChange={handleChange("email")} />
                    <br />
                    <label>Password</label>
                    <input type="text" value={props.pwd} onChange={handleChange("pwd")}></input>
                    <br />
                    <button type="submit" onClick={loginUser}>Login</button>
                    <br />
                    <Link to={`/signup`}>SignUp</Link>
                </form>
            </div>
        </div>
    )
}
function mapStateToProps(appState){
    console.log(appState)
    return {
        email: appState.loginReducer.email,
        pwd: appState.loginReducer.pwd,
        successData : appState.loginReducer.successData,
        isLoginSuccess : appState.loginReducer.isLoginSuccess,
        error: appState.loginReducer.error
    }
}
export default connect(mapStateToProps)(Login)