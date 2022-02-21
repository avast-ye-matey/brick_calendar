// ***************************** variables *****************************


let filterTheme = document.getElementById("filterTheme")
let filterPrice = document.getElementById("filterPrice")
let filterDefaultId = document.getElementById("filterDefaultId")


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
    let input = document.getElementById('inputSearch').value.toLowerCase();    
    let y = document.getElementById("demoSearch")
    y.innerHTML = ""
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
                }     
                console.log(Array.isArray(titleArray))
                console.log(themeArray)
                if (titleArray - themeArray === 0) {                    
                    alert("Couldn't find a set mathing your search. Please try again.")
                } else {
                    let titleSet = new Set(titleArray)           
                    let themeSet = new Set(themeArray)
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

const divWishlist = document.getElementById("divWishlist")
divWishlist.addEventListener("click", function() {
    // divWishlist.style.backgroundColor = "blue"
    if (divWishlist.style.bottom === "0px") {
        // divWishList.style.left = "0";
        divWishlist.style.removeProperty("bottom");
        divWishlist.style.top = "0px";
        // divWishlist.style.backgroundColor = "blue";
        divWishlist.style.height = "100vh";
        
        // divWishlist.style.removeProperty("position")
    } else {
        divWishlist.style.removeProperty("top");
        divWishlist.style.bottom = "0px";
        divWishlist.style.removeProperty("height");
        // divWishlist.style.position = "fixed";
        divWishlist.style.position = "fixed";
    }
    
})


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