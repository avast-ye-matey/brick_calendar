







// ***************************** reveal filter form  *****************************


// const reveal = document.getElementById("buttonFilter");
// reveal.addEventListener("click", function() {
//     if (revealForm.style.display === "grid") {
//         revealForm.style.display = "none";
//     } else {
//         revealForm.style.display = "grid";
//         testFilter(); //!!
//     }  
// });









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




// ***************** submit filter form button / create sets ********************************


const revealForm = document.getElementById("buttonFilterForm")
function submitFilter() {
    document.getElementById("divSets").innerHTML = "";
    var listSelect = document.getElementsByTagName("input");
    console.log(listSelect);
    for (const z of listSelect) {        
        console.log(z.checked);
        if (z.checked === true) {
            console.log(z.id)            
            fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
                .then(function(response) {
                    if (!response.ok) {                        
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


let h1Wishlist = document.getElementById("h1Wishlist")
const divWishlist = document.getElementById("divWishlist")
h1Wishlist.addEventListener("click", function() {
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



    // if (thisButtonImgSrc.includes("red")) {
    //     thisButtonImgSrc = "SVG/heart-shapes-svgrepo-com.svg"
    //     let thisButtonParent = thisButton.parentElement
    //     thisButtonParent.remove()
    // }
    // } else {
    //     thisButtonImgSrc = "SVG/heart-shapes-svgrepo-com-red.svg"
    // }


       // console.log(thisButtonImg.src)
    // console.log(typeof(thisButtonImg.src))
    // console.log(thisButtonImgSrc.includes("red"))

    // console.log(!thisButtonImgSrc.includes("red"))
    // console.log(thisButtonImgSrc.includes("red"))

  


        
        // arrayWishList2.push(clicked_id)  
        // z = clicked_id
        // console.log(z.src)
        // console.log(clicked_id)

        // fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')         
        //     .then(function(response) {
        //         if (!response.ok) {               
        //             throw alert("Error with API. Please refresh page and try again.");
        //         }
        //         return response.json()
        //         })                          
        //     .then(data => {
        //         for (const i of data.sets) {              
        //             if (i.number == z) {
        //                 setTest2(i)                    
        //             } 
        //         }
        //     })

        

//         // console.log(clicked_id)
//         // console.log(arrayWishList)
//         for (const i of arrayWishList) {
//             // console.log(clicked_id)
//             // console.log(i)
//             if (String(i) === String(clicked_id)) {
//                 console.log("ghghghghghghgh")
//                 console.log(typeof(clicked_id))
//                 console.log(clicked_id)
                
//                 // let element = document.getel
//                 console.log(thisButton.parentElement)
//                 let thisButtonParent = thisButton.parentElement
//                 thisButtonParent.remove()
//             }
//         }
//         console.log(arrayWishList2) 
//     }
// }



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



// for (const i of arrayPriceFilter) {
    //     console.log(i.price)
    //     // console.log(typeof(arrayPriceFilter2[0]))
    //     console.log(arrayPriceFilter2[0].price)
    //     if (i.price >= arrayPriceFilter2[0].price) {
    //         // console.log(arrayPrice2[0])
    //         // console.log(typeof(arrayPrice2[0]))
    //         arrayPriceFilter2.unshift(i)
    //         console.log(arrayPriceFilter2)
    //     } else {
    //         arrayPriceFilter2.push(i)
    //     }
    // }
    // for (const i of arrayPriceFilter2) {
    //     console.log(i)
    // }



    // const divWishlistSets = document.getElementById("divWishlistSets")
    // divWishlistSets.innerHTML = "";



 // const divWishlistSets = document.getElementById("divWishlistSets")
    // divWishlistSets.innerHTML = "";
    // setTest2(i, themeArray2)
    // ggg = arrayPriceFilter.price.sort((a,b)=>b-a)
    // console.log(ggg)
    
   




        // y = {
        //     id: `${i.dataset.number}`,
        //     price: parseFloat(`${i.dataset.price}`)  
        // }
        // arrayPriceFilter.push(y)
        // }
    
        
    //     // arrayPriceFilter.push({
    //     //     id: `${i.dataset.number}`,
    //     //     price: parseFloat(`${i.dataset.price}`)           
    //     // })
    //     console.log(y)
       
    //     console.log(arrayPriceFilter)
        // return y
    // }


     // for (const i of setListSets) {
    //     console.log(arrayPriceFilter)
    //     console.log(i)
    //     y = {
    //         id: `${i.dataset.number}`,
    //         price: parseFloat(`${i.dataset.price}`)  
    //     }
    //     // arrayPriceFilter.push({
    //     //     id: `${i.dataset.number}`,
    //     //     price: parseFloat(`${i.dataset.price}`)           
    //     // })
    //     console.log(y)
    //     arrayPriceFilter.push(y)
    //     console.log(arrayPriceFilter)
    // }
    // console.log(arrayPriceFilter)
    // console.log(arrayPriceFilter2)
    // // arrayPrice.forEach(function (arrayItem) {
    // for (const x of arrayPriceFilter) {
    //     // console.log(arrayPrice2)
    //     // console.log(x)
    //     // console.log(typeof(x.price))
    //     // console.log(arrayPrice2)
    //     // console.log(arrayPrice2[0])
    //     // console.log(typeof(arrayPrice2[0].price))
    //     // let x = arrayItem.price
    //     // console.log(x)
    //     // let i = arrayItem.price
    //     if (x.price >= parseFloat(arrayPriceFilter2[0].price)) {
    //         // console.log(arrayPrice2[0])
    //         // console.log(typeof(arrayPrice2[0]))
    //         arrayPriceFilter2.unshift(x)
    //     } else {
    //         arrayPriceFilter2.push(x)
    //     }


    // newArray = arrayPriceFilter2
    // console.log(newArray)  



    // console.log(arrayPrice2)



    // const priceClass = document.getElementsByClassName("sets");
    // priceClass.dataset.price.sort(function(a,b){return a - b});
    // console.log(priceClass.dataset.price)
    // const result = priceClass.filter(price => price)
    // console.log(selection.options[selection.selectedIndex].text)

    // for (const i of priceClass) {
    //     console.log(i.dataset.price)
    //     if (i >= arrayPrice[0]) {
    //         arrayPrice.unshift(i)
    //     } else {
    //         arrayPrice.push(i)
    //     } 
    //     // arrayPrice.push
    //     // (i < arrayPrice[0])
    // }

    // console.log(arrayPrice)
    // const wipeSets = document.getElementById("divSets")
    // wipeSets.innerHTML = ""
    // for (const i of arrayPrice) {
    //     console.log(i)
    //     wipeSets.appendChild(i)
    //     // setTest(i)
    // }



// }