import React from "react"
import NavBar from "./NavBar"
import {useParams} from "react-router-dom"
import MainFooter from "./MainFooter"


export default function DetailsPage(){

    let params = useParams()
    console.log("State refreshed in DetailsPage")

    const [currently, setCurrently] = React.useState([])
    const [cast, setCast] = React.useState([])
    const [seasonsOptions, setSeasonsOptions] = React.useState([])
    const [seasonsDisplay, setSeasonsDisplay] = React.useState([])
    const [seasonsDisplay2, setSeasonsDisplay2] = React.useState([])
    const [videoData, setVideoData] = React.useState([])
    const [videoID, setVideoID] = React.useState("")


    React.useEffect(()=>{
        params.type === "movie" ?
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US` +
        `&api_key=b184e86bd21bccea487e99aa4d41e39a`)
        .then(response => response.json())
        .then(data => setCurrently(data))
        :
        fetch(`https://api.themoviedb.org/3/tv/${params.id}?language=en-US` +
        `&api_key=b184e86bd21bccea487e99aa4d41e39a`)
        .then(response => response.json())
        .then(data => {setCurrently(data)})
        
        
    },[])

    React.useEffect(()=>{
        params.type === "movie" ?
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US` +
        `&api_key=b184e86bd21bccea487e99aa4d41e39a`)
        .then(response => response.json())
        .then(data => setCast(data.cast))
        :
        fetch(`https://api.themoviedb.org/3/tv/${params.id}/credits?language=en-US` +
        `&api_key=b184e86bd21bccea487e99aa4d41e39a`)
        .then(response => response.json())
        .then(data => setCast(data.cast))

    },[])

    React.useEffect(()=>{
        params.type === "movie" ?
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US` +
        `&api_key=b184e86bd21bccea487e99aa4d41e39a`)
        .then(response => response.json())
        .then(data => setVideoData(data.results))
        :
        fetch(`https://api.themoviedb.org/3/tv/${params.id}/videos?language=en-US` +
        `&api_key=b184e86bd21bccea487e99aa4d41e39a`)
        .then(response => response.json())
        .then(data => setVideoData(data.results))

        

    },[])

    React.useEffect(()=>{

        if (params.type ==="movie"){
           for (let i=0; i<videoData.length; i++){
            if (videoData[i].type ==="Trailer"){
                setVideoID(videoData[i].key)
            }
        } 
        } else {
            for (let i=0; i<videoData.length; i++){
            if (videoData[i].type ==="Trailer" && videoData[i].name ==="Official Trailer"){
                setVideoID(videoData[i].key)
            }
        }
        }
        
        
        

    },[videoData])


    let castPreview = cast.map((act) =>{
        return(
            <div key = {(+new Date * Math.random()).toString(36).substring(0,6) }>
                <img style={{width:"140px",height: "210px", borderRadius:"10px"}} src={act.profile_path === null? "https://www.eng.auburn.edu/images/no-picture.jpg" :`https://image.tmdb.org/t/p/w500${act.profile_path}`}></img>
                <h4 style={{maxWidth: "140px"}}>{act.original_name}</h4>
                <h5 style={{maxWidth: "140px"}}>{act.character}</h5>
                <h6 style={{maxWidth: "140px"}}>{act.known_for_department}</h6>
            </div>
        )
    })

    /*  */

    React.useEffect(()=>{

            setSeasonsOptions([])
        for (let i=0; i<currently.number_of_seasons; i++){
            fetch(`https://api.themoviedb.org/3/tv/${params.id}/season/${i+1}?language=en-US` +
            `&api_key=b184e86bd21bccea487e99aa4d41e39a`)
            .then(response => response.json())
            .then(data => {
                setSeasonsOptions((old)=> {
                    let cur = <option className="option--style" value={i+1} key = {(+new Date * Math.random()).toString(36).substring(0,6) }>{`Season ${i+1}`}</option>
                    return [...old, cur]
                    })
                
            })
            
            

            
        
        }
        
    



    
    }, [currently])



    /* let bruh = seasonsDisplay.map((cur) => {
        return(
            <div>
                <h2>{cur.episode_number}</h2>
                <h3>{cur.name}</h3>
            </div>
        )
    }) */
    React.useEffect(()=>{

        let thee = seasonsDisplay.map((old)=>{
            return(
                <div className="episode--description" key = {(+new Date * Math.random()).toString(36).substring(0,6) }>
                    <h4>{`• Episode ${old.episode_number} •`}</h4>
                    <h4>{`• ${old.name} •`}</h4>
                    
                    <p>{old.overview}</p>
                    <h5>{`Released on: ${old.air_date} `}</h5>
                    <h5 style={{margin:"0"}}>{`Runtime: ${old.runtime} minutes`}</h5>
                    
                </div>
            )
        })
        

        setSeasonsDisplay2(thee)

    },[seasonsDisplay])

    function handleChange(value){
        if (value !== "Seasons"){
            for (let i=0; i<currently.number_of_seasons; i++){
                fetch(`https://api.themoviedb.org/3/tv/${params.id}/season/${value}?language=en-US` +
                `&api_key=b184e86bd21bccea487e99aa4d41e39a`)
                .then(response => response.json())
                .then(data => {setSeasonsDisplay(data.episodes)})}
    } else{
        setSeasonsDisplay([])
    }
}


    
    return(
        <div>
            <NavBar />

            { 
            !currently ? <h1>Loading...</h1> :

            params.type === "movie" ?

            <div>
                <div className="detailspageContainer">
                        <div className="detailsPageUp">
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${currently.poster_path}`}></img>
                            </div>
                            <div className="detailsPageUpText">
                                <div>
                                    <h2 style={{margin:"0",fontSize:"1.75rem"}}>{currently.title}</h2>
                                    <h3 style={{color:"rgba(220,60,60,1)",textShadow:"1px 1px 4px rgba(0,0,0,0.5)",margin:"0",marginTop:"5px",fontWeight:"600"}}>{currently.tagline}</h3>
                                </div>

                                <div className="detailsPageUpTextBottom">
                                    <h3 >Rating: {currently.vote_average}/10</h3>
                                    <h3 >Total votes: <span>{currently.vote_count}</span></h3>
                                    <h3 >Runtime: {currently.runtime} minutes</h3>
                                    <h3 >Release date: {currently.release_date}</h3>
                                </div>
                                
                            </div>
                        </div>

                        <div className="overview--sec">
                            <h2>Overview:</h2>
                            <p>{currently.overview}</p>
                        </div>

                        <h1 style={{margin: "0px 20px", marginTop:"20px"}}>Trailer: </h1> 
                        <div className="video--container"> 
                            {videoID && <iframe src={`https://www.youtube.com/embed/${videoID}`} title="Youtube video" allowFullScreen></iframe>}
                        </div>
                        
                        <div className="detailsPageDown">
                            <div className="castMainContainer">
                                <h1 style={{margin: "10px 20px"}}>Cast: </h1>    
                                <div className='castContainer'>
                                    {castPreview}
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            : params.type === "show" ?
            <div>
                <div className="detailspageContainer">
                        <div className="detailsPageUp">
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${currently.poster_path}`}></img>
                            </div>

                            <div className="detailsPageUpText">
                                <div>
                                    <h2 style={{margin:"0",fontSize:"1.75rem"}}>{currently.original_name}</h2>
                                    <h3 style={{color:"rgba(220,60,60,1)",textShadow:"1px 1px 4px rgba(0,0,0,0.5)",margin:"0",marginTop:"5px",fontWeight:"600"}}>{currently.tagline}</h3>
                                </div>

                                <div className="detailsPageUpTextBottom">
                                    <h3 >Rating: {currently.vote_average}/10</h3>
                                    <h3 >Total votes: <span>{currently.vote_count}</span></h3>
                                    <h3 >Runtime: {currently.episode_run_time} min/Ep</h3>
                                    <h3 >Release date: {currently.first_air_date}</h3>
                                    <h3 >Seasons: {currently.number_of_seasons}</h3>
                                </div>
                                
                            </div>
                        </div>

                        <div className="overview--sec">
                            <h2>Overview:</h2>
                            <p>{currently.overview}</p>
                        </div>

                        <h1 style={{margin: "0px 20px", marginTop:"20px"}}>Trailer: </h1> 
                        <div className="video--container"> 
                            {videoID && <iframe src={`https://www.youtube.com/embed/${videoID}`} title="Youtube video" allowFullScreen></iframe>}
                        </div>

                        <div style={{margin: "0px 20px"}}>
                            <select className="select--style" 
                            onChange={(choice) => {
                            handleChange(choice.target.value)}}
                            >
                            <option className="option--style" value={"Seasons"}>{`Seasons`}</option>
                            {seasonsOptions}
                            </select>

                            <div className="episode--description--container">{seasonsDisplay2}</div>
                            
                        </div>
                        
                        <div className="detailsPageDown">
                            <div className="castMainContainer">
                                <h1 style={{margin: "10px 20px"}}>Cast: </h1>    
                                <div className='castContainer'>
                                    {castPreview}
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            :

            <div></div>
            }
            
            
            <MainFooter />
        </div>
    )
}