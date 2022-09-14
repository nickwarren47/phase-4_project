import React from 'react'

function Users({ users }) {

   const userList = users.map(user => console.log(user))
  return (
    <div>{userList}</div>
  )
}

export default Users;