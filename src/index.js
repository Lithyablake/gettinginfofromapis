const fetchData = require('./fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

//Repasando promesas//
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            reject('Whoops!');
        }

    });
};

somethingWillHappen() 
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve ('True truish');
            }, 2000)
        } else {
            const error = new Error('Whoopsie Daisy!!');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err);
    })

//Utilizando promesas para obtener info del API//

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));
