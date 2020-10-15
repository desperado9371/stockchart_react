import React from 'react';

import AuthTemplate from './auth/AuthTemplate';
import AuthForm from './auth/AuthForm';
import RegisterForm from '../containers/auth/RegisterForm'

const Signin = () => {
    
    return (
        <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    );
};

export default Signin;