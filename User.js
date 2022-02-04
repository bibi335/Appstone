import React from 'react'
import './country.css'
function User({email,first_name,last_name,avatar}) {
    return (
        <div className="style">
            <img src={avatar} alt="" />
            <br/>
           Email: {email}
           <br/>

           First Name: {first_name}
           <br/>

           Last Name: {last_name}
        </div>
    )
}

export default User
