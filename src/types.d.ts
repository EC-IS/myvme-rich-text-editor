interface MyVMERichTextEditorProps {}

type HandleCommandFunction = (command: string, value?: string | null) => void;

interface ToolbarProps {
  handleCommand: HandleCommandFunction;
}

interface MyVMERichTextEditorProps {
  editorRef: React.RefObject<HTMLDivElement>;
  editorContainerRef: React.RefObject<HTMLDivElement>;
}