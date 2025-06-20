import { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "50rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <RiDeleteBin6Fill size={17} />
        </span>
        <p className="card-text">{post.body}</p>
        {Array.isArray(post.tags) &&
          post.tags.map((tag) => (
            <span
              className="badge text-bg-primary hashtag"
              key={Math.random().toString(36).slice(2, 8) + tag}
            >
              {tag}
            </span>
          ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.views} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
