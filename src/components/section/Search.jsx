import React from 'react'

const Search = () => {
    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    className='search__input'
                    type='search'
                    name='searchInput'
                    id='searchInput'
                    autoComplete='off'
                />
            </div>
        </div>
    )
}

export default Search