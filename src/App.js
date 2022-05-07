import React, { useEffect, useState } from 'react';
import './App.css';
import JSON from './data.json'

function App() {   
  const [searchTerm, setSearchTerm] = useState('');  
  const [appState, setAppState] = useState({ 
    loading: true,
    repos: null,
  });
  const [listState, setList] = useState([]);  
 
  useEffect(() => {
    setAppState({ loading: true });
    fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/testBasket1")
      .then(res => res.json())
      .then((repos) => {        
          setAppState({ loading: false, repos: repos.sets });
          
      });
  }, []);     
 
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

          { appState.loading === false && JSON.filter((val)=> {
              
              if (searchTerm == '') {
                return ''
              } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                console.log(val)
                return val
              }
            }).map((val, key) => {
              return (
                <div key={key} className='setDiv'>
                  <div>
                    <p>{val.name}</p>
                    <p>Price: ${val.price}</p>
                    <p>Theme: {val.theme}</p>  
                  </div>
                                                
                </div>                  
              );
            })} 
              
        </div>            

        <div className='middle'></div>        

        <div className='subLists'> 
          <h1>Bricklist:</h1>  
                   
                       
        </div>         

      </div>
      
    </div>     
  );
}

export default App;
