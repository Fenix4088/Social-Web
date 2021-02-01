import React from "react";
import { addPost, updateNewPost } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { AppStateType, StoreType } from "../../../redux/reduxStore";
import { connect } from "react-redux";
import { PostsDataType, ProfilePageDataType } from "../../../redux/entities";
import { Dispatch } from "redux";

type MapStateType = {
    posts: Array<PostsDataType>;
    newPostText: string;
};
type MapDispatchType = {
    updateNewPost: (param: string) => void;
    addPost: () => void;
};

type OwnPropsType = {};

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        posts: state.profilePageData.postsData,
        newPostText: state.profilePageData.newPostText
    };
};

/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostCreator(text));
        }
    };
};*/

export const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    updateNewPost,
    addPost
})(MyPosts);

export default MyPostsContainer;
