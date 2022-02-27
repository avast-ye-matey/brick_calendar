// ***************************** variables *****************************


let filterTheme = document.getElementById("filterTheme")
let filterPrice = document.getElementById("filterPrice")
let filterDefaultId = document.getElementById("filterDefaultId")

// *******************  create new bricklist ***********************

let create = document.getElementById("create")

function createWishlist() {
    let saveNewWishlist = document.getElementById("saveNewWishlist")
    console.log("howdy")
    if (saveNewWishlist.style.display === "none") {
        console.log("howdy")
        saveNewWishlist.style.display = ""
    } 
}




// *******************  hit enter on input field ***********************


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
                    let titleSet = new Set(titleArray)           
                    let themeSet = new Set(themeArray)
                    // let numberSet = new Set(numberArray)
                    themeSet.forEach((value) => {                               
                        let theme = document.createElement("option")
                        theme.innerHTML = value
                        filterTheme.appendChild(theme)
                    })           
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
      

// ***************************** set creation shell  *****************************


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
    let htmlSegment = `<img src="${i.img}" onclick="expandImage(this.src);" id="setImg"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                    
                    <button id="${i.number}" class="divWishlistButton" onclick="addToWishlist(this.id);"><img id="wishButtonImg" src="SVG/heart-shapes-svgrepo-com.svg"/></button>`;                  
                    // <p id="${i.releaseDate}">${i.releaseDate}</p>
                    // <p id="${i.releaseDate}2"></p> 
    divSet.innerHTML = htmlSegment;    
    let iRd = `${i.releaseDate}`       
    z =  divWrapperSets.appendChild(divSet);   
    const release = document.getElementById(`${i.releaseDate}2`);
    console.log(release)
    // release.innerHTML = dateTest(iRd, release);    
    console.log(z)
    return z
}


// ************************* triggering filter order  ***************************************

function filterThemeOrder(selection) {
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
}

