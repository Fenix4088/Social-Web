export type StateType = {
    profilePageData: ProfilePageDataType;
    dialogsPageData: DialogsPageDataType;
    sidebar: SidebarType;
};

//! MAIN TYPES
export type ProfilePageDataType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
    profile: UserProfileItemT;
};
export type DialogsPageDataType = {
    dialogsData: Array<DialogItemType>;
    messagesData: Array<MessageDataType>;
    newMessageText: string;
};
export type SidebarType = {
    friends: Array<FriendsItemType>;
};
export type UsersPageDataType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
};
//! / MAIN TYPES

export type PostsDataType = {
    id: number;
    message: string;
    likes: number;
};
export type MessageDataType = {
    id: number;
    message: string;
};
export type DialogItemType = {
    name: string;
    id: number;
    logo: string;
};
export type FriendsItemType = {
    id: number;
    name: string;
    logo: string;
};

//! HTTP Request Data types
export type UserType = {
    name: string;
    id: number;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: null;
    followed: boolean;
};
type UserLocationType = {
    city: string;
    country: string;
};
export type UserProfileItemT = {
    aboutMe: string;
    contacts: {
        facebook: string;
        website: string | null;
        vk: string;
        twitter: string;
        instagram: string;
        youtube: string | null;
        github: string;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: {
        small: string;
        large: string;
    };
};
//! //HTTP Request Data types