import { useRef, useState } from "react";
import Toolbar from "./Toolbar";

import styles from "./MyVMERichTextEditor.module.scss";

const MyVMERichTextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInput = () => {
    console.log("Input detected:", editorRef.current?.innerHTML);
  };

  const handleCommand = (command: string, value?: string | null) => {
    console.log(`Executing command: ${command}`, value);
    if (!editorRef.current) return;

    document.execCommand(command, false, value === null ? undefined : value);
    editorRef.current.focus();
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // // Function to insert an image
  // const insertImage = () => {
  //     const imageUrl = prompt("Enter the image URL");
  //     if (imageUrl) handleCommand('insertImage', imageUrl);
  // };

  return (
    <div className={styles.MyVMERichTextEditor}>
      <div className={`${styles.toolbar} ${isFocused ? styles.visible : ''}`}>
        <Toolbar handleCommand={handleCommand} />
      </div>
      <div
        ref={editorRef}
        contentEditable
        className={styles.editor}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ minHeight: 48 }}
      />
    </div>
  );
};

export default MyVMERichTextEditor;
