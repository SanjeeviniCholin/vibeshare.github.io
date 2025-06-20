import { useContext, useRef } from "react";
import { name } from "./Sliderbar";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const views = parseInt(reactionsElement.current.value) || 0;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTitle, postBody, views, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="User ID"
          readOnly
          value={name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Share something awesome today!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          rows={3}
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="What's on your mind? Share your thoughts..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Likes
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="likes"
          placeholder="Number of likes will appear here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Add hashtags, separated by space (e.g. react coding)"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
