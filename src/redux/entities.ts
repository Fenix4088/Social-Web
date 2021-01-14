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

//? ACTION TYPES

/*export type ActionType = {
    type: string;
    newText?: string;
};*/
// DialogsPage
export type SendMessageActionType = {
    type: string;
}
export type UpdateNewMessageActionType = {
    type: string;
    newText: string;
}
// /DialogsPage
// ProfilePage
export type AddPostActionType = {
    type: string;
}

export type UpdateNewPostActionType = {
    type: string;
    newText: string;
}
// /ProfilePage

//? / ACTION TYPES

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

