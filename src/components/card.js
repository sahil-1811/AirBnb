import React from "react"
// import card1 from "../images/hiking.jpg"
import star from "../images/star.png"
export default function card(props){
    let badgeText
    if (props.openSpots===0){
        badgeText="SOLD OUT"
    }
    else if(props.location==="Online"){
        badgeText="Online"
    }
    return(
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`images/${props.coverImg}`} className='card--image' alt=' ' />
        
        <div className="cards--stats">
            <img src={star} className="card--star" alt="star"/>
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount}) •{props.location}</span>
            {/* <span className="grey">{country}</span> */}
        </div>
        <p className="card--cardtitle"> {props.title}</p>
        <p className="card--price"> <span className="bold">From ${props.price}</span>  / person</p>
    </div>
    )
}