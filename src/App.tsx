import { useRef } from "react";
import MyVMERichTextEditor from "./components/MyVMERichTextEditor";
// import Toolbar from "./components/Toolbar.tsx";

const App = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <h2>Custom Rich Text Editor</h2>
      <MyVMERichTextEditor
        editorRef={editorRef}
        editorContainerRef={editorContainerRef}
      />
    </div>
  );
};

export default App;
