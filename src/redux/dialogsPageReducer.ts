import {ActionType, dialogsPageDataType} from "./entities";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const initialState = {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Where are you from?"},
        {id: 4, message: "Nice picture? bro!!!!"},
        {id: 5, message: "I miss you :-("}
    ],
    dialogsData: [
        {
            id: 1,
            name: "Yehor",
            logo:
                "https://c0.klipartz.com/pngpicture/795/938/gratis-png-cerdo-blanco-grande-caras-divertidas-de-dibujos-animados-s.png"
        },
        {
            id: 2,
            name: "Andrey",
            logo:
                "https://e7.pngegg.com/pngimages/95/869/png-clipart-walrus-santa-claus-drawing-funny-cartoon-faces-s-food-face.png"
        },
        {
            id: 3,
            name: "Viktor",
            logo:
                "https://w7.pngwing.com/pngs/2/519/png-transparent-little-penguin-bird-face-funny-cartoon-faces-s-face-smiley-bird.png"
        },
        {
            id: 4,
            name: "Dima",
            logo: "https://wallpaperaccess.com/full/777162.png"
        },
        {
            id: 5,
            name: "Sveta",
            logo:
                "https://funnypicture.org/wallpaper/2015/05/funny-cartoon-faces-28-high-resolution-wallpaper.png"
        }
    ],
    newMessageText: ""
}

export const dialogsPageReducer = (state: dialogsPageDataType = initialState, action: ActionType): dialogsPageDataType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.newText) {
                state.newMessageText = action.newText;
            }
            return state;
        case SEND_MESSAGE:
            const newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText
            };

            state.messagesData.push(newMessage);
            state.newMessageText = "";
            return state;
        default:
            return state;
    }

};

export const sendMessageCreator = (): ActionType => {
    return {
        type: SEND_MESSAGE
    };
};
export const updateNewMessageCreator = (messageText: string): ActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: messageText
    };
};

