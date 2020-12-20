import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value,
      charCount: this.state.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleChange(e)} value={this.state.input}/>
        <p>mac characters: {this.state.maxChars}</p>
        <p>characters remaining: {this.state.charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
