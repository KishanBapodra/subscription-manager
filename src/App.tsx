import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen mx-auto w-full max-w-screen-3xl">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
