import welcomeService from "./services/welcomeService"

// const date = new Date
// const headerBrand = document.querySelector('#header-brand').textContent ="coucou je m'appel Guillaume :)"
// const copyright = document.querySelector('#copyright').textContent = `Copyright ©- ${date.getFullYear()} Tous droits réservés par MonSite`


// console.log(import.meta.env.VITE_SOME_KEY) // "123"
// console.log(import.meta.env.VITE_DB_PASSWORD) // undefined


window.addEventListener("load",async(e) => {
    if(window.location.pathname == "/" || window.location.pathname == "index.html" ) {
        const h1 = document.getElementsByTagName('h1')
        console.log(h1);
    
        h1[0].textContent = await welcomeService()

    }

})