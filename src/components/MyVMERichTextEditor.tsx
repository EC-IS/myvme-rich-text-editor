import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";

import styles from "./MyVMERichTextEditor.module.scss";

const MyVMERichTextEditor = ({ editorRef, editorContainerRef }: MyVMERichTextEditorProps) => {
  
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // if(editorRef.current){
    //   editorRef.current.focus();
    // }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
  // const handleBlur = () => setIsFocused(false);

  // Function to handle clicks outside the component
  const handleClickOutside = (event: MouseEvent) => {
    if (
      editorContainerRef.current &&
      !editorContainerRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
    }
  };

  return (
    <div className={styles.MyVMERichTextEditor} ref={editorContainerRef}>
      <div className={`${styles.toolbar} ${isFocused ? styles.visible : ""}`}>
        <Toolbar handleCommand={handleCommand} />
      </div>
      <div
        ref={editorRef}
        contentEditable
        className={styles.editor}
        onInput={handleInput}
        onFocus={handleFocus}
        style={{ minHeight: 48 }}
      />
    </div>
  );
};

export default MyVMERichTextEditor;
