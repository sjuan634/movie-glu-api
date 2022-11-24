var mainEl = document.querySelector('main');

function successPosition (position) {
  var userLocation = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  }
  console.log(userLocation)
  function cinemasNearbyData() {
    fetch(moviegluCall.cinemasNearbyEndpoint, {
      "headers": {
        "api-version": moviegluCall.apiVersion,
        "Authorization": moviegluCall.authorization,
        "client": moviegluCall.client,
        "x-api-key": moviegluCall.apikey,
        "device-datetime": moviegluCall.datetime,
        "territory": moviegluCall.territory,
        "geolocation": `${userLocation.latitude};${userLocation.longitude}`
      },
    })
    .then(function (response) {
      return response.json();
      })
      .then(function (data) {
        console.log(data)
        return data;
      });
    }
  cinemasNearbyData();
}

function errorPosition (error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(successPosition, errorPosition);

const moviegluCall = {
  cinemasNearbyEndpoint: 'https://api-gate2.movieglu.com/cinemasNearby/',
  cinemaShowtimesEndpoint: 'https://api-gate2.movieglu.com/cinemaShowTimes/',
  apiVersion: 'v200',
  authorization: 'Basic UkhUTjpYQk5RaDBDNGhPamM=',
  client: 'RHTN',
  apikey: 'qnpVdOgChm42R0SlChf4OgIAJS6b5ZN2QHGKUFv4',
  datetime: new Date(Date.now()).toISOString(),
  territory: 'US'
}

var moviegluSandbox = {
  cinemasNearbyEndpoint: 'https://api-gate2.movieglu.com/cinemasNearby/',
  cinemaShowtimesEndpoint: 'https://api-gate2.movieglu.com/cinemaShowTimes/',
  apiVersion: 'v200',
  authorization: 'Basic UkhUTl9YWDpPWDVQeDNKS0NVY1Q=',
  client: 'RHTN',
  apikey: 'Fvn2jSwMsT4NBd1JVtz9u9lnwhsnaZQs2wP8Nmq8',
  datetime: new Date(Date.now()).toISOString(),
  territory: 'XX'
}




// console.log(cinemasNearbyData)

// async function fetchFilmsNowShowing() {
//   const response = await fetch(moviegluCall.cinemasNearbyEndpoint, {
//     "headers": {
//         "api-version": moviegluCall.apiVersion,
//         "Authorization": moviegluCall.authorization,
//         "client": moviegluCall.client,
//         "x-api-key": moviegluCall.apikey,
//         "device-datetime": moviegluCall.datetime,
//         "territory": moviegluCall.territory,
//     },
// });
//   const data = await response.json();
//   console.log(data)
//   return data;
// }

// async function fetchFilmShowTimes(filmID, date) {
//   const response = await fetch(`${moviegluCall.cinemaShowtimesEndpoint}?film_id=${filmID}&date=${date}`, {
//     "headers": {
//         "api-version": moviegluCall.apiVersion,
//         "Authorization": moviegluCall.authorization,
//         "client": moviegluCall.client,
//         "x-api-key": moviegluCall.apikey,
//         "device-datetime": moviegluCall.datetime,
//         "territory": moviegluCall.territory,
//     },
// });
//   const data = await response.json();
//   return data;
// }

// async function fetchCinemaDetails(cinemaID) {
//   const response = await fetch(`${moviegluCall.cinemasNearbyEndpoint}?cinema_id=${cinemaID}`, {
//     "headers": {
//         "api-version": moviegluCall.apiVersion,
//         "Authorization": moviegluCall.authorization,
//         "client": moviegluCall.client,
//         "x-api-key": moviegluCall.apikey,
//         "device-datetime": moviegluCall.datetime,
//         "territory": moviegluCall.territory,
//     },
// });
//   const data = await response.json();
//   return data;
// }

// async function getFilmsNowShowing () {
// const filmsNowShowingData = await fetchFilmsNowShowing();
// return filmsNowShowingData;
// }

// async function getFilmShowTimes () {
// const filmShowTimesData = await fetchFilmShowTimes();
// console.log(filmShowTimesData);
// }

// async function getCinemaDetails () {
// const cinemaDetailsData = await fetchCinemaDetails();
// console.log(cinemaDetailsData);
// }

// async function buildNowShowingList () {
//   const filmsNowShowingData = await getFilmsNowShowing();
//   for (const films of filmsNowShowingData.films) {
//     const nowShowingListDiv = document.createElement('div');
//     const nowShowingFilmDiv = document.createElement('div');
//     nowShowingFilmDiv.setAttribute('id', films.film_id);
//     const movieTitleEl = document.createElement('h2');
//     movieTitleEl.textContent = films.film_name;

//     if (films.images.poster.length === undefined) {
//       var moviePosterEl = document.createElement('img');
//       moviePosterEl.setAttribute('src', films.images.poster[1].medium.film_image);
//       moviePosterEl.setAttribute('alt', 'Movie Poster');
//     } else {
//       var moviePosterEl = document.createElement('img');
//       moviePosterEl.setAttribute('src', './assets/images/placeholder.png');
//       moviePosterEl.setAttribute('alt', 'Movie poster not available');
//     }

//     const ageRatingEl = document.createElement('span');
//     ageRatingEl.textContent = films.age_rating[0].rating;
//     const releaseDateEl = document.createElement('span');
//     releaseDateEl.textContent = films.release_dates[0].release_date;
//     const synopsisEl = document.createElement('p');
//     synopsisEl.textContent = films.synopsis_long;
//     const showTimeBtnEl = document.createElement('button');
//     showTimeBtnEl.textContent = 'View Showtimes';

//     nowShowingFilmDiv.appendChild(movieTitleEl);
//     nowShowingFilmDiv.appendChild(moviePosterEl);
//     nowShowingFilmDiv.appendChild(releaseDateEl);
//     nowShowingFilmDiv.appendChild(ageRatingEl);
//     nowShowingFilmDiv.appendChild(showTimeBtnEl);
//     nowShowingFilmDiv.appendChild(synopsisEl);
//     nowShowingListDiv.appendChild(nowShowingFilmDiv);
//     mainEl.appendChild(nowShowingListDiv);
//   }
//   return mainEl;
// }

// buildNowShowingList()

// const showtimeBtns = document.querySelectorAll('button');
// console.log(showtimeBtns);
// function handleViewShowtimeClick() {
//   const filmID = this.parentElement.id;
//   console.log(filmID);
// }

// showtimeBtns.forEach(function(button) {
//     button.addEventListener('click', handleViewShowtimeClick,);
// });




//key
//Hide google key later
// const API_KEY = 'T05NSjpBNmlxMFdTc2lENDc=';
// const CLIENT_NAME = 'ONMJ';
// const X_API_KEY = 'rBsn3QcluW9RVPyYaBUE43nwuB0TzQgs3hA9AsbT';
// const API_VERSION = 'v200';
// const TERRITORY = 'US';
// ​
// const latInp = document.querySelector('.lat-inp');
// const longInp = document.querySelector('.long-inp');
// const addressForm = document.querySelector('.address-form');
// const resMsgWrapper = document.querySelector('.res-msg-wrapper');
// const theatersMapDiv = document.querySelector('.theaters-map');
// //theater lan-long I have to change that later but not cleat how I can do that
// // sometimes its shit doesnt work fix that later
// function getNearbyTheaters() {
//   return new Promise(function(resolve, reject){
//     fetch('https://api-gate2.movieglu.com/cinemasNearby/?n=10', {
//       method: 'GET',
//       headers: {
//         "api-version": API_VERSION,
//         "Authorization": `Basic ${API_KEY}`,
//         "client": CLIENT_NAME,
//         "x-api-key": X_API_KEY,
//         "device-datetime": new Date().toISOString(),
//         "territory": TERRITORY,
//         "geolocation": `${latInp.value};${longInp.value}`
//       }
//     })
//     .then(function(res){
//       if(res.ok) return res.json();
//       reject('No theaters found nearby');
//     })
//     .then(function(data){
//       if(!data.cinemas.length) reject('No theaters found nearby');
//       resolve(data);
//     })
//     .catch(function(err){ 
//       reject('Something went wrong');
//     })
//   });  
// }
// // change for user location 
// async function showNearbyTheaters(e) {
//   e.preventDefault();
// ​
//   try {
//     const data = await getNearbyTheaters();
//     resMsgWrapper.className = 'res-msg-wrapper success';
//     resMsgWrapper.innerText = `${data.cinemas.length} theaters found nearby`;
//     initMap(data.cinemas);
//   } catch (err) {
//     resMsgWrapper.className = 'res-msg-wrapper error';
//     resMsgWrapper.innerText = err;
//     theatersMapDiv.innerHTML = '';
//   }
// }
// //map check zoom one more time 
// //make zoom more that 3
// function initMap(theaters) { const map = new google.maps.Map(theatersMapDiv, {
//     zoom: 3,
//     center: { lat: Number(latInp.value), lng: Number(longInp.value) },
//   });
// ​
//   const infoWindow = new google.maps.InfoWindow({
//     content: '',
//     disableAutoPan: true,
//   });
// ​
//   const markers = theaters.map((theater, i) => {
//     const marker = new google.maps.Marker({
//       position: { lat: theater.lat, lng: theater.lng },
//       label: '',
//     });
// ​
//     marker.addListener('click', function() {
//       infoWindow.setContent(theater.cinema_name + '<br/>' + theater.address);
//       infoWindow.open(map, marker);
//     });
//     return marker;
//   });
// ​
//   new markerClusterer.MarkerClusterer({ map, markers });
// }
// ​
// ​
// addressForm.addEventListener('submit', showNearbyTheaters);