import {useRef } from "react";

const MyVMERichTextEditor = () => {
    //const [content, setContent] = useState('');
    const editorRef = useRef<HTMLDivElement>(null);

    const handleInput = () => {
        console.log("Input detected:", editorRef.current?.innerHTML); // Log the current HTML content
    };

    const handleCommand = (command: string, value?: string | null) => {

        console.log(`Executing command: ${command}`, value);
        if (!editorRef.current) return; // Check if editorRef.current is not null

        // Adjust value to be undefined instead of null for compatibility
        document.execCommand(command, false, value === null ? undefined : value);
        editorRef.current.focus();
    };

    // Function to add a link
    const addLink = () => {
        const url = prompt("Enter the URL");
        if (url) handleCommand('createLink', url);
    };

    // Function to insert an image
    const insertImage = () => {
        const imageUrl = prompt("Enter the image URL");
        if (imageUrl) handleCommand('insertImage', imageUrl);
    };

    return (
        <div>
            <div className="toolbar">
                {/* Basic styling commands */}
                <button onClick={() => handleCommand('bold')}>Bold</button>
                <button onClick={() => handleCommand('italic')}>Italic</button>
                <button onClick={() => handleCommand('underline')}>Underline</button>

                {/* List commands */}
                <button onClick={() => handleCommand('insertUnorderedList')}>Bullet List</button>
                <button onClick={() => handleCommand('insertOrderedList')}>Numbered List</button>

                {/* Font style and size */}
                <select onChange={(e) => handleCommand('fontName', e.target.value)}>
                    <option value="Arial">Arial</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Tahoma">Tahoma</option>
                    {/* Add more fonts as needed */}
                </select>
                <select onChange={(e) => handleCommand('fontSize', e.target.value)}>
                    <option value="1">Small</option>
                    <option value="3">Normal</option>
                    <option value="5">Large</option>
                    {/* Add more sizes as needed */}
                </select>

                {/* Text color and background */}
                <input type="color" onChange={(e) => handleCommand('foreColor', e.target.value)} title="Font Color"/>
                <input type="color" onChange={(e) => handleCommand('hiliteColor', e.target.value)} title="Highlight Color"/>

                {/* Link and Image */}
                <button onClick={addLink}>Add Link</button>
                <button onClick={insertImage}>Insert Image</button>

                {/* Heading presets */}
                <button onClick={() => handleCommand('formatBlock', 'H1')}>H1</button>
                <button onClick={() => handleCommand('formatBlock', 'H2')}>H2</button>
                {/* Add more heading presets as needed */}
            </div>
            <div
                ref={editorRef}
                contentEditable
                className="editor"
                onInput={handleInput}
                // dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};

export default MyVMERichTextEditor;
