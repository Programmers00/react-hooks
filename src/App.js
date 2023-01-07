import { useClick } from "./components/useClick";
const App = () => {
  /** useClick */
  const onClick = () => console.log("Click!!")
  const title = useClick(onClick)
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}
export default App;
