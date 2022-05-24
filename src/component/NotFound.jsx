/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const styles = {
    notFound: css`
      margin: 0 auto;
      & h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 10px;
      }
      & p {
          margin: 20px 0;
      }
    `,
  };
  return (
    <div css={styles.notFound}>
      <h2>404 error</h2>
      <p>Oops! page not found</p>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/home">Return home</Link>
    </div>
  );
};

export default NotFound;
