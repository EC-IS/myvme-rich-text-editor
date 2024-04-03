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
import Tags from "./toolbar-items/Tags.tsx";
import FontColor from "./toolbar-items/FontColor.tsx";
import TextMarker from "./toolbar-items/TextMarker.tsx";

const Toolbar = () => {
  return (
    <div className="rich-text-editor__toolbar">
      <div>
        <FontSize />
      </div>
      <div>
        <Bold />
        <Italic />
        <Underline />
      </div>
      <div>
        <FontColor />
        <TextMarker />
      </div>
      <div>
        <UnorderedList />
        <OrderedList />
      </div>
      <div>
        <AlignLeft />
        <AlignCenter />
        <AlignRight />
      </div>
      <div>
        <Link />
      </div>
      <div>
        <Tags />
      </div>
    </div>
  );
};

export default Toolbar;
