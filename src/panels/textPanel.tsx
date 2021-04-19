import { setNodeAction } from "../storages/actions/textAction";
import store from "../storages/store";
import { Text } from "react-konva";
import { KonvaEventObject } from "konva/types/Node";

const TextPanel = () => {

    function handleDblClick(e: KonvaEventObject<MouseEvent>) {
        console.log(e);
    }

    const handleTextClick = (e: any) => {
        let style = e.target.ownerDocument.defaultView.getComputedStyle(e.target, null);
        let text = <Text text={e.target.innerText} draggable key={Math.random()}
            fontSize={Number(style.fontSize.match(/\d+/)[0])}
            fontFamily={style.fontFamily}
            fontStyle={`${style.fontStyle} ${style.fontWeight}`}
            onDblClick={(e) => handleDblClick(e)}
            />
        store.dispatch(setNodeAction(text))
    }
    
    return (
        <div>
            <div className="font-bold text-xl text-gray-700 mb-3">Text</div>
            <div className="p-2 text-xl">
                <div className="mb-2">
                    <button className="font-bold" onClick={handleTextClick}>Bold</button>
                </div>
                <div className="mb-2">
                    <button className="font-bold italic" onClick={handleTextClick}>Bold Italic</button>
                </div>
                <div className="mb-2">
                    <button onClick={handleTextClick}>Normal</button>
                </div>
                <div className="mb-2">
                    <button onClick={handleTextClick} className="italic">Normal Italic</button>
                </div>
            </div>
        </div>
    )
}

export default TextPanel