    const btnSearsh = document.getElementById('search-btn');

    btnSearsh.addEventListener("click",()=>{
        console.log('is clicked');
        alert('is clicked');
        sendApiRequest();
    });

    async function sendApiRequest(){
        let APP_id = "f51942b4";
        let API_key = "8ad6577ec4d9355ce6a3ed434c1d00c5";
        let response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${API_key}&q=tacos`);
        // console.log(response);
        let data = await response.json();
        console.log(data);
        useApiData(data);
    }
function useApiData(data){
    document.getElementById("content").innerHTML = `
    <div class="col-3 offset-1 mt-5" id="idcol">
        <div class="card">
          <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.hits[0].recipe.label}</h5>
            <p class="card-text">${data.hits[0].recipe.calories}</p>
              <a href="${data.hits[0].recipe.url}" class="btnCard">voir plus</a>
          </div>
        </div>
    `;
}


// const Frmcherche = document.querySelector("form");
// const rechercheBtn = document.querySelector("#search-btn");
// const rechercheresuldiv = document.querySelector(".row");
// const card = document.getElementById("idcard");

// const APP_ID = "b4ffb1c6";
// const APP_Key = "141b6063efc8097903d78cdac12fc90a";

// let querytxt = "";

// //alert("oussama");

// Frmcherche.addEventListener("submit", (eo) => {
//   eo.preventDefault();
//   querytxt = eo.target.querySelector(".cherche-txt").value;
//   fetchAPI();
// });

// async function fetchAPI() {
//   //fetch(https://www.themealdb.com/api/json/v1/1/filter.php?i=${querytxt})
//   //.then(response => response.json())
//   // console.log(respense)

//   const baseURL = https://api.edamam.com/search?q=${querytxt}&app_id=${APP_ID}&app_key=${APP_Key}&to=20;

//   const response = await fetch(baseURL);
//   const data = await response.json();
//   html(data.hits, data.count,data.q);

//   console.log(data);
// }

// function html(results,count,q) {
//   let generatedhtml = "";
//   if (count) {
//     results.map((result) => {
//       generatedhtml += `
//             <div class="col" id="idcol">
//             <div class="card">
//             <img src="${result.recipe.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h4 class="card-title">${result.recipe.label}</h4>
//               <h6 > Type de cuisine :${result.recipe.cuisineType}</h6>
//               <h6 > calories :${result.recipe.calories.toFixed(2)}</h6>
              
//                 <a href="${result.recipe.url}" class="btnCard" target="_blank">voir plus</a>
//             </div>
//           </div>
//           </div>
//             `;
//     });
//     rechercheresuldiv.innerHTML = generatedhtml;
//   } else {
//     rechercheresuldiv.innerHTML = <h2 style="margin: auto;text-align: center;">Aucune resultat disponible pour: "<b>${q}</b>"</h2>;
//   }
// }