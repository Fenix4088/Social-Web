import {ActionType, profilePageDataType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    postsData: [
        { id: 1, message: "Good day", likes: 15 },
        { id: 2, message: "Nice weather", likes: 6 },
        { id: 3, message: "I was in Rome!!!!", likes: 0 }
    ],
    newPostText: ""
}

export const profilePageReducer = (state: profilePageDataType = initialState, action: ActionType): profilePageDataType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            if (action.newText) {
                state.newPostText = action.newText;
            }
            return state;
        default:
            return state;

    }

};

export const addPostCreator = (): ActionType => {
    return {
        type: ADD_POST
    };
};
export const updateNewPostCreator = (text: string): ActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};