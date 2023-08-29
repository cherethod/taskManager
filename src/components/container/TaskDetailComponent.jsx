import React from 'react';
import { useParams } from 'react-router-dom';
import TaskDetailPage from '../../pages/tasks/TaskDetailPage';

const TaskDetailComponent = ({tasks}) => {
  const { id } = useParams();
  
  const selectedTask = tasks.find(task => task.id === Number(id));
  console.log(selectedTask)
  return <TaskDetailPage task={selectedTask} />;
}

export default TaskDetailComponent;
