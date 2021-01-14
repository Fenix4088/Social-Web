import {AddPostActionType, profilePageDataType, UpdateNewPostActionType} from "./entities";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    postsData: [
        { id: 1, message: "Good day", likes: 15 },
        { id: 2, message: "Nice weather", likes: 6 },
        { id: 3, message: "I was in Rome!!!!", likes: 0 }
    ],
    newPostText: ""
};

export const profilePageReducer = (
    state: profilePageDataType = initialState,
    action: AddPostActionType & UpdateNewPostActionType
): profilePageDataType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0
            };

            return { ...state, postsData: [...state.postsData, newPost], newPostText: "" };
        }

        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = { ...state };

            if (action.newText) {
                stateCopy.newPostText = action.newText;
            }
            return stateCopy;
        }

        default: {
            return state;
        }
    }
};

export const addPostCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    };
};
export const updateNewPostCreator = (text: string): UpdateNewPostActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};
