// main.js
//
// /* You don't need these imports
// **  import React from 'react';
// **  import ReactDOM from 'react-dom';
// */
// // React and ReactDOM are already imported in you HTML
const layout = <div>
                {/* image expand/min */}
                <div id="divImgExpand" style={{display: "none"}}>       
                </div>  

                {/* saved list popup */}
                <div id="savedPopup">Saved!</div>

                {/* delete popup */}
                <div id="deletePopupExpand" className="notHere">
                    <div id="deletePopup">        
                        <span className="popuptext" id="myPopup">Are you sure you want to delete??</span>
                        <div id="deletePopupButtons">
                            <button id="yes">Yes</button>
                            <button id="no" onClick={deleteItem()}>No</button>
                        </div>
                    </div>
                </div>
                
                {/* footer drawer for searching sets */}
                <div id="divWishlistFooterOuter" className="notHere">
                    <h1 id="h1Wishlist2" className="h1Wishlist2">Search Sets</h1>
                    <button id="buttonWishUpDown" onClick={wishUpDown()}>
                        <img src="SVG/up-arrow.svg" />
                    </button>        
                </div>         

                {/*---------------------- search sets --------------------*/}
                <div id="divWishlist" className="divWishlist">         
                    
                    <h2 id="bricklistNameTitle">Build Your Bricklist</h2>
                    <div id="formSearch">        
                        <input type="text" placeholder="Search Sets..." id="inputSearch"></input>
                        <button id="buttonSearch" onClick={searchSets()}>
                            <img src="SVG/search.svg" />
                        </button>
                    </div>          
                           
                    {/*---------------- search sets filter dropdowns --------------------*/}    
                    <div id="divFilterDropdown">    
                        <h3>Sort by:</h3>        
                        <select name="filterTheme" id="filterTheme" className="dropDownTheme" onChange={filterThemeOrder(this)}>
                            <option id="filterDefaultId" value="">Theme</option>        
                        </select>
                
                        <br/>
                        
                        <select name="filterPrice" id="filterPrice" className="dropDownPrice" onChange={filterPriceOrder(this)}>
                            <option value="">Price</option>
                            <option value="descending">low - high</option>
                            <option value="ascending">high - low</option>        
                        </select>
                    </div>
                
                    {/*---------------------- new searched sets --------------------*/}    
                    <div id="divSets" style={{visibility: "hidden"}}>       
                    </div>     

                </div>


                {/*--------------- homepage and bricklist page ---------------*/}        
                <div id="mainSets">

                    {/* current bricklist title */}
                    <div id="wishlistHeadline">
                        <h1 id="nameChosenBricklist"></h1>
                        {/* <button id="buttonHome" onClick={goHome()}><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.4 122.88"><title>up-arrow</title><path d="M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z"/></svg></button> */}
                    </div>
                    
                    {/* greeting */}
                    <div id="divWishlistTitle">
                        <h1 id="h1Wishlist">Welcome back Builder (in react)!</h1>
                    </div>

                    {/* saved or new bricklist options */}
                    <div id="wishlistFilter">
                    
                        {/* saved bricklist option */}
                        <div id="sss">
                            <h3 id="wlH3">Saved Bricklist:</h3>            
                            <select name="filterChooseWishlist" id="filterChooseWishlist" onChange={filterWishlist(this)}>
                                <option id="filterOptionChooseWishlist" value="">...</option>        
                            </select>
                        </div>     

                        <h3>OR</h3>

                        {/* create new bricklist */}
                        <button id="create" onClick={createWishlist()}>New Bricklist</button>          
                        <div id="saveNewWishlist" style={{display: "none"}}>
                            <input type="text" placeholder="Name of New Bricklist..." id="inputWishlistSaveElem"></input>

                            <button id="buttonLookUpWishlist2" onClick={saveNewWishlistName()}>
                                <img src="SVG/save.svg" />
                            </button>
                        </div>       
                    </div>

                    {/* bricklist filter dropdowns */}
                    <div id="divFilterDropdownWElem" style={{display: "none"}}>    
                        <h3>Sort by:</h3>        
                        <select name="filterTheme" id="filterTheme2" className="dropDownTheme" onChange={filterThemeOrder2(this)}>
                            <option id="filterDefaultId" value="">Theme</option>        
                        </select>

                        <br/>
                        
                        <select name="filterPrice" id="filterPrice2" className="dropDownPrice" onChange={filterPriceOrder2(this)}>
                            <option value="">Price</option>
                            <option value="descending">low - high</option>
                            <option value="ascending">high - low</option>        
                        </select>
                    </div>

                    {/* div for bricklist sets to be added */}
                    <div id="divWishlistSets">              
                    </div>   
                </div>  
    </div>


