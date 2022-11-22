const moviegluSandbox = {
  baseEndpoint: 'https://api-gate2.movieglu.com/filmsNowShowing/',
  apiVersion: 'v200',
  authorization: 'Basic UkhUTl9YWDpPWDVQeDNKS0NVY1Q=',
  client: 'RHTN',
  apikey: 'Fvn2jSwMsT4NBd1JVtz9u9lnwhsnaZQs2wP8Nmq8',
  datetime: new Date(Date.now()).toISOString(),
  territory: 'XX'
}

async function fetchMovieGluData(query) {
  const response = await fetch(`${moviegluSandbox.baseEndpoint}?q=${query}`, {
    "headers": {
        "api-version": moviegluSandbox.apiVersion,
        "Authorization": moviegluSandbox.authorization,
        "client": moviegluSandbox.client,
        "x-api-key": moviegluSandbox.apikey,
        "device-datetime": moviegluSandbox.datetime,
        "territory": moviegluSandbox.territory,
    },
});
  const data = await response.json();
  return data;
}

async function getData () {
const data = await fetchMovieGluData('n=5');
console.log(data);
}

function successPosition (position) {
//   console.log(position);
  const userLocation = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  }
  return userLocation;
}

function errorPosition (error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(successPosition, errorPosition);
