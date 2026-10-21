import './App.css';
import './style-css.css';
import ContactCard from './contactCard';
import contacts from './contact';

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
    message = "Bonsoir";
    couleur = "#D90000";
  }

  return (
    <div className="App">
      <h1 style={{ color: couleur }}>{message}</h1>

      <div className="css-liste">
        {contacts.map((c) => (
          <ContactCard
            key={c.id}
            id={c.id}
            img={c.img}
            nom={c.nom}
            phone={c.phone}
            email={c.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;