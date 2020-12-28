export type StateType = {
    profilePageData: {
        postsData: Array<PostsDataType>
        newPostText: string
    }
    dialogsPageData: {
        dialogsData: Array<DialogItemType>
        messagesData: Array<MessageDataType>
        newMessageText: string
    }
    sidebar: {
        friends: Array<FriendsItemType>
    }
}
export type PostsDataType = {
    id: number
    message: string
    likes: number
}
export type MessageDataType = {
    id: number
    message: string
}
export type DialogItemType = {
    name: string
    id: number
    logo: string
}
export type FriendsItemType = {
    id: number
    name: string
    logo: string
}
export type ActionType = {
    type: string
    newText?: string
}

//! Action types
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";


//! Fake Store
export const store = {
    _state: {
        profilePageData: {
            postsData: [
                {id: 1, message: 'Good day', likes: 15},
                {id: 2, message: 'Nice weather', likes: 6},
                {id: 3, message: 'I was in Rome!!!!', likes: 0}
            ],
            newPostText: ""
        },
        dialogsPageData: {
            messagesData: [
                {id: 1, message: 'Hi'}, {id: 2, message: 'How are you?'}, {id: 3, message: 'Where are you from?'},
                {id: 4, message: 'Nice picture? bro!!!!'}, {id: 5, message: 'I miss you :-('}
            ],
            dialogsData: [
                {
                    id: 1,
                    name: 'Yehor',
                    logo: 'https://c0.klipartz.com/pngpicture/795/938/gratis-png-cerdo-blanco-grande-caras-divertidas-de-dibujos-animados-s.png'
                },
                {
                    id: 2,
                    name: 'Andrey',
                    logo: 'https://e7.pngegg.com/pngimages/95/869/png-clipart-walrus-santa-claus-drawing-funny-cartoon-faces-s-food-face.png'
                },
                {
                    id: 3,
                    name: 'Viktor',
                    logo: 'https://w7.pngwing.com/pngs/2/519/png-transparent-little-penguin-bird-face-funny-cartoon-faces-s-face-smiley-bird.png'
                },
                {id: 4, name: 'Dima', logo: 'https://wallpaperaccess.com/full/777162.png'},
                {
                    id: 5,
                    name: 'Sveta',
                    logo: 'https://funnypicture.org/wallpaper/2015/05/funny-cartoon-faces-28-high-resolution-wallpaper.png'
                }
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Sveta',
                    logo: 'https://c0.klipartz.com/pngpicture/795/938/gratis-png-cerdo-blanco-grande-caras-divertidas-de-dibujos-animados-s.png'
                },
                {
                    id: 2,
                    name: 'Anna',
                    logo: 'https://w7.pngwing.com/pngs/2/519/png-transparent-little-penguin-bird-face-funny-cartoon-faces-s-face-smiley-bird.png'
                },
                {
                    id: 3,
                    name: 'Dima',
                    logo: 'https://funnypicture.org/wallpaper/2015/05/funny-cartoon-faces-28-high-resolution-wallpaper.png'
                }
            ]
        }
    },
    _callSubscriber(state: StateType) {
        console.log("State render")
    },

    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    getState(): StateType {
        return this._state;
    },
//! Fake Dispatcher
    dispatch(action: ActionType)  {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                message: this._state.profilePageData.newPostText,
                likes: 0
            };
            this._state.profilePageData.postsData.push(newPost);
            this._state.profilePageData.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            if (action.newText) {
                this._state.profilePageData.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            if (action.newText) {
                this._state.dialogsPageData.newMessageText = action.newText;
                this._callSubscriber(this._state);
            }
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {
                id: this._state.dialogsPageData.messagesData.length + 1,
                message: this._state.dialogsPageData.newMessageText
            }

            this._state.dialogsPageData.messagesData.push(newMessage);
            this._state.dialogsPageData.newMessageText = "";
            this._callSubscriber(this._state);
        }

    }
}

export const addPostCreator = (): ActionType => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostCreator = (text: string): ActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const sendMessageCreator = (): ActionType => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageCreator = (messageText: string): ActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: messageText
    }
}
