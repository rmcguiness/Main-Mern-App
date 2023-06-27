import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = []
    return (
        <div>
            <h1>Users Works</h1> 
            <UsersList users={USERS}/>
        </div>
        
    )
}

export default Users