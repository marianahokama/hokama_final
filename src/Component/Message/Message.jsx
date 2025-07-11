import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './Message.css'

export default function Message({ emisor, hora, id, texto, status}) {
    //Mostrar por consola el dato guardado en el contexto de mensajes
    //useContext es una funcion de react que me permite usar un contexto
    //Recibe por parametro el contexto a consumir
    //useContext devuelve el valor del la propiedad value del contexto proveedor
    /* const result = useContext(MessagesContext)
    console.log(result) */
    
    

    const classNames = {
        message: 'chat-dialog'
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + '-message-bubble' // chat-dialog-message-bubble
    }
    return (
        <div className={classNames.message}>
            <span> {texto} </span>
            <div className='estado-hora'>
                <span className='hora-enviado'>{hora}</span>
                <span className='estado-msj' >✔✔</span>
                {/* Nos interesa pasar una funcion anonima cuando queremos pasarle un parametro a x funcion */}
               
            </div>
        </div>
    )

    
}
