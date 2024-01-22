import React from 'react'
import NavBar from "./NavBar"
import TitleSec from './TitleSec'
import MovieCard from './MovieCard'
import TvCard from './TvCard'
import GameCard from './GameCard'
import MoviesChronoOrder from './MoviesChronoOrder'
import TvChronoOrder from './TvChronoOrder'
import MoviesTvChronoOrder from './MoviesTvChronoOrder'
import SpidermanMovies from './spidermanMovies'
import MainFooter from './MainFooter'
import Draggable from './Draggable'


export default function App() {

  
  const [movies, setMovies] = React.useState([])
  const [tv, setTv] = React.useState([])

  
  console.log("State refreshed in App")

  React.useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b184e86bd21bccea487e99aa4d41e39a` +
    `&include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&with_keywords=180547`)
    .then(response => response.json())
    .then(response => {moviesGetter(response.total_pages);})

    /* fetch(`https://api.themoviedb.org/3/discover/tv?api_key=b184e86bd21bccea487e99aa4d41e39a` +
    `&include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&with_keywords=180547`)
    .then(response => response.json())
    .then(response => {tvGetter(response.total_pages)}) */
    
  },[1])
  

  

  function moviesGetter(num){
    setMovies([])
    
    for (let i = 0; i<num; i++){
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b184e86bd21bccea487e99aa4d41e39a` +
      `&include_adult=false&include_video=false&language=en-US&page=${i+1}&sort_by=popularity.desc&with_keywords=180547&without_keywords=9817%2C263548`)
    .then(response => response.json())
    .then(response => {
      setMovies(old => {
        return [...old, ...response.results].sort((a, b) => {
          if (a.release_date !== "undefined" || b.release_date !== "undefined"){
          let bdate = new Date(b.release_date)
          let adate = new Date(a.release_date)
          return adate - bdate;
        }
        })
      })
    })
    }

  }

  const [tempAr, setTempAr] = React.useState([])
  const [tempAr2, setTempAr2] = React.useState([])

  const [defendersSaga, setDefendersSaga] = React.useState([])



  React.useEffect(()=>{
    setTempAr([])
    setTempAr2([])
    setDefendersSaga([])

    for (let i = 0; i<2; i++){
      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=b184e86bd21bccea487e99aa4d41e39a` +
      `&include_adult=false&include_video=false&language=en-US&page=${i+1}&sort_by=popularity.desc&with_keywords=180547`)
      .then(response => response.json())
      .then(response => {
        setTempAr((old) => {
          return [...old, ...response.results]
        })})
    }}, [1])
  
  React.useEffect(()=>{
    
    setTempAr2([])

    for (let i = 0; i<tempAr.length; i++){
      fetch(`https://api.themoviedb.org/3/tv/${tempAr[i].id}?api_key=b184e86bd21bccea487e99aa4d41e39a` +
      `&language=en-US`)
      .then(response => response.json())
      .then(response => {
        if(response.first_air_date !== ""
        && !response.name.includes("Marvel Studios") 
        && !response.name.includes("Marvel's")
        && !response.name.includes("MPower")
        && !response.name.includes("Helstrom")
        && !response.name.includes("WHIH")){
          if (response.seasons.length > 1){
            for (let i = 0; i<response.seasons.length; i++){

              let obj = {id: response.id,
                title: response.name + " " + response.seasons[i].name,
                release_date: response.seasons[i].air_date,
                  vote_average: response.seasons[i].vote_average,
                   episode_count: response.seasons[i].episode_count,
                    poster_path: response.seasons[i].poster_path,
                    type: "Series",
                     overview: response.seasons[i].overview === "" ? response.overview : response.seasons[i].overview,
                    }
                    

              setTempAr2(old => {    
                  return [...old,obj].sort((a, b) => {
                    if (a.release_date !== "undefined" || b.release_date !== "undefined"){
                    let bdate = new Date(b.release_date)
                    let adate = new Date(a.release_date)
                    return adate - bdate;
                  }
                  })
              })

               
            }
          } else{
            let obj = {id: response.id,
              title: response.name,
              release_date: response.first_air_date,
                vote_average: response.vote_average,
                 episode_count: response.number_of_episodes,
                  poster_path: response.poster_path,
                   overview: response.overview,
                   type: "Series",
                   }
                   setTempAr2(old => {
                    return [...old,obj].sort((a, b) => {
                      if (a.release_date !== "undefined" || b.release_date !== "undefined"){
                      let bdate = new Date(b.release_date)
                      let adate = new Date(a.release_date)
                      return adate - bdate;
                    }
                    })
                  })
          }
          
        } 
        
        
        else if (response.first_air_date !== ""
        && response.name.includes("Marvel's")
        && !response.name.includes("Agent")
        && !response.name.includes("Inhumans")
        && !response.name.includes("Runaways")
        && !response.name.includes("Cloak")
        && !response.name.includes("Agents")
        && !response.name.includes("Agents")){
          if (response.seasons.length > 1){
            for (let i = 0; i<response.seasons.length; i++){

              let obj = {id: response.id,
                title: response.name + " " + response.seasons[i].name,
                release_date: response.seasons[i].air_date,
                  vote_average: response.seasons[i].vote_average,
                   episode_count: response.seasons[i].episode_count,
                    poster_path: response.seasons[i].poster_path,
                    type: "Series",
                     overview: response.seasons[i].overview === "" ? response.overview : response.seasons[i].overview,
                    }
                    

                  setDefendersSaga(old => {    
                  return [...old,obj].sort((a, b) => {
                    if (a.release_date !== "undefined" || b.release_date !== "undefined"){
                    let bdate = new Date(b.release_date)
                    let adate = new Date(a.release_date)
                    return adate - bdate;
                  }
                  })
              })

               
            }
          } else{
            let obj = {id: response.id,
              title: response.name,
              release_date: response.first_air_date,
                vote_average: response.vote_average,
                 episode_count: response.number_of_episodes,
                  poster_path: response.poster_path,
                   overview: response.overview,
                   type: "Series",
                   }
                   setDefendersSaga(old => {
                    return [...old,obj].sort((a, b) => {
                      if (a.release_date !== "undefined" || b.release_date !== "undefined"){
                      let bdate = new Date(b.release_date)
                      let adate = new Date(a.release_date)
                      return adate - bdate;
                    }
                    })
                  })
          }
        } 
          

})
  fetch(`https://api.themoviedb.org/3/tv/232125?api_key=b184e86bd21bccea487e99aa4d41e39a` +
        `&language=en-US`)
        .then(response => response.json())
        .then(response => {
          if(response.first_air_date !== ""){
            if (response.seasons.length > 1){
              for (let i = 0; i<response.seasons.length; i++){

                let obj = {id: response.id,
                  title: response.name + " " + response.seasons[i].name,
                  release_date: response.seasons[i].air_date,
                    vote_average: response.seasons[i].vote_average,
                    episode_count: response.seasons[i].episode_count,
                      poster_path: response.seasons[i].poster_path,
                      type: "Series",
                      overview: response.seasons[i].overview === "" ? response.overview : response.seasons[i].overview,
                      }
                

                setTempAr2(old => {    
                    return [...old,obj].sort((a, b) => {
                      if (a.release_date !== "undefined" || b.release_date !== "undefined"){
                      let bdate = new Date(b.release_date)
                      let adate = new Date(a.release_date)
                      return adate - bdate;
                    }
                    })
                })

                
              }
            } else{
              let obj = {id: response.id,
                title: response.name,
                release_date: response.first_air_date,
                  vote_average: response.vote_average,
                  episode_count: response.number_of_episodes,
                    poster_path: response.poster_path,
                    overview: response.overview,
                    type: "Series",
                    }
                    setTempAr2(old => {
                      return [...old,obj].sort((a, b) => {
                        if (a.release_date !== "undefined" || b.release_date !== "undefined"){
                        let bdate = new Date(b.release_date)
                        let adate = new Date(a.release_date)
                        return adate - bdate;
                      }
                      })
                    })
            }
          }  
  })

}

},[tempAr])





