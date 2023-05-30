import React from 'react'

function MyDetails(props) {
  return (
    <div>
      <h1>Name  : {props.name}</h1>
      <h1>Email : {props.email}</h1>
      <h1>Age   : {props.age}</h1>
      <h1>Friends List</h1>
      {props.friends.map((friend)=>{
        return <h2> - {friend}</h2>
      })}
    </div>
  )
}

export default MyDetails;
