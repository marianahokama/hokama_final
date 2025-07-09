import React from "react"
import { Link } from "react-router"
import './ContactItem.css'

const ContactItem = ({ name, id, last_time_connected, img, last_message, unread_messages }) => {

    return (


        <Link style={{ textDecoration: 'none' }} to={`/contacts/${id}/messages`}>
            <div className="contenedor-card-icons">

                <div className="img-msj">



                    <div className="card-icon"> <img src={img} alt={`${name} image profile`} />
                    </div>
                    <div className="img-msj-contact">

                        <div className="contacto-msj">
                            <div className="card-title">{name}</div>
                            <div className="card-description">{last_message.text}</div>
                        </div>




                        <div className="horario-notif">
                            <span className="hora">10:00</span>
                            <span className="notif">{unread_messages}</span>
                        </div>

                    </div>
                </div>

            </div>



        </Link>


    )
}

export default ContactItem