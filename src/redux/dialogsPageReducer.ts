import { DialogsPageDataType } from "./entities";

type SendMessageActionType = {
    type: typeof SEND_MESSAGE;
    messageText: string;
};

type ActionsType = SendMessageActionType;

const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Where are you from?" },
        { id: 4, message: "Nice picture? bro!!!!" },
        { id: 5, message: "I miss you :-(" }
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
            logo: "https://funnypicture.org/wallpaper/2015/05/funny-cartoon-faces-28-high-resolution-wallpaper.png"
        }
    ],
};

export const dialogsPageReducer = (
    state: DialogsPageDataType = initialState,
    action: ActionsType
): DialogsPageDataType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: state.messagesData.length + 1,
                message: action.messageText
            };

            return { ...state, messagesData: [...state.messagesData, newMessage] };
        }

        default: {
            return state;
        }
    }
};

export const sendMessage = (messageText: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        messageText
    };
};
