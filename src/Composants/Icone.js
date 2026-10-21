import React from "react";

// Composant "feuille" : il ne contient aucun autre composant.
// Il affiche le pictogramme "pouce levé" dans un cercle (Font Awesome : fa-stack).
class Icone extends React.Component {
  render() {
    return (
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x blue-icon"></i>
        <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
      </span>
    );
  }
}

export default Icone;
