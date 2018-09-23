import React from 'react';

const select = props => {

    let options = null
    options = props.options.map(option => (
        <option key={option} value={option}>{option}</option>
    ))

    return (
        <div>
            <select>
                {options}
            </select>
        </div>
    )
}

export default select;