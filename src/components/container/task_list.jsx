import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/taskComponent';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
  const defaultTask1 = new Task('Example 1', 'Description 1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example 2', 'Description 2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example 3', 'Description 3', false, LEVELS.BLOCKING);

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount');
    };
  }, [tasks]);

  function completeTask(task) {
    console.log(`Complete this Task: `,task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // We update the state of the component with the new list of tasks
    //and it will update the iteration of the task in order to show the task updated
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log(`Delete this Task: `,task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1);
    setTasks(tempTasks)
  }

  function addTask(task) {    
    console.log(`Add this Task: `,task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  
  
  const Table = () => {
    function getDate() { 
      const days = ['Monday, Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];
      let date = new Date();
      const taskTime = date.getUTCHours() >= 12 ? `${date.getHours()}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`
      const taskDate = `${days[date.getDay() - 2]} - ${date.getUTCDate()}/${date.getUTCMonth()}/${date.getFullYear()} at ${taskTime}` 
      return taskDate
    }
    return (
      <div className='tasks-board'>      
          {
            tasks.map((task, index) => {
              return (
                <TaskComponent 
                  key={ index } 
                  task={ task }
                  completed={ completeTask }
                  date={ getDate() }
                  remove ={ deleteTask }
                  >
                </TaskComponent>
              )
            })
          }
      </div>

    )
  }
  let taskTable;
  if (tasks.length > 0) {
    taskTable = <Table></Table>
  }
  else {
    taskTable = (
      <div>
        <h5>There aren't any tasks to show...</h5>
        <p>Please, create one.</p>
      </div>
    ) 
  }

  return (
    <div className='col-12'>
      <div className='card'>
        {/* Card header (title) */}
        <div className='card-header p-3'>
          <h5>
            Your Tasks:
          </h5>
        </div>
        {/* Card body (content) */}
        <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px', padding: '0' }}>
          { taskTable }
        </div>
      </div>
        <TaskForm add={addTask} ntasks={tasks.length}></TaskForm>      
    </div>
  );
};

export default TaskListComponent;
