import { useState } from "react";
import Card from "./Card";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (name.trim() === "" || email.trim() === "") {
            alert("Please enter your name and email.");
            return;
        }
        alert(`Thank you ${name}! Your message has been sent.`);
       }       

    return (
        <Card title ="Contact me here">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                <label>Message:</label>
                <textarea name="message"></textarea><br/>

                <button type="submit" id="submitBtn">Send</button>
            </form>
    
        </Card>
    );
}

export default Contact;