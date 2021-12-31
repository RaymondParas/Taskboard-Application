import { useState } from 'react'
import PropTypes from 'prop-types'

const TaskForm = ({ onSave }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dateAndTime, setDateAndTime] = useState('');

    const onSubmit = (e) => {
        // Prevent submitting to page
        e.preventDefault();

        // Form validations
        if (!name || !dateAndTime){
            // Add error animation to required fields
            let requiredFields = document.querySelectorAll('.required-field');
            requiredFields.forEach((field) => {
                field.classList.add('error-input');
            });
          
            // Remove the class after the animation completes
            setTimeout(() => {
                requiredFields.forEach((field) => {
                    field.classList.remove('error-input');
                });
            }, 500);

            return
        }

        // Create and add task workflow
        onSave(name, description, dateAndTime);

        // Reset form values
        setName('');
        setDescription('');
        setDateAndTime('');
    }

    return (
        <form className='add-task-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input
                    className='required-field'
                    type='text'
                    placeholder='Name of task...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input
                    type='text'
                    placeholder='Description of task...'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Date and Time</label>
                <input
                    className='required-field'
                    type='text'
                    placeholder='Date and time of task...'
                    value={dateAndTime}
                    onChange={(e) => setDateAndTime(e.target.value)}
                />
            </div>

            <input
                className='save-task-btn'
                type='submit'
                value='SAVE'
            />
        </form>
    )
}

TaskForm.propTypes = {
    onSave: PropTypes.func.isRequired
}

export default TaskForm