
import React, {useState} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText,setInputText]= useState("");
  const [todos, setTodos] =useState([]);
  return (
    <div className="App">
      <header>
      <h1>Note it </h1>
      </header>
     <Form 
        setTodos={setTodos}  
        todos={todos}  
        setInputText={setInputText}
        inputText={inputText}
        />
     <ToDoList/>
    </div>
  );
}

export default App;
