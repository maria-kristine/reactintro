/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog add");
      setIsPending(false);
      //history.go(-1);
      navigate("/home")
    });
  };

  const styles = {
    create: css`
      max-width: 400px;
      margin: 0 auto;
      text-align: center;
      & h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 30px;
      }
    `,
    label: css`
      text-align: left;
      display: block;
    `,
    input: css`
      width: 100%;
      padding: 6px 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      box-sizing: border-box;
      display: block;
    `,
    textarea: css`
      width: 100%;
      padding: 6px 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      box-sizing: border-box;
      display: block;
    `,
    select: css`
      width: 100%;
      padding: 6px 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      box-sizing: border-box;
      display: block;
    `,
    button: css`
      background: #f1356d;
      color: #fff;
      border: 0;
      padding: 8px;
      border-radius: 8px;
      cursor: pointer;
    `,
  };
  return (
    <div css={styles.create}>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label css={styles.label}>
          Blog title:
          <input
            css={styles.input}
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label css={styles.label}>
          Blog body:
          <textarea
            css={styles.textarea}
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <label css={styles.label}>Blog author:</label>
        <select
          css={styles.select}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button css={styles.button}>Add Blog</button>}
        {isPending && <button css={styles.button}>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
