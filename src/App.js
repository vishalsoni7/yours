import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Service from "./component/Service";
import TermsAndCondition from "./component/TermsAndCondition";
import WhyUs from "./component/WhyUs";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Service />
      <WhyUs />
      <TermsAndCondition />
    </div>
  );
}

export default App;
