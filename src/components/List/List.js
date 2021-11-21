import React from "react";

import { Wrapper } from "./List.styles";

import Task from "../Task/Task";

const List = ({ tasks, removeTask }) => {
    return (
        <Wrapper>
            {tasks.map((task) => (
                <Task task={task} removeTask={removeTask} />
            ))}
        </Wrapper>
    )
}

export default List;