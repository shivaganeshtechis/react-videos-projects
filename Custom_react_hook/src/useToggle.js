import { useState } from "react";

export const useToggle = (initialVal=false)=> {
    //initialValue should be empty by default
    const [state,setState] = useState(initialVal);
    //useState hook to manage the state 
    const toggle = ()=>{
    //toggle function for useToggle hook 
        setState((prev)=>!prev);
    }
    return[state,toggle]
}
