import MyVMERichTextEditor from "./components/MyVMERichTextEditor";
// import Toolbar from "./components/Toolbar.tsx";

const App = () => {
  return (
    <div className="App">
      <h2>Custom Rich Text Editor</h2>
      <MyVMERichTextEditor />
      {/* <div
        style={{ display: "grid", placeContent: "center", marginTop: "4rem" }}
      >
        <Toolbar />
      </div> */}
    </div>
  );
};

export default App;
