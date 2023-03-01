import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [taskEdit, setTaskEdit] = useState(null);
  const [editText, setEditText] = useState("");

  const handleTask = () => {
    setList([...list, { id: Math.floor(Math.random() * 100 + 1), task: task }]);
    setTask("");
    setId("");
    console.log("state", list);
  };

  const deleteList = (id) => {
    const updatedList = [...list].filter(t => t.id !== id);
    setList(updatedList);
  };
  const editList = (id) => {
    const updatedText = [...list].map((task) => {
      if (task.id === id) {
        task.task = editText;
      }
      return task;
    });
    setList(updatedText);
    setTaskEdit(null);
    setEditText("");
  };

  return (
    <div className="App">
      <h1>CRUD OPERATION</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={handleTask}>
          Add
        </button>
        <br />
        <hr />
        {list.map((val) => (
          <div key={val.id}>
            {taskEdit === val.id ? (
              <input
                type="text"
                onChange={(e) => setEditText(e.target.value)}
                value={editText}
              />
            ) : (
              <h3>{val.task}</h3>
            )}
            <button onClick={() => deleteList(val.id)}>delete</button>

            {taskEdit === val.id ? (
              <button onClick={() => editList(val.id)}>change</button>
            ) : (
              <button onClick={() => setTaskEdit(val.id)}>Edit</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
