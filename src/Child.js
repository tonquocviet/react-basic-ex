import React from 'react';

class Child extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      strInput: ''
    }
  }
  handleChange = (event) => {
    this.setState({ strInput: event.target.value })
    this.props.onSubmitCallback(this.state.strInput);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitCallback(121212);
  }
  render() {
    return (
      <>
      <h1>{this.props.name}</h1>
      <input type="text" value={this.state.strInput} onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}>Ok</button>
      </>
    );
  }    
}

export default Child
