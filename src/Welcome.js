
import React,{useEffect}from 'react';
import { useSelector } from 'react-redux';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { login } from './actions/authActions';
import { useDispatch } from 'react-redux';

function Welcome() {
  const {  user } = useAuth0();
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.auth);
  useEffect(()=>{
    dispatch(login(user));
  },[user])

  return (
    <div className='Welcome'>
        <img src={userName?.picture}></img>
      <h1>Welcome, {userName?.nickname}!</h1> 
       <p>Email: {userName?.email}</p> 
     
    </div>
  );
}

export default Welcome;
