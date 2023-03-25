import React from 'react';
import {BiSearchAlt2} from 'react-icons/bi'

function Search(props) {
    return (
        
        <div className='search'>
            <div className="icon">
            <BiSearchAlt2/>
            </div>
            <input type="text" placeholder='Renk araması'/>
        </div>
    );
}

export default Search;