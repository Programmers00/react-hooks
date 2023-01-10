import { useNotification } from "./components/useNotification";
const App = () => {
  const triggerNotification = useNotification("This is Notification", {body: "Notification"})
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={triggerNotification}>Notification</button>
    </div>
  );
}
export default App;