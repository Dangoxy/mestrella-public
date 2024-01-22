import React from "react"
import NavBar from "./NavBar"
import MainFooter from "./MainFooter"

export default function FeedbackPage(){

    const [text, setText] = React.useState("")
    const [email, setEmail] = React.useState("")

    console.log("State refreshed in FeedbackPage")


    function submitHandler(){
        event.preventDefault();
        console.log(`Email: ${email} \nText: ${text}`)
        if (email.length > 10){
          Email.send({
            Host : "----",
            Username : "----",
            Password : "----",
            To : '----',
            From : "----",
            Subject : `----`,
            Body : `----`
        }).then(
          message => {
            if(message ==="OK"){
              alert("Feedback sent successfully!")  
            } else{
                alert(message)
            }
            }
        );  
        } else {
            alert("Please enter a valid email address.")
        }
        
    }

    return(
        <div>
            <NavBar />

            <div className="feedback--container">
                <div className="feedback--info--container">
                    <div className="feedback--info">
                        <h1>Feedback!</h1>
                        <p>Your feedback is appreciated. If you enjoyed the website, please take a moment to share your thoughts. Type your feedback and include your email below.
                             Thank you for sharing your thoughts!
                        </p>
    
                        <div className="input--container">
                            <form onSubmit={submitHandler}>
                                <textarea
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="I would like to see ------ in the website!"
                                className="input--textbox"
                                ></textarea>
                                <div>
                                    <input 
                                    type="text" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email:" 
                                    className="input--emailbox"
                                    ></input>

                                    <button className="input--submitbutton">Submit!</button>  
                                </div>
                            </form>
                            
                        </div>   
                    </div>
                </div>
            </div>

            <MainFooter />
        </div>
    )
}