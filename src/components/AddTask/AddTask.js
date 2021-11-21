import React, { useState } from "react";

import { Wrapper } from "./AddTask.styles";

const AddItem = ({ handleSetTasks }) => {
    
    const [value, setValue] = useState("");
    
    function handleValueChange(event) {
        setValue(event.target.value);
    }
    
    function handleSubmit(event) {
        handleSetTasks(value);
        setValue("");
        event.preventDefault();
    }
    
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleValueChange} />
                <input type="submit" value="Add Task" style={{display: "none"}} />
            </form>
        </Wrapper>
    )
}

export default AddItem;