import { writable } from 'svelte/store'

const exampleSettings = {
  settingsPopup: {v:true, t:"none"},
  darkMode: {v: window.matchMedia("(prefers-color-scheme:dark)").matches, t:"slider", n:"Dark mode"},
  // mm what options shall i make 
}
// export const options = writable(localStorage.options == undefined ? exampleSettings : JSON.parse(localStorage.options));
export const options = writable(exampleSettings); //even tijdelijk, ik ga niet elke keer cookies wissen :\
export const messages = writable([ 
  {m:"top message chain + extra long message",u:"Lorem ipsum",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test"},
	{m:"middle message chain",u:"Lorem ipsum",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test"},
	{m:"middle message chain",u:"Lorem ipsum",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test"},
	{m:"middle message chain",u:"Lorem ipsum",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test"},
	{m:"end message chain",u:"Lorem ipsum",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test"},
	{m:"new message chain",u:"Lorem ipsum 2",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test2"},
	{m:"end new message chain",u:"Lorem ipsum 2",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test2"},
	{m:"seperate message",u:"Lorem ipsum",t:new Date("2022-11-1"),a:"/default-profile-picture.png", id:"test"}
	
]); 

options.subscribe(v => localStorage.options = JSON.stringify(v))