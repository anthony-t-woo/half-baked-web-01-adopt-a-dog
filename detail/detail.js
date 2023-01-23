import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

let dogData = {};
// on load
window.addEventListener('load', async () => {
    // get the id from URL
    const URLData = new URLSearchParams(window.location.search);
    const id = URLData.get('id');
    // use the id to fetch the dog
    const response = await getDog(id);
    dogData = response;

    // render and append this dog's details to the container
});
