import React from "react"
import { Link } from "react-router"
import './ContactItem.css'

const ContactItem = ({ name, id, last_time_connected, img, last_message, unread_messages }) => {

    return (
        <div className="contenedor-card-icons">
            <div className="img-msj">

                {/* Imagen con ruta distinta */}
                <Link
                    to={`/profile/${id}`}
                    onClick={e => e.stopPropagation()} // evita que afecte al otro Link
                    className="card-icon"
                >
                    <img src={img} alt={`${name} image profile`} />
                </Link>

                {/* Resto del contenido con su ruta normal */}
                <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/contacts/${id}/messages`}
                    className="img-msj-contact"
                >
                    <div className="contacto-msj">
                        <div className="card-title">{name}</div>
                        <div className="card-description">{last_message.text}</div>
                    </div>

                    <div className="horario-notif">
                        <span className="hora">10:00</span>
                        <span className="notif">{unread_messages}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ContactItem
