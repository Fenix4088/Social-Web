import React from "react";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {AppStateType, StoreType} from "../../../redux/reduxStore";
import { StoreContext } from "../../../StoreContext";
import {connect} from "react-redux";
import {PostsDataType, profilePageDataType} from "../../../redux/entities";

/*type MyPostsPropsType = {
    store: StoreType
};*/

/*const MyPostsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostCreator());
                    };

                    const onPostChangeHandler = (text: string) => {
                        store.dispatch(updateNewPostCreator(text));
                    };

                    return (
                        <MyPosts
                            updateNewPostText={onPostChangeHandler}
                            addPost={addPost}
                            posts={state.profilePageData.postsData}
                            newPostText={state.profilePageData.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};*/


type MapStateType = {
    posts: Array<PostsDataType>,
    newPostText: string
};
type MapDispatchType = {
    updateNewPostText: (param: string) => void
    addPost: () => void
}

type OwnPropsType = {

}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        posts: state.profilePageData.postsData,
        newPostText: state.profilePageData.newPostText
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchType => {
    return {
        addPost: () => { dispatch(addPostCreator()) },
        updateNewPostText: (text: string) => { dispatch(updateNewPostCreator(text)) }
    }
}


export const MyPostsContainer = connect<MapStateType, MapDispatchType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
