// fetch("./items.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })


// let ul = document.getElementById("name");
// let fragment = document.createDocumentFragment();




// var ul = document.getElementById("list");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode("Four"));
//   ul.appendChild(li);



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

// var sheet = document.createElement('style')
const brickheadz = document.getElementById("brickheadz");
const disney = document.getElementById("disney");
const ideas = document.getElementById("ideas");

// const divWrapperName = document.getElementById("divName");
// const divWrapperChildName = document.createElement("div");
// const divWrapperChildPrice = document.createElement("div");
// const divWrapperSetChildImage = document.createElement("img")

function submitFilter() {
    document.getElementById("divSets").innerHTML = "";
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
        .then(response => response.json())                            
        .then(data => {
            for (const i of data.sets) {
                const divWrapperSets = document.getElementById("divSets");
                
                if (brickheadz.checked === true && i.theme === "BrickHeadz") {
                    
                    const divSetChildName = document.createElement("div");
                    const divWrapperChildPrice = document.createElement("div");
                    const divSetChildImage = document.createElement("img")  
                    const divSetNumber = document.createElement("div")    
                    const divWishlistButton = document.createElement("button")   
                                                           
                    divSetChildImage.src = i.img
                    divSetChildImage.style.gridColumn = "2 / span 1";
                    divSetChildImage.style.objectFit = "cover";
                    divSetChildImage.style.width = "100%";
                    divSetChildImage.style.maxHeight = "100%";
                    divSetChildImage.style.marginBottom = "20px";
                    divWrapperSets.appendChild(divSetChildImage);

                    divSetNumber.appendChild(document.createTextNode(i.number));
                    divSetNumber.style.gridColumn = "3 / span 1";                    
                    divWrapperSets.appendChild(divSetNumber);

                    divSetChildName.appendChild(document.createTextNode(i.name));
                    divSetChildName.style.gridColumn = "4 / span 1";
                    divSetChildName.style.paddingLeft = "10%";
                    divWrapperSets.appendChild(divSetChildName);
                    
                    divWrapperChildPrice.appendChild(document.createTextNode("$" + i.price));
                    divWrapperChildPrice.style.gridColumn = "5 / span 1";
                    divWrapperSets.appendChild(divWrapperChildPrice);

                    divWishlistButton.appendChild(document.createTextNode("+"));
                    divWishlistButton.style.gridColumn = "6 / span 1";
                    divWrapperSets.appendChild(divWishlistButton);


                };                
                // console.log(i.theme)

                if (disney.checked === true && i.theme === "Disney" ) {
                    const divSetChildName = document.createElement("div");
                    const divWrapperChildPrice = document.createElement("div");
                    const divWrapperSetChildImage = document.createElement("img")       
                                                           
                    divWrapperSetChildImage.src = i.img
                    divWrapperSetChildImage.style.gridColumn = "2 / span 1";
                    divWrapperSetChildImage.style.objectFit = "cover";
                    divWrapperSetChildImage.style.width = "100%";
                    divWrapperSetChildImage.style.maxHeight = "100%";
                    divWrapperSetChildImage.style.marginBottom = "20px";
                    divWrapperSets.appendChild(divWrapperSetChildImage);

                    divSetChildName.appendChild(document.createTextNode(i.name));
                    divSetChildName.style.gridColumn = "4 / span 1";
                    divSetChildName.style.paddingLeft = "10%";
                    divWrapperSets.appendChild(divSetChildName);
                    
                    divWrapperChildPrice.appendChild(document.createTextNode("$" + i.price));
                    divWrapperChildPrice.style.gridColumn = "5 / span 1";
                    divWrapperSets.appendChild(divWrapperChildPrice);
                };

                if (ideas.checked === true && i.theme === "Ideas" ) {
                    const divSetChildName = document.createElement("div");
                    const divWrapperChildPrice = document.createElement("div");
                    const divWrapperSetChildImage = document.createElement("img")       
                                                           
                    divWrapperSetChildImage.src = i.img
                    divWrapperSetChildImage.style.gridColumn = "2 / span 1";
                    divWrapperSetChildImage.style.objectFit = "cover";
                    divWrapperSetChildImage.style.width = "100%";
                    divWrapperSetChildImage.style.maxHeight = "100%";
                    divWrapperSetChildImage.style.marginBottom = "20px";
                    divWrapperSets.appendChild(divWrapperSetChildImage);

                    divSetChildName.appendChild(document.createTextNode(i.name));
                    divSetChildName.style.gridColumn = "4 / span 1";
                    divSetChildName.style.paddingLeft = "10%";
                    divWrapperSets.appendChild(divSetChildName);
                    
                    divWrapperChildPrice.appendChild(document.createTextNode("$" + i.price));
                    divWrapperChildPrice.style.gridColumn = "5 / span 1";
                    divWrapperSets.appendChild(divWrapperChildPrice);
                };
            };
        }); 
};

// ******************
// if (disney.checked === true && i.theme === "Disney" ) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(i.name));
//     li.style.gridColumn = "3 / span 1";
//     ul.appendChild(li);
// };

// if (ideas.checked === true && i.theme === "Ideas" ) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(i.name));
//     li.style.gridColumn = "3 / span 1";
//     ul.appendChild(li);
// };
// *************************




// let obj = data.sets;
//             obj.map(getNames);
//             function getNames(item) { 
//                 var ul = document.getElementById("name");
//                 var li = document.createElement("li");
//                 li.appendChild(document.createTextNode(item.name));
//                 ul.appendChild(li);             
//                 return [item.name]                
//             };  






// for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`)

// fetch("./items.json")
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(function(name) {
//                 let li = document.createElement('li');
//                 li.textContent = data.sets[0][name]
//                 fragment.appendChild(li);                
//             })
//             ul.appendChild(fragment)
//             console.log(data)
//         })




// fetch("./items.json")
//     .then(response => response.json())
//     .then(data => console.log(data));


// const ul = document.getElementById("name");
// const list = document.createDocumentFragment();

// fetch("./items.json")
//     .then((response) => {
//         return response.json();
//     })

//     .then((data) => {
//         let name = data;
//         name.map(function(author) {
//             let li = document.createElement('li');
//             let names = document.createElement('h2');
//             let email = document.createElement('span');

//             names.innerHTML = `${name.names}`;
//             email.innerHTML = `${name.email}`;

//             li.appendChild(names);
//             li.appendChild(email);
//             list.appendChild(li);
//         })
//     })

//     // .catch(function(error) {
//     //     console.log(error);
//     // });
    
// ul.appendChild(list);


