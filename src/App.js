import { content, useTabs } from "./components/useTabs";

const App = () => {
  // useTabs
  const { currentItem, changeItem } = useTabs(0, content)
  return (
    <div className="App">
      <h2>{currentItem.content}</h2>
      {content.map((section, index) => (
        <button onClick={()=> changeItem(index)}>{section.tab}</button>
      ))
      }
    </div>
  );
}

export default App;
