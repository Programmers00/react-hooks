import {useTitle} from './components/useTitle'
const App = () => {
  // useTitle
  const titleUpdater = useTitle("Loading...")
  setTimeout(()=> titleUpdater("Home"), 5000)
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
