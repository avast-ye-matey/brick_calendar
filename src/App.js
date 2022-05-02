import React, { useEffect, useState } from 'react';
import './App2.css';
import fetchSets from './fetchSets';
import MyComponent from './fetchSets';
import itemCard from './itemCard';
import Sets from './sets';

function App() {   
  const [data, setData] = useState([]);
  // const [people, setPeople] = useState()
  useEffect(() => {
    let mounted = true;
    fetchSets()
      .then(items => {
        if(mounted) {
          setData(items.sets)
        }
      })
    return () => mounted = false;
  }, [])
  // const igloo = data.sets
  console.log(data)
  return (
    <div>
      <div>                    
        {/* <button onClick={setData([])}>erase</button>    */}
        <h1>Sets:</h1>   
        {/* <Sets people={people} />            */}
        {/* <Sets />  */}
        <div>
            {data.map((item) =>                 
              <Sets key={data.number} {...item}/>
            )}                
        </div>
      </div>
      <div>
        <p>bricklist:</p>    
           
      </div>
    </div>
    // itemCard()    
  );
}


// () => console.log('click')
export default App;
