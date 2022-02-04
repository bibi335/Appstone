import React from 'react'
import {useState,useEffect} from "react";
import User from './User'
function Appstone() {
    const [ Users ,setUser]=useState([]);
    const [Found, setFound]=useState("");
    const [search ,setSerarch]=useState("");
    useEffect(() => {
        getUsers();
    },[])
    const getUsers = async() => {
        const response = await fetch(`https://reqres.in/api/users?page=2`)
        const data = await response.json()
       setUser(data.data)
       console.log(data.data);
    }
    const getName =()=> {const data=Users.some(item=>item.first_name===search)
    
    if(data===true)
    {
        setFound(search+'Found')
    }
    else{
        setFound(search+' Not Found')
    }
    
    }
    return (
        <div>
        <form>
            <input type="text" placeholder="Enter first name"
            onChange={e=>setSerarch(e.target.value)}/>
            <input type="submit" value="Search" 
            onClick={getName}/>
            <div><h1>{Found}</h1>
            
            </div>
            <br/>
            {Users
            .map(data=>(<User
            email={data.email}
            first_name={data.first_name}
            last_name={data.last_name}
            avatar={data.avatar}
           />))}
            
        </form>
        </div>
    )
}
export default Appstone



