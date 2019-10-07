import React from 'react';
 class Reservation extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      isGoing: true,
      numberOfGuests: 2
     }
   }
   handleInputChange = (event) => {
     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
     this.setState({
       [event.target.name] : value
     })
     console.log(this.state.isGoing, 'prop isGoing')
   }
   render() {
     return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
     )
   }
}
export default Reservation