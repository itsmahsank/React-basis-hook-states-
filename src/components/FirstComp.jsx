import { Fragment } from "react"
import React from 'react'


export const FirstComp =()=>{
    //variables creations to use values dynamically
const Name="MUHAMMAD AHSAN";
const Roll= "3638";
const Bio ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusantium, dolores totam vero illo voluptatibus, dolor reprehenderit rem corrupti enim aliquam molestiae omnis? Officia, impedit tenetur natus, laborum corrupti totam vitae tempora iste ducimus possimus sit velit quis quod? Sequi sed tempore eius ab quae nihil molestiae nisi, inventore magnam?"
// function creation that will return value
const returnGender=()=>{
const gender="MALE";
return gender;
}



return(


    <Fragment>
        <img src="public\ironman.webp" alt="iron-man" />
        <h2>NAME : {Name}</h2>
        <h2>ROll : {Roll}</h2>
        <h2>AGE : {18+3}</h2>
        <p>Bio:  {Bio}</p>
        <p>Gender : {returnGender() }</p>


    </Fragment>
)


}