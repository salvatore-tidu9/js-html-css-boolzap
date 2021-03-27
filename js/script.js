var app = new Vue({

    el: "#root",

    data: {

        path: "img/",

        currentContact: 0,

        active_contact: 0,

        userMessage: "",

        searchName: "",

        activeControlPanel: -1,

        // activeContactWriting: false,

        user: {

            name: "Salvatore",
            avatar: "avatar_io.jpg"
        },

        contacts: [

            {
                name: 'Michele',
                avatar: 'avatar_1.jpg',
                visible: true,
                messages: [

                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },

            {
                name: 'Fabio',
                avatar: 'avatar_2.jpg',
                visible: true,
                messages: [

                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },

                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },

                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ]
            },

            {
                name: 'Samuele',
                avatar: 'avatar_3.jpg',
                visible: true,
                messages: [

                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },

                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },

                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ]
            },

            {
                name: 'Luisa',
                avatar: 'avatar_8.jpg',
                visible: true,
                messages: [

                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ]
            },

            {
                name: 'Francesco',
                avatar: 'avatar_4.jpg',
                visible: true,
                messages: [

                    {
                        date: '10/01/2020 11:30:50',
                        text: 'Come stai ?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 11:22:00',
                        text: 'Tutto bene grazie ! Tu come stai ?',
                        status: 'received'
                    }
                ]
            },

            {
                name: 'Marco',
                avatar: 'avatar_5.jpg',
                visible: true,
                messages: [

                    {
                        date: '10/01/2020 16:35:55',
                        text: 'Come è andato il colloquio ?',
                        status: 'received'
                    },

                    {
                        date: '10/01/2020 16:45:00',
                        text: 'Credo sia andato bene !',
                        status: 'sent'
                    }
                ]
            },

            {
                name: 'Sara',
                avatar: 'avatar_6.jpg',
                visible: true,
                messages: [

                    {
                        date: '10/01/2020 10:32:55',
                        text: 'Appena puoi mi passi una copia del documento ?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 10:54:20',
                        text: 'Certo !',
                        status: 'received'
                    }
                ]
            },

            {
                name: 'Simone',
                avatar: 'avatar_7.jpg',
                visible: true,
                messages: [

                    {
                        date: '10/01/2020 20:32:55',
                        text: 'Pronto per la partita ?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 20:34:20',
                        text: 'Prontissimo !',
                        status: 'received'
                    }
                ]
            },
        ]
    },

    methods: {

        changeActiveContact(index) {

            this.active_contact = index;
        },

        sendMessage() {

            if (this.userMessage.length != "") {

                let newUserMessage = {

                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: this.userMessage,
                    status: "sent"
                };
    
                let activeChat = this.contacts[this.active_contact].messages;
    
                activeChat.push(newUserMessage);
    
                this.userMessage = "";


                // setTimeout(() => {

                //     this.activeContactWriting = true;

                // }, 2000);

                setTimeout(() => {

                    let computerAnswer = {
    
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: "Ok",
                        status: "received"
                    };

                    activeChat.push(computerAnswer);

                }, 1000);

                // this.activeContactWriting = false;

                this.scrollToEnd();

            }

        },

        scrollToEnd() {    	

            let chatArea = this.$el.querySelector(".chat_text_area");

            chatArea.scrollTop = chatArea.scrollHeight;

        },

        searchContact() {

            this.contacts.forEach((contact) => {

                let contactName = contact.name.toLowerCase();

                let searchedName = this.searchName.toLowerCase();

                if (contactName.includes(searchedName)) {

                    contact.visible = true;
                }

                else {

                    contact.visible = false;
                }

            });

        },

        showControlPanel(index) {

            this.activeControlPanel = index;
        },

        deleteMessage(index) {

            this.contacts[this.active_contact].messages.splice(index, 1);
        }

    }

});

Vue.config.devtools = true;