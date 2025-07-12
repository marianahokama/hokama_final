//Este archivo solo contiene la informacion de la app, en futuro lo vamos a eliminar
const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Mariana',
            last_time_connected: '14:19',
            img: '/img/img-profile-1.png',
            last_message: {
                id: 1,
                text: 'Es que no estoy entendiendo nada'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'Mariana',
                    hora: '23:10',
                    id: 1,
                    texto: 'Es que no estoy entendiendo nada',
                    status: 'visto'
                },
                {
                    emisor: 'Mariana',
                    hora: '23:15',
                    id: 2,
                    texto: 'Nada',
                    status: 'visto'
                },

                {
                    emisor: 'YO',
                    hora: '23:25',
                    id: 3,
                    texto: 'Ah yo tampoco estoy entendiendo nada',
                    status: 'visto'
                },

                {
                    emisor: 'Mariana',
                    hora: '23:50',
                    id: 4,
                    texto: 'Necesito vacaciones 😅',
                    status: 'visto'
                },

            ]
        },
        {
            id: 2,
            name: 'Lauju',
            last_time_connected: '15:19',
            img: "/img/img-profile-4.png",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'USUARIO',
                    hora: '23:11',
                    id: 2,
                    texto: 'Si, hoy aprendi estados',
                    status: 'visto'
                },
            ]
        },
        {
            id: 3,
            name: 'Belen',
            last_time_connected: '17:19',
            img: "/img/img-profile-5.png",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 20,
            messages: [
                {
                    emisor: 'YO',
                    hora: '23:12',
                    id: 3,
                    texto: 'Eso que significa 🤓?',
                    status: 'no-visto'
                },
            ]
        },

        {
            id: 4,
            name: 'Chyru',
            last_time_connected: '17:19',
            img: "/img/img-profile-5.png",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 20,
            messages: [
                {
                    emisor: 'YO',
                    hora: '23:12',
                    id: 4,
                    texto: 'Eso que significa 🤓?',
                    status: 'no-visto'
                },
            ]
        }

    ]
}

export default mook_data
