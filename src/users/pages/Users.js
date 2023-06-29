import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [{id:'u1', name:'Ryan McGuiness', image:'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg', placeCount:3}]
    return (
        <div>
            <h1>Users Works</h1> 
            <UsersList users={USERS}/>
        </div>
        
    )
}

export default Users