import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { IoIosBody, IoIosBackspace } from "react-icons/io";
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';
import './HomeScreen.css';
import { getContactById } from '../../services/contactService';
export default function HomeScreen() {

    //Capturamos el valor de id de contacto de la URL usando la funcion useParams
    const {contact_id} = useParams()
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext)

    const contact = getContactById(contact_id)

    //const {contact_id} = useParams()
    //La funcion console.log se ejecute cada vez que se cambie un parametro de busqueda
    //useEffect tiene la responsabilidad de manejar la carga/recarga de funcionalidad
    //El primer parametro es una callback con la accion a repetir 
    //El segundo parametro es un array de dependencias
    //Funcionalidad: Si alguna de las dependencias actualiza su valor el efecto debera actualizarse, es decir la accion se re-ejecutara
    //Queremos que busque la lista de mensajes cada vez que el contact_id cambie, por eso nos interesa usar un efecto, ya que esta operacion se ejecutara dependiendo del cambio de cierto valor
    useEffect(
        () => {
            loadMessages(contact_id)
        },
        [contact_id]
    )

    if(isMessagesLoading){
        return <LoaderSpinner/>
    }


   
    return (
  <div className="home-screen">
    <div className="chat-header-profile">
     
      

      <div className="contact-img">
         <Link to={`/contacts/${contact_id}/detail`} className="contact-link">
          <img src={contact.img} alt={contact.nombre} className="avatar" />

      </Link>
        </div>



      
      <div className="contact-info">
       <p className="contact-name">{contact.name}</p>
        <p className="contact-status">Ultima conexion: {contact.last_time_connected} hs</p>
      </div>

    </div>
    <div className="chat-content">
      <Chat />
      <NewMessageForm />
    </div>
  </div>
)

}


