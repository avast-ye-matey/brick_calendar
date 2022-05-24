import React from 'react';

//add to bricklist
export const AddButton = ({ set, handler }) => {
    console.log("(addButton) I have a set passed in: ", set)
    // Sorry, broke the CSS here :(
    return (
        <div className='setDivButtons'>
            <button onClick={() => handler(set)}></button>
        </div>
    )
}

//delete from bricklist
// TODO: update this to use pub-sub like the AddButton component
export const DeleteButton = ({ set, setList }) => {
    return (     
        <div className='setDivButtons'>                      
            <button onClick={() => setList(item => item.filter(x => x.number !== set.number))}>Delete</button>
        </div>   
    )
}