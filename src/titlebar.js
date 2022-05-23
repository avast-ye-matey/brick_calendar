import React from 'react';

export const TitleBar = () => {
    return (
        <div className='titlebar'>
            <h2>Title</h2>
            <input type='text' placeholder='Search...'></input>
            {/* <input
                type='text' 
                placeholder='Search...' 
                onChange={(event) => {
                setAppState({ loading : false })
                setSearchTerm(event.target.value);
                }} 
            />  */}
        </div>
    )
}