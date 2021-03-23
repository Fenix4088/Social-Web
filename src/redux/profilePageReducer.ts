import { ProfilePageDataType, UserProfileItemT } from "./entities";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import { profileAPI } from "../API/api";

type AddPostActionType = ReturnType<typeof addPost>;
type DeletePostAT = ReturnType<typeof deletePost>;
type SetUserProfileT = ReturnType<typeof setUserProfile>;
type SetStatusT = ReturnType<typeof setStatus>;

type ActionsType = AddPostActionType | SetUserProfileT | SetStatusT | DeletePostAT;

type ProfilePageReducerThunkT<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>;

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialState = {
    profile: {} as UserProfileItemT,
    postsData: [
        { id: 1, message: "Good day", likes: 15 },
        { id: 2, message: "Nice weather", likes: 6 },
        { id: 3, message: "I was in Rome!!!!", likes: 0 }
    ],
    defaultUserId: 2,
    status: ""
};

export const profilePageReducer = (
    state: ProfilePageDataType = initialState,
    action: ActionsType
): ProfilePageDataType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                message: action.newPostText,
                likes: 0
            };

            return { ...state, postsData: [...state.postsData, newPost] };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return { ...state, status: action.status };
        case DELETE_POST:
            return { ...state, postsData: state.postsData.filter(item => item.id !== action.postId)};
        default: {
            return state;
        }
    }
};

// * Action creators
export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const;
};
export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const;
};
export const setUserProfile = (profile: UserProfileItemT) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const;
};
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const;
};
// * //Action creators

// * Thunks
export const getUserProfile = (userId: number): ProfilePageReducerThunkT => (dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};

export const getUserStatus = (userId: number): ProfilePageReducerThunkT => (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
        dispatch(setStatus(data));
    });
};

export const updateUserStatus = (status: string): ProfilePageReducerThunkT => (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

// * Thunks
