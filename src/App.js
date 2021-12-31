import { useState, useEffect } from 'react'
import { TaskObject } from './components/TaskObject'
import { getAllTasks, createTask, deleteTask } from './components/TaskAPI'
import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Button from './components/Button'
import './App.css'


const App = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTasks = async () => {
      let allTasks = await getAllTasks();
      setTasks(allTasks);
    }
    fetchTasks();
  }, []);

  // Filter tasks
  const getFilteredTasks = () => {
    return tasks.filter((task) => !task.completed)
  }

  // Display task form
  const toggleTaskForm = () => {
    document.getElementsByClassName('add-task-form')[0].classList.contains('display-form')
    ? document.getElementsByClassName('add-task-form')[0].classList.remove('display-form')
    : document.getElementsByClassName('add-task-form')[0].classList.add('display-form');
  }

  // Add new task
  const addTask = async (title, description, dateTime) => {

    // Get next ID (temporary unique id)
    let nextId = 1;
    if (tasks.length > 0)
      nextId = tasks[tasks.length - 1].id + 1;

    // Set default value for description if empty or whitespace
    if (!description || description.trim().length === 0)
      description = "No description";
      
    // Create new task
    let newTask = TaskObject(nextId, title, description, dateTime, false)

    // Update task state with new task
    setTasks((currTasks) => [...currTasks, newTask]);

    // Hide task form
    toggleTaskForm();

    // Create task API request
    const taskCreated = await createTask(title, description, dateTime);
    console.log('Task Created', taskCreated);
  }

  // Remove Task
  const removeTask = async (id) => {
    // Remove task from state
    setTasks((currTasks) => currTasks.filter((task) => task.id !== id));

    // Delete task API request
    const taskDeleted = await deleteTask(id);
    console.log('Task Deleted', taskDeleted);
  }

  return (
    <div className="App">
      <div className="header-container">
        <Header title="Taskboard"/>
        <Button className='add-task-btn' text="ADD TASK" onClick={toggleTaskForm}/>
      </div>
      <TaskForm onSave={addTask}/>
      <div className="board-container">
        <Tasks tasks={getFilteredTasks()} onClick={removeTask}/>
      </div>
    </div>
  );
}

export default App;
