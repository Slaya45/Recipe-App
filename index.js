const createRecipeBtn = document.querySelector('#create-recipe');

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
        <form>
          <label for="Title-Box">Recipe Title:</label>
          <input type="text" id="Title-tb" name="Title-Box"><br>
          <label id="Directions-Label" for="Recipe-Directions">Directions for my New Recipe:</label>
          <textarea id="Recipe-Directions-tb" rows="10" cols="80" name="directions"></textarea><br>
          <label id="Ingredients-Label" for="Ingredients-Label">Ingredient list</label>
          <textarea id="Recipe-Ingredients-tb" rows="8" cols="80" name="ingredients"></textarea><br>
          <label for="image">Image:</label>
          <input type="file" id="image" name="image"><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>`;

  const blob = new Blob([htmlCode], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'new-recipe.html';
  document.body.appendChild(a);
  a.click();

  URL.revokeObjectURL(url);
});
