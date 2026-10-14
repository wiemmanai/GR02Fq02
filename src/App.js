import React from "react";
// Font Awesome via npm (2ème méthode, la meilleure)
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
// Chaque composant est importé dans son parent direct
import Pictogramme from "./Composants/Pictogramme";
import Commentaire from "./Composants/Commentaire";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Bonne découverte des composants React" };
    this.handleAimer = this.handleAimer.bind(this);
  }

  // Challenge : le clic sur "Aimer" modifie le message
  handleAimer() {
    this.setState({ message: "Premier défi réussi" });
  }

  render() {
    return (
      <div className="col-6 offset-3 mt-4">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-2">
                <img
                  src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"
                  className="rounded float-left img-thumbnail"
                  width="80"
                  height="70"
                  alt="Développeur"
                />
              </div>
              <div className="col-10">
                <h1 className="text-primary">Débuter avec React</h1>
              </div>
            </div>
            <p>{this.state.message}</p>
            <Pictogramme onAimer={this.handleAimer} />
          </div>

          <div className="card-footer text-muted">
            <Commentaire />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
