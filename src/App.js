
import './App.css';

function App() {
  const heure = new Date().getHours();

  let message = "";
  let couleur = "";

  if (heure < 12) {
    message = "Bonjour";
    couleur = "#04567F";
  } else if (heure < 18) {
    message = "Bon après-midi";
    couleur = "#0914A3";
  } else {
    message = "Bonne nuit";
    couleur = "#D90000";
  }

  return (
    <div className="App">
      <h1 style={{ color: couleur }}>
        {message}
      </h1>
    </div>
  );
}

export default App;
