import { usePreventLeave } from "./components/usePreventLeave";
const App = () => {
  const {enablePrevent, disablePrevent } = usePreventLeave()
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
export default App;