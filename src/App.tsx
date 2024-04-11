import MyVMERichTextEditor from "./components/MyVMERichTextEditor";

const App = () => {

  const list = [
    { name: "test1", default: "<p>test1</p>" },
    { name: "test2", default: "<p>test2</p>" },
    { name: "test3", default: "<p>test3</p>" },
  ];

  const onValueChange = (value: string) => {
    console.log("saw value in app: " + value);
  }

  return (
    <div className="App">
      <h2 style={{ marginBottom: 75 }}>Custom Rich Text Editor</h2>
      <div>
      {list.map((item) => {
        return (
          <div key={item.name}>
            <MyVMERichTextEditor
              defaultValue={item.default}
              onValueChange={onValueChange}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default App;
