export type StateType = {
    profilePageData: ProfilePageDataType;
    dialogsPageData: DialogsPageDataType;
    sidebar: SidebarType;
};

//! MAIN TYPES
export type ProfilePageDataType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
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

export type UserType = {
    id: number;
    userLogo: string;
    followed: boolean,
    fullName: string;
    status: string;
    location: UserLocationType;
};

type UserLocationType = {
    city: string;
    country: string;
};
