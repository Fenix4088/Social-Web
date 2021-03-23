import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.scss";
import { PostsDataType } from "../../../redux/entities";
import AddPostForm, {AddPostFormT} from "./AddPostForm";

type MyPostsPropsType = {
    posts: Array<PostsDataType>;
    addPost: (param: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

    const addNewPost = (values: AddPostFormT) => props.addPost(values.addPostBody);

    return (
        <div className={classes.postBlock}>
            <h2>My posts</h2>
            <AddPostForm onSubmit={addNewPost}/>
            <div>
                {props.posts.map((post, i) => (
                    <Post key={i} message={post.message} likeCount={post.likes} />
                ))}
            </div>
        </div>
    );
});

export default MyPosts;


