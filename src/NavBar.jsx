import React from "react"
import { Link, useNavigate } from "react-router-dom";

export default function NavBar(){
    const [searchQuery, setSearchQuery] = React.useState("")

    let history = useNavigate()

    let _pattern = /[A-Za-z0-9]/g

    function handleSubmit(e){
        if (searchQuery.match(_pattern)){
            history(`/searchpage/${searchQuery}`)
            e.preventDefault()
        } else {
            history(`/searchpage/-`)
            e.preventDefault()
        }
        
    }

    return (
        <div className="navBar">
       
                   <Link to="/">
                        <i className="fa-solid fa-dice-d20 icon--hover" style={{color: "#e5e5e7ee" ,fontSize:"34px",marginLeft: "20px"}}></i>
                   </Link> 

                    <div style={{display:"flex", justifyContent:"center", alignItems:"center",width:"100%"}}>
                        
                        <form style={{display:"flex", justifyContent:"center", alignItems:"center",width:"100%"}} 
                        onSubmit={handleSubmit}>
                            <input 
                            style={{borderTopRightRadius:"0",borderBottomRightRadius:"0", height:"16px"}} 
                            type="text" 
                            name="searchBar" 
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}/>

                            <Link style={{fontSize:"1rem"}} to={searchQuery !== "" ? `/searchpage/${searchQuery}` : `/searchpage/-`}> 
                                <i className="fa-solid fa-magnifying-glass icon--hoversearch" style={{height:"16px",color: "#000000", backgroundColor:"white",padding:"8px",borderRadius:"30px",padding:"10px",borderTopLeftRadius:"0", borderBottomLeftRadius:"0",textAlign:"center",}}></i>
                            </Link>
                        </form>
                        

                        
                        
                    </div>
                    
                    <nav>
                        <Link style={{marginRight:"20px"}} to="/about">About</Link>
                        <Link to="/feedback" className="lastEl">Feedback</Link> 
                    </nav>
                    
                    
      
        </div>
    )
}