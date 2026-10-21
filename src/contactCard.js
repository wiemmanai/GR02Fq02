import React, { Component } from 'react';

class ContactCard extends Component {
  render() {
    const { id, img, nom, phone, email } = this.props;

    return (
      <div className="css-objet">
        <input type="checkbox" id={`contact-${id}`} />
        <div className="cadre-image">
          <img src={img} alt={nom} />
        </div>
        <label htmlFor={`contact-${id}`} className="infos">
          <h3>{nom}</h3>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
        </label>
      </div>
    );
  }
}

export default ContactCard;