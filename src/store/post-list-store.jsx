import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = [...action.payload.posts,...currentPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Math.random().toString(36).slice(2, 8), // Generate a random ID
        title: postTitle,
        body: postBody,
        views: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: Math.random().toString(36).slice(2, 8), // Generate a random ID
    title: "Going to New Delhi",
    body: "Hi Friends, I am going to New Delhi next week. Anyone wants to join me?",
    views: 2,
    userId: "user-20",
    tags: ["travel", "new-delhi", "Exploring"],
  },
  {
    id: Math.random().toString(36).slice(2, 8),
    title: "Going to London",
    body: "Hi Friends, I am going to London next week. Anyone wants to join me?",
    views: 15,
    userId: "user-12",
    tags: ["Working", "London", "Unbelievable"],
  },
];

export default PostListProvider;
