// async function renderUsers() {
//     let users = await getUsers();
//     let html = '';
//     users.forEach(user => {
//         let htmlSegment = `<div class="user">
//                             <img src="${user.profileURL}" >
//                             <h2>${user.firstName} ${user.lastName}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                         </div>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
// }

// renderUsers();

// ***************************** submit filter form button / create sets *****************************
const revealForm = document.getElementById("buttonFilterForm")
function submitFilter() {
    document.getElementById("divSets").innerHTML = "";
    fetch('https://getpantry.cloud/apiv1/pantry/6d0c08f2-b3ab-4481-a0ea-67ec5871db18/basket/setsNew')
        .then(response => response.json())                            
        .then(data => {
            for (const i of data.sets) {
                const divWrapperSets = document.getElementById("divSets");
                divWrapperSets.style.visibility = "";
                
                if (brickheadz.checked === true && i.theme === "BrickHeadz") {

                    // const divSetChildName = document.createElement("div");
                    // const divWrapperChildPrice = document.createElement("div");
                    // const divSetChildImage = document.createElement("img")  
                    // const divSetNumber = document.createElement("div")    
                    // const divWishlistButton = document.createElement("button")  

                    let htmlSegment = <div class="sets">
                                        <img src="`${i.img}`" onclick="expandImage(this.src);" class="img"></img>
                                        <div class="name">`${i.number}` - `${i.name}</div>
                                        <div class="price">$`${i.price}</div>
                                        <button id="`${i.number}`" onclick="addToWishlist(this.id);"><img src="SVG/heart-shapes-svgrepo-com.svg"/></button>
                                    </div>

                    divWrapperSets.appendChild(htmlSegment);                                         
                };                
                // console.log(i.theme)                               
            revealForm.style.display = "none";
            };
        }); 
};