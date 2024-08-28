// import React from 'react';


// useEffect is a hook that allows you to perform side effects in function components
import React, { useState, useEffect } from 'react';

// axios
import axios from 'axios';

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}



function App() {

  // fetch
  // const [todos, setTodos] = useState<TodoItem[]>([]);
 
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then((response)=> response)
  //   .then((e) => e.json())
  //   .then(e => setTodos(e as TodoItem[]))
     
  // }, []);
  
  // axios
  const [todos, setTodos] = useState<TodoItem[]>([]);
  useEffect(() => {
    axios.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
    .then((response) => setTodos(response.data))
  }, []);



  return (<div className='App'>
    {todos.map((todo) =>
      (<li key={todo.id}>{todo.title}</li>

  ))
  }
  </div>
     
  )
};

export default App;
