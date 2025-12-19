
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from './userSlice';
const UsersList =() =>{

const users=useSelector((state)=> state.users.users);
const status =useSelector((state)=>state.users.status);
const dispatch= useDispatch();
useEffect(()=>{
if (status ==='idel'){
  dispatch(fetchUsers())
}
},[status,dispatch])


if(status ==="loading"){
  return (
  <div
      style={{
        width: '40px',
        height: '40px',
        border: '4px solid #ccc',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '20px auto'
      }}
    >
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

if(status === 'failed'){
  return <p>narendra modi</p>
}
      console.log(users)
    return (
       <div>
      <h2>Users List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{`${user?.first_name}
          ${user?.last_name} ${user?.email} `}
          </li>
         
         
        ))}
    
      </ul>
         
    </div>
 
 );
};
export default UsersList;