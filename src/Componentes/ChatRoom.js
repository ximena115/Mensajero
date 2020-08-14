import React from "react";
import MessagesContainer from "./MessagesContainer";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";

class ChatRoom extends React.Component {
  state = {
    mensajeros: [
      {
        nombre: "Izquierda",
        mensajes: []
      },
      {
        nombre: "Centro",
        mensajes: []
      },
      {
        nombre: "Derecha",
        mensajes: []
      },
      {
        nombre: "General",
        mensajes: []
      }
    ]
  };

  createMessage = (nombreMensajero) => (mensaje) => {
    const copiaMensajeros = this.state.mensajeros;

    const user = copiaMensajeros.find(
      (mensajero) => mensajero.nombre === nombreMensajero
    );
    user.mensajes.push(mensaje);

    copiaMensajeros[3].mensajes.push(mensaje);

    this.setState({
      mensajeros: copiaMensajeros
    });
  };

  render() {
    return (
      <div className="chatRoom">
        <Navbar />
        <Switch>
          <Route
            path="/:mensajero"
            render={({ match }) => {
              let hideInput = false;
              const mensajero = this.state.mensajeros.find(
                (a) => a.nombre.toLowerCase() === match.params.mensajero
              );
              if (match.params.mensajero === "general") {
                hideInput = true;
              }
              return (
                <MessagesContainer
                  nombre={mensajero.nombre}
                  mensajes={mensajero.mensajes}
                  hideInput={hideInput}
                  onCreateMessage={this.createMessage(mensajero.nombre)}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default ChatRoom;
