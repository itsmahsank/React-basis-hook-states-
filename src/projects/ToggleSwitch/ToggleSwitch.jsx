
import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { FaUserNurse } from "react-icons/fa";

export const ToggleSwitch =()=>{

    const [isOn,setisOn]=useState(false);

    const handleClick=()=>{
        setisOn(!isOn)
    }

    const CheckOn= isOn ?"on":"off";
    const CheckBGcolor= {background:isOn?"#4caf50" : ""};

    
// here we have use conditonal styling and conditional checks  --> isOn ?"on":"off"
    return(<>
     
        
    <div className="container" style={ {background:isOn?"black" : "white" }} > 
        <h1 className="Ahsan" >
            Toogle Switch
        <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
        <FaUserNurse />
        </h1>
        

        <div className="toggle-switch" onClick={handleClick} style={CheckBGcolor}>
           <div className= {`switch ${CheckOn}`}>
               <span className="switch-state"> {CheckOn}</span>
         </div>

    </div>


    </div>
    
    </>)
}