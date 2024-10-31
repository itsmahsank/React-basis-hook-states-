import styled from "./Netflix.module.css";
import style from "styled-components"


export const SeriesCard = (props) => {
// destruction of props
    const{ id,img_url,name,rating,description,cast,genre,watch_url}=props.val
/*
    const btn_style={
      marginLeft:"15px",
      padding:"1.2rem 2.4rem", 
      border: "none",
      fontSize: "1.6rem",
       backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
       color: "var(--btn-color)",
       fontWeight: "bolder",
       cursor: "pointer",
       marginBottom:"20px"
    }
    */   
/*
// style compnent using style object 
    const WatchButton =style.button({
      marginLeft:"15px",
      padding:"1.2rem 2.4rem", 
      border: "none",
      fontSize: "1.6rem",
       backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
       color: "var(--btn-color)",
       fontWeight: "bolder",
       cursor: "pointer",
       marginBottom:"20px",
    })

*/
//in this template litrals we use pure css 
// we can also pass dynamic value e.g  passed in backgrpund color as a props 
const WatchButton =style.button`
  margin-left:15px;
  padding:1.2rem 2.4rem;
  border: none;
  font-size: 1.6rem;
   background-color:${(props)=>
     props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
   color: "var(--btn-color)";
   font-weight: bolder;
   cursor: pointer;
   margin-bottom:20px;
`


    const ratingClass= `${rating >=8.5 ? styled.super_hit: styled.average} `;

    return (
      <li className={styled.card}>
        <div>
          <img src={img_url} alt={name} height="40%" width="40%" />
        </div>
        <div className={styled["card-content"]}>
          <h2>NAME: {name}</h2>
          <h2>Rating: <span className={`${rating} ${ratingClass}`}>  {rating}  </span></h2>
          <p>Summary: {description}</p>
          <p>Genre: {genre.join(",")}</p>
          <p>Cast: {cast.join(",")}</p>
          </div>
  
        <a href={watch_url} target='_blank'>
          <WatchButton rating= {rating}>Watch Now</WatchButton>
        </a>
      </li>
    );
  };
  
/*  button style ={btn_style}> Watch Now</button>*/