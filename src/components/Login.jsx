import React from 'react';
import Button from './common/Button'
import AuthTemplate from './auth/AuthTemplate';
import AuthForm from './auth/AuthForm';
import LoginForm from '../containers/auth/LoginForm';


const Login = () => {
    
    return (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};

export default Login;