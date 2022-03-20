// ***************************** variables *****************************


// let filterTheme = document.getElementById("filterTheme")
// let filterPrice = document.getElementById("filterPrice")
// let filterDefaultId = document.getElementById("filterDefaultId")




function filterListPrice() {

}

function filterSetTheme() {

}

function filterSetPrice() {

}

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
    // let numberArray = []   
    let input = document.getElementById('inputSearch').value.toLowerCase();    
    // let y = document.getElementById("demoSearch")
    // y.innerHTML = ""
    let r = document.getElementById("filterTheme").children.length
    let filterTheme = document.getElementById("filterTheme")
    // let filterTheme2 = document.getElementById("filterTheme")
    console.log(input)
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
                    // console.log(i.number)
                    // console.log(input)
                    // console.log(i.number === input)
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
                    // let themeSet = new Set(themeArray)
                    // // let numberSet = new Set(numberArray)
                    // themeSet.forEach((value) => {                               
                    //     let theme = document.createElement("option")
                    //     theme.innerHTML = value
                    //     filterTheme.appendChild(theme)
                    // })           


                    // titleSet.forEach((value) => {                              
                        // let text = document.createElement("p")
                        // text.innerHTML = value               
                        // y.appendChild(text)
                    // console.log(titleSet)
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
      

    // let themeArray = []
    // let titleSet = new Set(titleArray)           
    let themeSet = new Set(themeArray)
    // let numberSet = new Set(numberArray)
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

    // const filterTheme2 = document.getElementById("filterTheme2")
    // let themeArray = []
    // let titleSet = new Set(titleArray)           
    let themeSet = new Set(themeArray2)
    // let numberSet = new Set(numberArray)
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
    // document.getElementById("divSets").innerHTML = "";
    console.log("howdy")
    const divWrapperSets = document.getElementById("divSets");
    divWrapperSets.style.visibility = "";
    const divSet = document.createElement("div");
    divSet.setAttribute("class", "sets") 
    // divSet.setAttribute("dataset.theme", `"${i.theme}"`)
    divSet.dataset.theme = `${i.theme}`      
    divSet.dataset.price = `${i.price}` 
    divSet.dataset.number = `${i.number}`
    let htmlSegment = `<img src="${i.img}" onclick="expandImage(this.src);" id="setImg"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                                              
                    <p id="${i.number}${i.releaseDate}" class="redText">${i.releaseDate}</p>                              
                    <button id="${i.number}" class="divWishlistButton" onclick="addToWishlist(this.id);"><img id="wishButtonImg" src="SVG/heart-shapes-svgrepo-com.svg"/></button>`;                  
                    // <p id="${i.releaseDate}2"></p> 
    let htmlSegmentRed = `<img src="${i.img}" onclick="expandImage(this.src);" id="setImg"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                      
                    <p id="${i.number}${i.releaseDate}" class="redText">${i.releaseDate}</p>                                   
                    <button id="${i.number}" class="divWishlistButton" onclick="addToWishlist(this.id);"><img id="wishButtonImg" src="SVG/heart-shapes-svgrepo-com-red.svg"/></button>`;                  
                    // <p id="${i.releaseDate}2"></p> 
    console.log(arrayWishList)
    // arrayPrice.push(`${i.price}`)
    if (arrayWishList.includes(i.number)) {
        console.log("gotcha")
        divSet.innerHTML = htmlSegmentRed;    
        let iRd = `${i.releaseDate}`       
        let z =  divWrapperSets.appendChild(divSet);   
        const release = document.getElementById(`${i.number}${i.releaseDate}`);
        console.log(release)
        release.innerHTML = dateTest(iRd, release);    
        console.log(z)
        // return z
    } else {
        console.log("dont gotcha")
        divSet.innerHTML = htmlSegment;    
        let iRd = `${i.releaseDate}`       
        let z =  divWrapperSets.appendChild(divSet);   
        const release = document.getElementById(`${i.releaseDate}`);
        console.log(release)
        release.innerHTML = dateTest(iRd, release);    
        console.log(z)
        // return z
    }    
}    

// ************************* triggering filter order  ***************************************

