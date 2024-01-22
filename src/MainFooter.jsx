import React from "react"

export default function MainFooter(){
    return(
        <div className="footer">
            <div>
                <h3>Developed by:</h3>
                <h4>Ammar Abdelwadoud</h4>
            </div>
            <div>
                <h3>Contact Us:</h3>
                <h4>
                    <a className="contactLinks" 
                    href="https://www.linkedin.com/in/ammar-abdelwadoud-20457a272/" 
                    target="_blank">LinkedIn</a>
                </h4>
            </div>
            <div className="sources--style ">
                <h3>References</h3>
                <a href="https://www.space.com/marvel-movies-in-order" 
                    target="_blank">1) space.com</a>
                <a href="https://editorial.rottentomatoes.com/guide/marvel-movies-in-order/" 
                    target="_blank"><span>2) editorial.rotten</span>tomatoes.com</a>
                <a href="https://thedirect.com/article/mcu-timeline-order-disney-werewolf-by-night" 
                    target="_blank">3) thedirect.com</a>
                <a href="https://www.reddit.com/r/marvelstudios/comments/12zkz29/a_thoughtout_complete_timeline_of_the_marvel/" 
                    target="_blank"><span>4) reddit.com/</span>r/marvelstudios</a>
                <a href="https://www.reddit.com/user/UnfavorableSpiderFan/" 
                    target="_blank"><span>5) reddit.com/user/</span>UnfavorableSpiderFan/</a>
            </div>
            
        </div>
    )
}