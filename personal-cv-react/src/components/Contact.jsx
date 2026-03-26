import { useState } from "react";
import Card from "./Card";

function Contact() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === "" || email.trim() === "") {
            alert("Please enter your name and email.");
            return;
        }

        fetch("http://localhost/cv-api/process.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email, message: message })
        })

        .then(res => res.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
                setName("");
                setEmail("");
                setMessage("");
            } else {
                alert("Unexpected error occurred.");
            }
        })
        
        .catch(err => {
            console.error("Error:", err);
            alert("Could not connect to the server.");
        });
    }

    return (
        <Card title="Contact me here">
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <label>Message:</label><br />
                <textarea 
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br /><br />
                <button type="submit" id="submitBtn">Send</button>
            </form>

        </Card>
    );
}

export default Contact;