function contact(){
    return(
        <>
        <div className="aboutWrapper">
            <h1>Contact</h1>
        </div>
        <div className="contactWrapper">
            
            <div className="leftContent">
            </div>
            <div className="rightContent">
                <input type="text" placeholder="Your Name" className="inputField"/>
                <input type="text" placeholder="Your Email" className="inputField"/>
                <textarea placeholder="Your Message" className="textAreaField"></textarea>
                <button className="submitButton">Send Message</button>
            </div>
        </div>
        </>
    )
}
export default contact;