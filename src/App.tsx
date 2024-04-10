import { useRef } from "react";
import MyVMERichTextEditor from "./components/MyVMERichTextEditor";
// import Toolbar from "./components/Toolbar.tsx";

const App = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <h2 style={{marginBottom:75}}>Custom Rich Text Editor</h2>
      <MyVMERichTextEditor
        defaultValue="<p>Typ hier...</p>"
        editorRef={editorRef}
        editorContainerRef={editorContainerRef}
      />
    </div>
  );
};

export default App;
