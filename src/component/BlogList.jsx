/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const styles = {
    blogPriview: css`
      padding: 10px 16px;
      margin: 20px 0;
      border-bottom: 1px solid #fafafa;
      & h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 8px;
      }
      &:hover {
        box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
      }
      & a {
        text-decoration: none;
      }
    `,
  };
  return (
    <div className="blogList">
      {blogs.map((blog) => (
        <div css={styles.blogPriview} key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