function filterThemeOrder(selection) {
    const divSets = document.getElementById("divSets")
    const themeClass = divSets.getElementsByClassName("sets");
    // console.log(selection.options[selection.selectedIndex].text)
    for (const i of themeClass) {
        // console.log(i.dataset.theme)
        console.log((String(selection.options[selection.selectedIndex].text) === "Theme"))
        // console.log(String(selection.options[selection.selectedIndex].text))
        if (String(selection.options[selection.selectedIndex].text) === "Theme") {
            i.style.display = "";
        } else if (i.dataset.theme !== String(selection.options[selection.selectedIndex].text)) {
            // console.log(i.dataset.theme) 
            // console.log(i)
            i.style.display = "none";
        } else {
            i.style.display = "";
        }
    }
}

function filterThemeOrder2(selection) {
    const divWishlistSets = document.getElementById("divWishlistSets")
    const themeClass = divWishlistSets.getElementsByClassName("sets");
    // console.log(selection.options[selection.selectedIndex].text)
    for (const i of themeClass) {
        // console.log(i.dataset.theme)
        console.log((String(selection.options[selection.selectedIndex].text) === "Theme"))
        // console.log(String(selection.options[selection.selectedIndex].text))
        if (String(selection.options[selection.selectedIndex].text) === "Theme") {
            i.style.display = "";
        } else if (i.dataset.theme !== String(selection.options[selection.selectedIndex].text)) {
            // console.log(i.dataset.theme) 
            // console.log(i)
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
    
    // console.log(arrayPriceFilter.length)
    // console.log(typeof(arrayPriceFilter2[0].price))
    const setList = document.getElementById("divWishlistSets")
    const setListSets = setList.getElementsByClassName("sets")
    // console.log(setListSets)
    for (const i of setListSets) {
        // console.log(i)
    y = {
        "id": `${i.dataset.number}`,
        "price": parseFloat(`${i.dataset.price}`)  
        }
    arrayPriceFilter.push(y)
    // console.log(arrayPriceFilter.length)
    }
    for (const i of arrayPriceFilter) {
        // console.log(i)
    }
    // console.log(arrayPriceFilter2)
    
    arrayPriceFilter.sort((a,b) => (a.price > b.price) ? 1 : -1)
    console.log(arrayPriceFilter)   
    
    if (String(selection.options[selection.selectedIndex].text) === "low - high") {

        function putBack(ii) {
            // console.log("yoooooo")
            const setList2 = document.getElementById("divWishlistSets")
            const setListSets2 = setList2.getElementsByClassName("sets")
            // console.log(setListSets2)
            // divWishlistSets.innerHTML = "";        
            for (const x of setListSets2) {
                // console.log("ggggggg")
                // console.log(typeof(x))
                // console.log(x)
                // console.log(x.dataset.number)
                // console.log(typeof(x.dataset.number))
                // console.log(x)            
                if (ii === x.dataset.number) {
                    divWishlistSets.appendChild(x)
                }
            }
        }
        for (const i of arrayPriceFilter) {
            // console.log(i)
            ii = i.id
            putBack(ii)                       
        }   
        // console.log(arrayPriceFilter)
        // console.log(arrayPriceFilter2)   
        // console.log(arrayPriceFilter2)

    } 

    if (String(selection.options[selection.selectedIndex].text) === "high - low") {
        const reverse = arrayPriceFilter.reverse()
        function putBack(ii) {
            // console.log("yoooooo")
            const setList2 = document.getElementById("divWishlistSets")
            const setListSets2 = setList2.getElementsByClassName("sets")
            // console.log(setListSets2)
            // divWishlistSets.innerHTML = "";        
            for (const x of setListSets2) {
                // console.log("ggggggg")
                // console.log(typeof(x))
                // console.log(x)
                // console.log(x.dataset.number)
                // console.log(typeof(x.dataset.number))
                // console.log(x)            
                if (ii === x.dataset.number) {
                    divWishlistSets.appendChild(x)
                }
            }
        }
        for (const i of reverse) {
            // console.log(i)
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
    
    // console.log(arrayPriceFilter.length)
    // console.log(typeof(arrayPriceFilter2[0].price))
    const setList = document.getElementById("divSets")
    const setListSets = setList.getElementsByClassName("sets")
    // console.log(setListSets)
    for (const i of setListSets) {
        // console.log(i)
    y = {
        "id": `${i.dataset.number}`,
        "price": parseFloat(`${i.dataset.price}`)  
        }
    arrayPriceFilter.push(y)
    // console.log(arrayPriceFilter.length)
    }
    for (const i of arrayPriceFilter) {
        // console.log(i)
    }
    // console.log(arrayPriceFilter2)
    
    arrayPriceFilter.sort((a,b) => (a.price > b.price) ? 1 : -1)
    console.log(arrayPriceFilter)   
    
    if (String(selection.options[selection.selectedIndex].text) === "low - high") {

        function putBack(ii) {
            // console.log("yoooooo")
            const setList2 = document.getElementById("divSets")
            const setListSets2 = setList2.getElementsByClassName("sets")
            // console.log(setListSets2)
            // divWishlistSets.innerHTML = "";        
            for (const x of setListSets2) {
                // console.log("ggggggg")
                // console.log(typeof(x))
                // console.log(x)
                // console.log(x.dataset.number)
                // console.log(typeof(x.dataset.number))
                // console.log(x)            
                if (ii === x.dataset.number) {
                    setList2.appendChild(x)
                }
            }
        }
        for (const i of arrayPriceFilter) {
            // console.log(i)
            ii = i.id
            putBack(ii)                       
        }   
        // console.log(arrayPriceFilter)
        // console.log(arrayPriceFilter2)   
        // console.log(arrayPriceFilter2)

    } 

    if (String(selection.options[selection.selectedIndex].text) === "high - low") {
        const reverse = arrayPriceFilter.reverse()
        function putBack(ii) {
            // console.log("yoooooo")
            const setList2 = document.getElementById("divSets")
            const setListSets2 = setList2.getElementsByClassName("sets")
            // console.log(setListSets2)
            // divWishlistSets.innerHTML = "";        
            for (const x of setListSets2) {
                // console.log("ggggggg")
                // console.log(typeof(x))
                // console.log(x)
                // console.log(x.dataset.number)
                // console.log(typeof(x.dataset.number))
                // console.log(x)            
                if (ii === x.dataset.number) {
                    setList2.appendChild(x)
                }
            }
        }
        for (const i of reverse) {
            // console.log(i)
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
    // themeArray = []
    // const divWishlistSets = document.getElementById("divWishlistSets")
    // divWishlistSets.innerHTML = "";
    console.log("howdy2")
    // const divWrapperSets = document.getElementById("divSets");
    // divWishlistSets.style.visibility = "";
    const divSet = document.createElement("div");
    divSet.setAttribute("class", "sets") 
    // divSet.setAttribute("dataset.theme", `"${i.theme}"`)
    divSet.dataset.theme = `${i.theme}`      
    divSet.dataset.price = `${i.price}`    
    divSet.dataset.number = `${i.number}`
    let htmlSegment = `
                    <img src="${i.img}" onclick="expandImage(this.src);" id="setImg"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                      
                    <p id="${i.number}${i.releaseDate}" class="redText">${i.releaseDate}</p>      
                    <button id="${i.number}" class="divWishlistButton" onclick="addToWishlist2(this.id);"><img id="wishButtonImg" src="SVG/heart-shapes-svgrepo-com-red.svg"/></button>               
                    `;
                    // <p id="${i.releaseDate}">${i.releaseDate}</p>
                    // <p id="${i.releaseDate}2"></p> 
    divSet.innerHTML = htmlSegment;    
    let iRd = `${i.releaseDate}`       
    z =  divWishlistSets.appendChild(divSet);   
    const release = document.getElementById(`${i.number}${i.releaseDate}`);
    console.log(release)
    release.innerHTML = dateTest(iRd, release);    
    // console.log(z)
    themeArray2.push(i.theme)
    return z
}

let divFilterDropdownW = document.getElementById("divFilterDropdownW")
let nameChosenBricklist = document.getElementById("nameChosenBricklist")
function filterWishlist(selection) {
    themeArray2 = []
    savedPopup()
    nameChosenBricklist.innerHTML = 
    divWishlistFooterOuter.className = "divWishlistFooterOuter"
    const divWishlistSets = document.getElementById("divWishlistSets")
    divWishlistSets.innerHTML = "";
    console.log(selection.options[selection.selectedIndex].text)
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
            // console.log(result)
            // console.log(result.baskets)
            // console.log(result.sets)
            for (const i of result.sets) {
                arrayWishList.push(i.number)
                // console.log(i)   
                setTest2(i, themeArray2)                
            }      
            filterListTheme2(themeArray2)    
        }) 
}



const themeClass = document.getElementsByClassName("sets");
// console.log(selection.options[selection.selectedIndex].text)
for (const i of themeClass) {
    // console.log(i.dataset.theme)
    console.log((String(selection.options[selection.selectedIndex].text) === "Theme"))
    // console.log(String(selection.options[selection.selectedIndex].text))
    if (String(selection.options[selection.selectedIndex].text) === "Theme") {
        i.style.display = "";
    } else if (i.dataset.theme !== String(selection.options[selection.selectedIndex].text)) {
        // console.log(i.dataset.theme) 
        // console.log(i)
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
// wishlist page divwish
// const themeAdd = document.getElementById("theme")
// const wishlistAdd = document.getElementById("divWishlistSets")
//added when click heart from set search
// let arrayWishList2 = []
function addToWishlist2(clicked_id) {  
    // console.log("gogogogogo")
    let thisButton = document.getElementById(clicked_id)
    let thisButtonImg = thisButton.children[0]
    let thisButtonImgSrc = thisButtonImg.src
    wishlistSetsChildren = wishlistSets.children
    // console.log(thisButtonImg.src)
    // console.log(typeof(thisButtonImg.src))
    // console.log(thisButtonImgSrc.includes("red"))
    let toRemove = []
    let arrayWishList2 = []
    for (const i of wishlistSetsChildren) {
        // console.log(i)
        // console.log(wishlistSetsChildren)
        // console.log(i.children[3].id)
        // console.log(clicked_id)
        if (clicked_id === i.children[3].id) {
            let thisButton = i.children[3]
            let thisButtonParent = thisButton.parentElement
            // console.log(thisButtonParent)
            // console.log(thisButtonParent)
            // thisButtonParent.remove()     
            toRemove.push(thisButtonParent)       
        } else {
            // console.log()
            arrayWishList2.push(i.dataset.theme)
        }
        // console.log(i)
    }
    console.log(toRemove)
    for (const i of toRemove) {
        i.remove()
    }
    console.log(arrayWishList2)
    filterListTheme2(arrayWishList2)    
}

// search page //addtowishlist 1 divsets
function addToWishlist(clicked_id) { 
    // let thisButton = document.getElementById(clicked_id)
    // let thisButtonImg = thisButton.children[0]
    // let thisButtonImgSrc = thisButtonImg.src
    searchedSetsChildren = searchedSets.children
    wishlistSetsChildren = wishlistSets.children
    for (const i of searchedSetsChildren) {
        console.log(i.children[3].id)
        if (clicked_id === i.children[3].id) {
            console.log("ololol")
            let thisButton = i.children[3]
            let thisButtonImg = thisButton.children[0]
            let thisButtonImgSrc = thisButtonImg.src
            let thisButtonParent = thisButton.parentElement
            // console.log(thisButtonParent)
            // thisButtonParent.remove()
            console.log(thisButton)
            console.log(thisButtonImgSrc)
            if (thisButtonImgSrc.includes("red")) {
                console.log(thisButtonImg)
                thisButtonImg.src = "SVG/heart-shapes-svgrepo-com.svg"
                console.log(thisButtonImg.src)
                addToWishlist3(clicked_id)
                // addToWishlist3(clicked_id)
                // console.log(thisButtonImgSrc)
                // console.log(thisButtonImg)
                // let thisButtonParent = thisButton.parentElement
                // thisButtonParent.remove()
            } else {              
                thisButtonImg.src = "SVG/heart-shapes-svgrepo-com-red.svg"
                addToWishlist4(clicked_id)
                // setTest2(i)
            }
        }
            
    }
}
 
// take away item
function addToWishlist3(clicked_id) {
    // let thisButton = document.getElementById(clicked_id)
    // let thisButtonImg = thisButton.children[0]
    // let thisButtonImgSrc = thisButtonImg.src
    themeArrayWishlist = []

    console.log(clicked_id)
    const wishlistSets = document.getElementById("divWishlistSets")
    wishlistSetsChildren = wishlistSets.children

    const searchedSets = document.getElementById("divSets")

    
    
    themeArraySets = []
    
    console.log(wishlistSetsChildren)
    for (const i of wishlistSetsChildren) {        
        console.log(i.children[3].id)
        if (clicked_id === i.children[3].id) {
            let thisButton = i.children[3]
            let thisButtonParent = thisButton.parentElement
            // console.log(thisButtonParent)
            thisButtonParent.remove()            
        } 
    }
    for (const z of wishlistSetsChildren)  {
        themeArrayWishlist.push(z.dataset.theme)
    }
    console.log(themeArrayWishlist)

    filterListTheme2(themeArrayWishlist)
}

function addToWishlist4(clicked_id) {
    let wishlistSetArray2 = []
    const wishlistSets = document.getElementById("divWishlistSets")
    const wishlistSetsChildren = wishlistSets.children
    const searchedSets = document.getElementById("divSets")
    const searchSetsChildren = searchedSets.children
    for (const i of searchSetsChildren) {
        console.log(i.children[3].id)
        if (clicked_id === i.children[3].id) {
            let thisButton = i.children[3]
            let thisButtonParent = thisButton.parentElement
            let ooo = thisButtonParent.cloneNode(true)
            // console.log(thisButtonParent)
            wishlistSets.appendChild(ooo)            
        }
    }
    for (const z of wishlistSetsChildren)  {
        wishlistSetArray2.push(z.dataset.theme)
    }
    console.log(wishlistSetArray2)
    filterListTheme2(wishlistSetArray2)
}

// ************************************** Wishlist Buttons ***************************************

let lookupWishlist = document.getElementById("buttonLookUpWishlist")
let saveWishlist = document.getElementById("buttonSaveToWishlist")

let inputWishlistSearch = document.getElementById("inputWishlistSearch")
let inputWishlistSave = document.getElementById("inputWishlistSave")

let getTest = document.getElementById("getTest")

function searchWishlist() {
    // let data = {element: "barium"};    
    fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18")
        .then(response => response.json())
        .then(result => {
            console.log(result)
            for (const i of result.baskets) {
                // console.log(i.name)
                // console.log(inputWishlistSearch.value)
                if (inputWishlistSearch.value === i.name ) {
                    console.log(i.name)
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
    // console.log(String(url))
    fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {               
            throw alert("Error with API. Please try again.");
        } else {
            alert("Wishlist Saved");
        }         
    });
}

// ************************************** save new wishlist name ***************************************

let wishlistFilter = document.getElementById("wishlistFilter")
// let inputWishlistSave = document.getElementById("inputWishlistSave")
let h1Wishlist = document.getElementById("h1Wishlist")
let bricklistNameTitle = document.getElementById("bricklistNameTitle")
let savedWishlistName = ""
function saveNewWishlistName() {
    let promise = new Promise(function (resolve, reject) {
        z = false
        if (inputWishlistSave.value === "" ) {
            alert("Your response is blank. Please try again.")
            z = true
            console.log(z + 1)
            resolve(z)
        }
        resolve(z)
    })
    let promise2 = new Promise(function (resolve, reject) {    
        fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18")
            .then(response => response.json())
            .then(result => {
                console.log(result)
                z = false
                for (const i of result.baskets) {
                    console.log(i.name)
                    if (inputWishlistSave.value === i.name) {
                        z = true
                        alert("Name already used. Please enter another name.")
                        console.log(z + 2)
                        resolve(z)                 
                    } 
                }
                console.log(z)
                resolve(z)
            }) 
    })
    async function getY() {
        let y = await promise
        let x = await promise2
        if (y === false && x === false) {
            console.log(inputWishlistSave.value)
            savedWishlistName = inputWishlistSave.value
            console.log(savedWishlistName)
            wishUpDown()
            bricklistNameTitle.innerHTML = savedWishlistName
            nameChosenBricklist.innerHTML = savedWishlistName
            wishlistFilter.style.display = "none"
            h1Wishlist.style.display = "none"
            divFilterDropdownW.style.removeProperty("display")
            // divWishlistFooterOuter.className = "divWishlistFooterOuter"
            console.log("truetrue")
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

// ***************************** test area *****************************

// ***************************** countdown timer *****************************

// const dateTimer = document.getElementsById("dateTimer");
function dateTest(iRd, release) {
    console.log(release)
    console.log(iRd)
    // Set the date we're counting down to
    var countDownDate = new Date(iRd).getTime();
    console.log(countDownDate)

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        // console.log(now)

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        
        
        // release.innerHTML = days + "/days " + hours + "h " + minutes + "m " + seconds + "s ";
        release.innerHTML = days + " days remain!";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            release.innerHTML = "Available!";
            release.classList.toggle("greenText")
        } 
    }, 1000);
    // console.log(p)
}