

import React,{useState} from 'react';

import {addUser } from './userSlice';
import { useDispatch, useSelector } from 'react-redux';
const AddUserForm  =() =>{

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = React.useState('');
const [email, setEmail] = useState(''); 
const [avatar,setAvatar] = useState('');
const [form,setForm] = useState('')
const dispatch = useDispatch()
const handleSubmit =(e) =>{
    e.preventDefault();

    setForm({
         

    })
    //  setForm({
    //     idNumber: String(data.id || ""),
    //     phone: data.phone || "",
    //     email: data.email || "",
    //     password: "", // never prefill a real password from an API
    //   });
const newUser ={
    id:Date.now(),
    first_name:firstName,
    last_name:lastName,
    email:email,
    avatar:avatar
}

dispatch(addUser(newUser));
setFirstName('')
setLastName('')
setEmail('')
setAvatar('')
}
const addingUserstatus= useSelector((state)=>state.users.addingUserstatus)

return (
<div >
    <form  onSubmit={handleSubmit} style={{width:'280px',height:'100px'}}>
        <label  >FirstName :
            <input style={{padding:'5px',border:'1px solid gray',borderRadius:'10px'}} type='text' placeholder="enter first name" required  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br/>
        <label>
            LastName:
            <input style={{padding:'5px',border:'1px solid gray',borderRadius:'10px'}} type="text" placeholder='eneter lastname'required value={lastName}  onChange={(e)=>setLastName(e.target.value)}/>
        </label>
        <br/>
        <label>Email:
            <input  style={{padding:'5px',border:'1px solid gray',borderRadius:'10px'}}type="email" placeholder="enater email" required value={email} onChange={(e) =>setEmail(e.target.value)}/>
         </label>
         <br/>
         <label>Avatar:
            <input  style={{padding:'5px',border:'1px solid gray',borderRadius:'10px'}} type="text"placeholder="enater avatar value" required value={avatar} onChange={(e) =>setAvatar(e.target.value)}/>
            <br/>
         </label>
         {addingUserstatus === 'loading' ?(<div
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
    </div>) :( <button  style={{backgroundColor:'green',borderRadius:'10px'}}type='submit'>Add User</button>)}
        
    </form>
    </div>
)

}


export default AddUserForm;