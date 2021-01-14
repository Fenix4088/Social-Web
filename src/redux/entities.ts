export type StateType = {
    profilePageData: profilePageDataType;
    dialogsPageData: dialogsPageDataType;
    sidebar: sidebarType;
};

//! MAIN TYPES
export type profilePageDataType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
};
export type dialogsPageDataType = {
    dialogsData: Array<DialogItemType>;
    messagesData: Array<MessageDataType>;
    newMessageText: string;
};
export type sidebarType = {
    friends: Array<FriendsItemType>;
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

