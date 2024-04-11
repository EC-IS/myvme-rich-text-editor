interface MyVMERichTextEditorProps {}

type HandleCommandFunction = (command: string, value?: string | null) => void;

interface ToolbarProps {
  handleCommand: HandleCommandFunction;
}

interface MyVMERichTextEditorProps {
  defaultValue?: string;
  onValueChange: (value: string) => void; 
}