import React from "react"
import { Link } from "react-router-dom"

export default function TvCard(props){
    let imgURL = `https://image.tmdb.org/t/p/w500${props.poster_path}`
    return (
        <div className='card--container'>
            <div className='card--badge'>{Math.round(props.vote_average*100)/100}</div>
            {props.chrono_date && <div className='card--badge--date'>{props.chrono_date}</div>}
            {props.tip && <div className='card--badge--tip'>{props.tip}</div>}
            <div className='card--episodes--badge'>{props.episode_count} Episodes</div>
            <Link to={`/${"show"}/${props.id}`}>
                <img src={ props.poster_path ? imgURL : "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?w=1380&t=st=1702282109~exp=1702282709~hmac=bcdc55e40957e8b2d1dccfa7dff89ca6bbd1bb90073da16d23e4bedc8e93c01e"}></img>
                <h2 className='textTop'>{props.title}</h2>
            </Link>
            
            <h2 className='textButtom'>{props.release_date} <span id='textGray'>•</span> Series</h2>
            
        </div>
    )
}