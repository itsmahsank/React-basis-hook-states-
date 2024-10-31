import React from 'react'
import { Fragment } from 'react'

export function Profile(){

return(
    <Fragment>

        <h1>This  is Profile Card Challange!</h1>
        <ProfileCard
         name=  "Ahsan"
         Age={22}
         greeting={
            <div>
                <strong>hi Ahsan, Have a Wonderfull day</strong>
            </div>  }   >


            <p>Hobbie : SPOTS, GAMING</p>
            <button>Contact</button>
        </ProfileCard>


        <ProfileCard
         name=  "Hania"
         Age={29}
         greeting={
            <div>
                <strong>hi Hania, Keep up the Good work </strong>
            </div>  }   >


            <p>Hobbie : cooking, wacthing Shows</p>
            <button>Contact</button>
        </ProfileCard>






    </Fragment>
)




}

export default Profile;



export function ProfileCard(props){
    const{name ,Age , greeting, children}=props
    return(
       <>
        <h2>NAME: {name}</h2>
        
        <h2>Age: {Age}</h2>
        <p>Greeting : {greeting}</p>
        <div>{children} </div>

       </>
    )




}