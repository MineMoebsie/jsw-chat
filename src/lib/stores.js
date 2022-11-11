import { writable } from 'svelte/store'

const exampleSettings = {
  settingsPopup: true,
  darkMode: window.matchMedia("(prefers-color-scheme:dark)").matches
}
// export const options = writable(localStorage.options == undefined ? exampleSettings : JSON.parse(localStorage.options));
export const options = writable(exampleSettings); //even tijdelijk, ik ga niet elke keer cookies wissen :\
export const messages = writable([ 
  {m:"test <strong> im a strong boi </strong> asdfasdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasdfasdfasdfdsafsadfsafd",u:"Lorem ipsum",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test"},
  {m:"test <strong> im a strong boi </strong> ",u:"Lorem ipsum",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test"},{m:"test <strong> dikgedrukte tekst </strong> ",u:"Lorem ipsum 2",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"testtt"},
]); 

options.subscribe(v => localStorage.options = JSON.stringify(v))