import axios from 'axios'
import { TaskCreationObject } from './TaskObject'

const BASEURL = "http://127.0.0.1:8000/Tasks"
const allTasksEndpoint = "/all"
const createTaskEndpoint = "/create"

export const getAllTasks = async () => {
    try {
        const response = await axios.get(`${BASEURL}${allTasksEndpoint}`)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.message)
        return [];
    }
}

export const createTask = async (title, description, dateTime) => {
    try {
        const response = await axios.post(`${BASEURL}${createTaskEndpoint}`, TaskCreationObject(title, description, dateTime));
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${BASEURL}/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}