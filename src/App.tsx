import { useState } from "react";
import "./App.css";
import Form from "./components/form/form.tsx";
import Dashboard from "./components/dashboard/dashboard.tsx";
import TasksContainer from "./components/tasks-container/tasks-container.tsx";
import { ITask } from "./types.ts";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const AddTask = (newTask: ITask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const DeleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };
  const handleTogleeUrg = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, ind) =>
        ind === index ? { ...task, isUrgent: !task.isUrgent } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>{new Date().toDateString()}</h1>
      <Form onSubmit={AddTask} />
      <Dashboard tasksArray={tasks} />
      <TasksContainer
        tasks={tasks}
        onToggleUrgency={handleTogleeUrg}
        onRemoveTask={DeleteTask}
      />
    </div>
  );
}

export default App;
