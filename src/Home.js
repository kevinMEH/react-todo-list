import React, { useState } from "react";

import { GlobalStyle, Container } from "./GlobalStyle";

import AddItem from "./components/AddTask/AddTask";
import List from "./components/List/List";

function Home() {
    const [ tasks, setTasks ] = useState([]);
    
    function handleSetTasks(input) {
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
            <AddItem handleSetTasks={handleSetTasks} />
            <List tasks={tasks} removeTask={removeTask} />
			<GlobalStyle />
		</Container>
	);
}

export default Home;
