$('.search-button').on('click', function () {
  $.ajax({
    url:
      'http://www.omdbapi.com/?apikey=380296c7&s=' + $('.input-keyword').val(),
    success: (results) => {
      const movies = results.Search;
      let cards = '';
      movies.forEach((movie) => {
        cards += showCards(movie);
      });
      $('.movie-container').html(cards);

      // ketika tombol detail diklik
      $('.modal-detail-button').on('click', function () {
        $.ajax({
          url:
            'http://www.omdbapi.com/?apikey=380296c7&i=' +
            $(this).data('imdbid'),
          success: (movie) => {
            const movieDetail = movieModal(movie);
            $('.modal-body').html(movieDetail);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(movie) {
  return `
        <div class="col-sm-6 col-md-4 my-3">
          <div class="card h-100">
            <img src="${movie.Poster}" alt="" class="card-img-top h-100" />
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
              <a 
                href="" 
                class="btn btn-primary modal-detail-button" 
                data-bs-toggle="modal"
                data-bs-target="#movieDetailModal"
                data-imdbid="${movie.imdbID}"
              >Show Details</a>
            </div>
          </div>
        </div>
      `;
}

function movieModal(movie) {
  return `
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${movie.Poster}" alt="" class="img-fluid" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                  <li class="list-group-item"><strong>Genre : </strong>${movie.Genre}</li>
                  <li class="list-group-item">
                    <strong>Director : </strong> ${movie.Director}
                  </li>
                  <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                  <li class="list-group-item"><strong>Writers : </strong>${movie.Writer}</li>
                  <li class="list-group-item"><strong>Plot : </strong>${movie.Plot}</li>
                </ul>
              </div>
            </div>
          </div>
          `;
}
