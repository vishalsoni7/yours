import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Service from "./component/Service";
import WhyUs from "./component/WhyUs";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Service />
      <WhyUs />
    </div>
  );
}

export default App;
