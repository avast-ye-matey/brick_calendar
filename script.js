// *******************  create new bricklist ***********************
// input for naming new bricklist appear/disappear

let create = document.getElementById("create")

function createWishlist() { 
    let saveNewWishlist = document.getElementById("saveNewWishlist")    
    if (saveNewWishlist.style.display === "none") {        
        saveNewWishlist.style.display = ""
    } 
}

// *******************  hit enter on input field ***********************
//hitting enter during set search triggers button click for search

var inputSearch = document.getElementById("inputSearch");

inputSearch.addEventListener("keyup", function(event) { 
  if (event.key === "Enter") {   
    event.preventDefault();    
    document.getElementById("buttonSearch").click();
  }
});

// ***************************** searchbar *****************************

function searchSets() {    
    document.getElementById("divSets").innerHTML = "";
    let titleArray = []
    let themeArray = []     
    let input = document.getElementById('inputSearch').value.toLowerCase();       
    let r = document.getElementById("filterTheme").children.length
    let filterTheme = document.getElementById("filterTheme")       
    if (input === "") {
        alert("Search bar blank. Please input your search.")
    } else {    
        if (r > 1) {
            filterTheme.innerHTML = "";
            let option = document.createElement("option")
            option.innerHTML = "Theme"
            filterTheme.appendChild(option)
        }        
        let x = fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
            .then(function(response) {
                if (!response.ok) {               
                    throw alert("Error with API. Please refresh page and try again.");
                }
                return response.json()
            })                         
            .then(data => {
                for (const i of data.sets) {  
                    let inputLength = input.length                                             
                    if (i.name.toLowerCase().includes(input)) {                                      
                        titleArray.push(i.name)                   
                        themeArray.push(i.theme)                    
                    } else {                                                          
                        while (inputLength > 3) {                        
                            --inputLength
                            if (!i.name.toLowerCase().includes(input.slice(0, inputLength))) {                             
                            } else {                           
                                titleArray.push(i.name)
                                themeArray.push(i.theme)
                            }                          
                        }
                    }   
                    if (i.theme.toLowerCase().includes(input)) {
                        titleArray.push(i.name)
                        themeArray.push(i.theme)
                    }                      
                    if (i.number.toString() === input) {
                        titleArray.push(i.name)
                        themeArray.push(i.theme)
                    }                                                                                    
                }     
                console.log(Array.isArray(titleArray))
                console.log(themeArray)
                if (titleArray - themeArray === 0) {                    
                    alert("Couldn't find a set mathing your search. Please try again.")
                } else {
                    filterListTheme(themeArray)
                    let titleSet = new Set(titleArray)                            
                    titleSet = Array.from(titleSet);              
                    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
                            .then(function(response) {
                                if (!response.ok) {                        
                                    throw alert("Error with API. Please refresh page and try again.");
                                }
                                return response.json()
                                })                        
                            .then(data => {
                                for (const i of data.sets) {                                
                                    for (const z of titleSet) {                                    
                                        if (i.name === z) {                                                                                                                  
                                            setTest(i)
                                        }  
                                    }                                                                
                                }
                            })
                }    
                
            })  
    } 
}


function filterListTheme(themeArray) {                     
    let themeSet = new Set(themeArray)   
    themeSet.forEach((value) => {                               
        let theme = document.createElement("option")
        theme.innerHTML = value
        filterTheme.appendChild(theme)
    })
}

function filterListTheme2(themeArray2) {
    let filterTheme2 = document.getElementById("filterTheme2")         
    filterTheme2.innerHTML = "";
    let option = document.createElement("option")
    option.innerHTML = "Theme"
    filterTheme2.appendChild(option)                
    let themeSet = new Set(themeArray2)   
    themeSet.forEach((value) => {                               
        let theme = document.createElement("option")
        theme.innerHTML = value
        filterTheme2.appendChild(theme)
    })
}      

