/** @jsxImportSource @emotion/react */
import Navbar from "./component/Navbar";
import { css } from "@emotion/react";
import { Outlet } from 'react-router-dom';



function App() {
  const styles = {
    content: css`
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
    `,
  };

  return (
      <div className="App">
        <Navbar />
        <div css={styles.content}>
          <Outlet/>
        </div>
      </div>
  );
}

export default App;
