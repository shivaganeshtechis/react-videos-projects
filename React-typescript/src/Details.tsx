import { METHODS } from 'http';
import { listenerCount } from 'process';
import React from 'react'
import './App.css'

interface Props  {
    name : string;
    email : string;
    age : number;
    friends : string[];
}

function Details(props : Props) {
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

export default Details
//In order to display the details of the 
//friends we have to use the map METHOD
// In React, the map method is used to 
// traverse and display a list of similar 
// objects of a component.
 

// we are giving a parameter as friend to
// iterate through the list
