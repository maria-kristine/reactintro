/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: css`
      padding: 20px;
      display: flex;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;
      border-bottom: 1px solid #f2f2f2;
      & h1 {
        color: #f1356d;
      }
      & a {
        margin-left: 16px;
        text-decoration: none;
        padding: 6px;
      }
      & a:hover {
        color: #f1356d;
      }
    `,
    links: css`
      margin-left: auto;
    `,
  };

  return (
    <nav css={styles.navbar}>
      <h1>The Dojo Blog</h1>
      <div css={styles.links}>
        <Link to="/home">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