// ***************************** set creation shell  *****************************
let arrayPrice = []
let arrayWishList = []
// shell creation for searched sets
function setTest(i) {   
    const divWrapperSets = document.getElementById("divSets");
    divWrapperSets.style.visibility = "";
    const divSet = document.createElement("div");
    divSet.setAttribute("class", "sets")     
    divSet.dataset.theme = `${i.theme}`      
    divSet.dataset.price = `${i.price}` 
    divSet.dataset.number = `${i.number}`
    divSet.dataset.name = `${i.name}`
    divSet.dataset.releaseDate = `${i.releaseDate}`
    divSet.dataset.img = `${i.img}`
    let htmlSegment = `<img src="${i.img}" onclick="expandImage(this.src);" id="setImg"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                                              
                    <p id="${i.number}${i.releaseDate}" class="notHere">${i.releaseDate}</p>                              
                    <button id="${i.number}" class="divWishlistButton" onclick="addToWishlist(this.id);"><img id="wishButtonImg" src="SVG/heart-shapes-svgrepo-com.svg"/></button>`;                                      
    let htmlSegmentRed = `<img src="${i.img}" onclick="expandImage(this.src);" id="setImg"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                      
                    <p id="${i.number}${i.releaseDate}" class="notHere">${i.releaseDate}</p>                                   
                    <button id="${i.number}" class="divWishlistButton" onclick="addToWishlist(this.id);"><img id="wishButtonImg" src="SVG/heart-shapes-svgrepo-com-red.svg"/></button>`;               
    if (arrayWishList.includes(i.number)) {       
        divSet.innerHTML = htmlSegmentRed;    
        let cdd = `${i.releaseDate}`       
        let z =  divWrapperSets.appendChild(divSet);   
        const release = document.getElementById(`${i.number}${i.releaseDate}`);                
        release.innerHTML = dateTest(cdd, release);            
    } else {        
        divSet.innerHTML = htmlSegment;    
        let cdd = `${i.releaseDate}`       
        let z =  divWrapperSets.appendChild(divSet);   
        const release = document.getElementById(`${i.number}${i.releaseDate}`);               
        release.innerHTML = dateTest(cdd, release);            
    }    
}    

// ************************* triggering filter order  ***************************************

function filterThemeOrder(selection) {
    const divSets = document.getElementById("divSets")
    const themeClass = divSets.getElementsByClassName("sets");    
    for (const i of themeClass) {                    
        if (String(selection.options[selection.selectedIndex].text) === "Theme") {
            i.style.display = "";
        } else if (i.dataset.theme !== String(selection.options[selection.selectedIndex].text)) {          
            i.style.display = "none";
        } else {
            i.style.display = "";
        }
    }
}

function filterThemeOrder2(selection) {
    const divWishlistSets = document.getElementById("divWishlistSets")
    const themeClass = divWishlistSets.getElementsByClassName("sets");   
    for (const i of themeClass) {       
        if (String(selection.options[selection.selectedIndex].text) === "Theme") {
            i.style.display = "";
        } else if (i.dataset.theme !== String(selection.options[selection.selectedIndex].text)) {           
            i.style.display = "none";
        } else {
            i.style.display = "";
        }
    }
}

