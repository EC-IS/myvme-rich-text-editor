import Bold from "./toolbar-items/Bold.tsx";
import Italic from "./toolbar-items/Italic.tsx";
import Underline from "./toolbar-items/Underline.tsx";
import OrderedList from "./toolbar-items/OrderedList.tsx";
import UnorderedList from "./toolbar-items/UnorderedList.tsx";
import AlignLeft from "./toolbar-items/AlignLeft.tsx";
import AlignCenter from "./toolbar-items/AlignCenter.tsx";
import AlignRight from "./toolbar-items/AlignRight.tsx";
import Link from "./toolbar-items/Link.tsx";
import FontSize from "./toolbar-items/FontSize.tsx";
// import Tags from "./toolbar-items/Tags.tsx";
import FontColor from "./toolbar-items/FontColor.tsx";
import TextMarker from "./toolbar-items/TextMarker.tsx";

import styles from "./Toolbar.module.scss";



const Toolbar = ({ handleCommand } : ToolbarProps) => {
  // Function to add a link
  

  // Function to insert an image
  // const insertImage = () => {
  //   const imageUrl = prompt("Enter the image URL");
  //   if (imageUrl) handleCommand("insertImage", imageUrl);
  // };
  return (
    <div className={styles['rich-text-editor__toolbar']}>
      <div>
        <FontSize handleCommand={handleCommand}/>
      </div>
      <div>
        <Bold handleCommand={handleCommand} />
        <Italic handleCommand={handleCommand} />
        <Underline handleCommand={handleCommand} />
      </div>
      <div>
        <FontColor handleCommand={handleCommand} />
        <TextMarker handleCommand={handleCommand} />
      </div>
      <div>
        <UnorderedList handleCommand={handleCommand} />
        <OrderedList handleCommand={handleCommand} />
      </div>
      <div>
        <AlignLeft handleCommand={handleCommand} />
        <AlignCenter handleCommand={handleCommand} />
        <AlignRight handleCommand={handleCommand} />
      </div>
      <div >
        <Link handleCommand={handleCommand} />
      </div>
      <div>
        {/* <Tags handleCommand={handleCommand}/> */}
      </div>
    </div>
  );
};

export default Toolbar;
