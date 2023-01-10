import { useScroll } from "./components/useScroll";
const App = () => {
  const { y } = useScroll()
  return (
    <div className="App" style={{height: '200vh'}}>
      <h1 style={{position: 'fixed', color: y >= 100 ? 'blue' : 'red'}}>Hello</h1>
    </div>
  );
}
export default App;