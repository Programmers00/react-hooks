import { useBeforeLeave } from "./components/useBeforeLeave"
const App = () => {
  const onBefore = () => {
    console.log("Please Don't Leave")
  }
  useBeforeLeave(onBefore)
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
export default App;