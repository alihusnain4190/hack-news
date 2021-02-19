import "./App.css";
import First from "./Component/First";
import  {useGlobalContext}  from "./Component/context";
function App() {
  // const { isLoading } = useGlobalContext();
  return (
    <>
      <First />
    </>
  );
}

export default App;
