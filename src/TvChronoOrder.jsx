import React from "react"
import TvCard from "./TvCard"
export default function TvChronoOrder(){
    return (
         [
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = "232125" title = "I Am Groot Season 1" release_date= "2022-08-10" poster_path= "/gztIgtKZr7tKfL2Zaz6gBfzQY12.jpg" vote_average = "6.6" episode_count = "5" chrono_date="2014"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } id = "232125" title = "I Am Groot Season 2" release_date= "2023-09-06" poster_path= "/lNKkHTsjeVddRIq1XZ7kmtwtaZG.jpg" vote_average = "6.1" episode_count = "5" chrono_date="2014"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "Loki Season 1" id="84958" release_date= "2021-06-09" poster_path= "/8uVqe9ThcuYVNdh4O0kuijIWMLL.jpg" vote_average = "7.8" episode_count = "6" chrono_date="Oct 2023"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "Loki Season 2" id="84958" release_date= "2023-10-05" poster_path= "/8vjTn0NGF5vM8BijlJxe6YZCRmU.jpg" vote_average = "7.9" episode_count = "6" chrono_date = "Oct 2023" tip = "*Out of the timeline*"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "What If...? Season 1" id="91363" release_date= "2021-08-11" poster_path= "/k0qV3kjTetxaylK0BZPLCbpx9oJ.jpg" vote_average = "6.9" episode_count = "9" chrono_date="Oct 2023"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "WandaVision" id="85271" release_date= "2021-01-15" poster_path= "/glKDfE6btIRcVB5zrjspRIs4r52.jpg" vote_average = "8.258" episode_count = "9" chrono_date ="Nov 2023"/>,  
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "The Falcon and the Winter Soldier" id="88396" release_date= "2021-03-19" poster_path= "/6kbAMLteGO8yyewYau6bJ683sw7.jpg" vote_average = "7.685" episode_count = "6" chrono_date ="April 2024"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "Hawkeye" id="88329" release_date= "2021-11-24" poster_path= "/ct5pNE5dDHryHLDnxyZPYcqO1sz.jpg" vote_average = "7.938" episode_count = "6" chrono_date ="Dec 2024"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "She-Hulk: Attorney at Law Ep 1 - Ep 4" id="92783" release_date= "2022-08-18" poster_path= "/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg" vote_average = "6.339" episode_count = "9" chrono_date ="March - April 2025"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "Moon Knight" id="92749" release_date= "2022-03-30" poster_path= "/YksR65as1ppF2N48TJAh2PLamX.jpg" vote_average = "7.785" episode_count = "6" chrono_date ="April - May 2025"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "She-Hulk: Attorney at Law Ep 5 - Ep 9" id="92783" release_date= "2022-08-18" poster_path= "/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg" vote_average = "6.339" episode_count = "9" chrono_date ="May - Aug 2025"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "Ms. Marvel" id="92782" release_date= "2022-06-08" poster_path= "/ls2Hl8CXmqEHvkDqkN3fRtmDodK.jpg" vote_average = "6.534" episode_count = "6" chrono_date ="Sept - Oct 2025"/>,
            <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "Secret Invasion" id="114472" release_date= "2023-06-21" poster_path= "/f5ZMzzCvt2IzVDxr54gHPv9jlC9.jpg" vote_average = "7.024" episode_count = "6" chrono_date ="Nov 2025"/>,
            
        ]   
                    
    )
}

{/* <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "What If...? Season 2" id="91363" release_date= "2023-12-22" poster_path= "/5unizoWT4jflHQRz9PLHXi6OF19.jpg" vote_average = "0" episode_count = "9" chrono_date =""/>,
    <TvCard key = {(+new Date * Math.random()).toString(36).substring(0,6) } title = "Echo" id="122226" release_date= "2024-01-10" poster_path= "/vFyJH630cF68LohVYjQW49074Sy.jpg" vote_average = "0" episode_count = "5" />, */}