import React, { Component } from "react";
import MesaggesList from "./MesaggesList";

class MessagesContainer extends Component {
  state = {
    inputMessage: "",
    previousMessages: this.props.mensajes
  };

  componentDidUpdate(prevProps) {
    if (this.props.nombre !== prevProps.nombre) {
      this.setMessages();
    }
  }

  handleChange = (event) => {
    event.persist();
    this.setState({
      inputMessage: event.target.value
    });
  };

  setMessages() {
    this.setState({
      previousMessages: this.props.mensajes,
      inputMessage: ""
    });
  }

  handleonClick = (e) => {
    this.props.onCreateMessage({
      id: 0,
      mensaje: this.state.inputMessage,
      visible: true
    });

    this.setState({
      inputMessage: ""
    });
  };

  deleteMessage = (index) => () => {
    const messages = this.state.previousMessages;
    messages.splice(index, 1);
    this.setState({
      previousMessages: messages
    });
  };

  changeVisibility = (index) => () => {
    const messages = this.state.previousMessages;
    messages[index].visible = !messages[index].visible;
    this.setState({
      previousMessages: messages
    });
  };

  render() {
    let input = null;
    const { inputMessage, previousMessages } = this.state;
    if (!this.props.hideInput) {
      input = (
        <>
          <input
            name="inputMessage"
            value={inputMessage}
            onChange={this.handleChange}
            placeholder="Escribe algo"
          />
          <button
            disabled={inputMessage.length === 0}
            onClick={this.handleonClick}
          >
            Enviar
          </button>
        </>
      );
    }
    return (
      <div className="messageContainer">
        <h2>{this.props.nombre}</h2>
        {input}
        {/* 
        Alternativamete se puede agregar un condicional terciario
        
        {this.props.hideInput ? (
          <></>
        ) : (
          <>
            <input
              name="inputMessage"
              value={inputMessage}
              onChange={this.handleChange}
              placeholder="Escribe algo"
            />
            <button
              disabled={inputMessage.length === 0}
              onClick={this.handleonClick}
            >
              Enviar
            </button>
          </>
        )} */}
        <MesaggesList
          previousMessages={previousMessages}
          deleteMessage={this.deleteMessage}
          changeVisibility={this.changeVisibility}
        />
      </div>
    );
  }
}

export default MessagesContainer;
