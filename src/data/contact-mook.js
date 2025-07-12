//Este archivo solo contiene la informacion de la app, en futuro lo vamos a eliminar
const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Mariana',
            last_time_connected: '14:19',
            img: '/img/img-profile-1.png',
            about: '🖤 Me quiero morir 🖤',
            last_message: {
                id: 1,
                text: 'Necesito vacaciones 😅'
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
            last_time_connected: '15:45',
            img: "/img/img-profile-2.png",
            about: '🎮🐕‍🦺',
            last_message: {
                id: 1,
                text: 'Bueno, es algo que se usa en React'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'Lauju',
                    hora: '23:09',
                    id: 1,
                    texto: 'Si, hoy aprendi estados',
                    status: 'visto'
                },

                {
                    emisor: 'YO',
                    hora: '23:10',
                    id: 2,
                    texto: 'Despues explicame como es eso de los estados',
                    status: 'visto'
                },


                {
                    emisor: 'YO',
                    hora: '23:11',
                    id: 3,
                    texto: 'No se que es eso',
                    status: 'visto'
                },



                {
                    emisor: 'Lauju',
                    hora: '23:15',
                    id: 4,
                    texto: 'Bueno, es algo que se usa en React',
                    status: 'visto'
                },

            ]
        },
        {
            id: 3,
            name: 'Belen',
            last_time_connected: '18:17',
            img: "/img/img-profile-3.png",
            about: '🖤🖤🖤',
            last_message: {
                id: 1,
                text: 'Acordate eh'
            },
            unread_messages: 2,
            messages: [
                {
                    emisor: 'YO',
                    hora: '00:12',
                    id: 1,
                    texto: 'Que hacemos mañana?',
                    status: 'visto'
                },


                {
                    emisor: 'Belen',
                    hora: '00:15',
                    id: 2,
                    texto: 'Vamos a la plaza',
                    status: 'visto'
                },

                {
                    emisor: 'Belen',
                    hora: '00:15',
                    id: 3,
                    texto: 'A tomar unos mates',
                    status: 'visto'
                },


                {
                    emisor: 'Belen',
                    hora: '00:15',
                    id: 4,
                    texto: 'Acordate eh',
                    status: 'visto'
                },
            ]
        },

        {
            id: 4,
            name: 'Jalil',
            last_time_connected: '13:39',
            about: '👾👽👾👽',
            img: "/img/img-profile-4.png",
            last_message: {
                id: 1,
                text: 'No puedo, estoy en Villa Luro'
            },
            unread_messages: 12,
            messages: [
                {
                    emisor: 'Jalil',
                    hora: '13:12',
                    id: 1,
                    texto: 'Decile a Lauju que me pase el codigo',
                    status: 'visto'
                },


                {
                    emisor: 'YO',
                    hora: '13:26',
                    id: 2,
                    texto: 'Decile vos',
                    status: 'visto'
                },


                {
                    emisor: 'Jalil',
                    hora: '13:52',
                    id: 1,
                    texto: 'No puedo, estoy en Villa Luro',
                    status: 'visto'
                },
            ]
        },

        {
            id: 5,
            name: 'Chy',
            last_time_connected: '17:19',
            img: "/img/img-profile-5.png",
            about: 'mcr 2026 👀',
            last_message: {
                id: 1,
                text: 'Dale si si'
            },
            unread_messages: 6,
            messages: [
                {
                    emisor: 'YO',
                    hora: '18:15',
                    id: 1,
                    texto: 'El libro',
                    status: 'nvisto'
                },


                {
                    emisor: 'YO',
                    hora: '18:16',
                    id: 2,
                    texto: 'Te lo llevo mañana',
                    status: 'visto'
                },


                {
                    emisor: 'Chy',
                    hora: '18:17',
                    id: 3,
                    texto: 'Dale si si',
                    status: 'no-visto'
                },
            ]
        },


        {
            id: 6,
            name: 'Eros',
            last_time_connected: '20:19',
            about: '🎮jueguitos si si 🎮',
            img: "/img/img-profile-6.png",
            last_message: {
                id: 1,
                text: 'Conectate dale'
            },
            unread_messages: 14,
            messages: [
                {
                    emisor: 'Eros',
                    hora: '23:12',
                    id: 1,
                    texto: 'Cuando te conectas?',
                    status: 'visto'
                },

                {
                    emisor: 'Eros',
                    hora: '23:12',
                    id: 2,
                    texto: 'Tenemos que jugar',
                    status: 'visto'
                },


                {
                    emisor: 'Eros',
                    hora: '23:12',
                    id: 6,
                    texto: 'Conectate dale',
                    status: 'visto'
                },
            ]
        }

    ]
}

export default mook_data
