import { UsersPageDataType, UserType } from "./entities";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppDispatchType, AppStateType} from "./reduxStore";
import {APIResponseData, usersAPI} from "../API/api";
import {Action} from "redux";

type FollowACT = ReturnType<typeof followSuccess>
type UnFollowACT = ReturnType<typeof unfollowSuccess>
type SetUsersACT = ReturnType<typeof setUsers>
type SetCurrentPageACT = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountACT = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingACT = ReturnType<typeof setIsFetching>
type ToggleIsFollowingProgressACT = ReturnType<typeof toggleFollowingProgress>

type ActionsType =
    | FollowACT
    | UnFollowACT
    | SetUsersACT
    | SetCurrentPageACT
    | SetTotalUsersCountACT
    | ToggleIsFetchingACT
    | ToggleIsFollowingProgressACT;

type UserReducerThunkT<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>;

const initialState: UsersPageDataType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
    followingUsers: []
};

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

export const usersReducer = (state: UsersPageDataType = initialState, action: ActionsType): UsersPageDataType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u))
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u))
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingUsers: action.followingInProgress
                    ? [...state.followingUsers, action.userId]
                    : state.followingUsers.filter((id) => id !== action.userId)
            };
        default:
            return state;
    }
};

//* helpers
type apiMethodT = (userId: number) => Promise<APIResponseData>;
type followUnfollowFlowACTs = (param: number) => FollowACT | UnFollowACT;

const followUnfollowFlow = async (dispatch: AppDispatchType<ActionsType>, userId: number, apiMethod: apiMethodT, actionCreator: followUnfollowFlowACTs) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    console.log(data)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

//* Action Creators
export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const;
};
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const;
};
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const;
};
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const;
};
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const;
};
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const;
};
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    } as const;
};
//* /Action Creators

// * Thunks
export const requestUsers = (currentPage: number, pageSize: number): UserReducerThunkT => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    const data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};
export const follow = (userId: number): UserReducerThunkT => async (dispatch) => {
    const apiMethod = usersAPI.followUser.bind(usersAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
};
export const unfollow = (userId: number): UserReducerThunkT => async (dispatch) => {
    const apiMethod = usersAPI.unfollowUser.bind(usersAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
};
// * /Thunks
