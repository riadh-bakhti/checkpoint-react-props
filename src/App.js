import Profile from './Profile/Profile';
import './App.css';

function App() {
  
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <Profile
      fullName={"Riadh bakhti"}
      profession={"Full Stack Developer"}
      bio={"A Full Stack Developer"}
      age = {25}
      handleName={handleName}
      >
        <img
            src="./rb.jpg"
            alt="rb"
            style={{ borderRadius: "200px", width: "200px",   }}
          />
      </Profile>
      
    </div>
  );
}

export default App;
