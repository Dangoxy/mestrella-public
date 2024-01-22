import React from "react"
import MoviesAndAllData from "./MoviesAndAllData"
import NavBar from "./NavBar"
import MainFooter from "./MainFooter"
export default function SearchPage(){

  console.log("State refreshed in SearchPage")

    /* const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth)
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }); */



    return(
        <div className="searchpage--container">
            <NavBar />
            <div>
                <h1 className='main--title' style={{fontSize: "2rem",margin:"20px 0", marginLeft:"30px",marginTop:"30px",marginBottom:"0"}}>Your search results: </h1>
                <MoviesAndAllData />
            </div>
            
            <MainFooter />
        </div>
    )
}