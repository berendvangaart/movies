const movieList = document.getElementById('movie-list');
const radioList = document.getElementById('radio-list');
const searchbar = document.getElementById('search-bar');

radioList.addEventListener('change', e => {
    if (e.target.id) filterMovies(e.target.id);
})

searchbar.addEventListener('keyup', e => {
    filterMovies(searchbar.value)
})

const filterMovies = filter => {
    const moviesForDisplay = movies.filter( m => {
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
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.target = '_blank'
        a.href = `http://www.imdb.com/title/${m.imdbID}`;
        img.src = m.Poster;
        a.appendChild(img)
        li.appendChild(a)

        return li;
    })

    formatedMovies.forEach(m => {
        movieList.appendChild(m);
    });
}

filterMovies();
