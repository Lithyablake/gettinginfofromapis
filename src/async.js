const fetchData = require('./fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');


//Repasando Async functions //
/* const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject (new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After'); 

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');  */