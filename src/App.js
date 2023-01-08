import { useHover } from "./components/useHover";
const App = () => {
  /** useHover */
  const onHover = () => console.log("Hover!!")
  const title = useHover(onHover)
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}
export default App;
