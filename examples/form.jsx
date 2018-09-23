import React from 'react';
import Select from './select';
import {Link} from 'react-router-dom';

const form = props => {
    return (
        <form>
            <Select options={props.options}></Select>
            <Link to="/map">
                <input type="submit" value="Submit" className="button" />
            </Link>
        </form>
    )
}

export default form;