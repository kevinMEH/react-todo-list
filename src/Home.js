import React, { useEffect, useState } from "react";

import { GlobalStyle, Container } from "./GlobalStyle";

import AddItem from "./components/AddTask/AddTask";
import List from "./components/List/List";

function Home() {
    const [ tasks, setTasks ] = useState(() => JSON.parse(localStorage.getItem("tasks")));
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    function handleSetTasks(input) {
        if(input === "") return;
        if(tasks.includes(input)) return; // Task already has input!
        setTasks([...tasks, input]);
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
            <AddItem handleSetTasks={handleSetTasks} />
            <List tasks={tasks} removeTask={removeTask} />
		</Container>
	);
}

export default Home;
