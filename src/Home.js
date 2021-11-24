import React, { useEffect, useState } from "react";

import { GlobalStyle, Container } from "./GlobalStyle";

import AddTask from "./components/AddTask/AddTask";
import List from "./components/List/List";

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
            <List tasks={tasks} removeTask={removeTask} />
		</Container>
	);
}

export default Home;
