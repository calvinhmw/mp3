app.controller('ListViewController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.header = 'Search for a movie here!';
    $scope.sortBy = "title";
    $scope.reverse = false;
    $scope.searchByName = "";
    $http.get('data/imdb250.json').success(function (data) {
        $scope.movies = data;
    }).error(function () {
        $scope.error = "Cannot load movies";
    });
    $scope.goToDetail = function (rank) {
        $location.path('/detail/' + rank);
    }
}]);


app.controller('DetailViewController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $scope.rank = parseInt($routeParams.rank);
    $http.get('data/imdb250.json').success(function (data) {
        $scope.movies = data;
        $scope.numMovies = parseInt($scope.movies.length);
        $scope.next = ($scope.rank + 1) % $scope.numMovies;
        $scope.pre = ($scope.rank - 1 > 0) ? $scope.rank - 1 : $scope.numMovies;
        $scope.movie = $scope.movies[$scope.rank - 1];
    }).error(function () {
        $scope.error = "Cannot load movies";
    });
}]);

app.controller('GalleryViewController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $http.get('data/imdb250.json').success(function (data) {
        $scope.movies = data;
        $scope.selectedMovies = $scope.movies;
        $scope.genres = ['All'];
        for (var i = 0; i < $scope.movies.length; i++) {
            var movie = $scope.movies[i];
            for (var j = 0; j < movie.genre.length; j++) {
                if ($scope.genres.indexOf(movie.genre[j]) == -1) {
                    $scope.genres.push(movie.genre[j]);
                }
            }
        }
        $scope.filterByGenre = function (genre) {
            if (genre == 'All') {
                $scope.selectedMovies = $scope.movies;
            } else {
                $scope.selectedMovies = $scope.movies.filter(function (m) {
                    return m.genre.indexOf(genre) != -1;
                });
            }
            console.log($scope.selectedMovies);
        }
        $scope.goToDetail = function (rank) {
            $location.path('/detail/' + rank);
        }
    }).error(function () {
        $scope.error = "Cannot load movies";
    });
}]);
