const movieList = document.getElementById('movie-list');
const radioList = document.getElementById('radio-list');

const filterMovies = filter => {
    const moviesForDisplay = movies.filter(m => {
        if (filter === "" || filter === undefined) {
            return m
        } else if (filter === "latest") {
            return m.Year >= 2014;
        } else {
            return m.Title.toLowerCase().includes(filter.toLowerCase());
        }
    })
    displayMoviesinDom(moviesForDisplay);
}

const displayMoviesinDom = movies => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
    }
    const formatedMovies = movies.map(m => {
        const movie = document.createElement('li');
        movie.innerHTML = m.Title;
        return movie;
    })
    formatedMovies.forEach(m => {
        movieList.appendChild(m);
    });
}

radioList.addEventListener('change', e => {
    if (e.target.id) filterMovies(e.target.id);
})

filterMovies();
