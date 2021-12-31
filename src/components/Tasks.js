import Task from './Task'
import PropTypes from 'prop-types'

const Tasks = ({ tasks, onClick }) => {
    return (
        <div className='tasks-container'>
            {tasks.length > 0 ? tasks.map((task) => (
                <Task key={task.id} task={task} onClick={onClick}/>
            )) : (
                <div className='no-tasks-available'>
                    No tasks available.
                </div>
            )}
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Tasks