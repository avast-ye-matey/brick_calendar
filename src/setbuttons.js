import React from 'react';

//add to bricklist
export const AddButton = ({ listState, set, setList }) => {
    return (
        <div className='setDivButtons'>
            <button onClick={() => {
                setList([...listState, 
                    {
                        number: set.number,
                        name: set.name,
                        theme: set.theme,
                        price: set.price,
                        img: set.img
                    }
                ])
            }}>Add</button>
        </div>
    )
}

//delete from bricklist
export const DeleteButton = ({ set, setList }) => {
    return (     
        <div className='setDivButtons'>                      
            <button onClick={() => setList(item => item.filter(x => x.number !== set.number))}>Delete</button>
        </div>   
    )
}