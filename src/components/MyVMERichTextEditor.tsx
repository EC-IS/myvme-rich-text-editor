import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";

import styles from "./MyVMERichTextEditor.module.scss";

const MyVMERichTextEditor = ({ defaultValue = '', onValueChange}: MyVMERichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  


  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // console.log('Ref at useEffect:', editorRef);
    // if(editorRef.current){
    //   editorRef.current.focus();
    // }
    if (editorRef.current && defaultValue) {
      editorRef.current.innerHTML = defaultValue;
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [defaultValue]);

  const handleInput = () => {
    //console.log(editorRef)
    //console.log("Input detected:", editorRef.current?.innerHTML);
   
    onValueChange(editorRef.current?.innerHTML ?? '');
    
  };

  const handleCommand = (command: string, value?: string | null) => {
    console.log(`Executing command: ${command}`, value);
    if (!editorRef.current) {
      console.error("Editor ref is not defined.");
      return; // Exit the function if editorRef.current is undefined
    }else{
      console.log("editor ref is: ");
    }

    document.execCommand(command, false, value === null ? undefined : value);
    editorRef.current.focus();
  };

  const handleFocus = () => setIsFocused(true);
  // const handleBlur = () => setIsFocused(false);

  // Function to handle clicks outside the component
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
    }
  };

  return (
    <div className={styles.MyVMERichTextEditor} ref={containerRef}>
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
