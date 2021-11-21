import React from "react";

import { Wrapper, Text } from "./Task.styles";

const Task = ({ task,  removeTask }) => {
    function handleClick() {
        removeTask(task);
    }
    
    return (
        <Wrapper>
            <Text>{task}</Text>
            <button onClick={handleClick}>
                Remove
            </button>
        </Wrapper>
    )
}

export default Task;