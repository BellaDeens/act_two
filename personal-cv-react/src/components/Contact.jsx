function Contact() {
    return (
        <section id="contact" class="card">
            <h2>Contact me here</h2>
            <form>
                <input type="text" id="name" placeholder="Name"/><br/>

                <input type="email" id="email" placeholder="Email"/><br/>

                <label>Message:</label>
                <textarea name="message"></textarea><br/>

                <button type="submit" id="submitBtn">Send</button>
            </form>
    
        </section>
    );
}

export default Contact;