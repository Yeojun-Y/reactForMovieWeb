import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick1 = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("run all time");
  useEffect(() => {
    console.log("Call Api....");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 2) {
      console.log("search", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>Welcome {counter}</h1>
      <button onClick={onClick1}>CLickClick</button>
      <Button text="hua" />
    </div>
  );
}

export default App;
