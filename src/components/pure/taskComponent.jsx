import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, completed, remove, date }) => {

  useEffect(() => {
    console.log('Task created');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`)
    };
  }, [task]);

  /** 
   * Function that returns a Badge
   * depending on the level of the task
  */

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return(<h6 className='mb-0 task-priority'><span className='badge bg-primary'>{task.level}</span></h6>)   
      case LEVELS.URGENT:
        return(<h6 className='mb-0 task-priority'><span className='badge bg-warning'>{task.level}</span></h6>)  
      case LEVELS.BLOCKING:
        return(<h6 className='mb-0 task-priority'><span className='badge bg-danger'>{task.level}</span></h6>)   
      default:
        break;
    }
  }

  /**
   * Function that retuns an icon   
   * depending on the status of the task
   */

  function taskStatusIcon() {
    if(!task.completed)  {
      return (<i onClick={()=> completed(task)} className='bi-toggle-on task-action task-status' style={ {color:'green'} }></i>)
    } else {
      return (<i onClick={()=> completed(task)} className='bi-toggle-off task-action task-status' style={ {color:'gray'} }></i>)
    };
  }


  const customTaskCardStyle = 'fw-normal task-card'
  return (
    <div className={task.completed ? customTaskCardStyle+' task-completed' : customTaskCardStyle+' task-pending'}>
      {/* <th>
        <span className='align-middle'>{task.name}</span>
      </th>
      <td>
        <span className='align-middle'>{task.description}</span>
      </td>
      <td>
      {/* // TODO: Sustituir por un badge 
        { <span className='align-middle'>{task.level}</span> }
        { Execution of function to return badge styled element }
        { taskLevelBadge() }
      </td>
      <td>      
        {/* Execution of function to return status icon element }
      { taskStatusIcon() }
      <i onClick={()=> remove(task)} className='bi-trash task-action' style={ {color:'tomato'} }></i>
        {/* <span className='align-middle'>{task.completed ? 'Completed' : 'Pending'}</span> }
      </td> */}      
      <span className='align-middle task-name'>{task.name}</span>
      <span className='align-middle task-description'>{task.description}</span>
      { taskLevelBadge() }
      { taskStatusIcon() }
      <p className='task-date'>{date}</p>
      <i onClick={()=> remove(task)} className='bi-trash task-action task-remove-icon'></i>
    </div>
   
   
  );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
