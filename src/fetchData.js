let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //Esta línea me trae la dependencia descargada Por la terminal // 


const fetchData = (url_api) => { //Esta línea empieza la función: único parametro: url // 
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest(); // nombro la dependencia en la función // 
        xhttp.open('GET', url_api, true); //"Cuando use la dependencia, traiga el URL del api -- Ojo con este último 'true' - es para decir que asíncrono?? // 
        xhttp.onreadystatechange = (() => { //Cuando el llamado entege un reporte del estado, entonces... //
            if (xhttp.readyState === 4) { //Si entrega el código 4 del estado, que es "terminado"//
            (xhttp.status === 200) 
            ? resolve(JSON.parse(xhttp.responseText)) 
            : reject(new Error('Error' + url_api + ' status: ' + xhttp.status))
            }
        })
        xhttp.send(); //Aquí se envía la solicitud//
    })
}

module.exports = fetchData;