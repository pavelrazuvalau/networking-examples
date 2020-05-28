fetch('https://cors-anywhere.herokuapp.com/https://postman-echo.com/post?foo1=bar1&foo2=bar2', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer token',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        a: 1,
        b: 3
    })
})    
    .then(response => response.json())
    // .then(response => new Promise((resolve, reject) => {
    //     setTimeout(() => reject(response.args), 5000);
    // }))
    .then((response) => {
            console.log('Success', response);
        })
    .catch(error => {
        console.log('An error occured', error);
    })


// pending
// successful
// failed