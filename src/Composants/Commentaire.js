import React from "react";

class Commentaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { texte: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ texte: e.target.value });
  }

  render() {
    const restants = 120 - this.state.texte.length;
    return (
      <div>
        <textarea
          className="form-control"
          placeholder="Tapez un commentaire..."
          maxLength={120}
          value={this.state.texte}
          onChange={this.handleChange}
        ></textarea>
        <small>{restants} Restants</small>
      </div>
    );
  }
}

export default Commentaire;
