import React from 'react';
import Select from './select';

const form = props => {
    return (
        <form>
            <Select options={props.options} placeholder="Select a country" id={"country"} />
            <Select options={props.fundingChoices} placeholder="Select funding" id={"fundingChoices"} />
        </form>
    )
}

export default form;