import { useConfirm } from "./components/useConfirm"
const App = () => {
  const yes = () => console.log("Yes")
  const stop = () => console.log("Stop")
  const confirmDelete = useConfirm("Are you sure?", yes, stop)
  return (
    <div className="App">
      <button onClick={confirmDelete}>Action</button>
    </div>
  );
}
export default App;
