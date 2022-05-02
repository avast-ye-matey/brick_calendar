import React, { useState, useEffect } from 'react';


function fetchSets() {
    return (
        fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/testBasket1")
            .then(res => res.json())
    );
}

export default fetchSets;



// function MyComponent() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);
  
//     // Note: the empty deps array [] means
//     // this useEffect will run once
//     // similar to componentDidMount()
//     useEffect(() => {
//       fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/testBasket1")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setIsLoaded(true);
//             setItems(result);
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             setIsLoaded(true);
//             setError(error);
//           }
//         )
//     }, [])
//     console.log(items)
  
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {           
//         return (
//             <div>
//                 {items.sets.map((item) =>                 
//                     <ul key={item.name}>           
//                         <li>{item.name}</li>
//                         <li>{item.number}</li>
//                         <li>{item.theme}</li>          
//                     </ul>
//                 )}                
//             </div>
//         )                
//     }
//   }

//   export default MyComponent;