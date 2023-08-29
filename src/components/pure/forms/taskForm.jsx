import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, ntasks}) => {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )
    add(newTask);
  }

  return (
    <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4 mt-2'>
      <div className="form-outline flex-fill">
        <input type="text" name="taskname" id="inputName" ref={nameRef}  className='form-control form-control-lg' required autoFocus placeholder='Insert task name' />
        <input type="text" name="taskdescription" id="inputDescription" ref={descriptionRef}  className='form-control form-control-lg' required autoFocus placeholder='Insert task description' />
        {/* <label htmlFor="selectLevel" className='sr-only'>Priority</label> */}
        <select name="tasklevel" id="selectLevel" ref={levelRef} defaultValue={LEVELS.NORMAL} className='form-control form-control-lg'>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type="submit" className='btn btn-success btn-lg ms-2'>
          {ntasks > 0 ? 'Add task' : 'Create your first task'}
        </button>
      </div>
    </form>
  );
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  ntasks: PropTypes.number.isRequired
}

export default TaskForm;
