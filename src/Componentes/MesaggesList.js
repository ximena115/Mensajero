import React from "react";

class MessagesList extends React.Component {
  render() {
    return (
      <div className="messagesList">
        {this.props.previousMessages.map((messageObject, index) => (
          <div key={index} className="dataContainer">
            <p className={`line-${messageObject.visible.toString()}`}>
              {messageObject.mensaje}
            </p>
            <div>
              <button
                className="message"
                onClick={this.props.deleteMessage(index)}
              >
                Eliminar
              </button>
              <button
                className="message"
                onClick={this.props.changeVisibility(index)}
              >
                Visto
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MessagesList;
