// ***************************** search button alert *****************************

function buttonSearchS() {
    alert("Sorry, the search function does not currently work. Thank you for your understanding.");
}

// ***************************** variables *****************************

// var sheet = document.createElement('style')

// const brickheadz = document.getElementById("Brickheadz");
const disney = document.getElementById("disney");
const ideas = document.getElementById("ideas");

// const divWrapperName = document.getElementById("divName");
// const divWrapperChildName = document.createElement("div");
// const divWrapperChildPrice = document.createElement("div");
// const divWrapperSetChildImage = document.createElement("img")


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
                    
                    console.log(y)
                    // console.log(iterable)
                    // var fragment = new DocumentFragment();
                    // for (const element of y) {
                    //     if ()
                    // }
                    



                    // var fragment = new DocumentFragment();
                    
                    // let htmlForm = `<input type="checkbox" id="${i.theme}" name="${i.theme}">
                    //                 <label for="${i.theme}">${i.theme}</label>
                    //                 <input type="button" onclick="submitFilter()" value="Submit">`

                    // filterTest.innerHTML = htmlForm;    
                    // fragment.appendChild()

                    // z =  filterTest.appendChild(divSet);   
                    // divWrapperSets.appendChild(divSet); 

                    // console.log(htmlForm.id)
                    // htmlFormMain.push(htmlForm);
                    // console.log(htmlFormMain);
                    // return iterable
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
    // const iterable = new Set(y);
    // return fragment
};

                
                
                
                


// ***************************** class test  *****************************

// class divSetCreate {
//     htmlSegment(i) {
//         let htmlSegment = `<img src="${i.img}" onclick="expandImage(this.src);" class="img"></img>
//                             <div class="name">${i.number} - ${i.name}</div>
//                             <div class="price">$${i.price}</div>
//                             <button id="${i.number}" onclick="addToWishlist(this.id);"><img src="SVG/heart-shapes-svgrepo-com.svg"/></button>`;
//         return htmlSegment;
//     }
// }

// ***************************** function test  *****************************


function setTest(i) {
    const divWrapperSets = document.getElementById("divSets");
    divWrapperSets.style.visibility = "";
    const divSet = document.createElement("div");
    divSet.setAttribute("class", "sets")
    let htmlSegment = `<img src="${i.img}" onclick="expandImage(this.src);" class="img"></img>
                    <div class="name">${i.number} - ${i.name}</div>
                    <div class="price">$${i.price}</div>
                    <button id="${i.number}" onclick="addToWishlist(this.id);"><img src="SVG/heart-shapes-svgrepo-com.svg"/></button>`;

    divSet.innerHTML = htmlSegment;    
    z =  divWrapperSets.appendChild(divSet);   
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
                // const divWrapperSets = document.getElementById("divSets"); !!!
                // divWrapperSets.style.visibility = ""; !!!    
                
                // let brickheadz = document.getElementById("BrickHeadz");
                // let bh = document.querySelector(".btn");   
                // console.log(bh)      
                // const zzz = document.getElementById("buttonFilterForm");
                // const yyy = document.getElementById(zzz.children[0]);
                // const deck = zzz.querySelector('[name="Brickheadz"]');
                // console.log(brickheadz.hasOwnProperty("id"));
                // console.log(typeof(brickheadz));
                // console.log(brickheadz);
                // console.log(data.sets);
                // console.log(zzz);
                // console.log(typeof(zzz));
                // console.log(zzz.children[0]);
                // console.log(yyy);
                // console.log(deck);
                // console.log(fragment);
                // console.log(htmlForm);
                
                                     
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




// ***************************** test area *****************************

function getName() {
    
    fetch("./items.json")
        .then(response => response.json())
        .then(data => {                       
            let obj = data.sets;
            obj.map(getNames);
            function getNames(item) { 
                var ul = document.getElementById("name");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(item.name));
                ul.appendChild(li);             
                return [item.name]                
            };   
            // console.log(obj.name)         
        });   
        // console.log(2); 
    // console.log(3);    
}

function getTheme() {
    fetch("./items.json")
        .then(response => response.json())
        .then(data => {
            let obj = data.sets;
            obj.map(getTheme);

            function getTheme(item) {
                var ul = document.getElementById("theme");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(item.theme));
                ul.appendChild(li);   
                // console.log(item.theme)
                return [item.theme]
            };            
        });    
}

function getUser1data() {
    fetch("./user1.json")
        .then(response => response.json())
        .then(data => {
            let obj = data;
            obj.map(getName);

            function getNameAndTheme(item) {
                var ulName = document.getElementById("name");
                var ulTheme = document.getElementById("theme");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(item.name));
                console.log(1);
                ulName.appendChild(li);  
                li.appendChild(document.createTextNode(item.theme));
                ulTheme.appendChild(li);   
                // console.log(item.theme)
                // return [item.theme]
            };
            obj.map(getTheme);
            function getNameAndTheme(item) {
                // var ulName = document.getElementById("name");
                var ulTheme = document.getElementById("theme");
                var li = document.createElement("li");
                // li.appendChild(document.createTextNode(item.name));
                // console.log(1);
                // ulName.appendChild(li);  
                li.appendChild(document.createTextNode(item.theme));
                ulTheme.appendChild(li);   
                // console.log(item.theme)
                // return [item.theme]
            };            
        });   
}


function test1() {
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/items')
        .then(response => response.json())                            
        .then(data => {
            for (const i of data.sets) {
                console.log(i.theme)
            }
        })        
}

function test2() {
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/items')
        .then(response => response.json())
        .then(data => {
            for (const i of data.sets) {
                console.log(i.name)
            }
        })
}

function json() {
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/items')
        .then(response => response.json())
        .then(data => console.log(data.sets))
}
