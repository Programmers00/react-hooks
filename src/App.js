import { useFadeIn } from "./components/useFadeIn";
const App = () => {
  const fadeInH1 = useFadeIn(2, 0)
  const fadeInH2 = useFadeIn(4, 2)
  return (
    <div className="App">
      <h1 {...fadeInH1}>FadeInH1</h1>
      <h2 {...fadeInH2}>FadeInH2</h2>
    </div>
  );
}
export default App;