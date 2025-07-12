import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'
import './ContactDetailScreen.css'




export default function ContactDetailScreen() {
    const { contact_id } = useParams()
    const { loadContact, contact_detail, isLoadingContactDetail } = useContext(ContactDetailContext)
    const navigate = useNavigate()


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




            <div className="header-contact-detail">
                <button onClick={() => navigate(-1)} className="go-back-button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                </button>
            </div>

            <div className="contact-detail">

                <img src={contact_detail.img} className="contact-img" />
                <h1 className="contact-name-profile">{contact_detail.name} </h1 >
                <p className="contact-last-time">Ultima conexion: {contact_detail.last_time_connected} hs</p>

            </div>


            <div className="contact-status-screen">
                <h1 className="contact-about">About: <br />{contact_detail.about} </h1 >

            </div>

            <div className="botones">



                <div className="contact-button">

                    <div className='button-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                    </div>
                    <div className='button-text'>Llamar</div>
                </div>


                <div className="contact-button">

                    <div className='button-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                        </svg>
                    </div>
                    <div className='button-text'>Video</div>
                </div>


                <div className="contact-button">

                    <div className='button-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </div>
                    <div className='button-text'>Buscar</div>
                </div>

            </div>

        </div>
    )
}
