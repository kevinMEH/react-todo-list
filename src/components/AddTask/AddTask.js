import React, { useState } from "react";

import { Wrapper } from "./AddTask.styles";

const AddItem = ({ handleSetTasks }) => {
    
    const [value, setValue] = useState("");
    
    function handleValueChange(event) {
        setValue(event.target.value);
    }
    
    function handleSubmit(event) {
        handleSetTasks(event.target.value);
        event.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add New Task:
                <input type="text" value={value} onChange={handleValueChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}