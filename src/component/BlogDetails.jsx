/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.confirm("Are you sure?")) {
      fetch("http://localhost:8000/blogs/" + blog.id, {
        method: "DELETE",
      }).then(() => {
        navigate("/home");
      });
    }
  };

  const styles = {
    blogDetails: css`
      & h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 10px;
      }
      & div {
        margin: 20px 0;
      }
      & button {
        background: #f1356d;
        color: #fff;
        border: 0;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
      }
    `,
  };

  return (
    <div css={styles.blogDetails}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