function filterPriceOrder(selection) {
    let arrayPrice = []
    const priceClass = document.getElementsByClassName("sets");

    // priceClass.dataset.price.sort(function(a,b){return a - b});
    // console.log(priceClass.dataset.price)
    // const result = priceClass.filter(price => price)
    // console.log(selection.options[selection.selectedIndex].text)
    for (const i of priceClass) {
        console.log(i.dataset.price)
        if (i >= arrayPrice[0]) {
            arrayPrice.unshift(i)
        } else {
            arrayPrice.push(i)
        } 
        // arrayPrice.push
        // (i < arrayPrice[0])
    }
    console.log(arrayPrice)
    const wipeSets = document.getElementById("divSets")
    wipeSets.innerHTML = ""
    for (const i of arrayPrice) {
        console.log(i)
        wipeSets.appendChild(i)
        // setTest(i)
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

function setTest2(i) { 
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
    let htmlSegment = `<img src="${i.img}" onclick="expandImage(this.src);" id="setImg"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                    
                    <button id="${i.number}" class="divWishlistButton" onclick="addToWishlist(this.id);"><img id="wishButtonImg" src="SVG/heart-shapes-svgrepo-com.svg"/></button>`;                  
                    // <p id="${i.releaseDate}">${i.releaseDate}</p>
                    // <p id="${i.releaseDate}2"></p> 
    divSet.innerHTML = htmlSegment;    
    // let iRd = `${i.releaseDate}`       
    z =  divWishlistSets.appendChild(divSet);   
    // const release = document.getElementById(`${i.releaseDate}2`);
    // console.log(release)
    // release.innerHTML = dateTest(iRd, release);    
    console.log(z)
    return z
}

function filterWishlist(selection) {
    const divWishlistSets = document.getElementById("divWishlistSets")
    divWishlistSets.innerHTML = "";
    console.log(selection.options[selection.selectedIndex].text)
    let z = selection.options[selection.selectedIndex].text
    let x = `https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/${z}`
    fetch(x)
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            // console.log(result.baskets)
            // console.log(result.sets)
            for (const i of result.sets) {
                console.log(i)
                setTest2(i)
            }
            // if (result.baskets)
            // for (const i of result.baskets) {
            //     if (i.name === z) {
            //         console.log("found")
            //         console.log(i)
            //     }
            //     let newOption = document.createElement("option")
            //     newOption.innerHTML = i.name
            //     filterChooseWishlist.appendChild(newOption)
                            
            // }
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

const themeAdd = document.getElementById("theme")
const wishlistAdd = document.getElementById("divWishlistSets")

let arrayWishList = []
function addToWishlist(clicked_id) {   
    arrayWishList.push(clicked_id)  
    z = clicked_id
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')         
        .then(function(response) {
            if (!response.ok) {               
                throw alert("Error with API. Please refresh page and try again.");
            }
            return response.json()
            })                          
        .then(data => {
            for (const i of data.sets) {              
                if (i.number == z) {
                    const divSetChildName = document.createElement("div");
                    const divWrapperChildPrice = document.createElement("div");
                    const divSetChildImage = document.createElement("img")  
                    const divSetNumber = document.createElement("div")                       

                    const divWishlistButton = document.getElementById(z)  
                    divWishlistButton.innerHTML = '<img src="SVG/heart-shapes-svgrepo-com-red.svg"/>';
                    divWishlistButton.style.border = "none";
                    divWishlistButton.style.background = "none";                 

                    divSetChildImage.src = i.img
                    divSetChildImage.style.gridColumn = "1 / 2";
                    divSetChildImage.style.objectFit = "cover";
                    divSetChildImage.style.width = "100%";
                    divSetChildImage.style.maxHeight = "100%";
                    divSetChildImage.style.marginBottom = "20px";
                    divSetChildImage.setAttribute("onclick", "expandImage(this.src);");
                    wishlistAdd.appendChild(divSetChildImage);
                    console.log("1")

                    divSetNumber.appendChild(document.createTextNode(i.number));
                    divSetNumber.style.gridColumn = "2 / 3";                    
                    wishlistAdd.appendChild(divSetNumber);

                    divSetChildName.appendChild(document.createTextNode(i.name));
                    divSetChildName.style.gridColumn = "3 / 4";
                    divSetChildName.style.paddingLeft = "10%";
                    wishlistAdd.appendChild(divSetChildName);
                    
                    divWrapperChildPrice.appendChild(document.createTextNode("$" + i.price));
                    divWrapperChildPrice.style.gridColumn = "4 / 5";
                    wishlistAdd.appendChild(divWrapperChildPrice);
                } 
            }
        })

    console.log(arrayWishList) 
}



// ***************************** countdown timer *****************************



// ***************************** test area *****************************

// const dateTest = document.getElementsById("dateTest");
function dateTest(iRd, release) {
    // Set the date we're counting down to
    var countDownDate = new Date(iRd).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        
        
        release.innerHTML = days + "/days " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        } 
    }, 1000);
    // console.log(p)
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


// needs to be attached to submit new wishlist
function addWishlist() {
    let data = {element: "barium"};
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

let h1Wishlist = document.getElementById("h1Wishlist")
let bricklistNameTitle = document.getElementById("bricklistNameTitle")
let savedWishlistName = ""
function saveNewWishlistName() {
    console.log(inputWishlistSave.value)
    savedWishlistName = inputWishlistSave.value
    console.log(savedWishlistName)
    wishUpDown()
    bricklistNameTitle.innerHTML = savedWishlistName
    h1Wishlist.innerHTML = savedWishlistName
    wishlistFilter.style.display = "none"
    // divWishlistFooterOuter.className = "divWishlistFooterOuter"

}
 









// ************************************** test post ***************************************

let postTest = document.getElementById("postTest")

function buttonGetTest() {
    // let data = {element: "barium"};    
    fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18")
        .then(response => response.json())
        .then(result => {
            console.log(result)
            for (const i of result.baskets) {
                console.log(i.name)
            }
        }) 
}


function buttonPostTest() {

    let data = {element: "barium"};

    fetch("https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/YOUR_BASKET_NAME", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });

}


       
        // .then(basketsGet => console.log(basketsGet.json()))
        // method: "GET",
        // headers: {'Content-Type': 'application/json'}, 
        // body: JSON.stringify(data)
    // }).then(res => {
        // console.log(res);
    // });
    
    






// curl --location --request POST 'https://getpantry.cloud/apiv1/pantry/YOUR_PANTRY_ID/basket/YOUR_BASKET_NAME' \
// --header 'Content-Type: application/json' \
// --data-raw '{
// 	"derp": "flerp123",
// 	"testPayload": true,
// 	"keysLength": 3
// }'