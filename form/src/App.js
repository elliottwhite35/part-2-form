import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      season: 'Spring',
      drive: false,
      submitted: false,
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleSeasonChange = (event) => {
    this.setState({
      season: event.target.value,
    });
  };

  handleDriveChange = (event) => {
    this.setState({
      drive: event.target.value === 'yes',
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              maxLength={150}
            />
          </div>
          <div>
            <label>Age </label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              max={124}
            />
          </div>
          <div>
            <label>Favorite Season </label>
            <select
              value={this.state.season}
              onChange={this.handleSeasonChange}
            >
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
          </div>
          <div>
            <label>Can you drive a car?</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={this.state.drive}
                  onChange={this.handleDriveChange}
                />
                yes
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={!this.state.drive}
                  onChange={this.handleDriveChange}
                />
                no
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>

        {this.state.submitted && (
          <div>
            <h1>The user entered:</h1>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            <p>Favorite Season: {this.state.season}</p>
            <p>Can you drive a car?: {this.state.drive ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
