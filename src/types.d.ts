interface MyVMERichTextEditorProps {}

type HandleCommandFunction = (command: string, value?: string | null) => void;

interface ToolbarProps {
  handleCommand: HandleCommandFunction;
}
