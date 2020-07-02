import React from 'react';
import './search-box.styles.css'

export default function SearchBox({placeholder, handleChange}) {
    return (
        <input className='search' onChange={handleChange} type="text" placeholder={placeholder} />
    );
}
