import React from "react"
import NavBar from "./NavBar"
import MainFooter from "./MainFooter"


export default function AboutPage(){

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    /* React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth)
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }); */

    console.log("State refreshed in AboutPage")
  
    return(
        <div className="aboutpage--container">
            <NavBar />

            <div className="aboutpage--info--container">
                <div className="aboutpage--info">


                    
                    <h1 style={{textAlign:"center"}}>About us!</h1>
                    <p>We wanted to create a website to welcome newcomers to the MCU without requiring them to think too much or do extensive research to find the accurate chronological order of the movies and shows!</p>
                    
                    <ol>
                        <div>
                            <li>Why make this website?</li>
                            <ul>
                                <li>The project comes from wanting to help friends get into the Marvel Cinematic Universe (MCU). It can be confusing with so many sources and no clear order. So, the plan is to make a system that's more organized and easier to follow.</li>
                            </ul>
                        </div>
                        
                        <div>
                            <li>What are the features available on this website?</li>
                            <ul>
                                <li>All the MCU's movies, shows, and mini-series available in their chronological order and their release order.</li>
                                <li>The spiderverse is available in its release order if any new Spider-Man fans would like to give it a shot!</li>
                                <li>The Defenders Saga also has a section of its own.</li> 
                            </ul>
                        </div>
                                      
                        <div>
                            <li>What are the primary sources used in this project?</li>
                            <ul>
                                <li>We used the
                                    <a href="https://developer.themoviedb.org/docs"
                                    target="_blank"> TMBD API </a>to get the movies and shows data.
                                </li>
                                <li> 
                                    <a href="https://www.reddit.com/user/UnfavorableSpiderFan/"
                                    target="_blank"> "Comic Book John" </a>helped us arrange the movies in chronological order and ensure the dates are accurate.</li>
                            </ul>
                        </div>

                        <div>
                        <li style={{listStyleType:"none"}}>
                            <h3 style={{fontSize:"1.1rem", color:"black",marginLeft:"-15px", marginTop:"50px"}}>Some important points to note:</h3>
                        </li>
                            <ul>
                                <li style={{color:"black", marginTop:"-10px", marginBottom:"-10px"}}>
                                    <h4 style={{fontSize:"1rem"}}>The release order and chronological order for both The Defenders Saga and the Spider-verse sections are the same.</h4>        
                                </li>
                                    
                                <li style={{color:"black"}}> 
                                    <h4 style={{fontSize:"1rem"}}>The "MCU movies in release order" and "MCU series in release order" have unreleased projects in them.
                                     They were placed there to avoid confusion. The unreleased projects are not placed in the "Movies and Series" sections.</h4>
                                </li>
                                <li style={{color:"black"}}> 
                                    <h4 style={{fontSize:"1rem"}}>IMPORTANT NOTE! If the movies or shows show in a weird order (or not in order according to the release date) just refresh the website!</h4>
                                </li>
                            </ul>

                            
                            
                        </div>
                        
                    </ol>
                    </div>

            </div>

            <MainFooter />
        </div>
    )
}