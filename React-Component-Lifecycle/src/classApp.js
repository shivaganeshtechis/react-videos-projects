import React, { Component } from "react";


export default class App extends Component{
    constructor(props)



componentDidMount(){
    //Lifecycle function - when component mounts/loads
    console.log('The app component loaded')
}

componentDidUpdate(prevProps){
     //Lifecycle function - when component props change
}

componetWillUnmount(){
     //Lifecycle function - when component unmounts/cleanupfunction
}

render(){
    return (
        <div>

        </div>
    )
}
}