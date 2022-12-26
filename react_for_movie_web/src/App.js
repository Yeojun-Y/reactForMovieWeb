import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange1 = (e) => setToDo(e.target.value);
  const onSubmit1 = (event) => {
    event.preventDefault(); //page refresh prevent
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>MyTODO({toDos.length})</h1>
      <form onSubmit={onSubmit1}>
        <input
          onChange={onChange1}
          value={toDo}
          type="text"
          placeholder="Write your TODO"
        ></input>
        <button>AddToDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
