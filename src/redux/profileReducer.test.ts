import {addPost, deletePost, profilePageReducer} from "./profilePageReducer";
import { ProfilePageDataType, UserProfileItemT } from "./entities";

let startState: ProfilePageDataType;

beforeEach(() => {
    startState = {
        profile: {} as UserProfileItemT,
        postsData: [
            { id: 1, message: "Good day", likes: 15 },
            { id: 2, message: "Nice weather", likes: 6 },
            { id: 3, message: "I was in Rome!!!!", likes: 0 }
        ],
        defaultUserId: 2,
        status: ""
    };
});

test("new post should be added", () => {
    const endState = profilePageReducer(startState, addPost("Test post message"));


    expect(startState !== endState).toBeTruthy();
    expect(startState.postsData.length).toBe(3);
    expect(endState.postsData.length).toBe(4);
    expect(endState.postsData[3].message).toBe("Test post message");
});

test("post should be deleted", () => {
    const endState = profilePageReducer(startState, deletePost(1));


    expect(startState !== endState).toBeTruthy();
    expect(startState.postsData.length).toBe(3);
    expect(endState.postsData.length).toBe(2);
    expect(endState.postsData.every(item => item.id !== 1)).toBeTruthy();
});
