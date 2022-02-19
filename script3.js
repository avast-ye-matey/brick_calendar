// ***************************** search button alert *****************************

function buttonSearchS() {
    alert("Sorry, the search function does not currently work. Thank you for your understanding.");
}


// ***************************** searchbar*****************************


function search_animal9() {
    console.log("hi")
    let input = document.getElementById('inputSearch').value.toLowerCase();
    console.log(input)
    // input = input.toLowerCase();
    // return input
    let y = document.getElementById("demoSearch")
    // let x = document.getElementsByClassName('animals');
    let x = fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
        .then(function(response) {
            if (!response.ok) {
                // throw Error(response.statusText);
                throw alert("Error with API. Please refresh page and try again.");
            }
            return response.json()
        })                         
        .then(data => {
            for (const i of data.sets) {                    
                if (i.name.toLowerCase().includes(input))
                console.log(i.name)
                // return i                                                
            }
        })

    
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

// ***************************** searchbar test 2 *****************************

let filterTheme = document.getElementById("filterTheme")
let filterPrice = document.getElementById("filterPrice")

let filterDefaultId = document.getElementById("filterDefaultId")



// ***************************** searchbar test 2 *****************************

// let titleSet = new Set()

// let titleArray = []
// let themeArray = []

function search_animal() {
    let titleArray = []
    let themeArray = []
    // console.log("hi")
    let input = document.getElementById('inputSearch').value.toLowerCase();
    // console.log(input.value)
    console.log(input)
    console.log(input.length)
    // input = input.toLowerCase();
    // return input
    let y = document.getElementById("demoSearch")
    y.innerHTML = ""

    let r = document.getElementById("filterTheme").children.length
    if (r > 1) {
        filterTheme.innerHTML = "";
        let option = document.createElement("option")
        option.innerHTML = "Please choose a theme"
        filterTheme.appendChild(option)

    }
    
    console.log(r)
    // let x = document.getElementsByClassName('animals');

    // let inputLength = input.length  
    // console.log(inputLength)       

    // let titleSet = new Set()

    let x = fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
        .then(function(response) {
            if (!response.ok) {
                // throw Error(response.statusText);
                throw alert("Error with API. Please refresh page and try again.");
            }
            return response.json()
        })                         
        .then(data => {
            for (const i of data.sets) {  
                let inputLength = input.length   
                // let inputLength = input.length  
                // console.log(inputLength)               
                if (i.name.toLowerCase().includes(input)) {
                    console.log(i.name)
                    // let t = i.name
                    // y.innerHTML = i.name
                    // let t = document.createElement("p")
                    // let t = document.createTextNode(i.name)
                    // t.innerHTML = i.name
                    // y.appendChild(t)
                    titleArray.push(i.name)
                    // console.log(titleArray)

                    // return i     
                    themeArray.push(i.theme)

                    // let theme = document.createElement("option")
                    // theme.innerHTML = i.theme
                    // filterTheme.appendChild(theme)
                } else {
                    
                    
                    
                    while (inputLength > 3) {
                        // let titleSet = new Set()
                        // let inputLength = input.length  
                        --inputLength
                        if (!i.name.toLowerCase().includes(input.slice(0, inputLength))) {
                            
                            // console.log(i.name)
                            console.log(input.slice(0, inputLength))
                        } else {
                            console.log(i.name + "howdy")
                            
                            // titleSet.add(i.name)
                            titleArray.push(i.name)
                            themeArray.push(i.theme)

                            
                            // y.innerHTML = i.name
                            // console.log(titleSet)
                        }     
                        // let t = document.createElement("p")
                        // titleSet.forEach(t.innerhtml)
                        // t.innerHTML = titleSet
                        // y.appendChild(t)
                        // console.log(titleSet)
                        // console.log(t.innerhtml)
                    }
                }
                    // // console.log(inputLength)
                    // console.log(input.slice(0, inputLength))
                    // console.log("done")
                    // // console.log(titleSet)
                    // console.log("!!!" + titleArray)
                    // titleSet.forEach((value) => {
                    //     // y.innerText(value)
                    //     console.log(value)
                    //     text = document.createTextNode(value)
                    //     y.appendChild(text)
                    // })
                   


                    // while (!i.name.toLowerCase().includes(input)) {
                    //     console.log(inputLength)
                    //     if (i.name.toLowerCase().includes(input)) {
                    //         break;
                    //     }
                    //     --inputLength
                    //     console.log(inputLength)

                    // }
                
                                                         
            }
            console.log("***" + titleArray)
            let titleSet = new Set(titleArray)
            console.log("&&&" + titleSet)
            console.log(titleSet)
            // let t = document.createElement("p")
            // let t = document.createTextNode(i.name)
            // t.innerHTML = i.name
            // y.appendChild(t)
            // titleArray.push(i.name)
            // console.log(titleArray)
            let themeSet = new Set(themeArray)
            themeSet.forEach((value) => {
                // y.innerText(value)
                console.log(value)
                let theme = document.createElement("option")
                theme.innerHTML = value
                filterTheme.appendChild(theme)
            })

            

            titleSet.forEach((value) => {
                // y.innerText(value)
                console.log(value)
                let text = document.createElement("p")
                text.innerHTML = value
                // text = document.createTextNode(value)
                y.appendChild(text)
            })

        })
    // console.log(titleSet)
    // callback();
    
      
    // for (i = 0; i < x.length; i++) { 
    //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //         x[i].style.display="none";
    //     }
    //     else {
    //         x[i].style.display="list-item";                 
    //     }
    // }
}

async function search_animal2() {
    // callback(titleSet)
    await search_animal2();
    console.log(titleSet);
}



// ***************************** variables *****************************



// ***************************** reveal filter form  *****************************

// const revealForm = document.getElementById("buttonFilterForm")
const reveal = document.getElementById("buttonFilter");
reveal.addEventListener("click", function() {
    if (revealForm.style.display === "grid") {
        revealForm.style.display = "none";
    } else {
        revealForm.style.display = "grid";
        testFilter(); //!!
    }  
});

// ***************************** filter test  *****************************
const filterTest = document.getElementById("buttonFilterForm");
let htmlFormMain = []
function testFilter() {
    // const filterTest = document.getElementById("buttonFilterForm");
    let y = []
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
            .then(function(response) {
                if (!response.ok) {
                    // throw Error(response.statusText);
                    throw alert("Error with API. Please refresh page and try again.");
                }
                return response.json()
                })                         
            .then(data => {
                for (const i of data.sets) {                    
                    y.push(i.theme)                                                       
                };
                const iterable = new Set(y)
                console.log(y)
                console.log(iterable)
                var fragment = new DocumentFragment();
                iterable.forEach((tag) => {
                    var input = document.createElement("input")
                    input.type = "checkbox";
                    // input.id = tag;
                    input.setAttribute("id", tag)
                    input.classList.add('btn')
                    fragment.appendChild(input);
                    var label = document.createElement("label")
                    label.for = tag;
                    label.textContent = tag;
                    fragment.appendChild(label);
                    
                })
                var button = document.createElement("input")
                button.type = "button";
                button.setAttribute("onclick", "submitFilter();")
                button.value = "Submit";
                fragment.appendChild(button);
                filterTest.appendChild(fragment)
            });    
};

                
                
                
                


// ***************************** class test  *****************************



// ***************************** function test  *****************************


function setTest(i) {
    const divWrapperSets = document.getElementById("divSets");
    divWrapperSets.style.visibility = "";
    const divSet = document.createElement("div");
    divSet.setAttribute("class", "sets")

    
    
    // console.log(getT)
    let htmlSegment = `<img src="${i.img}" onclick="expandImage(this.src);" class="img"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>                    
                    <button id="${i.number}" onclick="addToWishlist(this.id);"><img src="SVG/heart-shapes-svgrepo-com.svg"/></button>                  
                    <p id="${i.releaseDate}">${i.releaseDate}</p>
                    <p id="${i.releaseDate}2"></p>`;    
    divSet.innerHTML = htmlSegment;    
    let iRd = `${i.releaseDate}`
    // let iRd2 = 
    
    z =  divWrapperSets.appendChild(divSet);   

    const release = document.getElementById(`${i.releaseDate}2`);
    console.log(release)
    release.innerHTML = dateTest(iRd, release);
    // divWrapperSets.appendChild(divSet); 
    console.log(z)
    return z
}


// ***************************** submit filter form button / create sets *****************************
const revealForm = document.getElementById("buttonFilterForm")
function submitFilter() {
    document.getElementById("divSets").innerHTML = "";
    var listSelect = document.getElementsByTagName("input");
    console.log(listSelect);
    for (const z of listSelect) {
        // console.log(z.id);
        console.log(z.checked);
        if (z.checked === true) {
            console.log(z.id)
            // console.log(i.theme)
            // let a = z.id
            fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
                .then(function(response) {
                    if (!response.ok) {
                        // throw Error(response.statusText);
                        throw alert("Error with API. Please refresh page and try again.");
                    }
                    return response.json()
                    })                        
                .then(data => {
                    for (const i of data.sets) {
                        if (i.theme === z.id) {                                    
                            setTest(i)
                        }
                    }
                })
        }    
    }                                                                  
    revealForm.style.display = "none";                    
};




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
    // alert("hello")
    v = clicked_image
    console.log(v)
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
        // .then(response => response.json())   
        .then(function(response) {
            if (!response.ok) {
                // throw Error(response.statusText);
                throw alert("Error with API. Please refresh page and try again.");
            }
            return response.json()
            })                           
        .then(data => {
            for (const i of data.sets) {
                // console.log("2")
                // console.log("=" + i.number)
                // console.log(i.img)
                // console.log(v)
                if (i.img === v) {
                    
                    // console.log("howdy" + i.img)
                    // console.log(v)

                    // console.log(i + "iii")
                    // console.log(z + "zzz")
                    const divSetChildImage = document.createElement("img")
                    // divSetChildImage.setAttribute.src = v
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
    
    // alert(clicked_id)

    arrayWishList.push(clicked_id)
    // console.log(arrayWishList)
    z = clicked_id
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
        // .then(response => response.json())    
        .then(function(response) {
            if (!response.ok) {
                // throw Error(response.statusText);
                throw alert("Error with API. Please refresh page and try again.");
            }
            return response.json()
            })                          
        .then(data => {
            for (const i of data.sets) {
                // console.log("2")
                // console.log("=" + i.number)
                // console.log(z)
                if (i.number == z) {

                    const divSetChildName = document.createElement("div");
                    const divWrapperChildPrice = document.createElement("div");
                    const divSetChildImage = document.createElement("img")  
                    const divSetNumber = document.createElement("div")    
                    // const divWishlistButton = document.createElement("button")  

                    const divWishlistButton = document.getElementById(z)  
                    divWishlistButton.innerHTML = '<img src="SVG/heart-shapes-svgrepo-com-red.svg"/>';
                    divWishlistButton.style.border = "none";
                    divWishlistButton.style.background = "none";
                    // console.log(i + "iii")
                    // console.log(z + "zzz")
                    // divSetWhishlist.appendChild(document.createTextNode(i.number));
                    // divSetWhishlist.style.gridColumn = "3 / span 1";                    
                    // themeAdd.appendChild(divSetWhishlist);



                     
                                                           
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

    // document.getElementById("divSets").innerHTML = "";
    // fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
    //     .then(response => response.json())                            
    //     .then(data => {

// divWishlistButton.appendChild(document.createTextNode("+"));
// divWishlistButton.style.gridColumn = "6 / span 1";
// divWrapperSets.appendChild(divWishlistButton);

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