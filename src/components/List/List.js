import React, { useCallback } from "react";

import { Wrapper } from "./List.styles";

import Task from "../Task/Task";

const List = ({ tasks, setTasks, removeTask }) => {
    
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = tasks[dragIndex];
        let tempTasks = [...tasks];
        console.log(tempTasks)
        tempTasks.splice(dragIndex, 1);
        tempTasks.splice(hoverIndex, 0, dragCard);
        setTasks(tempTasks);
    }, [tasks, setTasks])
    
    return (
        <Wrapper>
            {tasks.map((task, index) => (
                <Task task={task} index={index} moveCard={moveCard} removeTask={removeTask} />
            ))}
        </Wrapper>
    )
}

export default List;