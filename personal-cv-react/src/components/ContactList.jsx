import { useEffect, useState } from "react";
import Card from "./Card";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <Card title= 'Saved Contacts'>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </Card>
  );
}

export default ContactList;