/// *******************  create new bricklist ***********************
// input for naming new bricklist appear/disappear

function createWishlist() { 
    // TODO: implement
}

// *******************  hit enter on input field ***********************
//hitting enter during set search triggers button click for search


/*
inputSearch.addEventListener("keyup", function(event) { 
  if (event.key === "Enter") {   
    event.preventDefault();    
    document.getElementById("buttonSearch").click();
  }
});
*/

// ***************************** searchbar *****************************

function searchSets() {    
    // TODO: implement
}


function filterListTheme(themeArray) {                     
    // TODO: implement
}

function filterListTheme2(themeArray2) {
    // TODO: implement
}      

// ***************************** set creation shell  *****************************
// shell creation for searched sets
function setTest(i) {   
    // TODO: implement
}    

// ************************* triggering filter order  ***************************************

function filterThemeOrder(selection) {
    // TODO: implement
}

function filterThemeOrder2(selection) {
    // TODO: implement
}

function filterPriceOrder2(selection) {       
    // TODO: implement
}

function filterPriceOrder(selection) {  
    // TODO: implement
}    

// ***************** wishlist tab top/bottom *********************


function wishUpDown() {
    // TODO: implement
}

fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18")
    .then(response => response.json())
    .then(result => {       
        for (const i of result.baskets) {
            let newOption = document.createElement("option")
            newOption.innerHTML = i.name
            // Do it the react way instead
            // filterChooseWishlist.appendChild(newOption)                        
        }
    }) 

function filterWishlist(selection) {
    const z = "WHAT?"
    let x = `https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/${z}`
    fetch(x)
        .then(response => response.json())
        .then(result => {           
            for (const i of result.sets) {
                // Do things with values here
            }      
            // Update: filterListTheme2(themeArray2)    
        }) 
}



// ***************** img expand/minimize *********************


function minImage() {
    divImgExpand.style.display = "none";
}

function expandImage(clicked_image) {
    // TODO: update and do it the react way
    divImgExpand.style.removeProperty("display")
    divImgExpand.innerHTML = "";   
    v = clicked_image    
    fetch('https://getpantry.cloud/apiv1/pantry/db0bad39-3243-4735-bfe4-099f32cc1f0c/basket/setsNew')      
        .then(function(response) {
            if (!response.ok) {    
                minImage()           
                throw alert("Error with API. Please refresh page and try again.");                
            }
            return response.json()
            })                           
        .then(data => {
            for (const i of data.sets) {                
                if (i.img === v) {                  
                    const divSetChildImage = document.createElement("img")                   
                    divSetChildImage.src = i.img
                    divSetChildImage.setAttribute("onclick", "minImage();")
                    divImgExpand.appendChild(divSetChildImage);
                }
            }
        })       
}


// ***************** add to wishlist *********************


function addToWishlistDeletePopup(clicked_id) {
    deleteItem(clicked_id)
}

// ***************************** delete popup *****************************

function deleteItem() {
    // TODO: implement
}

function addToWishlist2(clicked_id) {           
    // TODO: implement
}

// search page //addtowishlist 1 divsets
function addToWishlist(clicked_id) {        
    // TODO: implement
    // This should be as simple as adding to the state object
}
 
// take away item
function addToWishlist3(clicked_id) {   
    // TODO: implement
}

function addToWishlist4(clicked_id) {
    // TODO: implement
}

// ************************************** save/update ***************************************
function saveUpdate() {
    // TODO: implement
}

// ************************************** Wishlist Buttons ***************************************

function searchWishlist() { 
    fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18")
        .then(response => response.json())
        .then(result => {           
            for (const i of result.baskets) {                
                if (inputWishlistSearch.value === i.name ) {                    
                    alert("found")  
                } else {
                    // alert("not found")
                }                
            }
        }) 
}

/*
inputWishlistSave.addEventListener("keyup", function(event) { 
    if (event.key === "Enter") {   
      event.preventDefault();    
      document.getElementById("buttonLookUpWishlist2").click();
    }
  });
*/


//creates new wishlist (maybe can be used to update wishlist like a save button)
// needs to be attached to submit new wishlist
function addWishlist() {
    // TODO: implement
}

// ************************************** save new wishlist name ***************************************

function saveNewWishlistName() {
    // TODO: implement
}   
 
// saved popup
function savedPopup() {
    // TODO: implement
}

// ***************************** countdown timer *****************************

// // Also import / require are NodeJS thing that doesn't exist in a browser




ReactDOM.render(
  layout,
  document.getElementById('app')
);
