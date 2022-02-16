async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const image_url = document.querySelector('#image_link').value;
    const ingredients = document.querySelector('#ingredients').value;
    const steps = document.querySelector('#steps').value;
    const category = document.querySelector('#category').value;

    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
 	    image_url,
        ingredients,
        steps,
        category
      }),
      headers: {'Content-Type': 'application/json'}
    });
  
    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.recipe-form').addEventListener('submit', newFormHandler);
  