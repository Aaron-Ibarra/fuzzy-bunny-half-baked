import { createBunny, getFamilies, checkAuth, logout } from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const selectEl = document.querySelector('select');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();

    // get the name and family id from the form

    // use createBunny to create a bunny with this name and family id

    form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    // go get the families from supabase
    const families = await getFamilies();
    // for each family
    for (let family of families) {
        // create an option tag
        const optionEl = document.createElement('option');
        // set the option's value and text content
        optionEl.textContent = family.name;
        optionEl.value = family.id;
        // and append the option to the select
        selectEl.append(optionEl);
    }
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
