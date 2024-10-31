

export const EventProps=()=>{




const HandelButtonCLick=(username)=>{

    alert(`ASALAMOALIKUM! ${username} Hope Your are Fine` )
}


const HandelMouseEnter=()=>{
    alert("THE MOUSE Hoverd");
}





    return(

        <WelcomeUser
        
        onBtnClick={()=>HandelButtonCLick("AHSAN")}
        onMouseHover={()=>HandelMouseEnter()}
        
        
        
        />

    )
}





export const WelcomeUser=(props)=>{
    const{onBtnClick,onMouseHover}=props


    const HandelGreeting=()=>{

        onBtnClick();
        alert("What is Your Question ")
    }


   return(
    <>
    
    <button onClick={onBtnClick}>Welcome-MSG</button> <br />
    <button onMouseEnter={onMouseHover}>Hover-MSG</button> <br />
    <button  onClick={()=>HandelGreeting()}>  ASK Question </button>
    <br />
    
    </>
   )

}