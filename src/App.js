import React, { useEffect, useState } from 'react';
import './App.css';
import JSON from './data.json'

/* A Set:
{
  "number": number
  "theme": string
  "price": number
  "name": string
  "releaseDate": sting (data type)
  "isOnWishList": boolean
  "url": string
  "img": string
},
*/


function App() {   
  const [searchTerm, setSearchTerm] = useState('');  
  const [listState, setList] = useState([]);  
  // sets are what we pull from the API endpoint
  const [ sets, updateSets ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const [appState, setAppState] = useState({ 
    loading: true,
    repos: null,
  });
 
  useEffect(() => {
    setAppState({ loading: true });
    fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/testBasket1")
      .then(res => res.json())
      .then((repos) => {        
          setAppState({ loading: false, repos: repos.sets });
      });
  }, []);     


  /**
   * search
   * 
   * Returns a list of sets that matcht a given search term.
   * 
   * @param {string} term : search term to filer by
   * @returns Set[]
   */
  function search(term) {
    return JSON.filter(set => set.name.toLowerCase().includes(term.toLowerCase()))
  }


  /**
   * 
   * @param {Set} Set :  
   * @returns JSX.Element
   */
  function setDetails(set) {
    return (
      <div key={set.number} className='setDiv'>
        {/* TODO 4: lift this into its own component */}
        <div>
          <p>{set.name}</p>
          <p>Price: ${set.price}</p>
          <p>Theme: {set.theme}</p>  
          {/* TODO 1: add image here */}
        </div>
        {/* end TODO 4 */}
        <div className='setDivButtons'>
          <button onClick={() => setList([...listState, set.number])}>Add</button>
        </div>
      </div>
    );
  }

  const setsToDisplay = searchTerm.length > 0
                      ? search(searchTerm).map(set => setDetails(set))
                      : []
  /* == Is the same as ^ ==
  let setsToDisplay = []
  if(searchTerm.length > 0) {
    setsToDisplay = search(searchTerm).map(set => setDetails(set))
  }
  */

  return (
    <div>
      <input
        type='text' 
        placeholder='Search...' 
        onChange={(event) => {
          setAppState({ loading : false })
          setSearchTerm(event.target.value);
        }} 
      />     
      
      <div className='lists'>          

        <div className='subLists'>  
          <h1>Sets:</h1>       
            { setsToDisplay }
        </div>            

        <div className='middle'></div>        

        <div className='subLists'> 
          <h1>Bricklist:</h1>  
                   
          {/* TODO 2: lift this into its own fuction (like search)  */}
          { listState.length !== 0 && JSON.filter((val) => {    
            for (let i = 0; i <= listState.length; i++) {
              if (val.number === listState[i]) {
                return val
              }
            }
          }).map((val, key) =>  {  
              // TODO 3: lift this into its own function (like setDetails)
              return (
                <div key={key} className='setDiv'>
                    <div>
                      <p>{val.name}</p>
                      <p>Price: ${val.price}</p>
                      <p>Theme: {val.theme}</p>  
                    </div>
                    <div className='setDivButtons'>                      
                      <button onClick={() => setList(item => item.filter(x => x !== val.number))}>Delete</button>
                    </div>                               
                  </div>  
              )
          })}                
        </div>         

      </div>
      
    </div>     
  );
}

export default App;
