import React, { useContext } from 'react';
import {BiSearchAlt2} from 'react-icons/bi'
import MainContext from '../MainContext';

function Search(props) {

    const {search, setSearch} = useContext(MainContext)
    return (
        
        <div className='search'>
            <div className="icon">
            <BiSearchAlt2/>
            </div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Renk araması'/>
        </div>
    );
}

export default Search;