import React from "react";
import axios from "axios";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "lucas-lameirinhas-lovelace"
  }
};

export default class App extends React.Component {
  state = {
    lista: [],
    inputNome: "",
    inputEmail: ""
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  mudaInputNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };

  mudaInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  pegarPlaylists = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ lista: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  criarPlaylist = () => {
    const body = {
      id: "",
      name: this.state.inputNome
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuario Adicionado");
        this.setState({ inputNome: "" });
        this.setState({ inputEmail: "" })
        this.pegarPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    const componentesListaUsuarios = this.state.lista.map((play) => {
      return <li key={play.id}>{play.name}</li>;
    });

    return (
      <div>
        <h1>LabenUsers</h1>
        <input
          value={this.state.inputNome}
          onChange={this.mudaInputNome}
        />
        <input
          value={this.state.inputEmail}
          onChange={this.mudaInputEmail}
        />
        <button onClick={this.criarPlaylist}>Enviar</button>
        {componentesListaUsuarios}
      </div>
    );
  }
}

