let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //Esta línea me trae la dependencia descargada Por la terminal // 
let API = 'https://rickandmortyapi.com/api/character/'


function fetchData(url_api, callback) { //Esta línea empieza la función: el primer parámetro el url, el segundo el callback // 
    let xhttp = new XMLHttpRequest(); // nombro la dependencia en la función // 
    xhttp.open('GET', url_api, true); //"Cuando use la dependencia, traiga el URL del api -- Ojo con este último 'true' - es para decir que asíncrono?? // 
    xhttp.onreadystatechange = function (event) { //Cuando el llamado entege un reporte del estado, entonces... //
        if (xhttp.readyState === 4) { //Si entrega el código 4 del estado, que es "terminado"//
            if (xhttp.status === 200) { //Si el estatus es 200, que es todo ok //
                callback(null, JSON.parse(xhttp.responseText)); //Entonces ejecuta el callback, no va a haber error(null), pero conviérteme el resultado en formato JSON//
            } else { //BUENA PRÁCTICA::: Si no es 4 (es decir no se terminó) o dio algún otro reporte diferente a OK//
                const error = new Error('Error ' + url_api + ' status: ' + xhttp.status); //Crearemos un mensaje de error con el mismo url que me informe//
                return callback(error, null) //Y regrese ese mensaje de error (el segundo parámetro del callback se deja como null porque sólo le ibamos a pasar el error, no una ejecución de algo//
            }
        }
    }
    xhttp.send(); //Aquí se envía la solicitud//
}

fetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})