let arrayPriceFilter = []
let arrayPriceFilter2 = [
    {
        "id": "default",
        "price": 0
    }
]
function filterPriceOrder2(selection) {       
    const setList = document.getElementById("divWishlistSets")
    const setListSets = setList.getElementsByClassName("sets")    
    for (const i of setListSets) {       
    y = {
        "id": `${i.dataset.number}`,
        "price": parseFloat(`${i.dataset.price}`)  
        }
    arrayPriceFilter.push(y)    
    }
    for (const i of arrayPriceFilter) {        
    }      
    arrayPriceFilter.sort((a,b) => (a.price > b.price) ? 1 : -1)        
    if (String(selection.options[selection.selectedIndex].text) === "low - high") {
        function putBack(ii) {           
            const setList2 = document.getElementById("divWishlistSets")
            const setListSets2 = setList2.getElementsByClassName("sets")                 
            for (const x of setListSets2) {                       
                if (ii === x.dataset.number) {
                    divWishlistSets.appendChild(x)
                }
            }
        }
        for (const i of arrayPriceFilter) {           
            ii = i.id
            putBack(ii)                       
        }       
    } 
    if (String(selection.options[selection.selectedIndex].text) === "high - low") {
        const reverse = arrayPriceFilter.reverse()
        function putBack(ii) {            
            const setList2 = document.getElementById("divWishlistSets")
            const setListSets2 = setList2.getElementsByClassName("sets")                
            for (const x of setListSets2) {                       
                if (ii === x.dataset.number) {
                    divWishlistSets.appendChild(x)
                }
            }
        }
        for (const i of reverse) {            
            ii = i.id
            putBack(ii)                       
        }   
    }    
}

function filterPriceOrder(selection) {  
    let arrayPriceFilter = []
    let arrayPriceFilter2 = [
        {
            "id": "default",
            "price": 0
        }
    ]   
    const setList = document.getElementById("divSets")
    const setListSets = setList.getElementsByClassName("sets")  
    for (const i of setListSets) {       
        y = {
            "id": `${i.dataset.number}`,
            "price": parseFloat(`${i.dataset.price}`)  
            }
        arrayPriceFilter.push(y)   
    }
    for (const i of arrayPriceFilter) {       
    }        
    arrayPriceFilter.sort((a,b) => (a.price > b.price) ? 1 : -1)       
    if (String(selection.options[selection.selectedIndex].text) === "low - high") {
        function putBack(ii) {           
            const setList2 = document.getElementById("divSets")
            const setListSets2 = setList2.getElementsByClassName("sets")               
            for (const x of setListSets2) {                         
                if (ii === x.dataset.number) {
                    setList2.appendChild(x)
                }
            }
        }
        for (const i of arrayPriceFilter) {           
            ii = i.id
            putBack(ii)                       
        }        
    } 
    if (String(selection.options[selection.selectedIndex].text) === "high - low") {
        const reverse = arrayPriceFilter.reverse()
        function putBack(ii) {           
            const setList2 = document.getElementById("divSets")
            const setListSets2 = setList2.getElementsByClassName("sets")              
            for (const x of setListSets2) {                   
                if (ii === x.dataset.number) {
                    setList2.appendChild(x)
                }
            }
        }
        for (const i of reverse) {           
            ii = i.id
            putBack(ii)                       
        }   
    }    
}    

// ***************** wishlist tab top/bottom *********************

const buttonWishUpDown = document.getElementById("buttonWishUpDown")
const mainSets = document.getElementById("mainSets")
const divWishlistFooterOuter = document.getElementById("divWishlistFooterOuter")
const h1Wishlist2 = document.getElementById("h1Wishlist2")

function wishUpDown() {
    if (divWishlist.className === "divWishlist") {
        console.log("howdy")
        divWishlist.className = "wishlist"
        mainSets.className = "mainSets"
        divWishlistFooterOuter.className = "divWishlistFooterOuter2"
        h1Wishlist2.innerHTML = ""
        buttonWishUpDown.style.background = "rgb(35 117 219)"
        buttonWishUpDown.style.borderRadius = "90px"       
    } else {
        divWishlist.className = "divWishlist"
        mainSets.classList.remove("mainSets")
        divWishlistFooterOuter.className = "divWishlistFooterOuter"
        h1Wishlist2.innerHTML = "Search Sets" //change to selected variable bricklist
    }
}

const filterOptionChooseWishlist = document.getElementById("filterOptionChooseWishlist")
const filterChooseWishlist = document.getElementById("filterChooseWishlist")

fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18")
    .then(response => response.json())
    .then(result => {
        console.log(result)
        for (const i of result.baskets) {
            let newOption = document.createElement("option")
            newOption.innerHTML = i.name
            filterChooseWishlist.appendChild(newOption)                        
        }
    }) 

