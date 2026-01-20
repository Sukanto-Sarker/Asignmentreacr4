import { useEffect, useState } from "react";
import { ContactContext } from "./ContactContext";

const API = "http://localhost:5000/contacts";

export default function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  const addContact = async (contact) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    const data = await res.json();
    setContacts([...contacts, data]);
  };

  const updateContact = async (id, updated) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    const data = await res.json();
    setContacts(contacts.map(c => c.id === id ? data : c));
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
}
