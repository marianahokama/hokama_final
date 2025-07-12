import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'
import './ContactDetailScreen.css'



export default function ContactDetailScreen() {
    const { contact_id } = useParams()
    const { loadContact, contact_detail, isLoadingContactDetail } = useContext(ContactDetailContext)


    useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]
    )

    if (isLoadingContactDetail) {
        return <LoaderSpinner />
    }
    return (


        <div className="contact-detail-screen">

            <div className="contact-detail">

                <img src={contact_detail.img} className="contact-img" />
                <h1 className="contact-name">{contact_detail.name} </h1 >
                <p className="contact-last-time">Ultima conexion: {contact_detail.last_time_connected} hs</p>

            </div>


            <div className="contact-status-screen">
                <h1 className="contact-about">About: <br />{contact_detail.about} </h1 >

            </div>

            <div className="botones">

<div className="contact-button">Llamar</div>
<div className="contact-button">Video</div>
<div className="contact-button">Buscar</div>
            </div>

        </div>
    )
}
