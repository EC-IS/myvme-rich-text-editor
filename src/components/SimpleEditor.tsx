import React, { useState, useRef } from 'react';

const RichTextEditor = () => {
  const [blocks, setBlocks] = useState([
    { id: 1, type: 'paragraph', text: 'Start typing here...', styles: { bold: false, italic: false, underline: false } }
  ]);
  const updateTimeoutRef = useRef(null);

  const updateBlockText = (id, newText) => {
    clearTimeout(updateTimeoutRef.current); // Reset de timer bij elke toetsaanslag
    updateTimeoutRef.current = setTimeout(() => {
      const updatedBlocks = blocks.map(block => {
        if (block.id === id) {
          return { ...block, text: newText };
        }
        return block;
      });
      setBlocks(updatedBlocks);
    }, 500); // Update de tekst 500ms na de laatste toetsaanslag
  };

  const toggleStyle = (id, style) => {
    const updatedBlocks = blocks.map(block => {
      if (block.id === id) {
        const currentStyle = block.styles[style];
        return { ...block, styles: { ...block.styles, [style]: !currentStyle } };
      }
      return block;
    });
    setBlocks(updatedBlocks);
  };

  return (
    <div>
      {blocks.map(block => (
        <div key={block.id}>
          <div
            contentEditable
            onInput={e => updateBlockText(block.id, e.target.innerText)}
            style={{
              fontWeight: block.styles.bold ? 'bold' : 'normal',
              fontStyle: block.styles.italic ? 'italic' : 'normal',
              textDecoration: block.styles.underline ? 'underline' : 'none',
            }}
            suppressContentEditableWarning={true}
          >
            {block.text}
          </div>
          <div>
            <button onClick={() => toggleStyle(block.id, 'bold')}>Bold</button>
            <button onClick={() => toggleStyle(block.id, 'italic')}>Italic</button>
            <button onClick={() => toggleStyle(block.id, 'underline')}>Underline</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RichTextEditor;