//shell creation for saved/wishlist bricklist selection
function setTest2(i, themeArray2) {      
    const divSet = document.createElement("div");
    divSet.setAttribute("class", "sets")   
    divSet.dataset.theme = `${i.theme}`      
    divSet.dataset.price = `${i.price}`    
    divSet.dataset.number = `${i.number}`
    divSet.dataset.name = `${i.name}`
    divSet.dataset.releaseDate = `${i.releaseDate}`
    divSet.dataset.img = `${i.img}`
    let htmlSegment = `
                    <img src="${i.img}" onclick="expandImage(this.src);" id="setImg"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                      
                    <p id="${i.number}${i.releaseDate}" class="notHere">${i.releaseDate}</p>      
                    <button id="${i.number}" class="divWishlistButton" onclick="addToWishlist2(this.id);"><img id="wishButtonImg" src="SVG/heart-shapes-svgrepo-com-red.svg"/></button>               
                    `;                   
    divSet.innerHTML = htmlSegment;    
    let cdd = `${i.releaseDate}`       
    z =  divWishlistSets.appendChild(divSet);   
    const release = document.getElementById(`${i.number}${i.releaseDate}`);  
    release.innerHTML = dateTest(cdd, release);      
    themeArray2.push(i.theme)
    return z
}

let divFilterDropdownW = document.getElementById("divFilterDropdownW")
let nameChosenBricklist = document.getElementById("nameChosenBricklist")
function filterWishlist(selection) {
    themeArray2 = []   
    nameChosenBricklist.innerHTML = 
    divWishlistFooterOuter.className = "divWishlistFooterOuter"
    const divWishlistSets = document.getElementById("divWishlistSets")
    divWishlistSets.innerHTML = "";    
    let z = selection.options[selection.selectedIndex].text
    nameChosenBricklist.innerHTML = z
    wishlistFilter.style.display = "none"
    h1Wishlist.style.display = "none"
    bricklistNameTitle.innerHTML = z
    divFilterDropdownW.style.removeProperty("display")
    let x = `https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/${z}`
    fetch(x)
        .then(response => response.json())
        .then(result => {           
            for (const i of result.sets) {
                arrayWishList.push(i.number)               
                setTest2(i, themeArray2)                
            }      
            filterListTheme2(themeArray2)    
        }) 
}

const themeClass = document.getElementsByClassName("sets");

for (const i of themeClass) {       
    if (String(selection.options[selection.selectedIndex].text) === "Theme") {
        i.style.display = "";
    } else if (i.dataset.theme !== String(selection.options[selection.selectedIndex].text)) {      
        i.style.display = "none";
    } else {
        i.style.display = "";
    }
}

// ***************** img expand/minimize *********************

const divImgExpand = document.getElementById("divImgExpand")

function minImage() {
    divImgExpand.style.display = "none";
}

