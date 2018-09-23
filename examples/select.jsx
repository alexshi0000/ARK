import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class select extends Component {

    state = {
        selectedOption: ""
    }


    render() {
        let submitButton = null;
        if (this.props.id === "country") {
            submitButton = <Link to={`/map/${this.state.selectedOption}`}>
                <input type="submit" value="Submit" className="button" />
            </Link>
        }
        let options = null
        options = this.props.options.map(option => (
            <option id={option} key={option} value={option}>{option}</option>
        ))
        return (
            <div>
                <select id={this.props.id} value={this.state.selectedOption} onChange={(event) => {
                    this.setState({ selectedOption: event.target.value });
                }}>
                    <option value="" disabled selected>{this.props.placeholder}</option>
                    {options}
                </select>
                {submitButton}
            </div>
        )
    }
}

export default select;