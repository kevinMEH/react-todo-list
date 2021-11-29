import React, { useEffect, useState } from "react";

import { GlobalStyle, Container, Subtext } from "./GlobalStyle";

import AddTask from "./components/AddTask/AddTask";
import List from "./components/List/List";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Home() {
    const [ tasks, setTasks ] = useState(() => {
        let existingTasks = JSON.parse(localStorage.getItem("tasks"));
        if(existingTasks) return existingTasks;
        else return [];
    });
    const [ id, setId ] = useState(() => 1);
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    function handleSetTasks(text) {
        if(text === "") return;
        for(let task of tasks) {
            if(task.text === text) return; // No duplicates
        }
        setTasks([...tasks, {id: id, text: text}]);
        setId(id + 1);
    }
    
    function removeTask(task) {
        if(tasks.includes(task)) {
            let newTasks = [...tasks];
            newTasks.splice(newTasks.indexOf(task), 1);
            setTasks(newTasks);
        } else {
            console.log("ERROR: Tasks does not have task " + task);
        }
    }
    
	return (
		<Container>
			<GlobalStyle />
            <h1>React TODO List</h1>
            <h2>By Kevin Liao</h2>
            <AddTask handleSetTasks={handleSetTasks} />
            <DndProvider backend={HTML5Backend} >
                <List tasks={tasks} setTasks={setTasks} removeTask={removeTask} />
            </DndProvider>
            
            <div style={{paddingTop: "30px"}} >
                <Subtext>
                    This is a TODO list project made using React, a derivative of the "Level 4 Grocery List" project. Since we're making a list that we can add and remove items to, I thought it would be appropriate if I just made it a general purpose TODO list app, so here it is.
                </Subtext>
                <Subtext>
                    In this project, I used the React Javascript library to build the HTML. I also used a library called React-DND, which stands for React Drag and Drop, which is how you are able to drag and drop the tasks to reorder them. In addition to all of these, I also implemented storing to localStorage so that the tasks on the TODO list will presist between sessions and refreshes.
                </Subtext>
            </div>
		</Container>
	);
}

export default Home;
