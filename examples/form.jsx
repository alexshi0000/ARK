import React from 'react';
import Select from './select';

const form = props => {
    return (
        <form>
            <Select options={props.options}></Select>
        </form>
    )
}

export default form;