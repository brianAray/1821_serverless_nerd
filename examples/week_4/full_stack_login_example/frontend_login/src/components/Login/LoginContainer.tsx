import React, { useState } from 'react'
import LoginInput from './LoginInput';
import AccountDetailView from '../Account/AccountDetailView';

function LoginContainer() {
    const [user, setUser] = useState({} as any);


  return (
    <>
        <LoginInput setUser={setUser}/>
        <AccountDetailView user={user}/>
    </>
  )
}

export default LoginContainer