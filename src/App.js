import React, { Component } from 'react';
import './style-css.css';
import ContactCard from './contactCard';
import contacts from './contact';

class App extends Component {
  render() {
    return (
      <div className="contacts">
        {contacts.map((c) => (
          <ContactCard
            key={c.id}
            img={c.img}
            nom={c.nom}
            phone={c.phone}
            email={c.email}
          />
        ))}
      </div>
    );
  }
}

export default App;