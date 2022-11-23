const mainEl = document.querySelector('main');

const moviegluSandbox = {
  filmsNowShowingEndpoint: 'https://api-gate2.movieglu.com/filmsNowShowing/',
  filmShowTimesEndpoint: 'https://api-gate2.movieglu.com/filmShowTimes/',
  cinemaDetailsEndpoint: 'https://api-gate2.movieglu.com/cinemaDetails/',
  apiVersion: 'v200',
  authorization: 'Basic UkhUTl9YWDpPWDVQeDNKS0NVY1Q=',
  client: 'RHTN',
  apikey: 'Fvn2jSwMsT4NBd1JVtz9u9lnwhsnaZQs2wP8Nmq8',
  datetime: new Date(Date.now()).toISOString(),
  territory: 'XX'
}

async function fetchFilmsNowShowing() {
  const response = await fetch(moviegluSandbox.filmsNowShowingEndpoint, {
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

async function fetchFilmShowTimes(filmID, date) {
  const response = await fetch(`${moviegluSandbox.filmShowTimesEndpoint}?film_id=${filmID}&date=${date}`, {
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

async function fetchCinemaDetails(cinemaID) {
  const response = await fetch(`${moviegluSandbox.filmsNowShowingEndpoint}?cinema_id=${cinemaID}`, {
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

async function getFilmsNowShowing () {
const filmsNowShowingData = await fetchFilmsNowShowing();
return filmsNowShowingData;
}

async function getFilmShowTimes () {
const filmShowTimesData = await fetchFilmShowTimes();
console.log(filmShowTimesData);
}

async function getCinemaDetails () {
const cinemaDetailsData = await fetchCinemaDetails();
console.log(cinemaDetailsData);
}

async function buildNowShowingList () {
  const filmsNowShowingData = await getFilmsNowShowing();
  for (const films of filmsNowShowingData.films) {
    const nowShowingListDiv = document.createElement('div');
    const nowShowingFilmDiv = document.createElement('div');
    nowShowingFilmDiv.setAttribute('id', films.film_id);
    const movieTitleEl = document.createElement('h2');
    movieTitleEl.textContent = films.film_name;

    if (films.images.poster.length === undefined) {
      var moviePosterEl = document.createElement('img');
      moviePosterEl.setAttribute('src', films.images.poster[1].medium.film_image);
      moviePosterEl.setAttribute('alt', 'Movie Poster');
    } else {
      var moviePosterEl = document.createElement('img');
      moviePosterEl.setAttribute('src', './assets/images/placeholder.png');
      moviePosterEl.setAttribute('alt', 'Movie poster not available');
    }

    const ageRatingEl = document.createElement('span');
    ageRatingEl.textContent = films.age_rating[0].rating;
    const releaseDateEl = document.createElement('span');
    releaseDateEl.textContent = films.release_dates[0].release_date;
    const synopsisEl = document.createElement('p');
    synopsisEl.textContent = films.synopsis_long;
    const showTimeBtnEl = document.createElement('button');
    showTimeBtnEl.textContent = 'View Showtimes';

    nowShowingFilmDiv.appendChild(movieTitleEl);
    nowShowingFilmDiv.appendChild(moviePosterEl);
    nowShowingFilmDiv.appendChild(releaseDateEl);
    nowShowingFilmDiv.appendChild(ageRatingEl);
    nowShowingFilmDiv.appendChild(showTimeBtnEl);
    nowShowingFilmDiv.appendChild(synopsisEl);
    nowShowingListDiv.appendChild(nowShowingFilmDiv);
    mainEl.appendChild(nowShowingListDiv);
      }
  }

buildNowShowingList();
// function successPosition (position) {
// //   console.log(position);
//   const userLocation = {
//     latitude: position.coords.latitude,
//     longitude: position.coords.longitude
//   }
//   return userLocation;
// }

// function errorPosition (error) {
//   console.log(error);
// }

// navigator.geolocation.getCurrentPosition(successPosition, errorPosition);
