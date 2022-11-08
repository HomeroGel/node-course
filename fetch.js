//fetch con nodejs, aunque actualmente esta siendo experimental, es decir, como una beta.

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))

async function loadData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//Teniendo solo esto y con type:module, podria funcionar igualmente, con la ult actualizacion.

// try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

loadData()