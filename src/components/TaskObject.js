export const TaskObject = (id, title, description, dateTime, completed) => {
    return {
        id: id,
        title: title,
        description: description,
        dateTime: dateTime,
        completed: completed
    }
}

export const TaskCreationObject = (title, description, dateTime) => {
    return {
        title: title,
        description: description,
        dateTime: dateTime
    }
}