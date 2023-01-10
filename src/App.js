import { useFullscreen } from "./components/useFullscreen"
const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "Full" : "Not Full")
  }
  const {element, triggerFull, exitFull} = useFullscreen(onFullScreen)
  return (
    <div className="App">
      <div ref={ element }>
      <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt=''/>
      <div>
        <button onClick={triggerFull}>Make Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>  
        </div>
        </div>
    </div>
  );
}
export default App;