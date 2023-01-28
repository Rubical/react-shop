import "./_reset.scss";
import "./../../libs/css/bootstrap.min.css";
import "./_base.scss";
import Header from "../Header";
import Row from "../Row";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mb-5">
        <Row />
      </div>
    </div>
  );
}

export default App;