function expandImage(clicked_image) {
    divImgExpand.style.removeProperty("display")
    divImgExpand.innerHTML = "";   
    v = clicked_image
    console.log(v)
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')      
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

const wishlistSets = document.getElementById("divWishlistSets")
const searchedSets = document.getElementById("divSets")

function addToWishlistDeletePopup(clicked_id) {
    deleteItem(clicked_id)
}

// ***************************** delete popup *****************************

function deleteItem() {
    const deletePopup = document.getElementById("deletePopupExpand")
    deletePopup.classList.replace("notHere", "deletePopupExpand")     
}

function addToWishlist2(clicked_id) {      
    const deletePopup = document.getElementById("deletePopupExpand")
    deletePopup.classList.replace("notHere", "deletePopupExpand")
    const x = clicked_id
    console.log(x)
    document.getElementById("yes").addEventListener("click", function(){    
        let thisButton = document.getElementById(x)
        let thisButtonImg = thisButton.children[0]
        let thisButtonImgSrc = thisButtonImg.src
        wishlistSetsChildren = wishlistSets.children       
        let toRemove = []
        let arrayWishList2 = []
        for (const i of wishlistSetsChildren) {          
            if (x === i.children[4].id) {
                let thisButton = i.children[4]
                let thisButtonParent = thisButton.parentElement               
                toRemove.push(thisButtonParent)       
            } else {              
                arrayWishList2.push(i.dataset.theme)
            }          
        }        
        for (const i of toRemove) {
            i.remove()
        }
        
        filterListTheme2(arrayWishList2)    
        deletePopup.classList.replace("deletePopupExpand", "notHere")
        saveUpdate()        
    });
    document.getElementById("no").addEventListener("click", function(){
        deletePopup.classList.replace("deletePopupExpand", "notHere")
    });        
}

// search page //addtowishlist 1 divsets
function addToWishlist(clicked_id) {        
    searchedSetsChildren = searchedSets.children
    wishlistSetsChildren = wishlistSets.children
    for (const i of searchedSetsChildren) {        
        if (clicked_id === i.children[4].id) {          
            let thisButton = i.children[4]
            let thisButtonImg = thisButton.children[0]
            let thisButtonImgSrc = thisButtonImg.src
            let thisButtonParent = thisButton.parentElement          
            if (thisButtonImgSrc.includes("red")) {          
                const deletePopup = document.getElementById("deletePopupExpand")
                deletePopup.classList.replace("notHere", "deletePopupExpand") 
                document.getElementById("yes").addEventListener("click", function(){     
                    deletePopup.classList.replace("deletePopupExpand", "notHere")
                    thisButtonImg.src = "SVG/heart-shapes-svgrepo-com.svg"               
                    addToWishlist3(clicked_id)             
                });
                document.getElementById("no").addEventListener("click", function(){
                    deletePopup.classList.replace("deletePopupExpand", "notHere")
                }); 
            } else {                     
                thisButtonImg.src = "SVG/heart-shapes-svgrepo-com-red.svg"
                addToWishlist4(clicked_id)               
            }
        }            
    }
}
 
// take away item
function addToWishlist3(clicked_id) {   
    themeArrayWishlist = []   
    const wishlistSets = document.getElementById("divWishlistSets")
    wishlistSetsChildren = wishlistSets.children
    const searchedSets = document.getElementById("divSets")       
    themeArraySets = []      
    for (const i of wishlistSetsChildren) {             
        if (clicked_id === i.children[4].id) {
            let thisButton = i.children[4]
            let thisButtonParent = thisButton.parentElement           
            thisButtonParent.remove()            
        } 
    }
    for (const z of wishlistSetsChildren)  {
        themeArrayWishlist.push(z.dataset.theme)
    }   
    filterListTheme2(themeArrayWishlist)
    saveUpdate()
}

function addToWishlist4(clicked_id) {
    let wishlistSetArray2 = []
    const wishlistSets = document.getElementById("divWishlistSets")
    const wishlistSetsChildren = wishlistSets.children
    const searchedSets = document.getElementById("divSets")
    const searchSetsChildren = searchedSets.children
    for (const i of searchSetsChildren) {        
        if (clicked_id === i.children[4].id) {
            let thisButton = i.children[4]
            let thisButtonParent = thisButton.parentElement
            let ooo = thisButtonParent.cloneNode(true)  
            // console.log(ooo)         
            // console.log(ooo.children[4])  
            ooo.children[4].setAttribute("onclick", "addToWishlist2(this.id)")
            // console.log(ooo.children[4]) 
            wishlistSets.appendChild(ooo)            
        }
    }
    for (const z of wishlistSetsChildren)  {
        wishlistSetArray2.push(z.dataset.theme)
    }   
    filterListTheme2(wishlistSetArray2)   
    saveUpdate()
}

// ************************************** save/update ***************************************
let inputWishlistSave = document.getElementById("inputWishlistSave")
function saveUpdate() {
    let bricklistSetArray = []
    let objectArray = []
    const bricklist = document.getElementById("divWishlistSets")
    const bricklistSets = bricklist.getElementsByClassName("sets")   
    let arrayLength = bricklistSets.length;
    for (let z = 0 ; z < arrayLength; z++) {
        let val = bricklistSets[z];
        let currentObject = {
            "number": parseInt(`${val.dataset.number}`),
            "theme": `${val.dataset.theme}`,
            "price": parseFloat(`${val.dataset.price}`),
            "name": `${val.dataset.name}`,
            "releaseDate": `${val.dataset.releaseDate}` ,         
            "img": `${val.dataset.img}`        
        }        
        objectArray.push(currentObject)
        bricklistSetArray.push(val)       
    }  
    let data = {"sets": objectArray}   
    let bricklistName = document.getElementById("nameChosenBricklist")    
    let url = `https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/${bricklistName.textContent}`  
    fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {               
            throw alert("Error with API. Please try again.");
        } else {
            savedPopup()           
        }         
    });
}

