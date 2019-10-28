
// const data = {
//     getParkData() {
//         return fetch('http://localhost:8088/parks')
//         .then((r) => r.json())
//     },

fetch('http://localhost:8088/parks')
        .then(r => r.json())
        .then(response => {
            console.log(response)
        })
