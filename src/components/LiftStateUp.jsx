import { useState } from "react"

export const LiftingState=()=>{

const [InputValue, setInputValue]=useState("");

return(
    <>

    <InputComponent InputValue= {InputValue} setInputValue={setInputValue} />
    <DisplayComponent InputValue= {InputValue} />


    </>
)

}


export const InputComponent=({InputValue,setInputValue})=>{

    
    return(<>
    <input type="text" 
     placeholder="Enter Your Name"
      value={InputValue}
      onChange={(e)=>setInputValue(e.target.value)}>
      </input>

    </>)
}


export const DisplayComponent=({InputValue})=>{
    return(<>
    <p>Your name is :{InputValue} </p>
    </>)
}