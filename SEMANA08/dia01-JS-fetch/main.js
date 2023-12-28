console.log('Hola JS!')

console.log('Hola JS!')

// PARA TRAER INFORMACIÓN EN FORMATO JSON DE UNA URL

const url = 'https://jsonplaceholder.typicode.com/posts'

//fetch(url) // Devuelve una promesa (Promise)
    //.then(response => response.json()) // Convertimos la respuesta a un objeto JS
    //.then(data => {
    //console.log(data)
  //}) // Podemos usar el objeto JS

const fetchPosts = () => {
    console.log('llamando al api de Json')

    return fetch(url)

    .then(response => response.json())
}

const renderPosts = (posts) =>{
    const appDiv = document.getElementById('app')

    let posList = ''

    posts.forEach(posts => {
        posList += `

        <dic>
            <h2>${posts.id}: ${posts.title} </h2>
            <p>${posts.body} </p>
        </div>
        `
    })
    appDiv.innerHTML = posList
}



fetchPosts()
.then(posts =>{
    renderPosts(posts)
    console.log(posts)
})

