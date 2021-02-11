import "./App.css";
import First from "./Component/First";
import  useGlobalContext  from "./context/context";
function App() {
  const { loading } = useGlobalContext();
  return (
    <div className="App">
      <First />
    </div>
  );
}

export default App;
