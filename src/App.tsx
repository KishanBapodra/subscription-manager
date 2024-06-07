import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen mx-auto w-full flex flex-col max-w-screen-3xl">
      <Navbar />
      <div className="flex-grow">
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
