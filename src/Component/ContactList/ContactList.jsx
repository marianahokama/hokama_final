import React, { useContext, useState } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"
import '../ContactList/ContactList.css'

const ContactsList = () => {
    const { contacts, isLoadingContacts } = useContext(ContactContext)
    const [searchTerm, setSearchTerm] = useState("")

    if (isLoadingContacts) {
        return <LoaderSpinner />
    }

    // Filtrar contactos por nombre (ignorando mayúsculas/minúsculas)
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="chat-container">
<header className="chat-header">
    <h2>Chats</h2>

    <form onSubmit={(e) => e.preventDefault()} className="form">
        <div className="search-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="search-icon"
                viewBox="0 0 16 16"
            >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <input
                type="text"
                placeholder="Buscar contacto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
        </div>
    </form>
</header>

            {/* Lista filtrada */}
            {filteredContacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    last_time_connected={contact.last_time_connected}
                    img={contact.img}
                    last_message={contact.last_message}
                    unread_messages={contact.unread_messages}
                />
                // O simplemente: <ContactItem key={contact.id} {...contact} />
            ))}
        </div>
    )
}

export default ContactsList
