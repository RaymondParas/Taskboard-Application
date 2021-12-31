import PropTypes from 'prop-types'

const Task = ({ task, onClick }) => {
    return (
        <div className='task-container'>
            <div className='task'>
                <div className='task-header'>{task.title}</div>
                <div>{task.description}</div>
                <div>{task.dateTime}</div>
                <div>{task.completed}</div>
            </div>
            <div className='delete-task' onClick={() => onClick(task.id)}>x</div>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Task