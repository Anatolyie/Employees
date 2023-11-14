import React, { useState } from 'react';
import './search-panel.css';

const SearchPanel = (props) => {
    const [term, setTerm] = useState('');

    const onUpdateSearch = (e) => {
        const searchTerm = e.target.value;
        setTerm(searchTerm);
        props.onUpdateSearch(searchTerm);
    };

    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Find an employee"
            value={term}
            onChange={onUpdateSearch}
        />
    );
};

export default SearchPanel;
