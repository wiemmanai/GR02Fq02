import React, { Component } from 'react';

class ContactCard extends Component {
  render() {
    const { img, nom, phone, email } = this.props;

    return (
      <div className="contact-card">
        <div className="cadre-image">
          <img src={img} alt={nom} />
        </div>
        <h3>{nom}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default ContactCard;