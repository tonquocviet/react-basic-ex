import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
// import Child from './Child';
function Formatted (props) {
  return (
    <h5>It is {props.date.toLocaleString()}</h5>
  )
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  return(
    <>
    {isLoggedIn ? (
      <h5>Hello, Welcom to Login</h5>
    ) : (
      <h2>You will Logout</h2>
    )}
    </>
  )
}
function Mailbox(props) {
  const unreadMessages = props.messages;
  return (
    <>
    {unreadMessages.length > 0 &&
      <h6>
        You have {unreadMessages.length} unread Messages.        
      </h6>
    }
    </>
  )
}
function WarmingBanner(props) {
  if( !props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning
    </div>
  )
}
function NumberList(props) {
  const sidebar = (
    <ul>
      {props.listCourses.map((course) => {
        return( 
        <li key={course.id}>
          {course.title}<br/>
          {course.content}
        </li>)
      })}
    </ul>
  );
  return (
    <>{sidebar}</>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      count: 0,
      date: new Date(),
      comment: [],
      isToggleOn: true,
      isLoggedIn: false,
      messages: ['React', 'NodeJs', 'Python'],
      showWarning: true,
      courses : [
        {
          id: 1, title: 'Deep Learning', content: 'Welcom to Deep learning'
        },
        {
          id: 2, title: 'AI Learning', content: 'Welcom to AI learning'
        }
      ]
    }
  }
  componentWillUnMount = () => {
    clearInterval(this.timerID);
  }
  componentDidMount = () => {
    this.timerID  = setInterval(
      () => this.tick(), 1000);
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  Increment = () => {
    this.setState({
      count : this.state.count + 1
    })
  }
  Decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  handelClick = (e) => {
    e.preventDefault();
    this.setState({
      isToggleOn: !this.state.isToggleOn
    })
  }
  handelToggleClick = () =>{
    this.setState({
      showWarning: !this.state.showWarning
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Formatted date={this.state.date}/>
          <h2>{this.state.count}</h2>
          <button onClick={this.Increment}>Increment</button>
          <button onClick={this.Decrement}>Decrement</button>
          <button onClick={this.handelClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
          <Greeting isLoggedIn={true}/>
          <Mailbox messages={this.state.messages} />
          <WarmingBanner warn={this.state.showWarning}/>
          <NumberList listCourses={this.state.courses}/>
          <button onClick={this.handelToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
          <Form/>
      </header>
    </div>
    );
  }
}

export default App;
