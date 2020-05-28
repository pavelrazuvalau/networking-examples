let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://postman-echo.com/get?foo1=bar1&foo2=bar2');
// xhr.open('POST', 'https://cors-anywhere.herokuapp.com/https://postman-echo.com/post?foo1=bar1&foo2=bar2');

// xhr.setRequestHeader('Authorization', 'Bearer token');
// xhr.setRequestHeader('Content-Type', 'application/json');

// xhr.responseType = 'json';

xhr.send();
// xhr.send(JSON.stringify(
//     {
//         a: 1,
//         b: 2
//     }
// ));

xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    console.log(xhr);
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`);
    console.log(xhr.response); // response is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

xhr.onerror = function(error) {
  console.log('Request failed', error);
};