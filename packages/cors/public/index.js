
const request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:3000/test/hello', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    const data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function () {
  // There was a connection error of some sort
};

request.send();
