export default async function welcomeService()  
{
const response = await fetch("https://api.chucknorris.io/jokes/random").then((res) => {
    return res.json()
    
}).catch((err) => {
    
    console.error("une erreur est survenue lors de la connexion avec l'api")
})

return  response.value
}

