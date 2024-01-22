import React from "react"
import MovieCard from "./MovieCard"
import TvCard from "./TvCard"
import {useParams} from "react-router-dom"



export default function MoviesAndAllData(){

    const [bruh, setBruh] = React.useState('')
    /* React.useEffect(()=>{
        setBruh(useParams())
    },[1]) */
    let currentSearch = useParams().search

    console.log("State refreshed in MoviesAndAllData")

    const data = [
        {type : "movie" ,title : "Captain America: The First Avenger" ,id:"1771" ,release_date: "2011-07-22" ,poster_path: "/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg" ,vote_average : "7" ,chrono_date : "1942 - 1945"},
        {type : "movie" ,title : "Captain Marvel" ,id:"299537" ,release_date: "2019-03-06" ,poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" ,vote_average : "6.8" ,chrono_date :"1995" },
        {type : "movie" ,title : "Iron Man" ,id:"1726" ,release_date: "2008-04-30" ,poster_path: "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" ,vote_average : "7.6" ,chrono_date :"Feb - May 2010"},
        {type : "movie" ,title : "Iron Man 2" ,id:"10138" ,release_date: "2010-04-28" ,poster_path: "/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" ,vote_average : "6.8" ,chrono_date :"April - July 2010"},
        {type : "movie" ,title : "The Incredible Hulk" ,id:"1724" ,release_date: "2008-06-12" ,poster_path: "/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg" ,vote_average : "6.2" ,chrono_date :"April - July 2010"},
        {type : "movie" ,title : "Thor" ,id:"10138" ,release_date: "2011-04-21" ,poster_path: "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" ,vote_average : "6.8" ,chrono_date :"April - July 2010"},
        {type : "movie" ,title : "The Avengers" ,id:"24428" ,release_date: "2012-04-25" ,poster_path: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" ,vote_average : "7.7" ,chrono_date :"May 2012"},
        {type : "movie" ,title : "Iron Man 3" ,id:"68721" ,release_date: "2013-04-18" ,poster_path: "/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg" ,vote_average : "6.9" ,chrono_date :"Dec 2012"},
        {type : "movie" ,title : "Thor: The Dark World" ,id:"76338" ,release_date: "2013-10-30" ,poster_path: "/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg" ,vote_average : "6.5" ,chrono_date :"Sep 2013 - Jan 2014"},
        {type : "movie" ,title : "Captain America: The Winter Soldier" ,id:"100402" ,release_date: "2014-03-20" ,poster_path: "/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg" ,vote_average : "7.7" ,chrono_date :"Sep 2013 - Jan 2014"},
        {type : "movie" ,title : "Guardians of the Galaxy" ,id:"118340" ,release_date: "2014-07-30" ,poster_path: "/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" ,vote_average : "7.9" ,chrono_date :"2014"},
        {type : "movie" ,title : "Guardians of the Galaxy Vol. 2" ,id:"283995" ,release_date: "2017-04-19" ,poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg" ,vote_average : "7.6" ,chrono_date :"2014"},
        {type : "movie" ,title : "Avengers: Age of Ultron" ,id:"99861" ,release_date: "2015-04-22" ,poster_path: "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg" ,vote_average : "7.3" ,chrono_date :"April - June 2015"},
        {type : "movie" ,title : "Ant-Man" ,id:"102899" ,release_date: "2015-07-14" ,poster_path: "/8YxOIPrabqkQCOKKbuxaz9IcqhO.jpg" ,vote_average : "7.1" ,chrono_date :"July - Dec 2015"},
        {type : "movie" ,title : "Captain America: Civil War" ,id:"27110" ,release_date: "2016-04-27" ,poster_path: "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg" ,vote_average : "7.4" ,chrono_date :"Jan - April 2016"},
        {type : "movie" ,title : "Black Widow" ,id:"497698" ,release_date: "2021-07-07" ,poster_path: "/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg" ,vote_average : "7.3" ,chrono_date :"April 2016"},
        {type : "movie" ,title : "Black Panther" ,id:"284054" ,release_date: "2018-02-13" ,poster_path: "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" ,vote_average : "7.4" ,chrono_date :"April 2016"},
        {type : "movie" ,title : "Doctor Strange" ,id:"284052" ,release_date: "2016-10-25" ,poster_path: "/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" ,vote_average : "7.4" ,chrono_date :"Jan 2015 - Sept 2016"},
        {type : "movie" ,title : "Spider-Man: Homecoming" ,id:"315635" ,release_date: "2017-07-05" ,poster_path: "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" ,vote_average : "7.3" ,chrono_date :"Sept 2016"},
        {type : "movie" ,title : "Thor: Ragnarok" ,id:"284053" ,release_date: "2017-10-02" ,poster_path: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" ,vote_average : "7.6" ,chrono_date :"Nov 2017"},
        {type : "movie" ,title : "Ant-Man and the Wasp" ,id:"363088" ,release_date: "2018-07-04" ,poster_path: "/cFQEO687n1K6umXbInzocxcnAQz.jpg" ,vote_average : "6.9" ,chrono_date :"April - May 2018"},
        {type : "movie" ,title : "Avengers: Infinity War" ,id:"299536" ,release_date: "2018-04-25" ,poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" ,vote_average : "8.3" ,chrono_date :"May 2018"},
        {type : "movie" ,title : "Avengers: Endgame" ,id:"299534" ,release_date: "2019-04-24" ,poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg" ,vote_average : "8.3" ,chrono_date :"Oct 2023"},
        {type : "show"  ,title : "Loki Season 1" ,id:"84958" ,release_date: "2021-06-09" ,poster_path: "/8uVqe9ThcuYVNdh4O0kuijIWMLL.jpg" ,vote_average : "7.8" ,episode_count : "6" ,chrono_date:"Oct 2023"},
        {type : "show"  ,title : "Loki Season 2" ,id:"84958" ,release_date: "2023-10-05" ,poster_path: "/8vjTn0NGF5vM8BijlJxe6YZCRmU.jpg" ,vote_average : "7.9" ,episode_count : "6" ,chrono_date : "Oct 2023" ,tip : "*Out of the timeline*"},
        {type : "show"  ,title : "What If...? Season 1" ,id:"91363" ,release_date: "2021-08-11" ,poster_path: "/k0qV3kjTetxaylK0BZPLCbpx9oJ.jpg" ,vote_average : "6.9" ,episode_count : "9" ,chrono_date:"Oct 2023"},
        {type : "movie" ,title : "Eternals" ,id:"524434" ,release_date: "2021-11-03" ,poster_path: "/lFByFSLV5WDJEv3KabbdAF959F2.jpg" ,vote_average : "6.9" ,chrono_date :"Oct 2023"},
        {type : "show"  ,title : "WandaVision" ,id:"85271" ,release_date: "2021-01-15" ,poster_path: "/glKDfE6btIRcVB5zrjspRIs4r52.jpg" ,vote_average : "8.258" ,episode_count : "9" ,chrono_date :"Nov 2023"},
        {type : "movie" ,title : "Shang-Chi and the Legend of the Ten Rings" ,id:"566525" ,release_date: "2021-09-01" ,poster_path: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg" ,vote_average : "7.6" ,chrono_date :"March - April 2024"},
        {type : "show"  ,title : "The Falcon and the Winter Soldier" ,id:"88396" ,release_date: "2021-03-19" ,poster_path: "/6kbAMLteGO8yyewYau6bJ683sw7.jpg" ,vote_average : "7.685" ,episode_count : "6" ,chrono_date :"April 2024"},
        {type : "movie" ,title : "Thor: Love and Thunder" ,id:"616037" ,release_date: "2022-07-06" ,poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" ,vote_average : "6.5" ,chrono_date :"April - May 2024"},
        {type : "movie" ,title : "Spider-Man: Far From Home" ,id:"429617" ,release_date: "2019-06-28" ,poster_path: "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg" ,vote_average : "7.4" ,chrono_date :"June - July 2024"},
        {type : "movie" ,title : "Spider-Man: No Way Home" ,id:"634649" ,release_date: "2021-12-15" ,poster_path: "/5weKu49pzJCt06OPpjvT80efnQj.jpg" ,vote_average : "8" ,chrono_date :"June - July 2024"},
        {type : "movie" ,title : "Doctor Strange in the Multiverse of Madness" ,id:"453395" ,release_date: "2022-05-04" ,poster_path: "/fwBl3J2aEXru6mrr9Xg8O99Iz2K.jpg" ,vote_average : "7.3" ,chrono_date :"Nov 2024"},
        {type : "show"  ,title : "Hawkeye" ,id:"88329" ,release_date: "2021-11-24" ,poster_path: "/ct5pNE5dDHryHLDnxyZPYcqO1sz.jpg" ,vote_average : "7.938" ,episode_count : "6" ,chrono_date :"Dec 2024"},
        {type : "show"  ,title : "She-Hulk: Attorney at Law" ,id:"92783" ,release_date: "2022-08-18" ,poster_path: "/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg" ,vote_average : "6.339" ,episode_count : "9" ,chrono_date :"March - Aug 2025"},
        {type : "show"  ,title : "Moon Knight" ,id:"92749" ,release_date: "2022-03-30" ,poster_path: "/YksR65as1ppF2N48TJAh2PLamX.jpg" ,vote_average : "7.785" ,episode_count : "6" ,chrono_date :"April - May 2025"},
        {type : "movie" ,title : "Black Panther: Wakanda Forever" ,id:"505642" ,release_date: "2022-11-09" ,poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" ,vote_average : "7.2" ,chrono_date :"May 2025"},
        {type : "movie" ,title : "Ant-Man and the Wasp: Quantumania" ,id:"640146" ,release_date: "2023-02-15" ,poster_path: "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg" ,vote_average : "6.4" ,chrono_date :"July 2025"},
        {type : "show"  ,title : "Ms. Marvel" ,id:"92782" ,release_date: "2022-06-08" ,poster_path: "/ls2Hl8CXmqEHvkDqkN3fRtmDodK.jpg" ,vote_average : "6.534" ,episode_count : "6" ,chrono_date :"Sept - Oct 2025"},
        {type : "show"  ,title : "Secret Invasion" ,id:"114472" ,release_date: "2023-06-21" ,poster_path: "/f5ZMzzCvt2IzVDxr54gHPv9jlC9.jpg" ,vote_average : "7.024" ,episode_count : "6" ,chrono_date :"Nov 2025"},
        {type : "movie" ,title : "Werewolf by Night" ,id:"894205" ,release_date: "2022-09-25" ,poster_path: "/jmv7EbqBuEk4V1U7OoSBaxkwawO.jpg" ,vote_average : "7" ,chrono_date :"Dec 2025"},
        {type : "movie" ,title : "The Guardians of the Galaxy Holiday Special" ,id:"774752" ,release_date: "2022-11-25" ,poster_path: "/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg" ,vote_average : "7.2" ,chrono_date :"Dec 2025"},
        {type : "movie" ,title : "Guardians of the Galaxy Vol. 3" ,id:"447365" ,release_date: "2023-05-03" ,poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" ,vote_average : "8" ,chrono_date :"2026"},
        {type : "movie" ,title : "The Marvels" ,id:"609681" ,release_date: "2023-11-08" ,poster_path: "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg" ,vote_average : "6.6" ,chrono_date :"2026"},
        {type : "show"  ,title : "What If...? Season 2" ,id:"91363" ,release_date: "2023-12-22" ,poster_path: "/5unizoWT4jflHQRz9PLHXi6OF19.jpg" ,vote_average : "0" ,episode_count : "9" ,chrono_date :""},
        {type : "show"  ,title : "Echo" ,id:"122226" ,release_date: "2024-01-10" ,poster_path: "/vFyJH630cF68LohVYjQW49074Sy.jpg" ,vote_average : "0" ,episode_count : "5" },
        {type : "movie" ,id : "557" ,title : "Spider-Man" ,release_date: "2002-05-01" ,poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg" ,vote_average : "7.284"},
        {type : "movie" ,id : "558" ,title : "Spider-Man 2" ,release_date: "2004-06-25" ,poster_path: "/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg" ,vote_average : "7.263"},
        {type : "movie" ,id : "559" ,title : "Spider-Man 3" ,release_date: "2007-05-01" ,poster_path: "/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg" ,vote_average : "6.402"},
        {type : "movie" ,id : "1930" ,title : "The Amazing Spider-Man" ,release_date: "2012-06-23" ,poster_path: "/jIfkQNARYyERqRAq1p1c8xgePp4.jpg" ,vote_average : "6.693"},
        {type : "movie" ,id : "102382" ,title : "The Amazing Spider-Man 2" ,release_date: "2014-04-16" ,poster_path: "/dGjoPttcbKR5VWg1jQuNFB247KL.jpg" ,vote_average : "6.501"},
        {type : "movie" ,id : "335983" ,title : "Venom" ,release_date: "2018-09-28" ,poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg" ,vote_average : "6.827"},
        {type : "movie" ,id : "580489" ,title : "Venom: Let There Be Carnage" ,release_date: "2021-09-30" ,poster_path: "/1MJNcPZy46hIy2CmSqOeru0yr5C.jpg" ,vote_average : "6.8"},
        {type : "movie" ,id : "526896" ,title : "Morbius" ,release_date: "2022-03-30" ,poster_path: "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg" ,vote_average : "6.089"},
        {type : "show" ,id : "61889" ,title : "Marvel's Daredevil Season 1" ,release_date: "2015-04-10" ,poster_path: "/wQ0M0zuDWMo36ayzdqhZTaTvXrL.jpg" ,vote_average : "7.8" ,episode_count : "13"},
        {type : "show" ,id : "38472" ,title : "Marvel's Jessica Jones Season 1" ,release_date: "2015-11-20" ,poster_path: "/9wwfowgVJDouHQdUsIcNhgbIUlG.jpg" ,vote_average : "7.7" ,episode_count : "13"},
        {type : "show" ,id : "61889" ,title : "Marvel's Daredevil Season 2" ,release_date: "2016-03-18" ,poster_path: "/yml6KBfY9uag7Ym0YNRuouijgsI.jpg" ,vote_average : "7.8" ,episode_count : "13"},
        {type : "show" ,id : "62126" ,title : "Marvel's Luke Cage Season 1" ,release_date: "2016-09-30" ,poster_path: "/77jhpwhJXexUIIhytQzAXVhjXWo.jpg" ,vote_average : "7.1" ,episode_count : "13"},
        {type : "show" ,id : "62127" ,title : "Marvel's Iron Fist Season 1" ,release_date: "2017-03-17" ,poster_path: "/qUSG2P5Xgk80kx8uwKts5VnbgvD.jpg" ,vote_average : "6.5" ,episode_count : "13"},
        {type : "show" ,id : "62285" ,title : "Marvel's The Defenders" ,release_date: "2017-08-18" ,poster_path: "/49XzINhH4LFsgz7cx6TOPcHUJUL.jpg" ,vote_average : "7.1" ,episode_count : "8"},
        {type : "show" ,id : "67178" ,title : "Marvel's The Punisher Season 1" ,release_date: "2017-11-17" ,poster_path: "/gTn3seWzhr7D6dZcDGPXHhATuhF.jpg" ,vote_average : "7.8" ,episode_count : "13"},
        {type : "show" ,id : "38472" ,title : "Marvel's Jessica Jones Season 2" ,release_date: "2018-03-08" ,poster_path: "/tKirVNmDmwYjqehjPpyjr1n3U2F.jpg" ,vote_average : "6.9" ,episode_count : "13"},
        {type : "show" ,id : "62126" ,title : "Marvel's Luke Cage Season 2" ,release_date: "2018-06-22" ,poster_path: "/vogAXFUx6G0iHFdGOnME7yGXxhK.jpg" ,vote_average : "6.7" ,episode_count : "13"},
        {type : "show" ,id : "62127" ,title : "Marvel's Iron Fist Season 2" ,release_date: "2018-09-07" ,poster_path: "/tU5Vg8ioU2EMIy3b4qP56LgfI4a.jpg" ,vote_average : "6.6" ,episode_count : "10"},
        {type : "show" ,id : "61889" ,title : "Marvel's Daredevil Season 3" ,release_date: "2018-10-19" ,poster_path: "/n4MrPHMS8TO6VSdvpG8CFoyXfbm.jpg" ,vote_average : "8" ,episode_count : "13"},
        {type : "show" ,id : "67178" ,title : "Marvel's The Punisher Season 2" ,release_date: "2019-01-18" ,poster_path: "/zBMYMP25nUhbnO0tbFxkQCAF5r1.jpg" ,vote_average : "7.8" ,episode_count : "13"},
        {type : "show" ,id : "38472" ,title : "Marvel's Jessica Jones Season 3" ,release_date: "2019-06-14" ,poster_path: "/dOPx3bj3x6eXYXQJUUIHXvWRSSB.jpg" ,vote_average : "7" ,episode_count : "13"},
    ]
    const filteredData = data.filter((item) => {
        if(item.title.toLowerCase().replace("-","").replace(":","").includes(currentSearch.toLowerCase().replace("-","").replace(":",""))){
            return true
        } else false
    })

    const filteredDataObjects = filteredData.map((item)=>{
        if(item.type ==="movie"){
            return <MovieCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = {item.title} id={item.id} release_date= {item.release_date.toString()} poster_path= {item.poster_path} vote_average = {item.vote_average} chrono_date = {item.chrono_date}/>
                        
        } else if(item.type ==="show"){
            return <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = {item.title} id={item.id} release_date= {item.release_date.toString()} poster_path= {item.poster_path} vote_average = {item.vote_average} chrono_date = {item.chrono_date} tip = {item.tip}/>
        }
    })

    return(
        <div className="search--container">
            <div className="search--items">
                {filteredDataObjects}
            </div>
        </div>
        
    )
} 

