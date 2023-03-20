import './App.css';
import { useState, useRef } from 'react';
function App() {
  const [list, setList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const inputTask = useRef(null);

  const addTask = () => {
    setList([...list, currentTask]);
    inputTask.current.value = '';
  };

  const deleteTask = taskToDelete => {
    setList(
      list.filter(task => {
        return task !== taskToDelete;
      })
    );
  };

  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <div className='wrapper'>
        <input
          ref={inputTask}
          type='text'
          placeholder='Please Enter Your Task....'
          onKeyDown={event => {
            if (event.key == 'Enter') {
              addTask();
            }
          }}
          onChange={event => setCurrentTask(event.target.value)}
        />
        <button className='add-task-btn' onClick={addTask}>
          Add Task
        </button>
        <ul>
          {list.map(function (list, index) {
            return (
              <div className='flex'>
                <li key={index}>{list}</li>
                <button onClick={() => deleteTask(list)}>X</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
