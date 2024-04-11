import React, { useEffect, useRef } from "react";
import MyVMERichTextEditor from "./components/MyVMERichTextEditor";
// import Toolbar from "./components/Toolbar.tsx";

const App = () => {
  // const editorRefs = useRef<any[]>([]);
  // const editorContainerRefs = useRef<any[]>([]);

  const list = [
    { name: "test1", default: "<p>test1</p>" },
    { name: "test2", default: "<p>test2</p>" },
    { name: "test3", default: "<p>test3</p>" },
  ];

  // useEffect(() => {
  //   editorRefs.current = Array(list.length)
  //     .fill(null)
  //     .map(() => React.createRef<HTMLDivElement>());
  //   editorContainerRefs.current = Array(list.length)
  //     .fill(null)
  //     .map(() => React.createRef<HTMLDivElement>());
  // }, []);

  return (
    <div className="App">
      <h2 style={{ marginBottom: 75 }}>Custom Rich Text Editor</h2>
      <div>
      {list.map((item, index) => {
        const editorRef = React.createRef<HTMLDivElement>();
        const editorContainerRef = React.createRef<HTMLDivElement>();

        return (
          <div key={item.name}>
            <MyVMERichTextEditor
              defaultValue={item.default}
              editorRef={editorRef}
              editorContainerRef={editorContainerRef}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default App;
