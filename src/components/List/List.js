import React from "react";

import { Wrapper } from "./List.styles";

import Task from "../Task/Task";

const List = ({ tasks, setTasks, removeTask }) => {
    
    const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = tasks[dragIndex];
        let tempTasks = [...tasks];
        tempTasks.splice(dragIndex, 1);
        tempTasks.splice(hoverIndex, 0, dragCard);
        setTasks(tempTasks);
    };
    
    return (
        <Wrapper>
            {tasks.map((task, index) => (
                <Task task={task} index={index} moveCard={moveCard}
                    removeTask={removeTask}
                />
            ))}
        </Wrapper>
    )
}

export default List;