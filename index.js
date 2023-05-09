const createRecipeBtn = document.querySelector('#create-recipe')

createRecipeBtn.addEventListener('click', () => {
  const htmlCode = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>New Recipe!</title>
      <link rel="stylesheet" href="creationPage.css">
    </head>
    <header>
      <h1>Recipe Creation</h1>
      <button id="back-home">Home</button>
    </header>
    <body>
      <h1></h1>
      
      <form onsubmit="submitData()">
        <label for="Title-Box">Recipe Title:</label>
        <input type="text" id="Title-tb" name="Title-Box"><br>
  
        <label id="Directions-Label" for="Recipe-Directions">Directions for my New Recipe:</label>
        <textarea id="Recipe-Directions-tb" rows = "10" cols = "80" name = "directions"></textarea><br>
  
        <label id="Ingredients-Label" for="Ingredients-Label">Ingredient list</label>
        <textarea id="Recipe-Ingredients-tb" rows = "8" cols = "80" name = "ingredients"></textarea><br>
  
        <label for="image">Image:</label>
        <input type="file" id="image" name="image"><br>
        
        <input type="submit" value="Submit">
  
      </form>
  
  <script>
  function submitData() {
    const title = document.getElementById('Title-tb').value
    const directions = document.getElementById('Recipe-Directions-tb').value
    const ingredients = document.getElementById('Recipe-Ingredients-tb').value
    const imageUpload = document.getElementById('image').value

    const recipe = {
      title: title,
      directions: directions,
      ingredients: ingredients,
      image: imageUpload,
    };

    window.opener.receiveData(recipe)
    window.close()
  }

  window.onload = function () {
    const submitBtn = document.querySelector('input[type="submit"]')
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      submitData()
    })
  }
  </script>
  
      <style>header {
          border-style: solid;
          text-align: center;
          width: 100%;
          height: auto;
          color: rgb(0, 0, 0);
          border-radius: 5px;
          border-color: rgb(0, 0, 0);
          background-color: #ffe1e1;
          font-size: auto;
          word-wrap: break-word;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          box-sizing: border-box;
          margin: 0;
      }
        
      header h1 {
          margin-left: 3vh;
          text-align: center;
          max-width: 50%;
      }
        
      header button {
          margin-right: 5vh;
          height: 40px;
          width: 10%;
          background-color: rgb(174, 186, 255);
          border-radius: 9px;
          font-size: 24px;
      }
      
      form{
          text-align: center;
          align-items: center;
          background-color: bisque;
          
      }
      label{
          font-size: 30px;
          
      }
      #Title-tb{
          padding: .4%;
          border-width: 2px;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
          margin: 2vh;
          font-size: 22px;
          width: 60%;
      }
      #Directions-Label{
          padding-top: 1vh;
          display: inline-block;
          vertical-align: top;
          margin-top: 20px; 
      }
      #Recipe-Directions{ 
          width: 80%;
          margin-top: 20px; 
          font-size: 24px;
      }
      #Recipe-Directions-tb{
          width: 80%;
          margin-top: 20px; 
          font-size: 24px;
          padding: 2%;
          border-width: 2px;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
          margin: 2vh;
      
      }
      
      #Ingredients-Label {
          padding-top: 1vh;
          padding-bottom: 4vh;
          display: block;
          font-size: 30px;
      }
        
      #Recipe-Ingredients-tb {
          width: 80%;
          margin-top: 10px; 
          font-size: 24px;
          padding: 2%;
          border-width: 2px;
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
          margin: 2vh;
      }
        
      
      #image{
          margin: 2vh;
      }</style>
      
    </body>
  </html>
  
  `
   
  
const htmlBlob = new Blob([htmlCode], { type: 'text/html' });

const htmlUrl = URL.createObjectURL(htmlBlob);

const htmlLink = document.createElement('a');

const url = htmlUrl;

htmlLink.click();

  window.open(url, '_blank')

  URL.revokeObjectURL(url)
})

function receiveData(recipe){
  const recipeTitle = document.createElement('h2')
  recipeTitle.textContent = recipe.title

  const recipeDirections = document.createElement('p')
  recipeDirections.textContent = recipe.directions

  const recipeIngredients = document.createElement('p')
  recipeIngredients.textContent = recipe.ingredients

  document.body.appendChild(recipeTitle)
  document.body.appendChild(recipeDirections)
  document.body.appendChild(recipeIngredients)
}

const submitChildFormBtn = document.querySelector('#submit-child-form')
submitChildFormBtn.addEventListener('click', () => {
  const childWindow = window.open(url, '_blank')
  childWindow.document.querySelector('form').submit()
})