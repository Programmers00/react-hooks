import './App.css';
import { useInput } from "./components/useInput";

const App = () => {
  /** validator */
  const maxLengthValidator = (value) => value.length <= 10
  // useInput
  const input = useInput("", maxLengthValidator)
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Input" {...input} />
    </div>
  );
}

export default App;