// ************************************** Wishlist Buttons ***************************************

let lookupWishlist = document.getElementById("buttonLookUpWishlist")
let saveWishlist = document.getElementById("buttonSaveToWishlist")
let inputWishlistSearch = document.getElementById("inputWishlistSearch")
let getTest = document.getElementById("getTest")
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

inputWishlistSave.addEventListener("keyup", function(event) { 
    if (event.key === "Enter") {   
      event.preventDefault();    
      document.getElementById("buttonLookUpWishlist2").click();
    }
  });


//creates new wishlist (maybe can be used to update wishlist like a save button)
// needs to be attached to submit new wishlist
function addWishlist() {
    let data = {"sets": []}
    let url = `https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/${inputWishlistSave.value}`    
    fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {               
            throw alert("Error with API. Please try again.");
        } else {
            savedPopup()            
        }         
    });
}

// ************************************** save new wishlist name ***************************************

let wishlistFilter = document.getElementById("wishlistFilter")
let h1Wishlist = document.getElementById("h1Wishlist")
let bricklistNameTitle = document.getElementById("bricklistNameTitle")
let savedWishlistName = ""
function saveNewWishlistName() {
    let promise = new Promise(function (resolve, reject) {
        z = false
        if (inputWishlistSave.value === "" ) {
            alert("Your response is blank. Please try again.")
            z = true            
            resolve(z)
        }
        resolve(z)
    })
    let promise2 = new Promise(function (resolve, reject) {    
        fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18")
            .then(response => response.json())
            .then(result => {                
                z = false
                for (const i of result.baskets) {                    
                    if (inputWishlistSave.value === i.name) {
                        z = true
                        alert("Name already used. Please enter another name.")                        
                        resolve(z)                 
                    } 
                }                
                resolve(z)
            }) 
    })
    async function getY() {
        let y = await promise
        let x = await promise2
        if (y === false && x === false) {            
            savedWishlistName = inputWishlistSave.value           
            wishUpDown()
            bricklistNameTitle.innerHTML = savedWishlistName
            nameChosenBricklist.innerHTML = savedWishlistName
            wishlistFilter.style.display = "none"
            h1Wishlist.style.display = "none"
            divFilterDropdownW.style.removeProperty("display")           
            addWishlist()  
        }      
    }
   getY()                        
}   
 
// saved popup
function savedPopup() {
    let x = document.getElementById("savedPopup")
    x.className = "appear"
    setTimeout(function(){x.className = x.className.replace("appear", ""); }, 3000);
}

// ***************************** countdown timer *****************************

function dateTest(cdd, release) {        
    var countDownDate = new Date(cdd).getTime();    
    var x = setInterval(function() {      
        var now = new Date().getTime();             
        var distance = countDownDate - now;        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));            
        if (distance < 0) {
            clearInterval(x);
            release.innerHTML = "Available!";
            release.classList.replace("notHere", "greenText")
        } else {
            release.innerHTML = days + " days remain!";
            release.classList.replace("notHere", "redText")            
        }
    }, 1000);      
}

// ***************************** test area *****************************