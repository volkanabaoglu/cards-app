import "./App.css";
import "bulma/css/bulma.css";
import Course from "./Course";
import angularImage from "./images/angular.jpg";
import bootstrap5Image from "./images/bootstrap5.png";
import cSharpImage from "./images/ccsharp.png";
import fullStackImage from "./images/kompleweb.jpg";
import Navbar from "./Navbar";


const descExp =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio voluptates eius alias inventore ullam aperiam repellendus rem quisquam voluptate?";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <section className="section">
        <div className="columns">
          <div className="column">
            <Course title="Angular" desc={descExp} image={angularImage} />
          </div>
          <div className="column">
            <Course title="Bootstrap5" desc={descExp} image={bootstrap5Image} />
          </div>
          <div className="column">
            <Course title="C#" desc={descExp} image={cSharpImage} />
          </div>
          <div className="column">
            <Course title="Full Stack Web" desc={descExp} image={fullStackImage}
            />
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;
