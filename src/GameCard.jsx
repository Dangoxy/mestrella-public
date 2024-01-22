import React from "react"
import { Link } from "react-router-dom"

export default function GameCard(props){
    
    let plat = props.platforms.map((platty)=>{
        return <h2 className="single--platform" key = {(+new Date * Math.random()).toString(36).substring(0,6) }>{platty}</h2>
    })


    return (
        <div className='card--container'>
            <div className='card--badge'>{Math.round(props.vote_average*100)/100}/5</div>
            <div className="platform--badge">{plat}</div>
            <Link to={`${props.id}`}  target="_blank">
                <img src={props.poster_path}></img>
                <h2 className='textTop'>{props.title}</h2>
            </Link>
            
            <h2 className='textButtom'>{props.release_date} <span id='textGray'>•</span> <span className="video--text">Video game</span></h2>
            
            
        </div>
    )
}