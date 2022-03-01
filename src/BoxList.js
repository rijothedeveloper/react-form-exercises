import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const getInitialBoxState = () => {
        const boxes = [{background: 'blue', width: 100, height: 100}]
        return boxes;
    }
    const [boxes, setBoxes] = useState(getInitialBoxState)
    const addBox = (boxObj) => setBoxes([...boxes, boxObj])
    const boxArray = boxes.map(e => <Box backgroundColor={e.background} width={e.width} height= {e.height} />)
    return (
        <div>
            <div>      
            {boxArray}
            </div>
           
            <NewBoxForm addBox={addBox} />
        </div>
    )
}

export default BoxList;