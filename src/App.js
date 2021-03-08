import "./App.css";
import profileImage from "./img/approved.png";

function App() {
  return (
    <div className="App">
      <h1>My react app</h1>
      <h2>Author: David</h2>
      <img src={profileImage} alt="" />
    </div>
  );
}

export default App;
