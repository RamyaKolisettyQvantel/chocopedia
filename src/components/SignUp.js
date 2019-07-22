import React from 'react'
import { changeInput, postSignUp } from '../actionCreators/LoginCreator';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"

function SignUp(props) {
    const signUpUser = e =>{
        e.preventDefault();
        props.dispatch(postSignUp(props.firstName,props.lastName, props.emailAddress, props.signUpPassword));
    }

    const handleChange = name => e => {
        props.dispatch(changeInput(name, e.target.value))
    }
    return (
        <div>
            {props.signUpSuccess && <div><Redirect to='/login' /></div>}
            {props.error && alert(props.error)}
            <div>
                <form name="signup" >
                    <label>FirstName</label>
                    <input type="text" value={props.firstName} onChange={handleChange("firstName")} />
                    <br />
                    <label>LastName</label>
                    <input type="text" value={props.lastName} onChange={handleChange("lastName")}></input>
                    <br />
                    <label>Email</label>
                    <input type="text" value={props.email} onChange={handleChange("emailAddress")} />
                    <br />
                    <label>Password</label>
                    <input type="text" value={props.pwd} onChange={handleChange("signUpPassword")}></input>
                    <br />
                    <button type="submit" onClick={signUpUser}>SignUp</button>
                    <br />
                </form>
            </div>
        </div>
    )
}

function mapStateToProps(appState){
    return {
        firstName: appState.loginReducer.firstName,
        lastName: appState.loginReducer.lastName,
        emailAddress: appState.loginReducer.emailAddress,
        signUpPassword: appState.loginReducer.signUpPassword,
        signUpSuccess: appState.loginReducer.signUpSuccess,
        error: appState.loginReducer.error
    }
}

export default connect(mapStateToProps)(SignUp)
