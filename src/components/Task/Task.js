import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Wrapper } from "./Task.styles";


const Task = ({ task, index, moveCard, removeTask }) => {
    const ref = useRef(null);
    
    // dropping
    const [{ handlerId }, drop] = useDrop({
        accept: "task",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if(!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            
            if(dragIndex === hoverIndex) return;
            
            // Rect on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Dist from top to mid
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            
            if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                // If dragging down but client Y is less than middle of rect, dont swap
                return;
            }
            
            if(dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                // If dragging up
                return;
            }
            
            moveCard(dragIndex, hoverIndex);
            
            item.index = hoverIndex;
        }
    });
    
    const [ , drag] = useDrag({
        type: "task",
        item: () => {
            let id = task.id;
            return { id, index };
        }
    });
    
    drag(drop(ref));
    
    function handleClick() {
        removeTask(task);
    }
    
    return (
        <Wrapper ref={ref} data-handler-id={handlerId} >
            <span>{task.text}</span>
            <button onClick={handleClick}>
                Remove
            </button>
        </Wrapper>
    )
}

export default Task;