import React from "react";
// Un composant doit être importé dans son parent : Icone est un enfant de Pictogramme
import Icone from "./Icone";

class Pictogramme extends React.Component {
  render() {
    return (
      <div>
        <Icone />
        <hr />
        {/* onAimer est une fonction reçue du parent (App) via les props */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.onAimer}
        >
          <i className="fa fa-thumbs-o-up align-middle" aria-hidden="true"></i>
          &nbsp;
          <span className="align-middle">Aimer</span>
        </button>
      </div>
    );
  }
}

export default Pictogramme;
