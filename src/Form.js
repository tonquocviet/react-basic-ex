import React from 'react';
function List (props) {
  const list = (
    <ul>
      {props.items.map((item) => {
        return( 
        <li key={item.id}>
          {item.name}
        </li>)
      })}
    </ul>
  );
  return(
    <div>
      {list}
    </div>
  )
}
class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: [],
      name: '',
      valueSelect: 'coconut'
    }
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit = (e) => {
    console.log(this.state.items, 2323);
    e.preventDefault();
    let nextItems = this.state.items.concat([{
    	name: this.state.name,
      id: Date.now()
    }]);
    this.setState({
      items: nextItems,
      name:''
    })
  }
  handelSelect = (e) => {
    this.setState({
      valueSelect : e.target.value
    })
    console.log(this.state.valueSelect)
  }
  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <List items={this.state.items}/>
      <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
      <button>Add</button>
      <br/>
      <select value={this.state.valueSelect} onChange={this.handelSelect}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    </form>
    )
  }

}
export default Form