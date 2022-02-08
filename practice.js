
// ***************************** reveal filter form  *****************************

const revealForm = document.getElementById("buttonFilterForm")
const reveal = document.getElementById("buttonFilter");
reveal.addEventListener("click", function() {
    if (revealForm.style.display === "grid") {
        revealForm.style.display = "none";
    } else {
        revealForm.style.display = "grid";
    }  
});

// ***************************** class  *****************************
const divWrapperSets = document.getElementById("divSets");

// const divSetChildName = document.createElement("div");
// const divWrapperChildPrice = document.createElement("div");
// const divSetChildImage = document.createElement("img")  
// const divSetNumber = document.createElement("div")    
// const divWishlistButton = document.createElement("button") 


class divSetCreate {
    // constructor(i) {
    //     this.i =   i;      
    // }

      

    img(i) {
        const divSetChildImage = document.createElement("img") 
        divSetChildImage.src = i.img
        divSetChildImage.style.gridColumn = "2 / span 1";
        divSetChildImage.style.objectFit = "cover";
        divSetChildImage.style.width = "100%";
        divSetChildImage.style.maxHeight = "100%";
        divSetChildImage.style.marginBottom = "20px";
        divWrapperSets.appendChild(divSetChildImage);
        // return f
    }

    number(i) {
        const divSetNumber = document.createElement("div")  
        divSetNumber.appendChild(document.createTextNode(i.number));
        divSetNumber.style.gridColumn = "3 / span 1";                    
        divWrapperSets.appendChild(divSetNumber);
        
    }

    nam3(i) {
        const divSetChildName = document.createElement("div");
        divSetChildName.appendChild(document.createTextNode(i.name));
        divSetChildName.style.gridColumn = "4 / span 1";
        divSetChildName.style.paddingLeft = "10%";
        divWrapperSets.appendChild(divSetChildName);
        
        
    }

    price(i) {
        const divWrapperChildPrice = document.createElement("div");
        divWrapperChildPrice.appendChild(document.createTextNode("$" + i.price));
        divWrapperChildPrice.style.gridColumn = "5 / span 1";
        divWrapperSets.appendChild(divWrapperChildPrice);
        
    }

    button(i) {
        const divWishlistButton = document.createElement("button") 
        divWishlistButton.appendChild(document.createTextNode("+"));
        divWishlistButton.style.gridColumn = "6 / span 1";
        divWrapperSets.appendChild(divWishlistButton);
        
    }

    
}




// const square = new Rectangle(10, 10);

// console.log(square.area); // 100







function submitFilter() {
    document.getElementById("divSets").innerHTML = "";
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
        .then(response => response.json())                            
        .then(data => {
            for (const i of data.sets) {                                     
                if (brickheadz.checked === true && i.theme === "BrickHeadz") {
                    obj = new divSetCreate()                    
                    obj.img(i)
                    obj.number(i)
                    obj.nam3(i)
                    obj.price(i)
                    obj.button(i)                       
                };                             

                if (disney.checked === true && i.theme === "Disney" ) {
                    obj = new divSetCreate()
                    obj.img(i)
                    obj.number(i)
                    obj.nam3(i)
                    obj.price(i)
                    obj.button(i)  
                };

                if (ideas.checked === true && i.theme === "Ideas" ) {
                    obj = new divSetCreate()
                    obj.img(i)
                    obj.number(i)
                    obj.nam3(i)
                    obj.price(i)
                    obj.button(i)  
                };
            };
        }); 
};