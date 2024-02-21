// Define an array of container IDs
const containerIds = ['num-1', 'num-2', 'num-3', 'num-4', 'num-5', 'num-6',]; // Add more IDs as needed
function cambiarApi() {
  containerIds.forEach(containerId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`) // Assuming your JSON files are named data1.json, data2.json, etc.
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
      })
      .then(data => {
        // Access and display desired elements inside the respective HTML element
        const container = document.getElementById(containerId);
        // container.innerHTML = `
        //   <p>Name: ${data.name}</p>
        //   <p>Age: ${data.age}</p>
        //   <p>Address: ${data.address}</p>
        // `;
        // console.log(data["meals"][0]["strMealThumb"]);
        container.innerHTML = `
          <div class="card" style="width: 18rem;">
              <img src="${data["meals"][0]["strMealThumb"]}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${data["meals"][0]["strMeal"]}</h5>
                  <p class="card-text">Country of origin: ${data["meals"][0]["strArea"]}</p>
                  <button>Me lo como</button>
              </div>
          </div>
          `;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });

}

