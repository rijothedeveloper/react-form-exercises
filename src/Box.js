import React from "react";

const Box = ({id, backgroundColor, width, height, removeBox}) => {

    const handleBoxRemove = () => {
        removeBox(id);
    }

    return (
        <div data-id={id} style={{backgroundColor: backgroundColor, height:` ${height}px`, width: `${width}px`}}>
            <button onClick={handleBoxRemove} >close</button>
        </div>
    )
}

export default Box;