import React, { useEffect, useState } from 'react';

const SetDetail = ({set}) => {
    return (
        <div className='setDetail'>

            <div>
                <img src={set.img}></img>
            </div>

            <div>
                <p>{set.name}</p>
                <p>Price: ${set.price}</p>
                <p>Theme: {set.theme}</p> 
            </div>            
          
        </div>
    )
}

export default SetDetail