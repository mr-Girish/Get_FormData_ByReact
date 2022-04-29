import React, { useState } from 'react'

const Form = () => {
    const [inputname,setInputName]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
       cpassword:"",
       pnumber:""
      });
    
      const add=(e)=>{
        alert(inputname.fname+'\n'+
        inputname.lname+'\n'+
        inputname.email+'\n'+
        inputname.password+'\n'+
        inputname.cpassword+'\n'+
        inputname.pnumber+'\n');
      }
   
      const inputEvent=(e)=>{
       
         // const value=e.target.value;
         // const name=e.target.value;
         setInputName({
           ...inputname, [e.target.name]:e.target.value
         });
      }
     return (
       <div>
          <p>
          <label htmlFor="">First Name</label>
           <input type="text" onChange={inputEvent} name="fname" value={inputname.fname} />
          </p>
           <p>
           <label htmlFor="">Last Name</label>
           <input type="text" onChange={inputEvent} name="lname" value={inputname.lname} />
           </p>
          <p>
          <label htmlFor="">Email</label>
           <input type="text" onChange={inputEvent} name="email" value={inputname.email} />
          </p>
           <p>
           <label htmlFor="">Password</label>
           <input type="text" onChange={inputEvent} name="password" value={inputname.password} />
           </p>
           <p>
           <label htmlFor="">Confirm Password</label>
           <input type="text" onChange={inputEvent} name="cpassword"  value={inputname.cpassword}/>
           </p>
           <p>
           <label htmlFor="">Phone Number</label>
           <input type="text" onChange={inputEvent} name="pnumber" value={inputname.pnumber} />
           </p>
           <button onClick={(add)}>submmit</button>
         
          
       </div>
     )
}

export default Form