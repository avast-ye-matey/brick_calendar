import React, { useEffect, useState } from 'react';
import './App.css';
import JSON from './data.json'
import { AddButton, DeleteButton } from './setbuttons';
import SetDetail from './setdetail';

/* A Set's datail from JSON:
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
   * input search bar
   * 
   * Returns a list of sets that matches a given search term.
   * 
   * @param {string} term : search term to filer by
   * @returns Set[]
   */
  function search(term) {
    return JSON.filter(set => set.name.toLowerCase().includes(term.toLowerCase()))
  }


  /**
   * creates full set detail card w/ add button
   * 
   * @param {Set} Set :  set information to fill set detail card
   * @returns JSX.Element
   */
  function setCardAdd(set) {
    return (
      <div key={set.number} className='setDiv'>        
        <SetDetail set={set}/>        
        <AddButton listState={listState} set={set} setList={setList}/>
      </div>
    );
  }

  /**
   * creates full set detail card w/ delete button
   * 
   * @param {Set} Set :  set information to fill set detail card
   * @returns JSX.Element
   */
  function setCardDelete(set) {
    return (
      <div key={set.number} className='setDiv'>        
        <SetDetail set={set}/>        
        <DeleteButton listState={listState} set={set} setList={setList}/>
      </div>
    );
  }

  // displays sets using search bar
  const setsToDisplay = searchTerm.length > 0
                      ? search(searchTerm).map(set => setCardAdd(set))
                      : []
  /* == Is the same as ^ ==
  let setsToDisplay = []
  if(searchTerm.length > 0) {
    setsToDisplay = search(searchTerm).map(set => setCard(set))
  }
  */      

  // displays bricklist using the state of variable listState 
  const listToDisplay = listState.length > 0               
                      ? [...new Map(listState.map(item => [item.number, item])).values()].map(set => setCardDelete(set))
                      : [] 

       
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
            { listToDisplay }                           
        </div>         

      </div>
      
    </div>     
  );
}

export default App;
