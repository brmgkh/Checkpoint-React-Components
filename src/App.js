import "./App.css";
import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <FullName />
      <ProfilePhoto />
      <Address />
    </div>
  );
}

export default App;