const [both, setBoth] = React.useState([])
React.useEffect(()=>{

  setBoth(()=>{
    return [...movies,...tempAr2].sort((a, b) => {
      if (a.release_date !== "undefined" || b.release_date !== "undefined"){
      let bdate = new Date(b.release_date)
      let adate = new Date(a.release_date)
      return bdate - adate;
    }
    })
  })
  setBoth((old)=>{
    return old.sort((a, b) => {
      if (a.release_date !== "undefined" || b.release_date !== "undefined"){
      let bdate = new Date(b.release_date)
      let adate = new Date(a.release_date)
      return adate - bdate;
    }
    })
  })
},[tempAr2])



  const [cleanCombined, setCleanCombined] = React.useState([])
  let tempClean = []

  React.useEffect(()=>{

    tempClean = both.filter((obj) =>{
      if ((obj.vote_average > 1 
        && !obj.title.includes("Marvel Studios") 
        && !obj.title.includes("Marvel's")
        && !obj.title.includes("MPower")
        && !obj.title.includes("Helstrom")
        && !obj.title.includes("WHIH"))) {
        return true
      }
    })
    
    tempClean = tempClean.sort((a, b) => {
      let bdate = new Date(b.release_date)
      let adate = new Date(a.release_date)
      return adate - bdate;
    })

    tempClean = tempClean.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === tempClean.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      });
    });

    setCleanCombined(tempClean)

  },[both])

  {/* <MovieCard id = {ob.id} title = {ob.title} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average}/> */}
  {/* <TvCard id = {ob.id} title = {ob.name} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average} episode_count = {ob.episode_count}/> */}
  

  


  const [cleanMovies, setCleanMovies] = React.useState([])
  let tempCleanMovies = []

  React.useEffect(()=>{

    tempCleanMovies = movies.filter((obj) =>{
      if ((/* obj.vote_average > 1 
        &&  */ obj.release_date !== undefined 
        && obj.release_date !=="" 
        && !obj.title.includes("Marvel Studios") 
        && !obj.title.includes("Marvel's")
        && !obj.title.includes("MPower")
        && !obj.title.includes("Helstrom")
        && !obj.title.includes("WHIH"))) {
        return true
      }
    })
    
    tempCleanMovies = tempCleanMovies.sort((a, b) => {
      let bdate = new Date(b.release_date)
      let adate = new Date(a.release_date)
      return adate - bdate;
    })

    tempCleanMovies = tempCleanMovies.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === tempCleanMovies.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      });
    });

    setCleanMovies(tempCleanMovies)

  },[movies])
  




  const [cleanShows, setCleanShows] = React.useState([])
  let tempCleanShows = []

  React.useEffect(()=>{

    tempCleanShows = tempAr2.filter((obj) =>{
      if ((/* obj.vote_average > 1 
        && */ !obj.title.includes("Marvel Studios") 
        && !obj.title.includes("Marvel's")
        && !obj.title.includes("MPower")
        && !obj.title.includes("Helstrom")
        && !obj.title.includes("WHIH"))) {
        return true
      }
    })
    
    tempCleanShows = tempCleanShows.sort((a, b) => {
      let bdate = new Date(b.release_date)
      let adate = new Date(a.release_date)
      return adate - bdate;
    })

    tempCleanShows = tempCleanShows.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === tempCleanShows.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      });
    });

    setCleanShows(tempCleanShows)

  },[tempAr2])
  


  const [cleanDefenders, setCleanDefenders] = React.useState([])
  let tempCleanDefenders = []

  React.useEffect(()=>{

    tempCleanDefenders = defendersSaga.filter((obj) =>{
      if (( obj.title.includes("Marvel's"))) {
        return true
      }
    })
    
    tempCleanDefenders = tempCleanDefenders.sort((a, b) => {
      let bdate = new Date(b.release_date)
      let adate = new Date(a.release_date)
      return adate - bdate;
    })

    tempCleanDefenders = tempCleanDefenders.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === tempCleanDefenders.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      });
    });

    setCleanDefenders(tempCleanDefenders)

  },[defendersSaga])





  let DefendersShowList = cleanDefenders.map((ob) => {
    /* console.log(`{type : "show" ,id : "${ob.id}" ,title : "${ob.title}" ,release_date: "${ob.release_date}" ,poster_path: "${ob.poster_path}" ,vote_average : "${ob.vote_average}" episode_count : "${ob.episode_count}"},`) */
    return <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = {ob.id} title = {ob.title} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average} episode_count = {ob.episode_count}/>
  })


  let MovieCardsList = cleanMovies.map((ob) => {
    return <MovieCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = {ob.id} title = {ob.title} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average}/>
  })


  let ShowCardsList = cleanShows.map((ob) => {
    return <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = {ob.id} title = {ob.title} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average} episode_count = {ob.episode_count}/>
  })

  
  let MovieAndShowList = cleanCombined.map((ob)=>{
    if(ob.type === "Series"){
      /* console.log(`<TvCard title = "${ob.name}" release_date= "${ob.release_date}" poster_path= "${ob.poster_path}" vote_average = "${ob.vote_average}" episode_count = "${ob.episode_count}" />`) */
      return <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = {ob.id} title = {ob.title} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average} episode_count = {ob.episode_count}/>
    } 
    else {
        /* console.log(`<MovieCard title = "${ob.title}" release_date= "${ob.release_date}" poster_path= "${ob.poster_path}" vote_average = "${ob.vote_average}"/>`) */
        return <MovieCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = {ob.id} title = {ob.title} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average}/>
    }
  })

  let SpidermanList = SpidermanMovies.map((ob)=>{
    if (ob.type !== "Game"){
      return <MovieCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = {ob.id} title = {ob.title} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average}/>
    } 
    else {
      return <GameCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = {ob.id} title = {ob.title} release_date={ob.release_date} poster_path= {ob.poster_path} vote_average = {ob.vote_average} platforms = {ob.platforms}/>
    }
    
  })


  return (
    <div className='cont--all'>

      <NavBar />

      <TitleSec />

      <h1 className='main--title'>All MCU movies and series in release order</h1>
      <Draggable>
        <div className='movie--container'>
            {MovieAndShowList}
        </div>
      </Draggable>

      <h1 className='main--title'>All MCU movies and series in chronological order</h1>
      <Draggable>
        <div className='movie--container'>
          <MoviesTvChronoOrder />
        </div>
      </Draggable>

      <h1 className='main--title'>MCU movies in release order</h1>
      <Draggable>
        <div className='movie--container'>
          {MovieCardsList}
        </div>
      </Draggable>

      <h1 className='main--title'>MCU movies in chronological order</h1>
      <Draggable>
        <div className='movie--container'>
          <MoviesChronoOrder />
        </div>
      </Draggable>

      <h1 className='main--title'>MCU Series in release order</h1>
      <Draggable>
        <div className='movie--container'>
          {ShowCardsList}
        </div>
      </Draggable>

      <h1 className='main--title'>MCU series in chronological order</h1>
      <Draggable>
        <div className='movie--container'>
          <TvChronoOrder />
        </div>
      </Draggable>

      <h1 className='main--title'>The Spider-verse in chronological and release order</h1>
      <Draggable>
        <div className='movie--container'>
          {SpidermanList}
        </div>
      </Draggable>

      <h1 className='main--title'>The Defenders Saga in chronological and release order</h1>
      <Draggable>
        <div className='movie--container'>
          {DefendersShowList}
        </div>
      </Draggable>
      
      <MainFooter />
      
    </div>
  )
}


