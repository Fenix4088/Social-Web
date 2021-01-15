import {UsersPageDataType, UserType} from "./entities";

type FollowACType = {
    type: typeof FOLLOW;
    userId: number
};
type UnFollowACType = {
    type: typeof UNFOLLOW;
    userId: number
};

type SetUsersAC = {
    type: typeof SET_USERS,
    users: Array<UserType>
}

type ActionsType = FollowACType | UnFollowACType | SetUsersAC;

const initialState: UsersPageDataType = {
    users: [
/*        {
            id: 1,
            userLogo: "https://pbs.twimg.com/profile_images/684655178553819136/F_XaeU8d_400x400.jpg",
            followed: false,
            fullName: "Yehor",
            status: "I am a BOSS!!",
            location: {
                city: "Zaporozhye",
                country: "Ukraine"
            }
        },
        {
            id: 2,
            userLogo: "https://pbs.twimg.com/profile_images/684655178553819136/F_XaeU8d_400x400.jpg",
            followed: true,
            fullName: "Dima",
            status: "I am a BOSS!!",
            location: {
                city: "Minsk",
                country: "Belarus"
            }
        },
        {
            id: 3,
            userLogo: "https://pbs.twimg.com/profile_images/684655178553819136/F_XaeU8d_400x400.jpg",
            followed: false,
            fullName: "Tania",
            status: "I am a BOSS!!",
            location: {
                city: "Moscow",
                country: "Russia"
            }
        }*/
    ]
};

const FOLLOW: "FOLLOW" = "FOLLOW";
const UNFOLLOW: "UNFOLLOW" = "UNFOLLOW";
const SET_USERS: "SET-USERS" = "SET-USERS";

export const usersReducer = (state: UsersPageDataType = initialState, action: ActionsType): UsersPageDataType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userId: number): FollowACType => {
    return {
        type: FOLLOW,
        userId,
    };
};
export const unfollowAC = (userId: number): UnFollowACType => {
    return {
        type: UNFOLLOW,
        userId,
    };
};
export const setUsersAC = (users: Array<UserType>): SetUsersAC => {
    return {
        type: SET_USERS,
        users
    }

}
