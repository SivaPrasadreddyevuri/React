const Contact=()=>{
        return(<>
                  {/* <!-- Contact Me Section --> */}
    <section id="contact">
        <h1>
            Contact Me:
        </h1>
        <form action="" method="POST" id="contact_form">

            <input type="text" id="name" name="name" required placeholder="Enter Your Name"  />
            <input type="tel"  id="phone" name="phone" required placeholder="Your Phone Number" />
            <input type="email" id="email" name="email" required placeholder="YourMail@gamil.com" />
            <input type="text" id="subject" name="subject" required placeholder="Enter Your Subject" />
            <textarea id="message" name="message" required placeholder="Enter Your Message here"></textarea>
            <input id="submit_btn" type="submit" value="Send Message" />
        </form>
    </section>
    
        
        
        
        
        
        </>)



}
export default Contact;