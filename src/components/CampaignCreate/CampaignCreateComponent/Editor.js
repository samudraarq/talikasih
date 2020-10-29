import React, { useEffect } from "react";
import styles from "./Editor.module.css";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Quill from "quill";

function Editor() {
  const theme = "snow";
  const modules = {
    toolbar: [
      "bold",
      "italic",
      "underline",
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      "image",
      "link",
    ],
  };
  const placeholder = "Tell your story...";

  const { quillRef } = useQuill({
    theme,
    modules,
    placeholder,
  });
  return (
    <>
      <div>
        <div className={styles.story}>Story</div>
        <div
          ref={quillRef}
          style={{ height: 500, border: "none", backgroundColor: "#FCFCFC" }}
        />
      </div>
    </>
  );
}

export default Editor;
