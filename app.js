import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let dogsData = [];
// on load
window.addEventListener('load', async () => {
    // fetch all dogs
    const response = await getDogs();
    dogsData = response;
    console.log(dogsData);
    // render and append all dog cards to the container
    for (let dog of dogsData) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
});
