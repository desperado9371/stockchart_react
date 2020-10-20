import React from 'react';
import './Signin.scss';

const Signin = () => {
    
    return (
        <div>
            <h1>Signin Page</h1>
            <div className="Signupform">
                <form method="POST" action="http://54.180.96.229:8080/api/test/">
                    <div className="input-field">
                        <label for='user_name'>name : </label>
                        <input type='string' id='user_name' name='user_name'></input>
                    </div>
                    <div className="input-field">
                        <label for='user_id'>id : </label>
                        <input type='string' id='user_id' name='user_id'></input>
                    </div>
                    <div className="input-field">
                        <label for='user_password'>password  : </label>
                        <input type='password' id='user_password' name='user_password'></input>
                    </div>
                    <div className="input-field"> 
                        <label for='pw_valid'>verify password : </label>
                        <input type='password' id='pw_valid' name='pw_valid'></input>
                    </div>
                    <div className="hidde1n">
                        <input type='datetime-local' id='created_date' name='created_date' value="2020-10-10T01:01"></input>
                    </div>
                    <div>
                        <button className="submit-button" type='submit'>가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;